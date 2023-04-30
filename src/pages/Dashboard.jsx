import React from "react";

function Dashboard(props) {
  return (
    <section className="container mx-auto mt-12 mb-6 py-6 px-4">
      <h1 className="ml-5 font-bold text-lg mb-3 pb-3">Dashboard</h1>
      <div className="flex">
        <ul className="mr-4 flex list-none flex-col flex-wrap pl-0 max-w-lg rounded shadow">
            <li className="flex-grow">
                <a
                    href="#tabs-home03"
                    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400">
                    Profile
                </a>
            </li>
            <li className="flex-grow">
                <a
                    href="#tabs-home03"
                    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400">
                    Address
                </a>
            </li>
            <li className="flex-grow">
                <a
                    href="#tabs-home03"
                    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400">
                    Change Password
                </a>
            </li>
            <li className="flex-grow">
                <a
                    href="#tabs-home03"
                    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400">
                    Orders
                </a>
            </li>
            <li className="flex-grow">
                <a
                    href="#tabs-home03"
                    className="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400">
                    Logout
                </a>
            </li>
        </ul>
        <div className="shadow flex-grow p-6">
            <div className="opacity-100 transition-opacity duration-150 ease-linear ">
            Tab 1 content
            </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
