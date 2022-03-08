import { ArrowCircleRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
function PostAdSeller() {
  const navigate = useNavigate();

  const toreg2 = () => {
    navigate("/register2", { state: { id: 1, name: "sabaoon" } });
  };

  return (
    <div class="lg:flex ">
      <div class="w-screen ">
        <div className="h-10"></div>
        <div class="mt-4 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-12 xl:max-w-2xl mx-auto">
          <h2
            class="text-center text-4xl text-green-900  font-semibold lg:text-left xl:text-3xl
          xl:text-bold mb-8"
          >
            Post New Advertisement
          </h2>
          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.fname) {
                errors.fname = "First Name is Required*";
              }
              if (!values.lname) {
                errors.lname = "Last Name is Required*";
              }
              if (!values.utype || values.utype == "Select") {
                errors.utype = "Please Select Buyer or Seller*";
              }
              if (!values.province || values.province == "Select") {
                errors.province = "Please Select Province*";
              }
              if (!values.mobile) {
                errors.mobile = "Mobile Number is Required*";
              }

              if (!values.landLine) {
                errors.landLine = "Land Line is Required*";
              }

              //email
              if (!values.email) {
                errors.email = "Email is Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Password Is Required*";
              } else if (values.password.length < 6) {
                errors.password = "Password Is Too Short*";
              }

              if (!values.passwordConfirm) {
                errors.passwordConfirm = "Confirm Password Is Required*";
              } else if (values.password != values.passwordConfirm) {
                errors.passwordConfirm = "Passwords Not Matching*";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              console.log("submit called");
              if (values.utype == "Seller") {
                navigate("/registerSeller", values);
              } else if (values.utype == "Buyer") {
                navigate("/registerBuyer", values);
              }
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit}>
             
       

                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="number"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                    id="floating_password"
                    class={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder=" "
                  />
                  <label
                    for="floating_password"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {errors.password ? (
                      <span className="text-red-600">{errors.password}</span>
                    ) : (
                      "Duration (Days) *"
                    )}
                  </label>
                </div>
                <div class="relative z-0 mb-6 w-full group">
                  <input
                    type="password"
                    name="passwordConfirm"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirm}
                    id="floating_repeat_password"
                    class={`block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2  appearance-none    focus:outline-none focus:ring-0 focus:border-blue-600 peer ${
                      errors.passwordConfirm
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder=" "
                  />
                  <label
                    for="floating_repeat_password"
                    class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    {errors.passwordConfirm ? (
                      <span className="text-red-600">
                        {errors.passwordConfirm}
                      </span>
                    ) : (
                      "Price (Rs) *"
                    )}
                  </label>
                </div>

                <button
                  // onClick={toreg2}
                  type="submit"
                  disabled={isSubmitting}
                  class="text-white bg-green-600 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default PostAdSeller;
