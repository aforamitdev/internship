import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";

function Login() {
  const [number, setNumber] = useState("");
  const { login, dispatch } = useContext(AppContext);
  return (
    <div className='flex items-center px-2 space-x-2'>
      <input
        type='text'
        className=' px-2 py-2 border border-solid border-gray-500'
        onChange={(e) => setNumber(e.target.value)}
      />
      <div
        className='bg-gray-500 p-2 cursor-pointer'
        onClick={() => login(dispatch, number)}
      >
        SUBMIT
      </div>
    </div>
  );
}

export default Login;
