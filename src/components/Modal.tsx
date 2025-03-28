'use client';

import { useEffect } from 'react';

import { X } from 'react-bootstrap-icons';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: Readonly<ModalProps>) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/50">
      <div className="flex flex-col bg-white rounded-md shadow-customize overflow-auto w-full m-1 p-2 md:w-[80%] md:p-5">
        <button
          onClick={onClose}
          className="relative flex justify-end p-2 text-gray-500 text-xl hover:text-gray-400"
        >
          <X />
        </button>
        <div className="contentStyle">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
