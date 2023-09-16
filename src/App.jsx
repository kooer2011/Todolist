import { useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { Card, Space } from 'antd';
import './App.css';
import ToDoItem from './components/ToDoItem';
import InputArea from './components/InputArea';
import AppBar from '@mui/material/AppBar';
import Navbar from './components/Navbar';
function App() {
  const [items, setItems] = useState([]);

  function addItem(inputText) {
    setItems(prevItem => {
      return [...prevItem, inputText];
    });
  }
  function deleteItem(id) {
    setItems(prevItem => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <>
      <Navbar />
      <Card className="container_card" style={{ width: 300, height: 500 }}>
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
              />
            ))}
          </ul>
        </div>
      </Card>
    </>
  );
}

export default App;
