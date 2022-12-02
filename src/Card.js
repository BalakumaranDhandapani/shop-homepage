import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card({ product, addToCart, cartList }) {
    let salevalue = product.price - ((10 * product.price) / 100);
    return (
        <div className="col-xl-4 mb-3">
            <div className="card h-100 text-center" style={{ width: "16rem" }}>
                <div className={`badge ${product.exclusive || product.sale ? "bg-dark" : "bg-transparent"} position-absolute`} style={{ color: "orange", top: "0.5rem", left: "0.5rem" }} >
                    {product.exclusive ? "Exclusive" : product.sale ? <i style={{ color: "lime" }}> Sale </i> : ""}
                </div>
                <img src={product.pic} className="card-img-top" alt="..." /><hr />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    {product.rating ?
                        <div className='rating'>
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
                            <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
                        </div> : ""}
                    <p className="card-text">
                        <span className={`${product.sale ? "text-decoration-line-through" : ""}`} >
                            {product.sale ? `Rs. ${product.price}` : ''}
                        </span>
                        {product.sale ? ` Rs. ${salevalue}` : ` Rs. ${product.price}`}
                    </p>
                    <button disabled={cartList.some(item => item.id === product.id)} className="btn btn-outline-secondary" style={{ margin: "0px 5px" }}
                        onClick={() => addToCart(product)}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}