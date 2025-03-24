import React from 'react';

function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border border-slate-400 rounded-md p-6 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative">
        <h1 className="text-black font-bold text-center mb-6">SignUp</h1>
        <form className="flex flex-col space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
            <input type="text" id="name" placeholder="Your Name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
            <input type="email" id="email" placeholder="Your Email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Your Password</label>
            <input type="password" id="password" placeholder="Your Password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"/>
          </div>
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
            <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-900">Remember me</label>
          </div>
          <button  className="bg-green-950 text-white py-2 px-4 rounded-sm transition-all duration-300 ease-in-out hover:bg-green-400 hover:text-black font-semibold hover:shadow-lg hover:shadow-green-400/50"
  type="submit">Let's Go!</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;