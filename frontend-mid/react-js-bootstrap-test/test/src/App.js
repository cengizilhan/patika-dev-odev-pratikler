import logo from './logo.svg';
import './App.css';
import {Alert, Button} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex mt-5 d-fl">

        <Alert>heyy</Alert>
        

        <Button className='d-flex' class="d-flex alert d-flex mt-5"></Button>
        
        <img src={logo} className="App-logo " alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link d-flex mt-5"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className='d-flex border m-5 p-5'>
          <div>1</div>
          <div>2</div>
          <div className='danger border p-1 m-5'>3</div>


        </div>
      </header>
      <div>

</div>
    </div>
  );
}

export default App;
