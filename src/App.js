import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Todo from "./Todo";
import "./App.css";
import db from "./firebase";
import firebase from "firebase";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log("👽", input);

  // when the app loads, we need to listen to the database and fetch new todos as they get added/removed

  //useEffect(fuction,dependencies)  -> it load when corresponding file run

  useEffect(() => {
    // this code here... fires when App.js load
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        //  console.log(snapshot.docs.map(doc => doc.data()));   // console.log return array of object
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        ); // it is a flat array of string with no onject
      });
  }, []);

  const addToDo = (event) => {
    //this will fire off when we click the button
    event.preventDefault(); // It will stop from Refesh or preventing from submit
    if (!input.trim()) {
      alert("type something ");
      return;
    }
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTodos([...todos, input]);
    setInput(""); // clear up the input after clicking add todo button
    console.log(todos);
  };
  return (
    <div className="App">
      <h1>
        Todo-App{" "}
        <i>
          <b>🚀</b>
        </i>
      </h1>
      <form>
        <FormControl>
          <InputLabel> Write a Todo ✅</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type="submit"
          onClick={addToDo}
          variant="contained"
          color="primary"
        >
          Add todo{" "}
        </Button>
      </form>

      <ul>
        {/* so todo fuction is no longer string now so change it to  <Todo todo = {todo}/> from  <Todo text = {todo}/> */}
        {todos.map((todo) => (
          <Todo todo={todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
