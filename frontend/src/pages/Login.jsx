import { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Log In");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800 " />
      </div>
      {currentState === "Log In" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}

      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="EXAMPLE@MAIL.COM"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>Forgot Password?</p>
        {currentState === "Log In" ? (
          <button
            type="button"
            className="text-sm font-medium text-gray-800 hover:text-gray-900"
            onClick={() => setCurrentState("Sign Up")}
          >
            Sign Up
          </button>
        ) : (
          <button
            type="button"
            className="text-sm font-medium text-gray-800 hover:text-gray-900"
            onClick={() => setCurrentState("Log In")}
          >
            Log In
          </button>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Log In" ? "Sign In" : "Log In"}
      </button>
    </form>
  );
};

export default Login;
