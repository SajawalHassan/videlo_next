import React from "react";

export default function InputField({
  Icon,
  type,
  placeholder,
  value,
  setValue,
  className,
}) {
  return (
    <div
      className={`flex items-center space-x-2 rounded-sm w-full bg-[#303030] p-2 text-white ${className}`}
    >
      <Icon className="h-6" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-grow bg-transparent outline-none"
        autoFocus={true}
      />
    </div>
  );
}
