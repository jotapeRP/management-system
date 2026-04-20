import Navbar from "../components/Navbar";
import Header from "../components/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex h-screen ml-64">
      <Navbar />
      <div className="flex-1 flex flex-col">
        <Header />

        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
