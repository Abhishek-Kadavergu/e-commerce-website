import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");

  const toggleCurrentState = () => {
    if (currentState === "Sign Up") {
      setCurrentState("Login");
    } else {
      setCurrentState("Sign Up");
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" ? (
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-800"
          required
        />
      ) : null}
      <input
        type="email"
        placeholder="Email"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-3 py-2 border border-gray-800"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>Forgot your Password</p>
        <p onClick={toggleCurrentState} className="cursor-pointer">
          {currentState === "Sign Up"
            ? "Login Here"
            : "Don't have account? Sign Up Here"}
        </p>
      </div>
      <button className="bg-black text-white px-8 py-2 mt-4 rounded-lg font-semibold">
        {currentState}
      </button>
    </form>
  );
};

export default Login;
