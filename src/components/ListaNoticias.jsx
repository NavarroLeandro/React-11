import { Row, Spinner } from "react-bootstrap";
import Noticia from "./Noticia";
import { useState, useEffect } from "react";

const ListaNoticias = () => {
  const [noticia, setNoticia] = useState({});
  const [mostrarSpinner, setMostrarSpinner] = useState(true);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      setMostrarSpinner(true);
      const respuesta = await fetch(
        "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=2bc5c77c5dd1448784c2400feea6d265"
      ); //Pongo aqui la api que me genera la pagina una vez me suscribo
      const dato = await respuesta.json();
      console.log(respuesta);
      console.log(dato);
      setNoticia(dato);

      setTimeout(() => {
        setMostrarSpinner(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  const mostrarComponente = mostrarSpinner ? (
    <Spinner animation="border" variant="primary"></Spinner>
  ) : (
    noticia.articles.map((noticia, indice) => {
      return (
        <Noticia noticia={noticia} key={indice} className="d-flex"></Noticia>
      );
    })
  );

  return <Row className="p-5">{mostrarComponente}</Row>;
};

export default ListaNoticias;
