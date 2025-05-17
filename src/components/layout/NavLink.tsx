import React, { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  icon: ReactNode;
  label: string;
}

const NavLink = ({ to, icon, label }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`
        px-3 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-1
        ${isActive 
          ? 'bg-primary-50 text-primary-600' 
          : 'text-gray-700 hover:bg-gray-100'
        }
      `}
    >
      <span className="mr-1">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

export default NavLink;