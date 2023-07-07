//here we are making components in this module only but in real life,we will make new file for each component
import './App.css';
import Greeter from './Greeter';//from Greeter
import {Dog,Cat} from './Many';
import Login from './Login';
import Die from './Die';
import DiceRoll from './DiceRoll';
function Doggy() {      //We are creating our own component and component name should start with a capital letter
  return <h1>I love doggy!</h1>   //only single element, if we give another <h1> tag then error
}
function Divuuu() {
    const name="Divyansh"
  return <p> {1+4+6} I am from India {name}</p>  //we use {} to add some dynamic content or create some template. here value is
}                                    //calculated and then added to the content outside the {}

//we are importing a component named Greeter
function App() {  //this app component is rendered by index.js
  return (
    <div className="App">
      <header className="App-header">
       {
        <div>
        <Doggy/>    { /* we do not use this calling a function like Doggy() but instead we use a jsx syntax */}
        <Divuuu/>
        <Greeter/>
        <Dog/>
        <Cat/>
        <Doggy/>  {/*We can use the same components many times*/ }
        <Login/>
        <Die/>
        <DiceRoll/> {/*We are just showing an hierchy and this is how we will use react in real world. This dice roll renders multiple die components*/}
        </div>
       }
      </header>
    </div>
  );
}
export default App;



/* Initally app component will always look like this when you create a react app

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */