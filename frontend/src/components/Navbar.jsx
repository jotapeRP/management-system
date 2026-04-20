import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white p-5 fixed h-screen left-0 top-0">
      <h2 className="text-xl font-bold mb-8">Empresa Manager</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/">Dashboard</Link>
        <Link to="/clients">Clientes</Link>
        <Link to="/services">Serviços</Link>
      </nav>
    </aside>
  );
};

export default Navbar;
