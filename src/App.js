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
  return (
    <div className="container pt-3">
      <Table/>
      {/* <table className="table table-bordered table-responsive border-primary">
        <thead>
          <tr>
            <th colspan="5" rowspan="1">
              <h1 className="text-center">Название раздела</h1>
            </th>
          </tr>
        </thead>
        <thead>
          <tr>
            <th>Id</th>
            <th>Название товара</th>
            <th>Цена</th>
            <th>Количество</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
        
        </tbody>
      </table> */}
    </div>
  );
}

export default App;
