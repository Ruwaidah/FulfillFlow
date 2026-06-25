import StatusBadge from "@/components/StatusBadge";

export default function OrdersPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold text-white mb-6">
                Orders
            </h1>
            <div className="flex gap-3 mb-4">
                <button className="px-4 py-2 rounded-lg lg-zinc-800 text-zinc-300
                hover:bg-zinc-700">
                    All
                </button>
                <button className="px-4 py-2 rounded-lg lg-zinc-800 text-zinc-300
                hover:bg-zinc-700">
                    Pending
                </button>
                <button className="px-4 py-2 rounded-lg lg-zinc-800 text-zinc-300
                hover:bg-zinc-700">
                    Completed
                </button>
                <button className="px-4 py-2 rounded-lg lg-zinc-800 text-zinc-300
                hover:bg-zinc-700">
                    Canceled
                </button>
            </div>
            <input
                type="text"
                placeholder="Search orders..."
                className="w-full px-4 py-2 mb-1 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 
                focus:outline-none 
                focus:border-blue-500"
            />
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
                <table className="w-full text-left">
                    <thead className="bg-zinc-800 text-zinc-400 text-sm">
                        <tr>
                            <th className="py-3 px-4">
                                Order ID
                            </th>
                            <th className="py-3 px-4">
                                Customers
                            </th>
                            <th className="py-3 px-4">
                                Status
                            </th>
                            <th className="py-3 px-4">
                                Date
                            </th>
                            <th className="py-3 px-4">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-zinc-300 text-sm">
                        <tr className="border-t border-zinc-800 hover:bg-zinc-800/50 transition">
                            <td className="py-3 px-4">
                                #12345
                            </td>
                            <td className="py-3 px-4">
                                Ru AL
                            </td>
                            <td className="py-3 px-4">
                                <StatusBadge status="pending" />
                            </td>
                            <td className="py-3 px-4">
                                Jun 24, 2026
                            </td>
                            <td className="py-3 px-4">
                                <button className="text-blue-400 hover:underline">
                                    View
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="flex justify-end mt-4 gap-2">
                <button className="px-3 py-1 rounded bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
                    Prev
                </button>
                <button className="px-3 py-1 rounded bg-zinc-800 text-zinc-400 hover:bg-zinc-700">
                    Next
                </button>
            </div>
        </div>
    )
}


