import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addNote , decrement, increment} from './Redux/counterSlice'
import NoteContainer from './Components/NoteContainer';


function App() {
  const count = useSelector(state => state.counter.value)
  const list = useSelector(state => state.counter.list);
  const dispatch = useDispatch()

  const testobj={id:3, color:"555555",name:"note 555"}
  return (
    <div className="App">
      <section>
  <NoteContainer></NoteContainer>

      </section>
     <h1>test</h1>
     <span>{console.log(list)}</span>
     <div>
      <div>
      <button
          aria-label="Increment value"
          onClick={() => dispatch(addNote(testobj))}
        >
        AddNote
        </button>

        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
    </div>
  );
}

export default App;
