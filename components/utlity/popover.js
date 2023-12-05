import React from 'react';
import { Popover } from '@headlessui/react';
import Image from 'next/image';

const ReusablePopover = ({ buttonText, images }) => {
  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button
            className="inline-block px-4 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            {buttonText}
          </Popover.Button>

          <Popover.Panel
            className={`${open ? 'block' : 'hidden'} absolute z-10 bg-white p-4 shadow-md`}
          >
            <div className="grid grid-cols-3 gap-4">
              {images.map((image, index) => (
                <div key={index} className="aspect-w-1 aspect-h-1">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              ))}
            </div>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};

export default ReusablePopover; 