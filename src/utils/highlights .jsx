import { RiShieldCheckLine } from "react-icons/ri";
import { MdSupportAgent } from "react-icons/md";
import { TbBolt } from "react-icons/tb";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import { MdDevices } from "react-icons/md";

export const highlights = [
  {
    title: "Secure Transactions",
    description: "We use bank-grade security to keep your money and data safe.",
    icon: <RiShieldCheckLine className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "24/7 Support",
    description: "Our support team is always available, even on holidays.",
    icon: <MdSupportAgent className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Fast Processing",
    description: "Instant money transfers and bill payments with no delays.",
    icon: <TbBolt className="w-10 h-10 text-yellow-500" />,
  },
  {
    title: "Easy to Use",
    description: "Clean interface with intuitive features anyone can use.",
    icon: <AiOutlineUserSwitch className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Trusted Partners",
    description: "We are connected with major banks and utility services.",
    icon: <FaRegHandshake className="w-10 h-10 text-indigo-600" />,
  },
  {
    title: "Access Anywhere",
    description: "Use across devices — mobile, desktop or tablet.",
    icon: <MdDevices className="w-10 h-10 text-cyan-600" />,
  },
];
