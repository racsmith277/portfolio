import { Dialog, Transition } from "@headlessui/react";
import { Fragment, PropsWithChildren } from "react";
import { ArrowLeftIcon } from "../Icons";

interface FullScreenModalProps extends PropsWithChildren{
  isOpen: boolean;
  close: () => void;

}

export default function FullScreenModal({ isOpen, close, children }: FullScreenModalProps) {
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
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-1000 transform"
                enterFrom="translate-x-1/2"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="h-screen overflow-y-auto w-screen transform bg-white text-left align-middle shadow-xl transition-all">
                  <div
                    className={`w-screen border-y border-black bg-emerald-300 py-6`}
                  >
                    <button className="flex gap-3 text-white hover:text-black px-4" onClick={close}>
                      <ArrowLeftIcon  color={'#000'} />
                    <h2 className="font-outline text-center font-heading text-xl ">
                      BACK
                    </h2>
                    </button>
                  </div>
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
