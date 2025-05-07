import React, { useState } from "react";
import { BillsContext } from "../BillsContext/BillsContext";

const BillsPrrovider = ({ children }) => {

    const [paid, setPaid] = useState(false);



    const userBills = [
        paid,
        setPaid
    ]
  return <BillsContext value={userBills}>{children}</BillsContext>;
};

export default BillsPrrovider;
