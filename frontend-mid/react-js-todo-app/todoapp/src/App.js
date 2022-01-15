import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import TodoItem from './Components/TodoItem';
import ReactDOM from 'react-dom'

const arr = [
  {
    task: "Promoter Mavor", isDone: false
  },
  {
    task: "Give talkss", isDone: true
  },
  {
    task: "Have a life", isDone: false
  }
]



function App() {

  const [value, setValue] = useState(arr);

  const updateTask = (e) => {
    const val = e.target.dataset.task;

    const res = value.map(x => {
      console.log(x.task)
      if (x.task == val) {
        console.warn(val);
        x.isDone == true ? x.isDone = false : x.isDone = true
      }
      return x;
    })
    console.warn(res);
    setValue(res);
  }

  const removeTask = (e) => {
    const val = e.target.dataset.task;
    const res = value.filter(function (x) {
      return x.task != val;
    })
    console.warn(res);
    setValue(res);
   
  }

  

  const onSubmitfunc = (e)=>{
    e.preventDefault();

  
    console.warn(e.target.newtodo.value);
   var val=e.target.newtodo.value;

    const res=value;
    res.push({
      task:val,
      isDone:false
    })

    console.warn("new arr",res)
  setValue(res);
  document.querySelector(".toggle").click();
  document.querySelector(".toggle").click();
//DOM update solution temporary :( :>3
  


  }



return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form onSubmit={onSubmitfunc}>
            <input className="new-todo" name="newtodo" placeholder="What needs to be done?" autoFocus />
          </form>
        </header>

        <section className="main">
          <input className="toggle-all" type="checkbox" />
          <label htmlFor="toggle-all">
            Mark all as complete
          </label>

          <ul className="todo-list">
            {
              value.map(x =>
                <li key={x.task} className={x.isDone == true ? "completed" : ""}>
                  <div className="view">
                    <input data-task={x.task} onClick={(e) => {
                      updateTask(e)
                    }} className="toggle" type="checkbox" defaultChecked={x.isDone == true ? true : false} />
                    <label>{x.task}</label>
                    <button data-task={x.task} onClick={(e) => {
                      removeTask(e)
                    }}
                      className="destroy"></button>

                  </div>
                </li>
              )

            }


          </ul>


        </section>


        <footer className="footer">


          <span className="todo-count">
            <strong>{value.length}</strong>
            items left
          </span>

         

        
        </footer>
      </section>
    </div>
  );

}


export default App;
