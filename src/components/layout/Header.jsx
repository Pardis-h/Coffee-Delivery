import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex items-center justify-between ">
        <Link to="/" className="flex items-center">
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg> */}
          <span className="w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 68 64"
              id="coffee-location"
            >
              <g data-name="Outline">
                <circle cx="32" cy="57" r="1"></circle>
                <path fill="#6466f1" d="M32 62c13.686 0 30-1.475 30-8.5 0-4.427-6.512-7.156-19.367-8.123a23 23 0 1 0-21.266 0C8.512 46.344 2 49.073 2 53.5 2 60.525 18.314 62 32 62ZM11 25a21 21 0 1 1 29.72 19.1 1.021 1.021 0 0 0-.292.2l-7.77 7.79a.993.993 0 0 1-1.266.046l-7.82-7.836a1.021 1.021 0 0 0-.292-.2A21.062 21.062 0 0 1 11 25Zm12.667 22.233 1.943 1.946C19.329 49.532 11 50.555 11 53.5c0 3.328 10.618 4.2 16.948 4.429h.036a1 1 0 0 0 .035-2C18.445 55.588 14 54.214 13.107 53.5c.879-.7 5.19-2.036 14.413-2.408l2.5 2.51a2.964 2.964 0 0 0 1.956.732 3.093 3.093 0 0 0 2.043-.779l2.458-2.463c9.223.372 13.537 1.708 14.416 2.408-.9.714-5.337 2.088-14.91 2.43a1 1 0 0 0 .035 2h.036C42.383 57.7 53 56.828 53 53.5c0-2.944-8.328-3.968-14.609-4.321l1.942-1.946C52.834 47.947 60 50.223 60 53.5c0 4.009-10.729 6.5-28 6.5S4 57.509 4 53.5c0-3.277 7.166-5.553 19.667-6.267Z"></path>
                <path fill="#6466f1" d="M51 25a19 19 0 1 0-19 19 19.021 19.021 0 0 0 19-19Zm-36 0a17 17 0 1 1 17 17 17.019 17.019 0 0 1-17-17Z"></path>
                <path fill="#6466f1" d="M45.5 26.5V22a1 1 0 0 0-1-1h-21a1 1 0 0 0-1 1v1.9c-2.331.06-4.062 1.175-4.433 2.95-.437 2.1 1.2 4.994 7.02 6.9A11.493 11.493 0 0 0 45.5 26.5zm-25.475.76c.143-.686 1.025-1.293 2.475-1.35v.59a11.434 11.434 0 0 0 .889 4.427c-2.553-1.248-3.569-2.679-3.364-3.667zm4.475-.76V23h19v3.5a9.5 9.5 0 0 1-19 0zm4.521-9.2a3.028 3.028 0 0 0 1.442 2.025 1 1 0 0 0 1.144-1.64c-.512-.358-.595-.587-.607-.669-.045-.308.433-.9.815-1.38a3.886 3.886 0 0 0 1.236-2.92 3.047 3.047 0 0 0-1.46-2.033 1 1 0 1 0-1.139 1.644c.363.251.595.5.62.677.045.308-.432.9-.816 1.38a3.9 3.9 0 0 0-1.235 2.916zm4.928 0a3.031 3.031 0 0 0 1.444 2.025 1 1 0 1 0 1.144-1.64c-.514-.358-.6-.587-.608-.669-.044-.308.432-.9.816-1.38a3.892 3.892 0 0 0 1.235-2.92 3.042 3.042 0 0 0-1.459-2.033 1 1 0 1 0-1.139 1.644c.363.251.595.5.62.677.044.308-.433.9-.816 1.38a3.9 3.9 0 0 0-1.237 2.916z"></path>
              </g>
            </svg>
          </span>
          <h1 className="ml-1 text-xl">Coffee Delivery</h1>
        </Link>
        <nav className="hidden md:flex md:ml-auto gap-3 items-center text-base justify-center">
          <Link to="/my-account" className="mr-5 hover:text-gray-900">
            My Profile
          </Link>
          <Link to="/contact-us" className="mr-5 hover:text-gray-900">
            Contact Us
          </Link>
        </nav>
        <Link to="/checkout" className="relative pl-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 bg-indigo-200 p-2.5 rounded"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="rounded-full text-white bg-indigo-500 absolute -top-2 -right-2 px-2 py-1 text-xs font-extralight">
            2
          </span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
