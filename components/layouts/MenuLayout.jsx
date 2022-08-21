import React, { useRef } from "react";
import IconButton from "../IconButton";

import { XIcon } from "@heroicons/react/outline";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

export default function MenuLayout({
  children,
  setMenu,
  className,
  headerText,
}) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, setMenu);

  return (
    <div
      className={`${className} bg-[#353535] rounded-[10px]  pb-2 px-2`}
      ref={wrapperRef}
    >
      <div className="relative pt-2">
        <div className="absolute top-0 flex items-center justify-between w-full py-2 pr-2">
          <IconButton
            Icon={XIcon}
            onClick={() => setMenu(false)}
            className="rounded-lg"
          />
          <h1 className="text-white text-end text-xl ">{headerText}</h1>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center mt-2 h-full">
        {children}
      </div>
    </div>
  );
}
