import './App.css';

function App() {
  return (
    <div className="App">
      <Button btn_txt="クリックしてね" />
    </div>
  );
}

function Button(props) {
  return (
    <button>{props.btn_txt}</button>
  )
}

export default App;
