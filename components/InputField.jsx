import React from "react";

export default function InputField({
  type,
  placeholder,
  value,
  setValue,
  Icon,
  onBlur,
}) {
  return (
    <div className="flex items-center space-x-2 bg-[#424242] w-full p-2 rounded-md text-white focus-within:border focus-within:border-blue-500">
      <Icon className="h-6" />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-grow text-white bg-transparent outline-none pl-1"
        onBlur={() => onBlur()}
      />
    </div>
  );
}
