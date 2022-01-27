import { ScaleIcon } from "@heroicons/react/solid";
import React from "react";
import ReactStars from "react-rating-stars-component";

const styles = {
  detailName: "text-xl font-semibold col-span-3",
  detailValue: "text-xl col-span-2",
};

function SellerDetails() {
  return (
    <div className="container px-0 lg:px-40 sm:px-10 md:px-20 ">
      <main class="flex items-center p-10 sm:px-0 w-full h-full bg-white">
        <div class="border-t border-b pt-16 grid lg:grid-cols-5 md:grid-cols-1 gap-8">
          <div class="flex flex-col col-span-3">
            <div class="flex flex-col gap-4">
              <h1 class="capitalize text-4xl font-extrabold mb-5 ">
                Seller Name Here
              </h1>
              <div className="grid grid-cols-5 gap-2 ml-2">
                <div className={styles.detailName}>
                  <span>Scale</span>
                </div>
                <div className={styles.detailValue}>Large</div>
                <div className={styles.detailName}>
                  Average Yeld per Harvest
                </div>
                <div className={styles.detailValue}>2,500</div>

                <div className={styles.detailName}>District</div>
                <div className={styles.detailValue}>Colombo</div>

                <div className={styles.detailName}>City</div>
                <div className={styles.detailValue}>Malabe</div>

                <div className={styles.detailName}>Interval During Harvest</div>
                <div className={styles.detailValue}>6 month</div>

                <div className={styles.detailName}>Last Harvest</div>
                <div className={styles.detailValue}>2022/01/12</div>

                <div className={styles.detailName}>Seller Rating</div>
                <div className={styles.detailValue}>
                  <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    edit={false}
                    value={4}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>

                <div className={styles.detailName}>Availability Status</div>
                <div className={styles.detailValue}>High</div>
              </div>
              <div className="grid grid-cols-5 gap-2 p-4 bg-green-100 mt-5 rounded-xl shadow-sm">
                <div className={styles.detailName}>Highest Bid</div>
                <div className={styles.detailValue + " font-bold"}>27,450</div>

                <div className={styles.detailName}>Contact Number</div>
                <div className={styles.detailValue + " font-bold"}>
                  076 7678 389
                </div>
                <div className={styles.detailName + " mt-5"}>
                  Place Your Bid
                </div>

                <input
                  type="number"
                  className="
                    -ml-2
                    mt-2
        form-control
        block
        w-32
        h-10
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-yellow-50 bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
                  id="exampleNumber0"
                  placeholder="0,00"
                />
                <button
                  type="button"
                  className="inline-block px-2 py-1.0 bg-green-400 text-white font-medium text-base leading-tight uppercase rounded-full shadow-md hover:bg-green-500 hover:shadow-lg focus:bg-green-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-600 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Bid
                </button>
              </div>
            </div>
          </div>
          <div class="flex flex-col col-span-2 justify-start order-first lg:order-last md:order-first mt-10 ml-10 md:mx-auto">
            <div
              class="flex flex-col  object-cover w-full justify-items-start border rounded-3xl shadow-lg overflow-hidden"
              style={{ minHeight: 320 }}
            >
              <img
                className="w-full h-full object-cover "
                src="https://images.unsplash.com/photo-1537191072641-5e19cc173c6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="nike shoes"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default SellerDetails;
