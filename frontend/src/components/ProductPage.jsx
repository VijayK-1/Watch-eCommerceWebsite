import products from '../product.json';
import axios from 'axios';
import men1 from '../assets/menPage (1).jpg'
import men2 from '../assets/menPage (2).jpg'
import men3 from '../assets/menPage (3).jpg'
import men4 from '../assets/menPage (4).jpg'

const men=[
  {image:men1,price:20,text:'vijay',description:'hellobodfgxfoo'},
  {image:men2,price:201,text:'vijay2',description:'helloooodgfsdgsdfgf'},
  {image:men3,price:202,text:'vijay3',description:'helloooogdfgdfgfd'},
  {image:men4,price:203,text:'vijay5',description:'hellooogfxdfgfdgfo'},
]

function ProductPage() {
  const handleAdd = async (item) => {
    const token = localStorage.getItem('token');
    await axios.post('http://localhost:5000/api/cart/add', {
      productId: item.text,
      name: item.text,
      price: item.price,
      image: item.image
    }, {
      headers: { Authorization: `Bearer ${token}`}
    });
    alert("Added to cart");
  };

  return (
    <div>
      <h2>Vegetables</h2>
      {men.map(p => (
        <div key={p.text}>
          <h4>{p.text}</h4>
          <p>{p.description}</p>
          <p>₹{p.price}</p>
          <img src={p.image} alt="" style={{height:'300px'}} />
          <button onClick={() => handleAdd(p)}>Add</button>
        </div>
      ))}
    </div>
  );
}
export default ProductPage