import React from "react";
const Auth = ()=>{
    
    return (
        <div className="flex items-center bg-white min-h-screen">
            <div className="container mx-auto px-6 py-6">
            <div className="flex flex-col lg:flex-row rounded-xl shadow-xl overflow-hidden">
                {/* left side */}
                <div className="w-full lg:w-1/2 p-12">
                <div className="flex flex-col">
                    <h3 className="text-3xl text-gray-700 mb-2 font-bold">Welcome back</h3>
                    <p className="text-gray-600">Login to your account</p>
                    {/* Authentication form */}
                </div>
                </div>
                {/* right side banner */}
                <div className="w-full lg:w-1/2">
                </div>
            </div>
             </div>
        </div>
    )
}

export default Auth;