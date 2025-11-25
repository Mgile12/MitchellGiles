import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppLayout, HeaderNav, Footer } from './components';
import ContactModal from './components/ContactModal';
import HomePage from './pages/HomePage';
import CaseStudiesPage from './pages/CaseStudiesPage';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppLayout>
      <HeaderNav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-studies/elite-football-agency" element={<CaseStudiesPage />} />
        </Routes>
      </main>
      <Footer onOpenModal={() => setIsModalOpen(true)} />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AppLayout>
  );
}

export default App;
