import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Tools } from './pages/Tools';
import { IndustryPage } from './pages/Industry';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { AboutUs, PrivacyPolicy, CookiePolicy, TermsConditions } from './pages/Legal';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/herramientas" element={<Tools />} />
          <Route path="/industria/:slug" element={<IndustryPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/privacidad" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/terminos" element={<TermsConditions />} />
          <Route path="*" element={<div className="text-center py-20">Página no encontrada.</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}
