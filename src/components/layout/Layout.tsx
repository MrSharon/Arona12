import React, { ReactNode, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Home, MessageSquare, User, Book, Heart, Settings, 
  Menu, X, Brain, AlertCircle
} from 'lucide-react';
import NavLink from './NavLink';
import { useEmotion } from '../../contexts/EmotionContext';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { currentEmotion } = useEmotion();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-sm border-b border-gray-200 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-900">Arona</span>
            {currentEmotion && (
              <div 
                className="w-3 h-3 rounded-full ml-1"
                style={{ backgroundColor: currentEmotion.color }}
                title={`Current emotion: ${currentEmotion.type}`}
              />
            )}
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <NavLink to="/" icon={<Home size={18} />} label="Home" />
            <NavLink to="/chat" icon={<MessageSquare size={18} />} label="Chat" />
            <NavLink to="/profile" icon={<User size={18} />} label="Profile" />
            <NavLink to="/learn" icon={<Book size={18} />} label="Learn" />
            <NavLink to="/therapy" icon={<Heart size={18} />} label="Therapy" />
            <NavLink to="/settings" icon={<Settings size={18} />} label="Settings" />
          </div>
          
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>
      
      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-4 flex justify-between items-center border-b border-gray-200">
            <span className="text-lg font-semibold">Menu</span>
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <nav className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    location.pathname === '/' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  <Home size={20} className="mr-3" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/chat"
                  className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    location.pathname === '/chat' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  <MessageSquare size={20} className="mr-3" />
                  <span>Chat</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    location.pathname === '/profile' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  <User size={20} className="mr-3" />
                  <span>Profile</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/learn"
                  className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    location.pathname === '/learn' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  <Book size={20} className="mr-3" />
                  <span>Learn</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/therapy"
                  className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    location.pathname === '/therapy' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  <Heart size={20} className="mr-3" />
                  <span>Therapy</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className={`flex items-center p-3 rounded-lg hover:bg-gray-100 transition-colors ${
                    location.pathname === '/settings' ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  <Settings size={20} className="mr-3" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-4">
        <div className="container mx-auto px-4 text-center text-sm text-gray-500">
          <p>Arona — Emotional Intelligence AI Assistant © {new Date().getFullYear()}</p>
          <p className="mt-1">Designed to be a supportive companion, not a replacement for human connection.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;