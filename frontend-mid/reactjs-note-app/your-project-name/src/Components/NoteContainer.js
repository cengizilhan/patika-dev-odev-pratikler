import React from 'react'
import { Form } from 'react-bootstrap'
import NoteButton from './NoteButton'
import { useSelector, useDispatch } from 'react-redux'
import { addNote} from '../Redux/counterSlice'
import NoteAddContainer from './NoteAddContainer'

//stiller ile sonra uğraşcaz

export default function NoteContainer() {

  const list = useSelector(state => state.counter.list);
  const dispatch = useDispatch()
  return (
    <section className='border'>
      <div><h1>NotesApp</h1></div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Search" />
      </Form.Group>

      <NoteAddContainer></NoteAddContainer>
      
      
      {list.map((e, index)=>{
       return (
       <NoteButton key={index} props={e} />
     );})}

    </section>
  )
}
