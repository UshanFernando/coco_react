import React, { useState, useEffect } from "react";
import AdvertistmentCarousel from "../components/AdvertistmentCarousel";
import ListItemAd from "../components/ListItemAd";
import ListItemAdSellers from "../components/ListItemAdSeller";
import ListItemOffer from "../components/ListItemOffer";
import ListItemSeller from "../components/ListItemSeller";

import SelectBox from "../components/SelectBox";
import DataTable from "react-data-table-component";
import { ArrowRightIcon } from "@heroicons/react/solid";
import UserSidebar from "../components/UserSidebar";
import Auth from "../Authentication/Auth";
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

function MyOffersBuyer() {
  const [selectedDistrict, setSelectedDistrict] = useState(districts[0]);
  const [selectedScale, setSelectedScale] = useState(scale[0]);
  const [selectedSorting, setSelectedSorting] = useState(districts[0]);
  const [isOpened, setIsOpened] = useState(false);
  const [offers, setOffers] = useState([]);
  const [error, setError] = useState([]);

  const acceptHandler = (state) => {
    console.log("clicked accepted");
    console.log(state.target.id);
    fetch(`http://localhost:5000/api/offers/accept-offer-buyer`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ id: state.target.id }),
    })
      .then((res) => res.json())
      .then((response) => {
        setError(response);
        loadBuyersOffers();
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const declineHandler = (state) => {
    console.log("clicked decline");
    console.log(state.target.id);

    fetch(`http://localhost:5000/api/offers/cancel`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ id: state.target.id }),
    })
      .then((res) => res.json())
      .then((response) => {
        setError(response);
        loadBuyersOffers();
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const loadBuyersOffers = () => {
    fetch(`http://localhost:5000/api/offers/offers-buyer`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ id: Auth.getUserId() }),
    })
      .then((res) => res.json())
      .then((response) => {
        setOffers(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  const handleSidebar = () => {
    setIsOpened(!isOpened);
  };

  const columns = [
    {
      name: "Price",
      selector: (row) => row.amount,
      sortable: true,
    },
    {
      name: "Name",
      cell: (row) => (
        <a
          className=" text-black cursor-pointer "
          onClick={acceptHandler}
          href={`viewBuyer${row.buyerId}`}
        >
          {row.buyerName}
        </a>
      ),
    },
    {
      name: "Status",
      selector: (row) => (
        <h4
          className={
            row.status == "pending"
              ? "text-yellow-600 capitalize font-semibold"
              : row.status == "canceled"
              ? "text-red-600 capitalize font-semibold"
              : row.status == "confirmed"
              ? "text-green-600 capitalize font-semibold"
              : "capitalize"
          }
        >
          {row.status}
        </h4>
      ),
    },
    // {
    //   name: "Scale",
    //   selector: (row) => row.scale,
    //   sortable: true,
    // },
    // {
    //   name: "District",
    //   selector: (row) => row.district,
    //   sortable: true,
    // },
    {
      name: "Actions",
      cell: (row) =>
        row.status == "pending" ? (
          <button
            className="bg-green-600 p-2 rounded-2xl text-white "
            onClick={acceptHandler}
            id={row._id}
          >
            Accept
          </button>
        ) : (
          <h1> N/A</h1>
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
    {
      cell: (row) =>
        row.status == "pending" ? (
          <button
            className="bg-red-600 p-2 rounded-2xl text-white "
            onClick={declineHandler}
            id={row._id}
          >
            Decline
          </button>
        ) : (
          <h1> </h1>
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  useEffect(() => {
    loadBuyersOffers();
  }, []);

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
          <br />
          <div>
            <h3 className=" text-2xl font-semibold mb-4 mt-20 w-full justify-center  text-center">
              My Offers
            </h3>
            <div className="w-4/5 mx-auto ">
              <DataTable
                columns={columns}
                data={offers}
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

export default MyOffersBuyer;
