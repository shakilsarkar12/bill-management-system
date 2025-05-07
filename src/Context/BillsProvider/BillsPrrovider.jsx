import React, { useEffect, useState } from "react";
import { BillsContext } from "../BillsContext/BillsContext";

const BillsPrrovider = ({ children }) => {
  const [bills, setBills] = useState([]);
  useEffect(() => {
    fetch("/bills.json")
      .then((res) => res.json())
      .then((data) => setBills(data));
  }, []);

  const [paid, setPaid] = useState(false);

  const userBills = { bills, paid, setBills, setPaid };
  return <BillsContext value={userBills}>{children}</BillsContext>;
};

export default BillsPrrovider;
