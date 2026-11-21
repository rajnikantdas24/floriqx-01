import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import { VideoPopupProvider } from './context/VideoPopupContext';
import Home from './pages/Home';
import HomeOnePage from './pages/HomeOnePage';
import About from './pages/About';
import Solution from './pages/Solution';
import CaseStudy from './pages/CaseStudy';
import Resource from './pages/Resource';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <VideoPopupProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="index-onepage" element={<HomeOnePage />} />
            <Route path="about" element={<About />} />
            <Route path="solution" element={<Solution />} />
            <Route path="learn" element={<Resource />} />
            <Route path="eBooks" element={<CaseStudy />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </VideoPopupProvider>
    </BrowserRouter>
  );
}
