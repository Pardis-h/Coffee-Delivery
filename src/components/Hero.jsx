import React from "react";

function Hero(props) {
  return (
    <section className="text-gray-600 body-font mt-16">
      <div className="container mx-auto flex py-6 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-5/6 flex flex-col items-center text-center md:text-left md:items-start mb-16 md:mb-0">
          <h1 className="title-font text-2xl lg:text-4xl mb-4 font-medium text-gray-900">
            Lorem ipsum dolor sit amet
            <br className="hidden md:inline-block" /> consectetur adipisicing
            elit.
          </h1>
          <p className="text-gray-500 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quam
            ullam laborum, aliquam dignissimos officia ipsam voluptatum itaque
            necessitatibus ab nobis veritatis magni recusandae sapiente officiis
            totam explicabo. Voluptatibus, ab.
          </p>
          {/* <div>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Link1
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Link2
            </button>
          </div> */}
          <div className="flex flex-wrap ">
            <div className="flex items-center mb-3 sm:w-1/2 w-full py-4">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Lorem ipsum dolor sit amet
              </h2>
            </div>
            <div className="flex items-center mb-3 sm:w-1/2 w-full py-4">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Lorem ipsum dolor sit amet
              </h2>
            </div>
            <div className="flex items-center mb-3 sm:w-1/2 w-full py-4">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Lorem ipsum dolor sit amet
              </h2>
            </div>
            <div className="flex items-center mb-3 sm:w-1/2 w-full py-4">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="text-gray-900 text-lg title-font font-medium">
                Lorem ipsum dolor sit amet
              </h2>
            </div>
          </div>
        </div>
        <div className="w-5/6 lg:w-full lg:max-w-lg ml-3">
          <img
            className="rounded object-cover object-center"
            src="https://dummyimage.com/720x600"
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
