import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useRef, type ReactNode } from "react";
import {
  HiOutlineExclamation,
  HiOutlineInformationCircle,
  HiOutlinePencilAlt,
} from "react-icons/hi";
import { Button } from "../button";
import { Icon } from "../icon";

export interface IModalProps {
  title: string;
  variant?: "error" | "edit" | "info";
  isOpen?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  onSubmit?: () => void;
  "data-cy"?: string;
}

export const Modal: React.FC<IModalProps> = ({
  title,
  variant = "info",
  isOpen = false,
  children,
  onClose = () => null,
  onSubmit,
  "data-cy": dataCy = "modal",
}: IModalProps) => {
  const Overlay = (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-100"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {/* OVERLAY */}
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-lg" />
    </Transition.Child>
  );

  const completeButtonRef = useRef(null);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          onClose={onClose}
          initialFocus={completeButtonRef}
        >
          {Overlay}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center text-center sm:items-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-100"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="modal-box rounded-t-box sm:rounded-box w-full rounded-b-none text-left"
                  data-cy={dataCy}
                >
                  <label className="btn btn-sm btn-circle absolute right-2 top-2" onClick={onClose}>
                    <Icon variant="x" className="h-4 w-4" />
                  </label>
                  <div className="items-center sm:flex">
                    {variant === "error" ? (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                        <HiOutlineExclamation className="h-6 w-6 text-red-600" />
                      </div>
                    ) : variant === "info" ? (
                      <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                        <HiOutlineInformationCircle className="h-6 w-6 text-blue-600" />
                      </div>
                    ) : (
                      variant === "edit" && (
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:mr-4 sm:h-10 sm:w-10">
                          <HiOutlinePencilAlt className="h-6 w-6 text-green-600" />
                        </div>
                      )
                    )}
                    <Dialog.Title
                      as="h3"
                      className=" mt-4 text-center  text-xl font-medium leading-6 sm:mt-0 "
                    >
                      {title}
                    </Dialog.Title>
                  </div>
                  {Boolean(children) && <div className="mt-3">{children}</div>}
                  {Boolean(onSubmit) && (
                    <div className="mt-3 grid gap-2 sm:flex sm:flex-row-reverse ">
                      {onSubmit && (
                        <Button variant="primary" onClick={onSubmit}>
                          Submit
                        </Button>
                      )}
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

Modal.defaultProps = { variant: "info" };
