import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useEffect } from 'react'

export default function Popup({ score, turn, onButtonClick}) {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
        onButtonClick()
    }

    function openModal() {
        setIsOpen(true)
    }

    useEffect(() => {
        if (turn ===  0) {
            openModal()
        }

    }, [score, turn])

    return (
        <>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full  max-w-sm transform overflow-hidden rounded-2xl bg-indigodark p-10 text-center align-middle shadow-3xl transition-all">
                                    <Dialog.Title
                                        as="h3" 
                                        className="text-4xl font-semibold tracking-wider leading-6 text-litered"
                                    >
                                        Wrong!
                                    </Dialog.Title>
                                    <div className="mt-3">
                                        <p className="text-xl tracking-wide text-lavblush">
                                            streak: {score}
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="text-md inline-flex justify-center rounded-md border border-transparent bg-lavblush px-4 py-2 font-medium  text-gray-900 active:bg-lavblush focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
