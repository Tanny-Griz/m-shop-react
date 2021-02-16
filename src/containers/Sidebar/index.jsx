import React, {useState}  from 'react'
import { Form, FormGroup, Label, Input, Button, ButtonGroup, Textarea } from 'reactstrap'
import { setToLocalStorage  } from '../../services/localStorageServices'


const Sidebar = ({setfiltredProducts, filtredProducts, productsArr,  setProductsArr}) => {

    const [rSelected, setRSelected] = useState(null);
    const[statePrice, setStatetPrice] = useState({start: 0, end: 0})

    const [form, setForm] = useState({
        name: '',
        price: null,
        description: 'не указан'
    })
    const handleChange = e => {
        const { name, value } = e.target;
        const newForm = { ...form, [name]: value };
        setForm(newForm);
    }

    const handleCreate = () => {
        if (form.name !== "") {
            let arr = [...productsArr, form];
            setProductsArr(arr);
            setToLocalStorage(arr);
        }
    }

    const handleClick = ({target}) =>{
        if(target.value < 0) {
            return false
        }else {
            if(target.name === 'priceFrom') {
                setStatetPrice({
                    start : +target.value,
                    end: statePrice.end
                })
            }
            if(target.name === 'priceTo') {
                setStatetPrice({
                    start : statePrice.start,
                    end : +target.value
                })
            }
        }
    }

    const handlePricerange = () => {
        const newSort = [...productsArr].filter(i => {
            if(i.price >= statePrice.start && i.price <= statePrice.end)
            return i
        })
        setfiltredProducts([...newSort])
    }

    const handleSortByPrice = (e) => {
        const newSort = [...filtredProducts].sort((a, b) => {
            if (e.target.value === 'Price Ascending') return a.price - b.price;
            if (e.target.value === 'Price Descending') return b.price - a.price;
        });
        e.target.value === '-'
            ? setfiltredProducts([...filtredProducts])
            : setfiltredProducts([...newSort])
    }

    const handleSearchProducts = (e) => {
        e.target.value
            ? setfiltredProducts(filtredProducts.filter(p => {
                let name = p.name.toLowerCase().includes(e.target.value);
                return name

            }))
            : setfiltredProducts([...productsArr]);
    }

    return (
        <>
            <div className="holder-filters">
                <Form>
                    <FormGroup className="form-box">
                    <Label><p>Поиск по названию</p></Label>
                    <Input
                        onChange={handleSearchProducts}
                        placeholder="Search"
                        style={{marginBottom: "10px"}}
                    />

                    <Label><p>Цена от до</p></Label>
                        <div style={{display: "flex", marginBottom:"15px"}}>
                            <Input
                                type="number"
                                name="priceFrom"
                                onChange={handleClick}

                            />
                            <Input
                                type="number"
                                name="priceTo"
                                onChange={handleClick}
                            />                       
                        </div>
                        <Button onClick={handlePricerange} color="success">Применить</Button>
                    </FormGroup>

                    <ButtonGroup>
                        <Button color="primary" onClick={() => setRSelected('USD')} active={rSelected === 'USD'}>USD</Button>
                        <Button color="primary" onClick={() => setRSelected('UAH')} active={rSelected === 'UAH'}>UAH</Button>
                    </ButtonGroup>
                    <p>Selected: {rSelected}</p>

                    <FormGroup className="form-box">
                    <Label for="price"><p>Сортировка</p>
                        <Input
                            type="select"
                            id="price"
                            onChange={(e) => handleSortByPrice(e)}
                        >
                            <option>-</option>
                            <option>Price Ascending</option>
                            <option>Price Descending</option>
                        </Input>                         
                    </Label>
                    </FormGroup>
                </Form>
                <Form>
                    <Label>Имя</Label>
                    <Input
                        type="text"
                        name="name"
                        onChange={handleChange}
                    />
                    <Label>Цена</Label>
                    <Input
                        type="number"
                        name="price"
                        onChange={handleChange}
                    />
                    <Label>Описание</Label>
                    <Input 
                        type="textarea"
                        onChange={handleChange} 
                        name="desc" 
                        id="" 
                        cols="30" rows="10"></Input>
                    <br/>
                    <Button onClick={handleCreate}>Save</Button>
                </Form>
            </div>
        </>

    )
}

export default Sidebar