import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card';
import { useState } from 'react';
import Cart from './Cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function App() {
  const products = [
    {
      sale: true,
      id: 1,
      pic: "https://m.media-amazon.com/images/I/51lNzeoQcFL._SL1280_.jpg",
      title: "Parker Pen",
      rating: true,
      price: 250,
    },
    {
      id: 2,
      pic: "https://m.media-amazon.com/images/I/71Il4P0LVVL._SL1500_.jpg",
      title: "Gel Pen",
      price: 20,
    },
    {
      sale: true,
      id: 3,
      pic: "https://i.etsystatic.com/10231048/r/il/b974a7/1944146885/il_fullxfull.1944146885_ok7f.jpg",
      title: "Hero Pen(Fountain pen)",
      rating: true,
      price: 50,
    },
    {
      id: 4,
      pic: "https://5.imimg.com/data5/FX/MA/MY-41880861/black-ball-pen-500x500.jpg",
      title: "Ball Point",
      price: 80,
    },
    {
      exclusive: true,
      id: 5,
      pic: "https://m.media-amazon.com/images/I/51DfEsdn5NL._SL1000_.jpg",
      title: "Fisher Space Pen",
      rating: true,
      price: 300,
    },
    {
      sale: true,
      id: 6,
      pic: "https://staticm24.williampenn.net/pub/media/catalog/product/w/p/wp17813-1.jpg",
      title: "Rollerball Pen",
      price: 100,
    },
    {
      id: 7,
      pic: "https://m.media-amazon.com/images/I/51rzqxvwdvL._SL1000_.jpg",
      title: "Felt-Tip Pen(Marker)",
      price: 75,
    },
    {
      sale: true,
      id: 8,
      pic: "http://www.historyofpencils.com/images/historyofpencils/picture-of-quill-pen-ink-pot.jpg",
      title: "Quill Pen",
      price: 125,
    }
  ]

  const [cartList, setCart] = useState([]);
  const [total, SetTotal] = useState(0);
  //Add to cart function
  let addToCart = (product) => {
    setCart([...cartList, { ...product, quantity: 1 }]);
    SetTotal(total + product.price);
  };

  //Removing items from Cart
  let removeCart = (product) => {
    let itemIndex = cartList.findIndex(item => product.id === item.id);
    console.log(itemIndex.quantity);
    cartList.splice(itemIndex, 1);
    setCart([...cartList]);
    SetTotal(total - (product.quantity * product.price));
  }

  //Incrementing the Quantity and its price
  let incQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex(item => cartItem.id === item.id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity + 1;
    setCart([...cartList]);
    SetTotal(total + cartItem.price);
  }

  //Decrementing the Quantity and its price
  let decQuantity = (cartItem) => {
    let itemIndex = cartList.findIndex(item => cartItem.id === item.id);
    cartList[itemIndex].quantity = cartList[itemIndex].quantity - 1;
    setCart([...cartList]);
    SetTotal(total - cartItem.price);
  }

  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">
              Inspiring Pens
            </h1>
            <p className="lead fw-normal text-white-50 mb-0">An Exclusive website for different types of Pens</p>
            <hr />
            <p className="lead fw-normal text-white-50 mb-0">
              "A pen transmits the voice of the Soul"<br />
              -Fennel Hudson.
            </p>
          </div>
        </div>
      </header>
      <div className='container'>
        <div className='row mt-3'>
          <div className="col-lg-9">
            <div className="row">
              {
                products.map((product) => {
                  return <Card product={product} addToCart={addToCart} cartList={cartList} removeCart={removeCart} />
                })
              }
            </div>
          </div>
          <div className="col-lg-3 mb-3" style={{ border: "1px dotted black" }}>
            <h3 className='Cart-heading text-center'>
              <FontAwesomeIcon icon={faCartShopping} style={{ marginRight: "5px" }} />Cart
            </h3>
            <Cart cartList={cartList} removeCart={removeCart} incQuantity={incQuantity} decQuantity={decQuantity} ></Cart>
            <h4>Total: Rs.{total}</h4>
          </div>
        </div>
      </div>
      <footer class="py-5 bg-dark">
        <div class="container">
          <p class="m-0 text-center text-white" style={{ fontSize: "20px" }}>
            Write the Story of your Bright future...!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;