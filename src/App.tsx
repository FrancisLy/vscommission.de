import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Advertisers from "@/pages/Advertisers";
import AdvertiserSolutions from "@/pages/AdvertiserSolutions";
import AdvertiserServices from "@/pages/AdvertiserServices";
import Publishers from "@/pages/Publishers";
import PublisherTypesPage from "@/pages/PublisherTypesPage";
import PublisherRegister from "@/pages/PublisherRegister";
import Brands from "@/pages/Brands";
import About from "@/pages/About";
import Resources from "@/pages/Resources";
import Blog from "@/pages/Blog";
import CaseStudiesPage from "@/pages/CaseStudiesPage";
import Contact from "@/pages/Contact";
import Impressum from "@/pages/legal/Impressum";
import Datenschutz from "@/pages/legal/Datenschutz";
import AGB from "@/pages/legal/AGB";
import CookiePolicy from "@/pages/legal/CookiePolicy";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Advertiser Routes */}
          <Route path="/fuer-werbetreibende" element={<Advertisers />} />
          <Route path="/fuer-werbetreibende/loesungen" element={<AdvertiserSolutions />} />
          <Route path="/fuer-werbetreibende/services" element={<AdvertiserServices />} />

          {/* Publisher Routes */}
          <Route path="/fuer-publisher" element={<Publishers />} />
          <Route path="/fuer-publisher/typen" element={<PublisherTypesPage />} />
          <Route path="/fuer-publisher/registrierung" element={<PublisherRegister />} />

          {/* Brands */}
          <Route path="/marken-programme" element={<Brands />} />

          {/* About */}
          <Route path="/ueber-uns" element={<About />} />

          {/* Resources */}
          <Route path="/ressourcen" element={<Resources />} />
          <Route path="/ressourcen/blog" element={<Blog />} />
          <Route path="/ressourcen/case-studies" element={<CaseStudiesPage />} />

          {/* Contact */}
          <Route path="/kontakt" element={<Contact />} />

          {/* Legal */}
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/cookie-richtlinie" element={<CookiePolicy />} />

          {/* 404 */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
