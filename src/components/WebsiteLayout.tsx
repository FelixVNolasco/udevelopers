import { Outlet } from "react-router";
import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import { ModalProvider } from "./providers/modal-provider";

function WebsiteLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <ModalProvider />
      <Footer />
    </>
  );
}

export default WebsiteLayout;
