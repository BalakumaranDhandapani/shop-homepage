export default function Cart({ cartList, incQuantity, decQuantity, removeCart }) {
    return (
        <ol className="list-group list-group-numbered">
            {cartList.map((item) => {
                return (
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.title}</div>
                            <h6>Rs.{item.price}</h6>
                            <div>
                                Qty : {item.quantity}
                                <button className="btn btn-outline-success py-1" style={{ margin: "3px" }} onClick={() => incQuantity(item)}>
                                    +
                                </button>
                                <button disabled={item.quantity === 0 ? true : false}
                                    className="btn btn-outline-danger py-1" style={{ margin: "3px" }} onClick={() => decQuantity(item)}>
                                    -
                                </button><br />
                            </div>
                            <div>
                                <button className="rounded-pill" style={{ color: "blue", border: "1px solid transparent", marginLeft: "3px" }} onClick={() => removeCart(item)}>
                                    Delete
                                </button>
                            </div>
                        </div>
                    </li>
                );
            })}
        </ol>
    );
}