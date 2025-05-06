import { FiRefreshCcw, FiFileText } from "react-icons/fi";
import { BiCreditCard, BiMoneyWithdraw } from "react-icons/bi";
import { CgSmartphone } from "react-icons/cg";
import { BsDatabaseFillAdd } from "react-icons/bs";

export const services = [
  {
    title: "Transfer Money",
    icon: <FiRefreshCcw className="w-8 h-8 text-blue-600" />,
    description: "Send money quickly to any bank or mobile wallet.",
  },
  {
    title: "Pay Bills",
    icon: <BiCreditCard className="w-8 h-8 text-green-600" />,
    description: "Electricity, gas, water and more — pay anytime.",
  },
  {
    title: "Mobile Recharge",
    icon: <CgSmartphone className="w-8 h-8 text-indigo-600" />,
    description: "Instant top-up for any mobile operator in Bangladesh.",
  },
  {
    title: "View Statements",
    icon: <FiFileText className="w-8 h-8 text-yellow-600" />,
    description: "See transaction history and download account statements.",
  },
  {
    title: "Cash Out",
    icon: <BiMoneyWithdraw className="w-8 h-8 text-red-500" />,
    description: "Withdraw money from agents or ATMs securely.",
  },
  {
    title: "Add Money",
    icon: <BsDatabaseFillAdd className="w-8 h-8 text-green-600" />,
    description: "Load your wallet from a bank or card anytime.",
  },
];
