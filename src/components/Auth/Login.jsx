import { useState, useContext } from "react";

import { AuthContext } from "../../context/AuthProvider";

function Login() {
  const { users, setLoggedInUser, setIsLoggedIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin();
    setEmail("");
    setPassword("");
  };

  function handleLogin() {
    const matchedUser = users.find(
      (e) => e.email == email && e.password == password,
    );
    if (matchedUser) {
      console.log(matchedUser)
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      setIsLoggedIn(true);
      setLoggedInUser(matchedUser);
    } else {
      alert("Wrong Crendentials");
    }
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center ">
      <div className="flex justify-evenly items-center flex-col p-20 border-2 border-emerald-600 rounded-xl">
        <h1 className="text-white text-4xl font-bold">Login</h1>
        <form
          className=" flex flex-col item-center justify-center"
          onSubmit={submitHandler}
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="text-lg text-white outline-none border-2 rounded-full border-emerald-600 py-2 px-6 font-medium placeholder:text-grey-400 mt-4"
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
          <input
            value={password}
            required
            minLength={8}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="text-lg rounded-full text-white outline-none border-2 border-emerald-600 p-2 px-6 font-medium placeholder:text-grey-400 mt-4"
            type="password"
            placeholder="Enter password"
            name="password"
          />
          <button
            className="mt-7 font-semibold outline-none border-none hover:bg-emerald-700 bg-emerald-600 text-lg py-2 px-8 w-full rounded-3xl text-white placeholder:text-white "
            type="submit"
            name="Login"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
