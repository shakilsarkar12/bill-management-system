import React from "react";
import { FiHelpCircle, FiMail, FiPhone } from "react-icons/fi";

const faqs = [
  {
    question: "How can I add balance to my account?",
    answer:
      "Go to your profile, click 'Add Balance', then choose your payment method and enter the amount.",
  },
  {
    question: "How to update my profile details?",
    answer:
      "Click the edit icon on your profile card to update your name or photo.",
  },
  {
    question: "What should I do if a payment fails?",
    answer:
      "Check your internet connection, payment method balance, or try again later. Contact support if it persists.",
  },
];

const HelpSection = () => {
  return (
    <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200 max-w-6xl xl:mx-auto space-y-8 mt-4 sm:mt-6 md:mt-12 lg:mt-20 mx-4 md:mx-8">
      <h2 className="text-2xl font-semibold flex items-center gap-2 text-primary">
        <FiHelpCircle /> Help & Support
      </h2>

      {/* FAQs */}
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index}>
            <h3 className="font-semibold text-gray-800">{faq.question}</h3>
            <p className="text-gray-600 mt-1">{faq.answer}</p>
          </div>
        ))}
      </div>

      {/* Contact Info */}
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Need further help?
        </h3>
        <p className="flex items-center gap-2 text-gray-600">
          <FiMail /> support@example.com
        </p>
        <p className="flex items-center gap-2 text-gray-600 mt-1">
          <FiPhone /> +880 1234 567890
        </p>
      </div>
    </div>
  );
};

export default HelpSection;
