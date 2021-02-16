import React, {useState, useEffect} from 'react'
import {Container, Row, Col } from 'reactstrap'
import { useSelector } from 'react-redux'

import Sidebar from '../Sidebar/index'
import Header from '../../components/Header.jsx'
import Footer from '../../components/Footer.jsx'
import Product from '../Products'
import { setToLocalStorage , getArrFromStorage } from '../../services/localStorageServices'


const Layout = () => {

    // const data = useSelector(state => state.products.products)

    const arrayFromLS = getArrFromStorage()

    const [productsArr, setProductsArr] = useState(arrayFromLS)
    const [filtredProducts, setfiltredProducts] = useState([])
    console.log(productsArr);


    useEffect(() => {
        setfiltredProducts([...productsArr])
    }, [productsArr])


    return (
        <>
        <Header />
        <main>
        <Container>
            <Row>
                <Col md="4">
                    <Sidebar
                        filtredProducts={filtredProducts} 
                        setfiltredProducts={setfiltredProducts}  
                        productsArr={productsArr}
                        setProductsArr={setProductsArr}
                        />
                </Col>
                <Col md="8">
                    <Product filtredProducts={filtredProducts} />                 
                </Col>
            </Row>            
        </Container>
        </main>
        <Footer />
    </>
)
}


export default Layout
