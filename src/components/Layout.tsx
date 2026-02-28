import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Rocket, ChevronDown } from 'lucide-react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-bottom border-slate-100">
        <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-900 rounded-xl flex items-center justify-center text-white group-hover:bg-emerald-500 transition-colors">
              <Rocket size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-indigo-950">BizCreator</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({ isActive }) => `text-sm font-medium hover:text-emerald-600 transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-600'}`}>Inicio</NavLink>
            <NavLink to="/herramientas" className={({ isActive }) => `text-sm font-medium hover:text-emerald-600 transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-600'}`}>Herramientas</NavLink>
            
            <div className="relative group">
              <button className="text-sm font-medium text-slate-600 hover:text-emerald-600 flex items-center gap-1">
                Industrias <ChevronDown size={14} />
              </button>
              <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-white border border-slate-100 shadow-xl rounded-2xl p-4 w-56 grid gap-2">
                  <Link to="/industria/ropa" className="text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">Ropa</Link>
                  <Link to="/industria/restaurantes" className="text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">Restaurantes</Link>
                  <Link to="/industria/tiendas-online" className="text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">Tiendas Online</Link>
                  <Link to="/industria/criptomonedas" className="text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">Criptomonedas</Link>
                  <Link to="/industria/dropshipping" className="text-sm p-2 hover:bg-slate-50 rounded-lg transition-colors">Dropshipping</Link>
                </div>
              </div>
            </div>

            <NavLink to="/blog" className={({ isActive }) => `text-sm font-medium hover:text-emerald-600 transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-600'}`}>Blog</NavLink>
            <NavLink to="/sobre-nosotros" className={({ isActive }) => `text-sm font-medium hover:text-emerald-600 transition-colors ${isActive ? 'text-emerald-600' : 'text-slate-600'}`}>Nosotros</NavLink>
            
            <Link to="/herramientas" className="bg-indigo-900 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-lg shadow-indigo-900/20">
              Empieza Gratis
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 space-y-4 shadow-xl">
            <Link to="/" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
            <Link to="/herramientas" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Herramientas</Link>
            <div className="space-y-2 pl-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Industrias</p>
              <Link to="/industria/ropa" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Ropa</Link>
              <Link to="/industria/restaurantes" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Restaurantes</Link>
              <Link to="/industria/tiendas-online" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Tiendas Online</Link>
              <Link to="/industria/criptomonedas" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Criptomonedas</Link>
              <Link to="/industria/dropshipping" className="block text-slate-600" onClick={() => setIsMenuOpen(false)}>Dropshipping</Link>
            </div>
            <Link to="/blog" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/sobre-nosotros" className="block text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Sobre Nosotros</Link>
            <Link to="/herramientas" className="block w-full text-center bg-indigo-900 text-white py-3 rounded-xl font-bold" onClick={() => setIsMenuOpen(false)}>Empieza Gratis</Link>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-indigo-950 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white">
                  <Rocket size={18} />
                </div>
                <span className="text-xl font-bold tracking-tight">BizCreator</span>
              </div>
              <p className="text-indigo-200 text-sm leading-relaxed">
                Empoderando a la próxima generación de emprendedores con herramientas de inteligencia artificial gratuitas y profesionales.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-6 text-emerald-400">Herramientas</h4>
              <ul className="space-y-3 text-sm text-indigo-100">
                <li><Link to="/herramientas" className="hover:text-white transition-colors">Nombres de Marca</Link></li>
                <li><Link to="/herramientas" className="hover:text-white transition-colors">Tiendas Online</Link></li>
                <li><Link to="/herramientas" className="hover:text-white transition-colors">Bio de Instagram</Link></li>
                <li><Link to="/herramientas" className="hover:text-white transition-colors">Cripto & Web3</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-emerald-400">Compañía</h4>
              <ul className="space-y-3 text-sm text-indigo-100">
                <li><Link to="/sobre-nosotros" className="hover:text-white transition-colors">Sobre Nosotros</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-6 text-emerald-400">Legal</h4>
              <ul className="space-y-3 text-sm text-indigo-100">
                <li><Link to="/privacidad" className="hover:text-white transition-colors">Privacidad</Link></li>
                <li><Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link></li>
                <li><Link to="/terminos" className="hover:text-white transition-colors">Términos</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-indigo-900 mt-12 pt-8 text-center text-xs text-indigo-300">
            <p>© {new Date().getFullYear()} BizCreator. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
