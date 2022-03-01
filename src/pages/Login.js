import React from "react";

function Login() {
  return (
    <div class="lg:flex ">
      <div class="lg:w-1/2 xl:max-w-screen-sm">
        <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
          <div class="cursor-pointer flex items-center">
            <div class="text-2xl text-green-800 tracking-wide ml-2 font-semibold">
              පොල් මුරේ
            </div>
          </div>
        </div>
        <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
          <h2
            class="text-center text-4xl text-green-900 font-display font-semibold lg:text-left xl:text-5xl
          xl:text-bold"
          >
            Log in
          </h2>
          <div class="mt-12">
            <form>
              <div>
                <div class="text-sm font-bold text-gray-700 tracking-wide">
                  Email Address
                </div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-green-500"
                  type=""
                  placeholder="mike@gmail.com"
                />
              </div>
              <div class="mt-8">
                <div class="flex justify-between items-center">
                  <div class="text-sm font-bold text-gray-700 tracking-wide">
                    Password
                  </div>
                  <div>
                    <a
                      class="text-xs font-display font-semibold text-green-600 hover:text-green-800
                              cursor-pointer"
                    >
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <input
                  class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-green-500"
                  type=""
                  placeholder="Enter your password"
                />
              </div>
              <div class="mt-10">
                <button
                  class="bg-green-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                      font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-green-600
                      shadow-lg"
                >
                  Log In
                </button>
              </div>
            </form>
            <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
              Don't have an account ?{" "}
              <a class="cursor-pointer text-green-600 hover:text-green-800">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex items-center justify-center bg-green-100 flex-1 h-screen">
        <img
          className="h-screen object-cover "
          src="https://images.unsplash.com/photo-1621442745928-8f8d98021f35?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
          alt="nike shoes"
        />
      </div>
    </div>
  );
}

export default Login;
