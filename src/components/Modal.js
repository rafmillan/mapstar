import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function Modal({currentStreak, allTimeHigh}) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    return (
        <>
            <div className="flex justify-center align-middle">
                <button
                    type="button"
                    onClick={openModal}
                    className=""
                >
                    <div className="mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M5.166 2.621v.858c-1.035.148-2.059.33-3.071.543a.75.75 0 00-.584.859 6.753 6.753 0 006.138 5.6 6.73 6.73 0 002.743 1.346A6.707 6.707 0 019.279 15H8.54c-1.036 0-1.875.84-1.875 1.875V19.5h-.75a2.25 2.25 0 00-2.25 2.25c0 .414.336.75.75.75h15a.75.75 0 00.75-.75 2.25 2.25 0 00-2.25-2.25h-.75v-2.625c0-1.036-.84-1.875-1.875-1.875h-.739a6.706 6.706 0 01-1.112-3.173 6.73 6.73 0 002.743-1.347 6.753 6.753 0 006.139-5.6.75.75 0 00-.585-.858 47.077 47.077 0 00-3.07-.543V2.62a.75.75 0 00-.658-.744 49.22 49.22 0 00-6.093-.377c-2.063 0-4.096.128-6.093.377a.75.75 0 00-.657.744zm0 2.629c0 1.196.312 2.32.857 3.294A5.266 5.266 0 013.16 5.337a45.6 45.6 0 012.006-.343v.256zm13.5 0v-.256c.674.1 1.343.214 2.006.343a5.265 5.265 0 01-2.863 3.207 6.72 6.72 0 00.857-3.294z" clipRule="evenodd" />
                        </svg>
                    </div>
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="fixed inset-0 z-10"
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-50" />
                    </Transition.Child>
                    <div className="mt-60 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0" />
                        </Transition.Child>

                        {/* This element is to trick the browser into centering the modal contents. */}
                        <span
                            className="inline-block h-screen align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>
                        <Transition.Child
                            as={Fragment}
                            enter= 'transform transition ease-in-out duration-500 sm:duration-700'
                            enterFrom= 'translate-y-full'
                            enterTo= 'translate-y-0'
                            leave= 'transform transition ease-in-out duration-500 sm:duration-700'
                            leaveFrom= 'translate-y-0'
                            leaveTo= 'translate-y-full'
                        >
                            <div className="h-screen inline-block w-screen p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-bg-gray shadow-xl rounded-xl">
                                <div className="-mt-3 -mx-3 -mb-3 flex justify-end">
                                    <button
                                        type="button"
                                        className=""
                                        onClick={closeModal}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#F3E8EE" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                </div>
                                <Dialog.Title
                                    as="h3"
                                    className="text-2xl font-medium text-lavblush"
                                >
                                    statistics
                                </Dialog.Title>
                                <div className="">
                                    <div className="grid grid-cols-2 text-lavblush py-5">
                                        <div className="grid grid-rows-2">
                                            <div className="text-6xl flex justify-center">
                                                {currentStreak}
                                            </div>
                                            <div className="text-md flex justify-center">
                                                current streak
                                            </div>
                                        </div>
                                        <div className="grid grid-rows-2">
                                            <div className="text-6xl flex justify-center">
                                                {allTimeHigh}
                                            </div>
                                            <div className="text-md flex justify-center">
                                                all time high
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
