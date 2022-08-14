import React from "react";

export default function InputField({
  Icon,
  type,
  placeholder,
  value,
  setValue,
}) {
  return (
    <div className="flex items-center space-x-2 w-full bg-[#303030] p-2 text-white">
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
