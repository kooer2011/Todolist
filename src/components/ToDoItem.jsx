import React, { useState } from 'react';

function ToDoItem({
  id,
  text,
  onChecked,
  onEdit,
  isEditing,
  onCancelEdit,
  onSaveEdit,
}) {
  const [editedText, setEditedText] = useState(text);

  function handleCheckboxClick() {
    onChecked(id);
  }

  function handleEditClick() {
    onEdit(editedText);
  }

  function handleCancelEditClick() {
    onCancelEdit();
  }

  function handleSaveEditClick() {
    onSaveEdit(editedText);
  }

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
      <input
        type="checkbox"
        onChange={handleCheckboxClick}
        style={{ marginRight: 10 }}
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={e => setEditedText(e.target.value)}
          />
          <button
            style={{ backgroundColor: 'green' }}
            onClick={handleSaveEditClick}
          >
            Save
          </button>
          <button
            style={{ backgroundColor: 'red' }}
            onClick={handleCancelEditClick}
          >
            Cancel
          </button>
        </>
      ) : (
        <>
          <p style={{ flex: 1, margin: 0 }}>{text}</p>
          <button
            style={{ backgroundColor: '#FCFF3E', marginLeft: 5 }}
            onClick={handleEditClick}
          >
            Edit
          </button>
        </>
      )}
    </li>
  );
}

export default ToDoItem;
