import React from 'react'
import './NoteAddContainer.css';


const colors = [
   "#ee5787",
   "#b15dc1",
   "#ffcf46",
   "#45bbf6",
   "#a5cf76",
  ];
  
  function circleHandler(el){
    document.querySelectorAll('.note__circle').forEach(e=>{
      e.classList.remove('note__isActive');
    })
    el.classList.toggle('note__isActive');
}


export default function NoteAddContainer() {
  return (
    <section>
      <div>
    <div>NoteAddContainer</div>

    <div className='checksContainer'>
       {colors.map((item, index) => (
        <span key={index}  >
        
        <div className="note__circle " value={item}  style={{backgroundColor:item}}
        onClick={({target})=> circleHandler(target)}
        />
     
      </span>
      ))}
    </div>

    </div>
    </section>
  )
}
