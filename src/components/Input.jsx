import React, { useState } from "react";
import "./Input.css";
function Input(props) {
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

  const submitValue = (e) => {
    e.preventDefault();

    var finance2;
    if (finance === "รายรับ") {
      finance2 = "income";
    } else finance2 = "expenses";

    if (!list || !amount) {
      alert("กรุณากรอกข้อมูล");

      //อัพเดทข้อมูล
    } else if (editId) {
      //รายการใดมีรหัสตรงกับแก้ไขให้เปลี่ยนแปลง ข้อมูล
      const updatedata = datalist.map((item) => {
        if (item.id === editId) {
          return { ...item, name: list, amount: amount,finance:finance2};
        }
        return item;
      });
      console.log(updatedata);
      setDatalist(updatedata)
      setList("");
      setAmount("");
      setFinance("");

      //เมื่ออัพเดทข้อมูลให้กลับมาเป็นค่าเริ่มต้น
     
    } else {
      const newList = {
        id: Math.floor(Math.random() * 10000),
        name: list,
        amount: amount,
        finance: finance2,
      };
      console.log(newList);
      setDatalist([...datalist, newList]);
      setList("");
      setAmount("");
      setFinance("");
    }
  };

  return (
    <div className="input-wrapper">
      <form onSubmit={submitValue}>
        <input
          type="text"
          name="list"
          value={list}
          placeholder="ชื่อรายการ"
          onChange={(e) => setList(e.target.value)}
        />
        <input
          type="number"
          name="amount"
          value={amount}
          placeholder="จำนวนเงิน"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div className="finance-btn">
          <input
            className="btn-1 shadow"
            type="submit"
            name="income"
            value="รายรับ"
            onClick={(e) => setFinance(e.target.value)}
          />

          <input
            type="submit"
            className="btn-2 shadow"
            name="expenses"
            value="รายจ่าย"
            onClick={(e) => setFinance(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Input;
