export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded dark:bg-primary border-gray-300 dark:border-gray-700 text-customGray2 shadow-sm focus:ring-indigo dark:focus:ring-customWhite dark:focus:ring-offset-gray-800 ' +
                className
            }
        />
    );
}
