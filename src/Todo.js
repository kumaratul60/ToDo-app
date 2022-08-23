import React, { useState } from "react";
import {
  Button,
  ListItem,
  ListItemText,
  Modal,
  Grid,
  Container,
} from "@material-ui/core";

import db from "./firebase";
import DeleteForeverSharpIcon from "@material-ui/icons/DeleteForeverSharp";
import EditOutlined from "@material-ui/icons/EditOutlined";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #00",
    borderRadius: "10px",
    outline: "none",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "35%",
    left: "35%",
  },
}));

function Todo(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState();

  const updateTodo = () => {
    // update the todo with new input text
    if (!input.trim()) {
      alert("type updated todo");
      return;
    }

    db.collection("todos").doc(props.todo.id).set(
      {
        todo: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      },
      { merge: true }
    );

    setOpen(false);
  };

  return (
    <>
      <Modal open={open} onClose={(e) => setOpen(false)}>
        <div className={classes.paper}>
          <h3>Edit the todo</h3>
          <input
            placeholder={props.todo.todo}
            value={input}
            onChange={(event) => setInput(event.target.value)}
            defaultValue={props.todo.todo}
          />
          <Button onClick={updateTodo}> Update Todo</Button>
        </div>
      </Modal>

      <Container maxWidth="md">
        <Grid container spacing={2}>
          <ListItem>
            {/*  props.todo.todo == props.text.object */}

            <ListItemText
              primary={props.todo.todo}
              // secondary="Dummy secondary value ⏰ "
            />

            <EditOutlined onClick={(e) => setOpen(true)} />
            <DeleteForeverSharpIcon
              onClick={(event) =>
                db.collection("todos").doc(props.todo.id).delete()
              }
            ></DeleteForeverSharpIcon>
          </ListItem>
        </Grid>
      </Container>
    </>
  );
}

export default Todo;
