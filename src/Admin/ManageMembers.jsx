import React, { useState } from "react";

const ManageMembers = () => {
  const [members, setMembers] = useState([
    { id: 1, name: "ditto diana" },
    { id: 2, name: "neha singh" },
    { id: 2, name: "vehan bhatia" },
    { id: 2, name: "suhana khan" },
    { id: 2, name: "zoya sheaik" },
    { id: 2, name: "nia sharma" },
  ]);

  const handleDelete = (id) => {
    setMembers(members.filter((member) => member.id !== id));
    alert(`Member with ID ${id} deleted`);
  };

  const containerStyle = {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px",
    margin: "20px auto",
  };

  const titleStyle = {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#007bff",
  };

  const listStyle = {
    listStyleType: "none",
    padding: "0",
  };

  const itemStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "12px",
    marginBottom: "10px",
    borderRadius: "4px",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  };

  const nameStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#333",
  };

  const buttonStyle = {
    backgroundColor: "#ff4d4d",
    color: "white",
    border: "none",
    padding: "6px 12px",
    fontSize: "14px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  const buttonHoverStyle = {
    backgroundColor: "#e60000",
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Manage Members</h2>
      <ul style={listStyle}>
        {members.map((member) => (
          <li key={member.id} style={itemStyle}>
            <span style={nameStyle}>{member.name}</span>
            <button
              style={buttonStyle}
              onClick={() => handleDelete(member.id)}
              onMouseEnter={(e) =>
                (e.target.style.backgroundColor =
                  buttonHoverStyle.backgroundColor)
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = buttonStyle.backgroundColor)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageMembers;
