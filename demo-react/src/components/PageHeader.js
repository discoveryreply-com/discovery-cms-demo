import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

export default function PageHeader() {
    return (
        <Disclosure
            as="nav"
            className="bg-white fixed w-full top-0 tracking-[.14em] text-xs shadow-md z-40 text-gray-600 h-16"
        >
            {({ open }) => (
                <>
                    <div className="max-w-full mx-auto px-2 sm:px-4 lg:px-4">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="flex">
                                <div className="flex-shrink-0">
                                    <a className="flex justify-center flex-wrap content-center" href="#">
                                        <img src="/logoReply.png" className="w-12" alt="" />
                                    </a>
                                </div>
                                <div className="flex-grow flex flex-wrap content-center h-full mt-4">
                                    <div className="mr-3 sm:mr-8 sm:ml-8 hidden xl:block">
                                        <Link to={''}>Home</Link>
                                    </div>
                                    <div className="mr-3 sm:mr-8 hidden xl:block">
                                        <Link to={''}>Explore</Link>
                                    </div>
                                    <div className="mr-3 sm:mr-8 hidden xl:block">Support</div>
                                </div>
                            </div>

                            <div className="flex xl:hidden">
                                {/* Mobile menu button */}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md ">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <div className="block">
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </div>
                                    ) : (
                                        <div className="block">
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4 6h16M4 12h16M4 18h16"
                                                />
                                            </svg>
                                        </div>
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="hidden lg:block lg:ml-4">
                                <div className="flex items-center">
                                    {/* Profile dropdown */}
                                    <Menu as="div" className=" relative flex-shrink-0">
                                        <div>
                                            <Menu.Button className="rounded-full flex text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                <span className="sr-only">Open user menu</span>
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        ></Transition>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="xl:hidden bg-white shadow-md">
                        <div className="px-8 pt-2 pb-3 space-y-1 w-full">
                            <div className="pt-3">
                                <Link to={''}>Home</Link>
                            </div>
                            <div className="pt-3">
                                <Link to={''}>Explore</Link>
                            </div>
                            <div className="pt-3">Support</div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}
