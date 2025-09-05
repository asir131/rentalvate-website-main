import Image from "next/image";
import React from "react";

const Wallet = () => {
   const transactions = [
    {
      id: 1,
      type: 'payment',
      description: 'Payment for Job #A102 (Leaking Faucet)',
      date: '18 Feb 2025',
      time: '10:00 AM',
      amount: -100
    },
    {
      id: 2,
      type: 'topup',
      description: 'Wallet Top-Up',
      date: '18 Feb 2025',
      time: '10:00 AM',
      amount: 100
    },
    {
      id: 3,
      type: 'payment',
      description: 'Payment for Job #A102 (Leaking Faucet)',
      date: '18 Feb 2025',
      time: '10:00 AM',
      amount: -100
    },
    {
      id: 4,
      type: 'topup',
      description: 'Wallet Top-Up',
      date: '18 Feb 2025',
      time: '10:00 AM',
      amount: 100
    },
   
   
  ];
  return (
    <div className="flex flex-col items-center  justify-center">
      <div
        className="w-80 md:w-140 h-35 rounded mt-5 md:mt-8 md:ml-30 relative flex items-center justify-center"
       
      >
        <Image
          src="/walletImg.png"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "100%" }}
          
          className=" object-contain "
          alt="Wallet Icon"
        />
        <div className=" flex flex-col absolute items-center justify-center">
          <p className="text-white text-xl  md:text-2xl">YOUR BALANCE</p>
          <h1 className="text-white font-semibold text-2xl md:text-3xl">$340</h1>
        </div>
      </div>

      <div className="flex  items-center  justify-center">
        <button className="bg-[#FF6600] hover:bg-orange-600 text-white font-semibold flex gap-3 py-2 px-20 md:px-30 md:ml-20  rounded-xl mt-5">
          <Image src="/money.png" width={25} height={7} alt=""/> Add Money
        </button>
      </div>
      <div className="w-full mt-5 md:ml-20 mx-auto bg-white rounded-lg ">
      <div className="p-6 mt-5">
        <h2 className="text-xl font-semibold text-gray-900">Recent History</h2>
      </div>
      
      <div className="">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="p-4 border-b-2 border-gray-200 flex items-center justify-between hover:bg-gray-50 transition-colors">
            <div className="flex-1">
              <h3 className="text-gray-900 font-medium mb-1">
                {transaction.description}
              </h3>
              <p className="text-gray-500 text-sm">
                {transaction.date} {transaction.time}
              </p>
            </div>
            
            <div className="ml-6">
              <span className={`text-lg font-semibold ${
                transaction.amount > 0 
                  ? 'text-green-600' 
                  : 'text-red-600'
              }`}>
                {transaction.amount > 0 ? '+' : ''} ${Math.abs(transaction.amount)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Wallet;
