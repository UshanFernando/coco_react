import React, { useState, Fragment } from "react";
import AdvertistmentCarousel from "../components/AdvertistmentCarousel";
import ListItemAd from "../components/ListItemAd";
import ListItemAdSellers from "../components/ListItemAdSeller";
import ListItemOffer from "../components/ListItemOffer";
import ListItemSeller from "../components/ListItemSeller";

import SelectBox from "../components/SelectBox";
import DataTable from "react-data-table-component";
import { ArrowRightIcon } from "@heroicons/react/solid";
import UserSidebar from "../components/UserSidebar";

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

const scale = [
  { id: 1, name: "Small", unavailable: false },
  { id: 2, name: "Medium", unavailable: false },
  { id: 3, name: "Large", unavailable: false },
  { id: 4, name: "Any", unavailable: false },
];

const sortings = [
  { id: 0, name: "Select Criteria", unavailable: false },
  { id: 1, name: "Highest Price", unavailable: false },
  { id: 2, name: "Overall Highest Rating", unavailable: false },
  { id: 3, name: "Highest Price and Rating", unavailable: false },
  { id: 4, name: "Punctually Rating Highest", unavailable: false },
];

const acceptHandler = (state) => {
  console.log("clicked accepted");
  console.log(state.target.id);
};

const declineHandler = (state) => {
  console.log("clicked decline");
  console.log(state.target.id);
};

const columns = [
  {
    name: "Price",
    selector: (row) => row.price,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => row.name,
  },
  {
    name: "Scale",
    selector: (row) => row.scale,
    sortable: true,
  },
  {
    name: "District",
    selector: (row) => row.district,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <button
        className="bg-green-600 p-2 rounded-2xl text-white "
        onClick={acceptHandler}
        id={row.id}
      >
        Accept
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
  {
    cell: (row) => (
      <button
        className="bg-red-500 p-2 rounded-2xl text-white "
        onClick={declineHandler}
        id={row.id}
      >
        Decline
      </button>
    ),
    ignoreRowClick: true,
    allowOverflow: true,
    button: true,
  },
];

const customStyles = {
  rows: {
    style: {
      minHeight: "72px", // override the row height
    },
  },
  headCells: {
    style: {
      fontSize: "16px",
      fontWeight: "600",
      backgroundColor: "#effce0",
    },
  },
  cells: {
    style: {
      fontSize: "16px",
      backgroundColor: "#effce0",
    },
  },
};

const data = [
  {
    id: 1,
    price: 200,
    name: "Jayantha Perera",
    scale: "Large",
    district: "Colombo",
  },
  {
    id: 3,
    price: 220,
    name: "Nimal Perera",
    scale: "Large",
    district: "Colombo",
  },
];

function MyOffers() {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [selectedScale, setSelectedScale] = useState(scale[0]);
  const [selectedSorting, setSelectedSorting] = useState(districts[0]);
  const [isOpened, setIsOpened] = useState(false);
  const handleSidebar = () => {
    setIsOpened(!isOpened);
  };
  return (
    <div className="h-screen flex">
      <UserSidebar
        handleSidebar={handleSidebar}
        isOpened={isOpened}
        selected="offers"
      />
      <div className="flex-1 flex overflow-hidden pt-16 ">
        <div class="flex-1 overflow-y-scroll">
          <ArrowRightIcon
            className={`w-10 ml-4 ${isOpened ? "hidden" : " md:hidden"}`}
            onClick={handleSidebar}
          />
          <div className="-mt-16">
            <AdvertistmentCarousel />
          </div>
          <br/>
          <div>
            <h3 className=" text-2xl font-semibold mb-4 mt-20 w-full justify-center  text-center">My Offers</h3>
            <div className="w-4/5 mx-auto ">
              <DataTable
                columns={columns}
                data={data}
                customStyles={customStyles}
              />
            </div>
          </div>

          {/*         
            <center>
              <div class="flex justify-center items-center mt-32">
                <div
                  class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </center> */}
        </div>
      </div>
    </div>
  );
}

export default MyOffers;
