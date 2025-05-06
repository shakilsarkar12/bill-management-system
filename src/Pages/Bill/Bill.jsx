import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { toast } from 'react-toastify';

const Bill = () => {
  const { balence, setBalence } = useContext(AuthContext);
    const handlePayBill = (e) => {
        e.preventDefault();
        const taka = e.target.taka.value;
        const convertedTaka = parseFloat(taka);
if (convertedTaka >= 0) {
            if (balence>convertedTaka) {            
            const rimining = balence - convertedTaka
           setTimeout(() => {
             setBalence(rimining);
             toast.success(`${convertedTaka} taka Pay successfull !`);
             e.target.taka.value = "";
           }, 1000);
        } else {
            toast.warn("Insufficient balance");
        }
}else
        toast.warn("invalid input balence");
    }
    return (
        <div className='border border-gray-200 p-8 w-fit mx-auto mt-20'>
            <span className='text-2xl mb-5'>Bill pge</span>
            <form onSubmit={handlePayBill}>
                <input name='taka' className='input' type="number"  placeholder='Pay amount'/>
                <button className='btn btn-accent mt-5' type='submit'>pay</button>
            </form>
        </div>
    );
};

export default Bill;