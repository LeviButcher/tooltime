import { Link } from "@tanstack/react-router";
import {
  ClipboardType,
  Database,
  Home,
  Menu,
  Network,
  Table,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center p-4 text-white bg-gray-800 shadow-lg">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="p-2 rounded-lg transition-colors hover:bg-gray-700"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
        <h1 className="ml-4 text-xl font-semibold">
          <Link to="/">
            <img
              src="/tanstack-word-logo-white.svg"
              alt="TanStack Logo"
              className="h-10"
            />
          </Link>
        </h1>
      </header>

      <aside
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 text-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-xl font-bold">Navigation</h2>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg transition-colors hover:bg-gray-800"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="overflow-y-auto flex-1 p-4">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex gap-3 items-center p-3 mb-2 rounded-lg transition-colors hover:bg-gray-800"
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
          >
            <Home size={20} />
            <span className="font-medium">Home</span>
          </Link>

          {/* Demo Links Start */}

          <Link
            to="/demo/table"
            onClick={() => setIsOpen(false)}
            className="flex gap-3 items-center p-3 mb-2 rounded-lg transition-colors hover:bg-gray-800"
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
          >
            <Table size={20} />
            <span className="font-medium">TanStack Table</span>
          </Link>

          <Link
            to="/demo/tanstack-query"
            onClick={() => setIsOpen(false)}
            className="flex gap-3 items-center p-3 mb-2 rounded-lg transition-colors hover:bg-gray-800"
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
          >
            <Network size={20} />
            <span className="font-medium">TanStack Query</span>
          </Link>

          <Link
            to="/demo/drizzle"
            onClick={() => setIsOpen(false)}
            className="flex gap-3 items-center p-3 mb-2 rounded-lg transition-colors hover:bg-gray-800"
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
          >
            <Database size={20} />
            <span className="font-medium">Drizzle</span>
          </Link>

          <Link
            to="/demo/form/simple"
            onClick={() => setIsOpen(false)}
            className="flex gap-3 items-center p-3 mb-2 rounded-lg transition-colors hover:bg-gray-800"
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
          >
            <ClipboardType size={20} />
            <span className="font-medium">Simple Form</span>
          </Link>

          <Link
            to="/demo/form/address"
            onClick={() => setIsOpen(false)}
            className="flex gap-3 items-center p-3 mb-2 rounded-lg transition-colors hover:bg-gray-800"
            activeProps={{
              className:
                "flex items-center gap-3 p-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 transition-colors mb-2",
            }}
          >
            <ClipboardType size={20} />
            <span className="font-medium">Address Form</span>
          </Link>

          {/* Demo Links End */}
        </nav>
      </aside>
    </>
  );
}
