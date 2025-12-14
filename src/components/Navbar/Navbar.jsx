import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { label: "Accueil", link: "/", icon: "" },
  { label: "Techniques TCC", link: "/techniques", icon: "" },
  { label: "À Propos", link: "/about", icon: "" },
];

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b-2 border-blue-200 py-3 px-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <Link to="/" className="text-xl font-bold text-black">MINDSCAPE</Link>
        
        <ul className="hidden md:flex gap-6 text-black">
          {menuItems.map((item, index) => (
            <li key={index} className="text-sm hover:text-blue-600 transition-colors">
              <Link to={item.link} className="font-medium">{item.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          <Link to="/auth" className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm font-medium">
            Se Connecter
          </Link>
          <Link to="/auth" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
            S'inscrire
          </Link>
        </div>
      </div>
    </nav>
  );
}
