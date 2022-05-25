import React, { useState } from 'react'
import './App.css';

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

function Button(props) {
  return (
    <button onClick={props.btn_click}>{props.btn_txt}</button>
  )
}

export default App;
