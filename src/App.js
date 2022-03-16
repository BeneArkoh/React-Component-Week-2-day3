
import { Navbar } from "./components/Navbar";
import {Paragraph} from "./components/Paragraph";
import{Input} from'./components/Input';
import { Myself} from "./components/Myself";
import { Counter } from "./components/counter";

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <Paragraph />
      <Input />
      <Myself name="Montana" age={18} gender="female" />
      <Myself name="Lovelace" age={20} gender="Male" />
      <Myself name= "Adelaide" age={3} gender="Female" />
      <Myself name= "Alicia" age={15} gender="Female" />
      <Myself name= "Christabell" age={18} gender="Female" />
      <Counter />
    </div> 
  );
}

export default App;
