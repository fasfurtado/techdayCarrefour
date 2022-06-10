import React, { useEffect, useState, useCallback } from 'react';
import { Card, Row, Col, Container } from "react-bootstrap";
import Api from '../Api.js';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Produtos(props) {

    //console.log("ENTROU PRODUTOS");

    const loja = props.loja;

    const [produtosData, setProdutosData] = useState([]);

    const getProdutosData = useCallback((loja) => {
        Api.getProdutos(loja)
          .then(produtosData => setProdutosData(produtosData))
          .catch(console.log("carregando produtos..."))
          .finally(
              console.log("carregou produtos da loja.")
          )
      }, [loja])
    
      useEffect(() => {
         //Executa somente uma vez, e pega os produtos da loja
        console.log("vai carregar os produtos da loja (1st).")
        getProdutosData(loja)
      }, [])

    useEffect(() => {
        if (loja) {
        console.log ("Mudou a loja em Produtos: " + loja)
        getProdutosData(loja)
    }},[loja])

    if (!loja=="") {
        return (
            <div>
            <label className="vtex-rich-text-0-x-paragraph--institutional-main-text">Produtos Disponíveis na loja: {loja}</label> 
            <Container>
                <Row>
                    {produtosData.map((produtosData, k) => (
                        <Col key={k} xs={12} md={4} lg={3}>
                            <Card variant="outlined">
                                <Card.Img variant="top" src={produtosData.items[0].images[0].imageUrl} />
                                <Card.Body className="card-body">
                                    <Card.Title className="card-title">Id: {produtosData.productId}</Card.Title>
                                    <Card.Text className="card-description">Descrição: {produtosData.productName}<br></br><b>Qtde: {produtosData.items[0].sellers[0]['commertialOffer'].AvailableQuantity}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}Preço: {produtosData.items[0].sellers[0]['commertialOffer'].Installments[0].Value}</b></Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            </div>
        )} else {
    return(
        <div>
        </div>
    )}
};

