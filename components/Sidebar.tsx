"use client";

import Image from "next/image";
import { useState } from "react";
import { Home, Package, Clock, Settings, Menu } from "lucide-react";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={`
        h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col
        transition-all duration-300
        ${collapsed ? "w-16" : "w-64"}
      `}
    >
      {/* HEADER */}
      <div
        className={`
    relative flex border-b border-zinc-800 transition-all duration-300
    ${collapsed ? "flex-col items-center py-6 px-2 gap-4" : "flex-row items-center justify-between px-4 py-8"}
  `}
      >
        {/* LOGO */}
        {collapsed ? <Image
          src="/logo1.png"
          alt="FulfillFlow logo"
          width={collapsed ? 48 : 120}
          height={collapsed ? 48 : 120}
          className="opacity-90 transition-all duration-300"
        /> : null}

        {/* NAME (only expanded) */}
        {!collapsed && (
          <span className="text-xl font-semibold text-white">
            FulfillFlow
          </span>
        )}

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={`
                      flex items-center gap-3 text-zinc-400 cursor-pointer
                      transition-all duration-200 py-1 rounded-md
                      hover:bg-zinc-800 hover:text-white
                      ${collapsed ? "justify-center w-full px-0" : "px-2 py-1"}
                    `}
        >
          <Menu size={collapsed ? 30 : 20} />
        </button>
      </div>


      {/* NAVIGATION */}
      <nav className="flex flex-col gap-2 p-2">
        <SidebarItem collapsed={collapsed} icon={<Home />} label="Dashboard" />
        <SidebarItem collapsed={collapsed} icon={<Package />} label="Orders" />
        <SidebarItem collapsed={collapsed} icon={<Clock />} label="Activity Log" />
        <SidebarItem collapsed={collapsed} icon={<Settings />} label="Settings" />
      </nav>
    </aside>
  );
}

interface SidebarItemProps {
  collapsed: boolean;
  icon: React.ReactNode;
  label: string;
}


function SidebarItem({
  collapsed,
  icon,
  label }: SidebarItemProps) {
  return (
    <div
      className={`
        flex items-center gap-3 text-zinc-400 hover:text-white cursor-pointer
        transition-all duration-300 py-2 rounded-lg hover:bg-zinc-800
        ${collapsed ? "justify-center w-full" : ""}
      `}
    >
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  );
}
