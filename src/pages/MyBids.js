import React, { useState, Fragment,useEffect } from "react";

import DataTable from "react-data-table-component";
import { ArrowRightIcon } from "@heroicons/react/solid";
import UserSidebar from "../components/UserSidebar";
import AdvertistmentCarousel from "../components/AdvertistmentCarousel";
import Auth from "../Authentication/Auth";

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
    selector: (row) => row.amount,
    sortable: true,
  },
  {
    name: "Seller",
    selector: (row) => row.sellerName,
  },
  {
    name: "Status",
    selector: (row) => <h4 className={row.status=='pending'?'text-yellow-600 capitalize':'capitalize'}>{row.status}</h4>,
    sortable: true,
  },
  {
    name: "See more",
    selector: (row) => <a href={`viewSeller${row.sellerId}`} >View</a>,
    sortable: true,
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

function MyBids() {
  const [isOpened, setIsOpened] = useState(false);
  const [userType, setUserType] = useState(Auth.getUserLevel())
  const [bids, setBids] = useState([])
  const handleSidebar = () => {
    setIsOpened(!isOpened);
  };
  useEffect(() => {
    loadBuyerBids();
  }, []);

  const loadBuyerBids = () => {
    fetch(`http://localhost:5000/api/bids/bids-buyer?id=${Auth.getUserId()}`, {
      method: "GET",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      // body: JSON.stringify({ id: id }),
    })
      .then((res) => res.json())
      .then((response) => {
        setBids(response);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };

  
  return (
    <div className="h-screen flex">
      <UserSidebar
        handleSidebar={handleSidebar}
        isOpened={isOpened}
        selected="bids"
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
            <h3 className=" text-2xl font-semibold mb-4 mt-20 w-full justify-center  text-center">My Bids</h3>
            <div className="w-4/5 mx-auto ">
              <DataTable
                columns={columns}
                data={bids}
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

export default MyBids;
