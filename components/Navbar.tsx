import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';  // Assuming you have a Button component
import { NAV_LINKS } from '../constants';  // Assuming your nav links are stored here

const Navbar = () => {
  return (
    <nav className="w-full  flex items-center justify-between shadow-lg px-6 py-4">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/hilink-logo.svg" alt="Hilink Logo" width={74} height={29} />
      </Link>

      {/* Navigation Links */}
      <ul className="hidden lg:flex items-center gap-10">
        {NAV_LINKS.map((link) => (
          <li key={link.key} className="group">
            <Link href={link.href} className="text-black-700 transition-colors duration-300 hover:text-green-500">
              {link.label}
            </Link>
            <div className="h-0.5 bg-transparent group-hover:bg-green-500 transition-all duration-300"></div>
          </li>
        ))}
      </ul>

      {/* Login Button */}
      <div className="hidden lg:flex items-center">
        <Button type="button" title="Login" icon="/user.svg" variant="btn_dark_green" />
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center">
        <Image src="/menu.svg" alt="Menu" width={32} height={32} className="cursor-pointer"/>
      </div>
    </nav>
  );
};

export default Navbar;
