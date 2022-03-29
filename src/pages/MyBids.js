import React, { useState, Fragment,useEffect } from "react";

import DataTable from "react-data-table-component";
import { ArrowRightIcon } from "@heroicons/react/solid";
import UserSidebar from "../components/UserSidebar";
import AdvertistmentCarousel from "../components/AdvertistmentCarousel";
import Auth from "../Authentication/Auth";



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
  const [error, setError] = useState([]);
  const handleSidebar = () => {
    setIsOpened(!isOpened);
  };

  const columns = [
    {
      name: "Price",
      selector: (row) => row.amount +" /=" ,
      sortable: true,
    },
    {
      name: `${userType == "Buyer" ? "Seller" : "Buyer"}`,
      selector: (row) => {
        if(userType == "Buyer"){
          return row.sellerName
        }else{
          return row.buyerName
        }
      },
    },
    {
      name: "Status",
      selector: (row) => <h4 className={row.status=='pending'?'text-yellow-600 capitalize':'text-green-500 capitalize'}>{row.status}</h4>,
      sortable: true,
    },
    {
      name: "See more",
      selector: (row) => <a href={`viewSeller${row.sellerId}`} >View</a>,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) =>
        row.status == "pending" ? (
          <button
            className="bg-green-400 p-2 rounded-2xl text-white "
            onClick={(e)=>acceptHandler(row._id,"confirmed",e)}
            id={row._id}
          >
            Confirm
          </button>
        ) : (
          <button
            className="bg-orange-300 p-2 rounded-2xl text-white "
            onClick={(e)=>acceptHandler(row._id,"pending",e)}
            id={row._id}
          >
            Pending
          </button>
        ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    }
  ];

  useEffect(() => {
    loadBids();
  }, []);

  const acceptHandler = (id,status,e) => {
    e.preventDefault();
    fetch(`http://localhost:5000/api/bids/confirm`, {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ id: id,status: status}),
    })
      .then((res) => res.json())
      .then((response) => {
        setError(response);
        console.log(response);
        loadBids();
      })
      .catch((error) => console.log(error));
  };

  const loadBids = () => {
    fetch(`http://localhost:5000/api/bids/${userType=="buyer"?'bids-buyer':'bids-seller'}?id=${Auth.getUserId()}`, {
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
