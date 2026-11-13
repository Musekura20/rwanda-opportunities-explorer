
function Button({ children, onClick, type = "button", variant = "primary" }) {

  const buttonStyles = {
    primary: "bg-amber-900 text-white hover:bg-amber-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-600 text-white hover:bg-red-700"
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition ${buttonStyles[variant]} focus:outline-none focus:ring-2 focus:ring-amber-500`}
    >
      {children}
    </button>
  )
}

export default Button