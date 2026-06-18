"use client"

import { useState } from "react"
import { Home, Package, List, Menu } from "lucide-react"

export default function Sidebar() {
    const [collapsed, setCollapsed] = useState(true)

    return (
        <aside
            className={`
        h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col items-center py-6 gap-6
        transition-all duration-300
        ${collapsed ? "w-20" : "w-64"}
      `}
        >
            <div className="w-full flex items-center justify-between px-4">
                {!collapsed && (
                    <div className="text-xl font-semibold text-white">FulfillFlow</div>
                )}

                <button
                    onClick={() => setCollapsed(!collapsed)}
                    className="w-10 h-10 flex items-center justify-center rounded-xl hover:bg-zinc-800 transition"
                >
                    <Menu size={20} />
                </button>
            </div>

            {!collapsed && (
                <div className="w-full px-4">
                    <div className="w-full h-12 rounded-2xl bg-zinc-800 flex items-center justify-center text-sm font-semibold">
                        Ru
                    </div>
                </div>
            )}

            {collapsed && (
                <div className="w-10 h-10 rounded-2xl bg-zinc-800 flex items-center justify-center text-sm font-semibold">
                    Ru
                </div>
            )}

            {/* Nav */}
            <nav className="flex flex-col gap-4 mt-4 w-full px-4">
                <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition">
                    <Home size={20} />
                    {!collapsed && <span className="text-white">Dashboard</span>}
                </button>

                <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition">
                    <Package size={20} />
                    {!collapsed && <span className="text-white">Orders</span>}
                </button>

                <button className="flex items-center gap-3 p-3 rounded-xl hover:bg-zinc-800 transition">
                    <List size={20} />
                    {!collapsed && <span className="text-white">Activity</span>}
                </button>
            </nav>
        </aside>
    )
}
