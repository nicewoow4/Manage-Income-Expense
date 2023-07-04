import { useState, useEffect } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Calculatorlist from "./components/Calculatorlist";
import Financedata from "./components/Financedata";

function App() {
  const [datalist, setDatalist] = useState(JSON.parse(localStorage.getItem("datalist")) ||[]);
  console.log(datalist);

  const [list, setList] = useState("");
  const [amount, setAmount] = useState("");
  const [finance, setFinance] = useState("");
  const [editId, setEditId] = useState(null);
  const deletedata = (id) => {
    const result = datalist.filter((item) => item.id !== id);
    setDatalist(result);
  };

  const editdata = (id) => {
    setEditId(id);
    const edit = datalist.find((item) => item.id === id);
    setList(edit.name);
    setAmount(edit.amount);
  };

  useEffect(() => {
    localStorage.setItem("datalist",JSON.stringify(datalist))
  },[datalist]);

  return (
    <div className="bg">
      <Container>
        <br />
        <div className="head-name">
          <h1>แอพบันทึก รายรับ-รายจ่าย</h1>
        </div>

        <hr />
        <div className="App">
          <div className="cal-list">
            <Calculatorlist
              datalist={datalist}
              setDatalist={setDatalist}
              list={list}
              setList={setList}
              amount={amount}
              setAmount={setAmount}
              finance={finance}
              setFinance={setFinance}
              editdata={editdata}
              editId={editId}
              setEditId={setEditId}
            />
          </div>
          <div>
            <Financedata
              datalist={datalist}
              setDatalist={setDatalist}
              editdata={editdata}
              deletedata={deletedata}
            />
          </div>
        </div>
      </Container>
      <br />
    </div>
  );
}

export default App;
