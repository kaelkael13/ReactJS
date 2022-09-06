import './App.css'
import Message from "./Message.js";

function App() {
  const name = 'Костя';
  return (
    <div>
      <Message name={name} />
    </div>
  );
}

export default App;
