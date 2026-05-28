"use client";

import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-5">
        <h1 className="text-3xl font-bold text-orange-500 mb-10">
          VedaAI
        </h1>

        <nav className="space-y-3">
          <Link
            href="/"
            className="block px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition"
          >
            Dashboard
          </Link>

          <Link
            href="/create"
            className="block px-4 py-3 rounded-xl hover:bg-orange-50 hover:text-orange-500 transition"
          >
            Create Assignment
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4">
        {children}
      </main>
    </div>
  );
}