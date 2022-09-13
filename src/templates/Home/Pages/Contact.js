import React from "react";

export default function Contact() {
  return (
    <div className="relative bg-white ">
    {/* <div className="lg:absolute lg:inset-0">
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-24 w-full object-cover lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
          alt=""
        />
      </div>
    </div> */}
    <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2 ">
      <div className="lg:pr-8">
        <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:mt-12"
          style={{color:"#E96036"}}
          >CYBERSOFT LEARNING</h2>
          <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div className="sm:col-span-2">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                Họ & tên
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            {/* <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div> */}
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Điện thoại
                </label>
              </div>
              <div className="mt-1">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  aria-describedby="phone-description"
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex justify-between">
                <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                  Tôi có thể giúp gì cho bạn
                </label>
              </div>
              <div className="mt-1">
                <textarea
                  id="how-can-we-help"
                  name="how-can-we-help"
                  aria-describedby="how-can-we-help-description"
                  rows={4}
                  className="block w-full shadow-sm sm:text-sm focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                  defaultValue={''}
                />
              </div>
            </div>   
         
            <div className="text-right sm:col-span-2">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{backgroundColor:"#E96036"}}
              >                
                Đăng kí tư vấn
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  );
}
