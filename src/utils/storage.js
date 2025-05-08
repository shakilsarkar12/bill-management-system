const setInitialStatusToLocalStorage = () => {
  const status = [
    { id: "bcdefa0123456789bcdefa01", status: false },
    { id: "bcdefa0123456789bcdefa02", status: false },
    { id: "bcdefa0123456789bcdefa03", status: false },
    { id: "bcdefa0123456789bcdefa04", status: false },
    { id: "bcdefa0123456789bcdefa05", status: false },
    { id: "bcdefa0123456789bcdefa06", status: false },
    { id: "bcdefa0123456789bcdefa07", status: false },
    { id: "bcdefa0123456789bcdefa08", status: false },
    { id: "bcdefa0123456789bcdefa09", status: false },
    { id: "bcdefa0123456789bcdefa10", status: false },
    { id: "bcdefa0123456789bcdefa11", status: false },
    { id: "bcdefa0123456789bcdefa12", status: false },
    { id: "bcdefa0123456789bcdefa13", status: false },
    { id: "bcdefa0123456789bcdefa14", status: false },
  ];

  localStorage.setItem("status", JSON.stringify(status));
};
export const updateStatusById = (id) => {
  const statusArray = JSON.parse(localStorage.getItem("status")) || [];

  const updatedStatusArray = statusArray.map((item) =>
    item.id === id ? { ...item, status: true } : item
  );

  localStorage.setItem("status", JSON.stringify(updatedStatusArray));
};
export const getStatusArray = () => {
  return JSON.parse(localStorage.getItem("status")) || [];
};
export const setStatusArray = (array) => {
  localStorage.setItem("statusArray", JSON.stringify(array));
};

const firstLoadCall = () => {
  const array = getStatusArray();
  if (array.length == 0) {
    setInitialStatusToLocalStorage();
  }
};

firstLoadCall();
