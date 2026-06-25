const statusStyles = {
    pending: "bg-yellow-500/20 text-yellow-400",
    completed: "bg-green-500/20 text-green-400",
    canceled: "bg-red-500/20 text-red-400"
}

export default function StatusBadge({ status }: { status: string }) {
    return (<span
        className={`px-2 py-1 rounded-md text-xs ${statusStyles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>)
}
