import React, { useState } from 'react'
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <p>カウント：{count}</p>
      <Button btn_click={() => { setCount(count + 1) }} btn_txt="クリックしてね" />
    </div>
  );
}

function Button(props) {
  return (
    <button onClick={props.btn_click}>{props.btn_txt}</button>
  )
}

export default App;
