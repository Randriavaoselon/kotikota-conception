import { useState } from 'react'

import Navbar from './components/Navbar'
import Home from './components/Home'
import ServiceDescription from './components/ServiceDescription'
import TitreDevenirKotikoteur from './components/TitreDevenirKotikoteur'
import DevenirKotikoteur from './components/DevenirKotikoteur'
import EtapeDevenirKotikoteur from './components/EtapeDevenirKotikoteur'
import TitreNosCagnottes from './components/TitreNosCagnottes'
import NosCagnottes from './components/NosCagnottes'
import Informations from './components/Informations'
import Footer from './components/Footer'
import CopyRight from './components/CopyRight'
import BoutonUp from './components/BoutonUp'
import KotiKotaModal from "./components/KotiKotaModal";
import Sidebar from "./components/Sidebar";

import './App.css'

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarType, setSidebarType] = useState("contact");
  const [isKotiKotaModalOpen, setKotiKotaModalOpen] = useState(false);

  const openSidebar = (type) => {
    setSidebarType(type);
    setSidebarOpen(true);
  };

  const closeSidebar = () => setSidebarOpen(false);

  const handleContactFromModal = () => {
    setKotiKotaModalOpen(false);
    openSidebar("contact");
  };

  const handleConnexionFromModal = () => {
    setKotiKotaModalOpen(false);
    openSidebar("auth");
  };

  return (
    <>
      <Navbar onOpenSidebar={openSidebar}/>

      <KotiKotaModal
        isOpen={isKotiKotaModalOpen}
        onClose={() => setKotiKotaModalOpen(false)}
        onContactClick={handleContactFromModal}
        onConnexionClick={handleConnexionFromModal}
      />

      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
        contentType={sidebarType}
      />

      <Home
        onOpenKotiKotaModal={() => setKotiKotaModalOpen(true)}
        onOpenSidebar={openSidebar}
      />
      <ServiceDescription ServiceOpenSideBarContact={openSidebar}/>
      <TitreDevenirKotikoteur/>
      <EtapeDevenirKotikoteur/>
      <DevenirKotikoteur/>
      <TitreNosCagnottes/>
      <NosCagnottes/>
      <Informations openSideBarConnexion={openSidebar}/>
      <Footer/>
      <CopyRight/>
      <BoutonUp/>
    </>
  )
}

export default App