/**
 * This is called a JSDoc reference. You don't have to do these, but they are
 * helpful in providing you with autocomplete in VSCode.
 * @param {import("react").InputHTMLAttributes<HTMLInputElement> & { label?: string }}
 * @returns {JSX.Element} 
 */
const Input = ({ label, id, ...props }) => {
    return (
        <div className="flex flex-col">
            {label ? <label data-testid="input-label" className="text-gray-600 text-sm mb-1" htmlFor={id}>{label}</label> : undefined}
            <input data-testid="input-input" className="placeholder-gray-500 border border-gray-300 rounded py-1 px-2" id={id} {...props} />
        </div>
    )
}

export default Input