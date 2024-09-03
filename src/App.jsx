import { useState, useEffect } from "react";  // Ensure useEffect is imported here
import Nav from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.js';

export default function App() {
  const [products, setProducts] = useState([]);

  async function getProjects() {
    const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza"); // Add the correct API URL here
    const data = await response.json();
    const recipes = data.recipes;
    console.log(recipes);
    setProducts(recipes);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
    <Nav />
    <div className="container">
      {products.length === 0 ? (
        <h2>Loading</h2>
      ) :  (
        <div className="d-flex flex-column">
        {products.map((product) => (
          <div key={product.recipe_id} className="card" style={{ width: '18rem' }}>
            <img src={product.image_url} alt={product.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.publisher}</p>
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
</>
);
}