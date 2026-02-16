import { Link } from "react-router-dom";

const navItems = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Analytics", path: "/analytics" },
  { label: "Documents", path: "/documents" },
  { label: "Settings", path: "/settings" },
  { label: "Query", path: "/query" },
];

function Sidebar() {
  return (
    <aside className="w-64 border-r h-full px-4 py-6">
      <nav className="space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
