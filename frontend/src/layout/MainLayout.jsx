import Navbar from "../components/Navbar";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex h-screen w-full items-center justify-center bg-gray-900 text-white md:hidden">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Coming Soon</h1>
          <p className="text-gray-400">
            Nossa versão mobile está em desenvolvimento.
          </p>
        </div>
      </div>

      <div className="hidden md:flex h-screen ml-64">
        <Navbar />
        <div className="flex-1 flex flex-col">
          <Header />

          <main className="p-6 bg-gray-100 flex-1">{children}</main>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
