import React,{useState} from "react"
import {Modal,Row,Col,Form,Button} from 'react-bootstrap'


const Todo  = ({id,title,description,completeTodo,deleteTodo,editTodo}) =>{

  const [newTitle,setTitle]=useState(title)
  const[newDescription,serDescriptions]=useState(description)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    const editTodoHandler = (title,description)=>{
      handleClose()
      const todo= {
        id,
        title,
        description
      }
      editTodo(todo)
    }
    return(
      <>
      <Row className="border-bottom pt-5">
        <Col md={1} >
            <Form>
                <Form.Check 
                  onChange={()=>completeTodo(id)}
                  type ="checkbox"/>

            </Form>
        </Col>

        <Col>
            <h5>{title}</h5>
            <p>{description}</p>
        </Col>
      


      <Col md={2}>
        <Form>
            <Button onClick={handleShow} variant="info" className="my-2 btn-block">Edit</Button>
        </Form>
        <Form>
            <Button onClick={()=>deleteTodo(id)} variant="danger" className="my-2 btn-block">Delite</Button>
        </Form>
      </Col>
    </Row>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
            <Form.Group controlId="title">
                <Form.Label>Title</Form.Label>
                <Form.Control value={newTitle} onChange={e => setTitle(e.target.value)} type="text" placeholder="Todo title engiz"/>
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>description</Form.Label>
                <Form.Control value={newDescription}  onChange={e => serDescriptions(e.target.value)}  type="text" placeholder="Todo description engiz"/>
            </Form.Group>

           
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>editTodoHandler(newTitle,newDescription)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </>
    )
}

export default Todo;