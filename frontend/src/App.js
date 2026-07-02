import "@/App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LanguageProvider } from "@/context/LanguageContext";
import { Layout } from "@/components/Layout";

const Home         = lazy(() => import("@/pages/Home"));
const CenoteDiving = lazy(() => import("@/pages/CenoteDiving"));
const ReefDiving   = lazy(() => import("@/pages/ReefDiving"));
const DivingCourses= lazy(() => import("@/pages/DivingCourses"));
const Packages     = lazy(() => import("@/pages/Packages"));
const About        = lazy(() => import("@/pages/About"));
const FAQ          = lazy(() => import("@/pages/FAQ"));
const Contact      = lazy(() => import("@/pages/Contact"));

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Suspense fallback={<div className="min-h-screen bg-[#020B14]" />}>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/"               element={<Home />} />
                <Route path="/cenote-diving"  element={<CenoteDiving />} />
                <Route path="/reef-diving"    element={<ReefDiving />} />
                <Route path="/diving-courses" element={<DivingCourses />} />
                <Route path="/packages"       element={<Packages />} />
                <Route path="/about"          element={<About />} />
                <Route path="/faq"            element={<FAQ />} />
                <Route path="/contact"        element={<Contact />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
