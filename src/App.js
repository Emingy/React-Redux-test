import React, { useState } from "react";
import AddToCart from "./components/AddToCart";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App({match}) {
  const [totalPrice, setTotalPrice] = useState({})
  const [pages, setPages] = useState([]);
  return (
    <div>
      <div className="d-flex flex-row">
        <div className="">
          <Navbar pages={pages}/>
        </div>
        <div className="container pb-5">
          <Table setTotalPrice={setTotalPrice} totalPrice={totalPrice} setPages={setPages} filter={match.params.filter||'all'}/>
        </div>
      </div>
      <AddToCart totalPrice={totalPrice}/>
    </div>
  );
}

export default App;