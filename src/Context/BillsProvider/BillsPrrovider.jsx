import React, { useEffect, useState } from "react";
import { BillsContext } from "../BillsContext/BillsContext";
import { getStatusArray } from "../../utils/storage";

const BillsPrrovider = ({ children }) => {
  const [balence, setBalence] = useState(10000);
  const [bills, setBills] = useState([]);
  const [billStatus, setBillStatus] = useState([]);
  const [recentBills, setBillResent] = useState([]);
  const [paid, setPaid] = useState([]);
  const [unPaid, setUnPaid] = useState([]);
  const [totalpaid, setTotalPaid] = useState([]);
  const [statusArray, setStatusArray] = useState([]);

  useEffect(() => {
    fetch("/bills.json")
      .then((res) => res.json())
      .then((data) => setBills(data));

    const billResent = bills?.filter((bill) => bill.recent == true);
    setBillResent(billResent);

    const statusArray = getStatusArray();
    const paidBills = bills.filter((bill) => {
      const statusItem = statusArray.find((item) => item.id === bill.id);
      return statusItem?.status === true;
    });

    const unPaidBills = bills.filter((bill) => {
      const statusItem = statusArray.find((item) => item.id === bill.id);
      return !statusItem?.status;
    });

    const totalPaidAmount = paidBills.reduce(
      (sum, bill) => sum + bill.amount,
      0
    );

    setPaid(paidBills);
    setUnPaid(unPaidBills);
    setTotalPaid(totalPaidAmount);

    const storedStatus = getStatusArray();
    setBillStatus(storedStatus);

    const localStatus = JSON.parse(localStorage.getItem("status")) || [];
    setStatusArray(localStatus);
  }, [bills]);

  const userBills = {
    balence,
    bills,
    paid,
    unPaid,
    totalpaid,
    recentBills,
    billStatus,
    statusArray,
    setBills,
    setPaid,
    setBalence,
    setBillStatus,
    setStatusArray,
  };
  return <BillsContext value={userBills}>{children}</BillsContext>;
};

export default BillsPrrovider;
