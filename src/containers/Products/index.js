import React  from 'react'
import { Row, Col } from 'reactstrap'

const Product = ({filtredProducts}) => {

    const changeText =(text, limit) => {
        text = text.trim();
        if(text.length <= limit) return text;
        text = text.slice(0, limit);
        return text.trim() + "...";
    }

    const imgUrl = "../../img/"
    
    return (
        <>
        <div className="card-wrap">
            {filtredProducts.map((item, index) => {
                return (
                    <div className="holder-card"md="6" key={index} >
                        <div className="item-card">
                            <div className="card-img">
                                {item.image ? 
                                <img src={imgUrl + item.id + '.jpg'} alt={item.title} /> 
                                : <i className="fas fa-image"></i>}
                            </div>
                            <div className="card-info">
                                <h2 className="card-info-title">{item.name}</h2>
                                <span className="card-info-price">$ {item.price}</span>
                                <p className="card-info-description" style={{fontSize:'10px'}}>
                                    {changeText(item.description, 80)}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        </>

    )
}

export default Product
