import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function DataList(props) {
  return (
    <ul>
   {
   props.data.map(x=>(<li key={x.age} ><span>{x.name}</span> 
   <span>{x.age}</span></li>))
  }
    </ul>
    

    
  );
}

const data = [
  { name: 'Daniel', age: 25 },
  { name: 'John', age: 24 },
  { name: 'Jen', age: 31 },
];

ReactDOM.render(
  <DataList data={ data } />,
  document.getElementById('root')
);