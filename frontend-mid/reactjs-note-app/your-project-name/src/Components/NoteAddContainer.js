import React from 'react'
import './NoteAddContainer.css';
const colors = [
   "#ee5787",
   "#b15dc1",
   "#ffcf46",
   "#45bbf6",
   "#a5cf76",
  ];
  

export default function NoteAddContainer() {
  return (
      <div>
    <div>NoteAddContainer</div>

    <div className='checksContainer'>
       {colors.map((item, index) => (
        <div key={index}>
        <input value={item} type="checkbox" style={{backgroundColor:"red"}} />
        <span>{item}</span>
      </div>
      ))}
    </div>

    </div>
  )
}
