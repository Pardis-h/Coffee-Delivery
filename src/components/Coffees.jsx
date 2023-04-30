import React from "react";
import { Link } from "react-router-dom";

function Coffees(props) {
  return (
    <section className="text-gray-600 body-font">
      <div className="container py-24 mx-auto">
        <h1 className="text-2xl font-poppins font-medium text-gray-800 dark:text-white md:text-3xl mb-8">
          Our Coffees :
        </h1>
        <div className="flex flex-wrap -m-4">
          <div className="lg:w-1/4 md:w-1/2 px-4 py-7 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  1
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  +
                </button>
              </div>
              <Link to='/products/coffee' className="px-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Details</Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4 py-7 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  1
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  +
                </button>
              </div>
              <Link to='/products/coffee' className="px-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Details</Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4 py-7 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  1
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  +
                </button>
              </div>
              <Link to='/products/coffee' className="px-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Details</Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4 py-7 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  1
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  +
                </button>
              </div>
              <Link to='/products/coffee' className="px-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Details</Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4 py-7 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  1
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  +
                </button>
              </div>
              <Link to='/products/coffee' className="px-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Details</Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4 py-7 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  1
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  +
                </button>
              </div>
              <Link to='/products/coffee' className="px-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Details</Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4 py-7 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  1
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  +
                </button>
              </div>
              <Link to='/products/coffee' className="px-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Details</Link>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 px-4 py-7 w-full">
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-cover object-center w-full h-full block"
                src="https://dummyimage.com/420x260"
              />
            </a>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                CATEGORY
              </h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">
                The Catalyzer
              </h2>
              <p className="mt-1">$16.00</p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <div className="flex h-8 items-stretch text-gray-600">
                <button className="flex items-center justify-center rounded-l-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  -
                </button>
                <div className="flex w-full items-center justify-center bg-gray-100 px-4 text-xs uppercase transition">
                  1
                </div>
                <button className="flex items-center justify-center rounded-r-md bg-gray-200 px-4 transition hover:bg-indigo-500 hover:text-white">
                  +
                </button>
              </div>
              <Link to='/products/coffee' className="px-6 py-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded">Details</Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Coffees;
