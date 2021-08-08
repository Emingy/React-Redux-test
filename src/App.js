import { useState } from "react";
import AddToCart from "./components/AddToCart";
import Table from "./components/Table";


var def = [
  {
  id: 1,
  name: "test name",
  price: 12000,
  amount: 2,
  sum: 24000
  },
  {
    id: 2,
    name: "test name",
    price: 2000,
    amount: 2,
    sum: 4000
  },
]
function App() {
  const [totalPrice, setTotalPrice] = useState({})
  return (
    <div className="pt-3">
      <div className="container">
        <Table setTotalPrice={setTotalPrice} totalPrice={totalPrice}/>
      </div>
      <AddToCart totalPrice={totalPrice}/>
    </div>
  );
}

export default App;
