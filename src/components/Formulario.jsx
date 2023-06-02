import { Form, Row, Col, Spinner } from "react-bootstrap"
import ListaNoticias from "./ListaNoticias";
import { useState, useEffect } from "react"


const Formulario = () => {

    const [categoria, setCategoria] = useState("")
    

    return (
        <Form className="p-0">
            <Form.Group as={Row} className=" p-5" controlId="formHorizontalEmail">
                <Form.Label column sm={4} className="text-center">
                    Buscar por categoria:
                </Form.Label>
                <Col sm={8}>
                    <Form.Select aria-label="Default select example"
                        onChange={(e) => setCategoria(e.target.value)}
                        value={categoria}
                    >   
                        <option value="">Seleccione una categoria</option>
                        <option value="business">Business</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="environment">Environment</option>
                        <option value="food">Food</option>
                        <option value="health">Health</option>
                        <option value="politics">Politics</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="technology">Technology</option>
                        <option value="top">Top</option>
                        <option value="tourism">Tourism</option>
                        <option value="world">World</option>

                    </Form.Select>
                </Col>
            </Form.Group>
            <hr></hr>
            <ListaNoticias categoria={categoria}></ListaNoticias>
        </Form>
    );
};

export default Formulario;