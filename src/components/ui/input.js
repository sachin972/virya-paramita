import React from "react";

export function Input({
    placeholder,
    type = "text",
    required = false,
    className,
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            required={required}
            className={`border-gray-300 focus:ring-coral-500 focus:border-coral-500 rounded-md p-2 ${className}`}
        />
    );
}
