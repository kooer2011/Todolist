import React, { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Card, Space } from 'antd';
import './App.css';
import ToDoItem from './components/ToDoItem';
import InputArea from './components/InputArea';

import Navbar from './components/Navbar';

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null); // ใช้เก็บข้อมูลที่ถูกแก้ไข

  function addItem(inputText) {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
  }

  function deleteItem(id) {
    setItems(prevItems => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  // ฟังก์ชันสำหรับการแก้ไขข้อมูล
  function editItem(id, newText) {
    setItems(prevItems => {
      const updatedItems = prevItems.map((item, index) => {
        if (index === id) {
          return newText;
        }
        return item;
      });
      return updatedItems;
    });
    setEditingItem(null); // เมื่อแก้ไขเสร็จให้เคลียร์ข้อมูลที่ถูกแก้ไข
  }

  return (
    <>
      <Navbar />
      <Card className="container_card">
        <h2
          style={{
            backgroundColor: '#FCFF3E',
            borderRadius: '50% 20% / 10% 40%',
            boxShadow: '2px 2px 2px',
            marginBottom: 40,
          }}
        >
          TODO LIST APP
        </h2>
        <div>
          <InputArea onAdd={addItem} />
        </div>

        <div
          style={{
            marginTop: 10,
            textAlign: 'left',
            fontSize: '1rem',
          }}
        >
          <ul>
            {items.map((todoitem, index) => (
              <ToDoItem
                key={index}
                id={index}
                text={todoitem}
                onChecked={deleteItem}
                onEdit={newText => setEditingItem({ id: index, text: newText })}
                isEditing={editingItem && editingItem.id === index}
                onCancelEdit={() => setEditingItem(null)}
                onSaveEdit={newText => editItem(index, newText)}
              />
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
}

export default App;
