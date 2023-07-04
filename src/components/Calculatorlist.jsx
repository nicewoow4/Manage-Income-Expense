import React from "react";
import Button from "./Button";
import "./Calculatorlist.css";
import Input from "./Input";
import Calfinance from "./Calfinance";

function Calculatorlist(props) {
  const {
    datalist,
    setDatalist,
    list,
    setList,
    amount,
    setAmount,
    finance,
    setFinance,
    editdata,
    editId,
    setEditId,
  } = props;
  return (
    <div>
      <div className="calc-wrapper shadow">
        <div>
          <Input
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
          <Button setDatalist={setDatalist}/>
        </div>
      </div>
      <div className="bg-calfinance shadow">
        <Calfinance datalist={datalist} />
      </div>
    </div>
  );
}

export default Calculatorlist;
