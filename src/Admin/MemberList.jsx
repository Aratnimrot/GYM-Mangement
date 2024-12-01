import React from "react";
import "./MemberList.css"; // Import the CSS file for styling

const MemberList = ({ members, setMembers }) => {
  const deleteMember = (id) => {
    const updatedMembers = members.filter((member) => member.id !== id);
    setMembers(updatedMembers);
  };

  return (
    <div className="member-list-container">
      <h2 className="member-list-title">Member List</h2>
      <ul className="member-list">
        {members.map((member) => (
          <li key={member.id} className="member-list-item">
            <div className="member-info">
              <span className="member-name">{member.name}</span>
              <span className="member-email">{member.email}</span>
              <span className="member-phone">{member.phone}</span>
            </div>
            <button
              className="delete-button"
              onClick={() => deleteMember(member.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;
