export default function DashboardPage() {
    return (<div className="p-6 space-y-6">
        <h1 className="text-2xl font-semibold">
            Dashboard
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 bg-white rounded-lg shadow text-gray-800">Total Orders: 0</div>
            <div className="p-4 bg-white rounded-lg shadow text-gray-800">Pending: 0</div>
            <div className="p-4 bg-white rounded-lg shadow text-gray-800">Completed: 0</div>
            <div className="p-4 bg-white rounded-lg shadow text-gray-800">Canceled: 0</div>

        </div>
        <div className="p-4 bg-white rounded-lg shadow text-gray-800">
            <h2 className="text-xl font-medium mb-2">Recent Activity</h2>
        </div>
    </div>)
}