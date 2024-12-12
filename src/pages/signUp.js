import React, { useState } from "react";
import {  Input  } from "antd";
import { Link, useNavigate  } from "react-router-dom";

const SignUp = () => {
    const [model, setModel] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate()
    const handle = ()=>{
        console.log(model);  
        navigate("/login")      
    }

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-b from-blue-100 to-blue-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">

                <h2 className="text-2xl font-semibold mb-6 text-center text-blue-600">
                    Create an Account
                </h2>

                <Input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setModel({ ...model, userName: e.target.value })}
                    className="rounded-md mb-3 shadow-sm focus:ring-2 focus:ring-blue-400"
                    required
                />
                <Input
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setModel({ ...model, email: e.target.value })}
                    className="rounded-md mb-3 shadow-sm focus:ring-2 focus:ring-blue-400"
                    required
                />
                <Input.Password
                    placeholder="Password"
                    onChange={(e) => setModel({ ...model, password: e.target.value })}
                    className="rounded-md mb-3 shadow-sm focus:ring-2 focus:ring-blue-400"
                    required
                />
                <button
                    type="primary"
                    onClick={handle}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-md"
                >
                    Sign Up
                </button>

                <div className="text-center mt-4">
                    <div
                        href="/login"
                        className="text-blue-600 hover:text-blue-800 "
                    >
                        Already have an account? <Link className="hover:underline" to={"/login"}>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;