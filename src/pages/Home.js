import React from "react";

function Home() {
  return (
    <div className="w-screen h-screen ">
      <div className="h-20"></div>
      <div class="relative z-0 h-2/3  self-center object-cover  justify-items-start border rounded-3xl shadow-lg overflow-hidden  mx-20 ">
        <div class="absolute inset-0 flex flex-col justify-items-center justify-center  z-10 h-auto  bg-slate-700/50 ">
          <p class="text-6xl font-bold text-white text-center">පොල් මුරේ</p>
          <h3 class="text-3xl font-bold text-gray-200 text-center mt-5">
            Online Platform for buy and sell coconuts in Sri Lanka
          </h3>
          <button
            type="button"
            className="mx-auto mt-5 inline-block px-2 py-4 w-60 bg-green-500 text-white font-medium text-base leading-tight uppercase rounded-full shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
          >
            Register Now
          </button>
        </div>
        <img
          className="h-auto object-cover "
          src="https://images.unsplash.com/photo-1639555970484-b56343b9c234?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          alt="nike shoes"
        />
      </div>
      {/* <div class="absolute inset-y-2 flex justify-center items-center z-10 h-2/3 mt-5 bg-orange-400 mx-20">
        <p class="text-6xl font-bold text-white">පොල් මුරේ</p>
      </div>
      <div class="absolute inset-0 flex justify-center items-center h-2/3 z-10 mt-32">
        <h3 class="text-3xl font-bold text-gray-200">Online Platform for buy and sell coconuts in Sri Lanka</h3>
      </div> */}
    </div>
  );
}

export default Home;
