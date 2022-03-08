import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
const districts = [
  { id: 1, name: "Colombo", unavailable: false },
  { id: 2, name: "Gampaha", unavailable: false },
  { id: 3, name: "Kalutara", unavailable: false },
  { id: 4, name: "Kandy", unavailable: false },
  { id: 5, name: "Matale", unavailable: false },
  { id: 6, name: "Nuwara Eliya", unavailable: false },
  { id: 7, name: "Galle", unavailable: false },
  { id: 8, name: "Hambantota", unavailable: false },
  { id: 9, name: "Jaffna", unavailable: false },
  { id: 10, name: "Kilinochchi", unavailable: false },
  { id: 12, name: "Vavuniya", unavailable: false },
  { id: 13, name: "Mullaitivu", unavailable: false },
  { id: 14, name: "Batticaloa", unavailable: false },
  { id: 15, name: "Trincomalee", unavailable: false },
  { id: 16, name: "Kurunegala", unavailable: false },
  { id: 17, name: "Puttalam", unavailable: false },
  { id: 18, name: "Anuradhapura", unavailable: false },
  { id: 19, name: "Polonnaruwa", unavailable: false },
  { id: 20, name: "Badulla", unavailable: false },
  { id: 21, name: "Moneragala", unavailable: false },
  { id: 22, name: "Ratnapura", unavailable: false },
  { id: 23, name: "Kegalle", unavailable: false },
];
function RegisterBuyer() {
  const location = useLocation();
  return (
    <div className="lg:flex ">
      <div className="lg:w-4/5 xl:max-w-screen-sm ">
        <div className="h-10"></div>
        <div class="flex-1 mt-4 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-12 xl:max-w-2xl overflow-y-auto">
          <h2
            className="text-center text-4xl text-green-900  font-semibold lg:text-left xl:text-3xl
          xl:text-bold mb-1"
          >
            Registration
          </h2>
          <h2
            className="text-center text-xl text-green-600  font-semibold lg:text-left 
          xl:text-bold mb-4"
          >
            Buyer
          </h2>
          <form>
            <div className="flex flex-wrap mx-auto mb-8 ">
              <a
                className="
                    inline-flex
                    items-center
                    justify-center
                    w-1/2
                    py-3
                    font-medium
                    leading-none
                    tracking-wider
                    border-b-2 border-gray-200
                    sm:px-6 sm:w-auto sm:justify-start
                    hover:text-gray-900
                  "
              >
                STEP 1
              </a>
              <a
                className="
                    inline-flex
                    items-center
                    justify-center
                    w-1/2
                    py-3
                    font-medium
                    leading-none
                    tracking-wider
                    text-indigo-500
                    bg-gray-100
                    border-b-2 border-indigo-500
                    rounded-t
                    sm:px-6 sm:w-auto sm:justify-start
                  "
              >
                STEP 2
              </a>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 mb-4 w-full group">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 mt-5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  id="grid-state"
                >
                  <option>Small Scale</option>
                  <option>Medium Scale</option>
                  <option>Large Scale</option>
                </select>
                <label
                  for="floating_first_name"
                  className="absolute text-xl  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
                >
                  Scale Of Plantation*
                </label>
              </div>
              {/* <div className="relative z-0 mb-4 w-full group">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 mt-5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
                  id="grid-state"
                >
                  {districts.map((e) => {
                    return <option>{e.name}</option>;
                  })}
                </select>
                <label
                  for="floating_phone"
                  className="absolute text-xl  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 mt-1"
                >
                  District*
                </label>
              </div> */}
            </div>

            <div className="flex justify-between">
              <p className="text-left leading-4 mt-1">
                Can Your provide tree climber for buyers?
              </p>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="inlineRadio10"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="inlineRadio20"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-2">
              <p className="text-left leading-4 mt-1">
                Are you a registered Business?
              </p>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="inlineRadio10"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="inlineRadio20"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-2 xl:gap-6 mt-4">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Alternative Contact Number
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Alternative Contact Number 2
                </label>
              </div>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Inheritor Name*
              </label>
            </div>
            <div className="grid xl:grid-cols-2 xl:gap-6">
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Inheritor Mobile*
                </label>
              </div>
              <div className="relative z-0 mb-6 w-full group">
                <input
                  type="text"
                  name="floating_last_name"
                  id="floating_last_name"
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_last_name"
                  className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                 Inheritor Alt Mobile
                </label>
              </div>
            </div>

            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nearest City
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="password"
                name="repeat_password"
                id="floating_repeat_password"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_repeat_password"
                className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Additional Info
              </label>
            </div>
            <div className="flex justify-between">
              <p className="text-left leading-4 mt-1">
                Would you like to receive calls from potential Sellers?
              </p>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="inlineRadio10"
                  >
                    Yes
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label
                    className="form-check-label inline-block text-gray-800"
                    for="inlineRadio20"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
      
            <button
              type="submit"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center my-4"
            >
              Finish and Submit
            </button>
          </form>
        </div>
      </div>
      <div className="hidden lg:flex items-center justify-center bg-green-100 flex-1 h-auto">
        <img
          className="h-full object-cover "
          src="https://images.unsplash.com/photo-1553787434-dd9eb4ea4d0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="nike shoes"
        />
      </div>
    </div>
  );
}

export default RegisterBuyer;
