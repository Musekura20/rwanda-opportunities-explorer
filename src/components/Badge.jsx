
function Badge({ children, variant = "default" }) {

  const badgeStyles = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-800",
    warning: "bg-amber-100 text-amber-800",
    danger: "bg-red-100 text-red-800",
    info: "bg-purple-100 text-purple-800"
  }

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeStyles[variant]}`}
    >
      {children}
    </span>
  )
}

export default Badge