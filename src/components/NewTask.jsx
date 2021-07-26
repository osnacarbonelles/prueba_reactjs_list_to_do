import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const NewTask = ({ setOpen, setTarea, tarea, title }) => {
  const [Task, setTask] = useState("");

  const AccionTask = () => {
    if (title) {
      console.log("edit");
      const findTask = tarea.find((item) => item.task === title);
      findTask.task = Task;

      const filterTask = tarea.filter((item) => item.task !== Task);
      filterTask.push(findTask);

      setTarea(filterTask);
      setOpen(false);
      return;
    }

    if (Task) {
      const data = {
        id: new Date().getTime().toString(),
        task: Task,
        complete: false,
      };

      setOpen(false);

      setTarea([...[data], ...tarea]);
    } else {
      alert("Este campo es requerido");
    }
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>{title ? "Editar tarea" : "Nueva tarea"}</Form.Label>
        <Form.Control
          type="text"
          defaultValue={title}
          placeholder="Escribe tu nueva tarea"
          onChange={(event) => setTask(event.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Descripción de la tarea</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Escribe la descripción de la tarea"
          onChange={(event) => setTask(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary mt-2" block onClick={AccionTask}>
        {title ? "Actualizar" : "Crear"}
      </Button>
    </Form>
  );
};
