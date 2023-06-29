import { useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";

function Accordion({ title, children, }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mb-2">
      <button
        className="flex flex-1 items-center justify-between w-full px-4 py-2 min-h-[46px] bg-light hover:brightness-95 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium text-xl text-left leading-[26px] text-body">
          {title}
        </span>

        <HiOutlineChevronDown
          size={24}
          color="#006DB7"
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
