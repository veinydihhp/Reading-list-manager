
const statusColors = {
  "To Read": "bg-blue-400",
  Reading: "bg-yellow-400",
  Completed: "bg-green-500",
};

const StatusBadge = ({ status }) => (
  <span
    className={`inline-block px-3 py-1 text-xs rounded-full text-white font-semibold ${
      statusColors[status] || "bg-gray-300"
    }`}
  >
    {status}
  </span>
);

export default StatusBadge;
