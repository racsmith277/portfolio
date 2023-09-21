"use client"
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import { ArrowLeftIcon } from "../Icons";

export interface DesktopModalProps extends PropsWithChildren{
  isOpen: boolean;
  close: () => void;
  dark?: boolean;

}

export default function DesktopModal({ isOpen, close, dark=false, children }: DesktopModalProps) {
  const bg = dark ? `bg-[#02022D]` : 'bg-white'
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={close}>
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
            <div className="flex min-h-full items-center justify-center text-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className={`w-full max-w-5xl transform overflow-hidden ${bg} p-6 text-left align-middle shadow-xl transition-all`}>
              
                  <div className="overflow-y-scroll">
                    {children}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
