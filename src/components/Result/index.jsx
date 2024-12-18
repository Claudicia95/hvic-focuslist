import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { DetailsFocusList } from "../DetailsFocusList";

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f4f5f7",
    minHeight: "100vh",
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#2c3e50",
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    overflow: "hidden",
  },
  th: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "12px",
    textAlign: "center",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  td: {
    padding: "10px",
    borderBottom: "1px solid #ddd",
    textAlign: "center",
    backgroundColor: "#fff",
    transition: "background-color 0.3s ease",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  button: {
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "transform 0.2s, background-color 0.3s",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontWeight: "500",
  },
  inputField: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    marginBottom: "15px",
    transition: "box-shadow 0.3s, border-color 0.3s",
  },
  addContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    marginTop: "20px",
  },
  addButton: {
    backgroundColor: "#3498db",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    textAlign: "center",
  },
  editModal: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 1000,
    width: "90%",
    maxWidth: "400px",
  },
};

function Result() {
  const [tasks, setTasks] = useState(
    DetailsFocusList.map((task) => ({ ...task, isCompleted: false }))
  );
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    heure: "",
    isCompleted: false,
  });
  const [editTask, setEditTask] = useState(null);

  const handleToggleStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

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
      setNewTask({
        title: "",
        description: "",
        date: "",
        heure: "",
        isCompleted: false,
      });
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
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((item) => (
            <tr key={item.id}>
              <td style={styles.td}>{item.title}</td>
              <td style={styles.td}>
                <button
                  style={{
                    ...styles.button,
                    backgroundColor: item.isCompleted ? "green" : "gray",
                  }}
                  onClick={() => handleToggleStatus(item.id)}
                >
                  {item.isCompleted ? "Terminé" : "Non terminé"}
                </button>
              </td>
              <td style={styles.td}>
                {editTask && editTask.id === item.id ? (
                  <input
                    type="text"
                    value={editTask.description}
                    onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
                    style={styles.inputField}
                  />
                ) : (
                  item.description
                )}
              </td>
              <td style={styles.td}>
                {editTask && editTask.id === item.id ? (
                  <input
                    type="date"
                    value={editTask.date}
                    onChange={(e) => setEditTask({ ...editTask, date: e.target.value })}
                    style={styles.inputField}
                  />
                ) : (
                  item.date
                )}
              </td>
              <td style={styles.td}>
                {editTask && editTask.id === item.id ? (
                  <input
                    type="time"
                    value={editTask.heure}
                    onChange={(e) => setEditTask({ ...editTask, heure: e.target.value })}
                    style={styles.inputField}
                  />
                ) : (
                  item.heure
                )}
              </td>
              <td style={styles.td}>
                <div style={styles.buttonsContainer}>
                  <button style={styles.button} onClick={() => handleEdit(item.id)}>
                    <FaEdit />
                  </button>
                  <button style={styles.button} onClick={() => handleDelete(item.id)}>
                    <MdDelete />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={styles.addContainer}>
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
        <button style={styles.addButton} onClick={handleAdd}>
          <IoIosAdd /> Ajouter
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
          <input
            type="text"
            placeholder="Description"
            style={styles.inputField}
            value={editTask.description}
            onChange={(e) => setEditTask({ ...editTask, description: e.target.value })}
          />
          <input
            type="date"
            style={styles.inputField}
            value={editTask.date}
            onChange={(e) => setEditTask({ ...editTask, date: e.target.value })}
          />
          <input
            type="time"
            style={styles.inputField}
            value={editTask.heure}
            onChange={(e) => setEditTask({ ...editTask, heure: e.target.value })}
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
