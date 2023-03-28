import React,{useState} from "react"
import {Form,Button} from 'react-bootstrap';


const AddTodo = ({addTodo}) =>{
    const [title,setTitle]=useState('')
    const[description,serDescriptions]=useState('')

    const addTodoHandler =(e)=>{
        e.preventDefault()
        addTodo({
            title,
            description,
            completed:false,
        })
        setTitle('')
        serDescriptions('')
    }




 
    return(
        <Form >
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Todo title engiz"/>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control value={description}  onChange={e => serDescriptions(e.target.value)}  type="text" placeholder="Todo description engiz"/>
            </Form.Group>

            <Button className="m-3" onClick={addTodoHandler} variant="primary">Add todo</Button>
        </Form>

    )
}

export default AddTodo;