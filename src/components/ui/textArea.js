export function Textarea({
    placeholder,
    rows = 4,
    required = false,
    className,
}) {
    return (
        <textarea
            placeholder={placeholder}
            rows={rows}
            required={required}
            className={`border-gray-300 focus:ring-coral-500 focus:border-coral-500 rounded-md p-2 ${className}`}
        />
    );
}
