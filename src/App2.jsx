import { Routes, Route, Navigate } from "react-router-dom";
import Shell from "./components/Shell.jsx";
import Home from "./pages/Home.jsx";
import Thought from "./pages/Thought.jsx";
import World from "./pages/World.jsx";
import Resources from "./pages/Resources.jsx";
import History from "./pages/History.jsx";
import Safety from "./pages/Safety.jsx";

export default function App() {
  return (
    <Shell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thought" element={<Thought />} />
        <Route path="/world" element={<World />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/history" element={<History />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Shell>
  );
}
