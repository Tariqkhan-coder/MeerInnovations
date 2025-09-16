import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const menuData = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Courses",
    path: "/courses",
    newTab: false,
  },
  {
    id: 3,
    title: "Projects",
    path: "/projects",
    newTab: false,
  },
  {
    id: 4,
    title: "About",
    path: "/about",
    newTab: false,
  },
  {
    id: 5,
    title: "Journey",
    path: "/devsum-diaries",
    newTab: false,
  },
  {
    id: 6,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);

    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []);

  const usePathName = useLocation().pathname;

  return (
    <header
      className={`top-0 left-0 z-9999 w-full ${
        sticky
          ? "shadow-sticky fixed z-99999 bg-slate-900/90 backdrop-blur-xs transition"
          : "absolute bg-transparent"
      }`}
    >
      <div className="container">
        <div className="relative flex items-center justify-between py-6">
          <div className="w-40">
            <Link to="/" className="font-bold text-xl">
              Meer <span className="text-orange-400">Innovations</span>
            </Link>
          </div>
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Mobile Menu"
            className="ring-primary absolute top-1/2 right-4 block -translate-y-1/2 rounded-lg py-[4px] px-[6px] focus:ring-2 lg:hidden"
          >
            <span
              className={`relative my-1.5 block h-0.5 w-[25px] bg-white transition-all duration-300 ${
                navbarOpen ? "top-[8px] rotate-45" : " "
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[25px] bg-white transition-all duration-300 ${
                navbarOpen ? "opacity-0" : " "
              }`}
            />
            <span
              className={`relative my-1.5 block h-0.5 w-[25px] bg-white transition-all duration-300 ${
                navbarOpen ? "top-[-8px] -rotate-45" : " "
              }`}
            />
          </button>
          <nav
            className={`absolute right-0 z-30 w-[250px] bg-slate-900 rounded px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
              navbarOpen
                ? "visibility top-full opacity-100"
                : "invisible top-[120%] opacity-0"
            }`}
          >
            <ul className="block lg:flex lg:space-x-12">
              {menuData.map((menuItem, index) => (
                <li key={index}>
                  <Link
                    to={menuItem.path}
                    className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0  ${
                      usePathName === menuItem.path
                        ? "text-orange-400"
                        : "hover:text-orange-400"
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center justify-end pr-18 lg:pr-0">
            <Link
              to="/login"
              className="text-white text-base font-medium hover:text-white/80"
            >
              Login
            </Link>
            <span className="text-white px-2 text-base font-medium">/</span>
            <Link
              to="/register"
              className="text-orange-400/90  text-base font-medium hover:text-orange-400/90"
            >
              Signup
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
