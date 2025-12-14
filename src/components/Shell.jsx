import { NavLink, useLocation } from "react-router-dom";
import { Brain, Wand2, Gamepad2, BookOpen, Clock, Shield } from "lucide-react";

const nav = [
  { to: "/", label: "Home", icon: Brain },
  { to: "/thought", label: "Thought", icon: Wand2 },
  { to: "/world", label: "World", icon: Gamepad2 },
  { to: "/resources", label: "Resources", icon: BookOpen },
  { to: "/history", label: "History", icon: Clock },
  { to: "/safety", label: "Safety", icon: Shield },
];

export default function Shell({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <header className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-zinc-900 border border-zinc-800 grid place-items-center">
              <Brain className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-semibold leading-tight">MindScape</div>
              <div className="text-xs text-zinc-400 -mt-0.5">CBT • AI • Web • Game</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-zinc-400">
            <span className="px-2 py-1 rounded-full border border-zinc-800 bg-zinc-900/40">
              Route: {pathname}
            </span>
          </div>
        </header>

        <nav className="mt-5 grid grid-cols-3 sm:grid-cols-6 gap-2">
          {nav.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                [
                  "flex items-center justify-center gap-2 rounded-2xl px-3 py-2 text-sm border transition",
                  isActive
                    ? "bg-zinc-900 border-zinc-700 text-zinc-50"
                    : "bg-zinc-950 border-zinc-900 text-zinc-300 hover:bg-zinc-900/40 hover:border-zinc-800",
                ].join(" ")
              }
            >
              <Icon className="h-4 w-4" />
              <span className="hidden sm:inline">{label}</span>
            </NavLink>
          ))}
        </nav>

        <main className="mt-6">{children}</main>

        <footer className="mt-10 pb-6 text-xs text-zinc-500">
          ⚠️ MindScape is not a medical diagnosis tool. If you feel unsafe, seek professional help.
        </footer>
      </div>
    </div>
  );
}
