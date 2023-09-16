import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';

function InputArea(props) {
  const [inputText, setInputText] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function handleAdd() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Get only the date

    props.onAdd(`${inputText} - ${formattedDate}`);
    setInputText('');
    setCurrentDate(formattedDate);
  }

  return (
    <div>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
      >
        <Input
          style={{
            backgroundColor: 'inherit',
            border: 'none',
            borderStyle: 'dashed',
          }}
          onChange={handleChange}
          type="text"
          value={inputText}
        />
      </Form>
      <Button
        style={{
          marginTop: 10,
          backgroundColor: 'white',
          color: 'black',
          fontSize: '1rem',
          fontWeight: 'bold',
          border: '1px solid black',
          boxShadow: '2px 2px 2px',
        }}
        type="primary"
        onClick={handleAdd}
      >
        ADD
      </Button>
      {/* <div style={{ fontSize: '0.8rem', color: 'gray' }}>
        {currentDate && <span>{currentDate}</span>}
      </div> */}
    </div>
  );
}

export default InputArea;
