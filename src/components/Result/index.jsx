import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { DetailsFocusList } from "../DetailsFocusList";

// Styles JSS améliorés
const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    fontFamily: "'Roboto', sans-serif",
    animation: "fadeIn 0.5s ease-in-out",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
    fontSize: "2rem",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "30px",
    animation: "slideUp 0.8s ease",
  },
  th: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px",
    textAlign: "center",
    fontWeight: "600",
  },
  td: {
    padding: "10px",
    border: "1px solid #ddd",
    textAlign: "center",
    transition: "background-color 0.3s ease",
    "&:hover": {
      backgroundColor: "#f1f1f1",
    },
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    color: "#fff",
    border: "none",
    padding: "8px",
    borderRadius: "4px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, background-color 0.3s ease",
    "&:hover": {
      transform: "translateY(-3px)",
      backgroundColor: "#0056b3",
    },
  },
  iconEdit: {
    marginRight: "5px",
    color: "yellow",
  },
  iconDelete: {
    marginRight: "5px",
    color: "red",
  },
  iconAdd: {
    marginRight: "5px",
    color: "green",
  },
  inputField: {
    marginBottom: "15px",
    padding: "10px",
    width: "100%",
    border: "1px solid #ddd",
    borderRadius: "4px",
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
    "&:focus": {
      borderColor: "#007bff",
      boxShadow: "0 0 8px rgba(0, 123, 255, 0.3)",
      outline: "none",
    },
  },
  addContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "10px",
  },
  editModal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "4px",
    boxShadow: "0 10px 15px rgba(0, 0, 0, 0.3)",
    position: "relative",
    zIndex: 1000,
    width: "300px",
    margin: "0 auto",
    animation: "scaleIn 0.3s ease-in-out",
  },
};

function Result() {
  const [tasks, setTasks] = useState(DetailsFocusList);
  const [newTask, setNewTask] = useState({ title: "", description: "", date: "", heure: "" });
  const [editTask, setEditTask] = useState(null);

  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette tâche?")) {
      const updatedTasks = tasks.filter((task) => task.id !== id);
      setTasks(updatedTasks);
    }
  };

  const handleEdit = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setEditTask(taskToEdit);
  };

  const handleEditSubmit = () => {
    const updatedTasks = tasks.map((task) =>
      task.id === editTask.id ? editTask : task
    );
    setTasks(updatedTasks);
    setEditTask(null);
  };

  const handleAdd = () => {
    if (newTask.title && newTask.description && newTask.date && newTask.heure) {
      const newTaskWithId = { id: Date.now(), ...newTask };
      setTasks([...tasks, newTaskWithId]);
      setNewTask({ title: "", description: "", date: "", heure: "" });
    } else {
      alert("Veuillez remplir tous les champs.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Mes tâches</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Tâches</th>
            <th style={styles.th}>Statut</th>
            <th style={styles.th}>Description</th>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Heure</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <tr key={item.id}>
              <td style={styles.td}>{item.title}</td>
              <td style={styles.td}>{item.Statut}</td>
              <td style={styles.td}>{item.description}</td>
              <td style={styles.td}>{item.date}</td>
              <td style={styles.td}>{item.heure}</td>
              <td style={styles.td}>
                <div style={styles.buttonsContainer}>
                  <button style={styles.button} onClick={() => handleEdit(item.id)}>
                    <FaEdit style={styles.iconEdit} />
                  </button>
                  <button style={styles.button} onClick={() => handleDelete(item.id)}>
                    <MdDelete style={styles.iconDelete} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.addContainer}>
        <div>
          <input
            type="text"
            placeholder="Titre"
            style={styles.inputField}
            value={newTask.title}
            onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            style={styles.inputField}
            value={newTask.description}
            onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
          />
          <input
            type="date"
            style={styles.inputField}
            value={newTask.date}
            onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
          />
          <input
            type="time"
            style={styles.inputField}
            value={newTask.heure}
            onChange={(e) => setNewTask({ ...newTask, heure: e.target.value })}
          />
        </div>
        <button style={styles.button} onClick={handleAdd}>
          <IoIosAdd style={styles.iconAdd} /> Ajouter
        </button>
      </div>
      {editTask && (
        <div style={styles.editModal}>
          <h3>Modifier la tâche</h3>
          <input
            type="text"
            placeholder="Titre"
            style={styles.inputField}
            value={editTask.title}
            onChange={(e) => setEditTask({ ...editTask, title: e.target.value })}
          />
          <button style={styles.button} onClick={handleEditSubmit}>
            Enregistrer
          </button>
        </div>
      )}
    </div>
  );
}

export default Result;
