import React, { useState } from 'react'
import './App.css';
import Button from './Button';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>カウント：{count}</p>
      <Button
        btn_txt="１増やす"
        btn_click={() => { setCount(count + 1) }}
      />
      <Button
        btn_txt="１減らす"
        btn_click={() => { setCount(count - 1) }} 
      />
    </div>
  );
}

export default App;
