import React from 'react';
import { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import axios from "../Axios/axios.js"
import TokenContext from '../context/TokenContext.js';
function Register() {
    const [formData, setFormData] = useState({})
    const {userToken, tokenDispatch, userDispatch } = useContext(TokenContext);
    const [error, setError] = useState();
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post("/user/register", formData)
            tokenDispatch({ type: "SET_TOKEN", payload: result.data.token })
            userDispatch({ type: "SET_USER", payload: result.data.user })
            localStorage.setItem("authToken", JSON.stringify(result.data.token))
        } catch (error) {
            console.log(error);
            setError({ message: error.response.data.message })
        }
    }
    return (
        <div>
  {userToken && <Navigate to="/" />}
  <section className="register-container">
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <form method='post' onSubmit={handleSubmit} className="flex flex-col w-full max-w-md px-4 py-8 bg-white shadow-md rounded-lg">
        <div>
          {error && (
            <div className="mb-4 bg-red-200 text-center p-4 rounded-md border border-green-600">
              {error.message}
            </div>
          )}
        </div>
        <div className="mb-6">
                            
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name='name'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Full name"
                                    onChange={handleChange} />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="text"
                                    name='email'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    onChange={handleChange} />                                </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    name='password'
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    onChange={handleChange} />
                            </div>
                            <div className="flex justify-between items-center mb-6">
                            </div>
                            <button type="submit" className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                Register
                            </button> 
        </div>
        
      </form>
    </div>
  </section>
</div>

    );
}

export default Register;