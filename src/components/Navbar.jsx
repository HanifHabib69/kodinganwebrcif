import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const { pathname } = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-wide">
        <span className="text-black">RCI</span>{' '}
        <span className="text-red-600">Forte</span>
      </div>
      <div className="space-x-6 text-sm font-medium">
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`${
              pathname === item.to ? 'text-blue-600 font-semibold' : 'text-gray-700'
            } hover:text-blue-500 transition`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

