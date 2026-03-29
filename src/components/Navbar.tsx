// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Menu, X } from "lucide-react";
// import logo from "@/assets/logo.png";

// const links = [
//   { to: "/", label: "Home" },
//   { to: "/about", label: "About" },
//   { to: "/services", label: "Services" },
//   { to: "/gallery", label: "Projects" },
//   { to: "/contact", label: "Contact" },
// ];

// const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const { pathname } = useLocation();

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-luxe-cream/90 backdrop-blur-sm border-b border-border">
//       <div className="container mx-auto flex items-center justify-between h-24 px-4 md:px-6">
//         {/* Logo */}
//         <Link to="/" className="flex items-center gap-2 md:gap-3">
//           <img
//             src={logo}
//             alt="Luxe Living Concepts"
//             className="h-12 md:h-14 lg:h-16 w-auto"
//           />
//           {/*
//             Hide brand name text on tablet (md) to prevent cramping with nav links.
//             Show on mobile (always visible beside logo) and desktop (lg+).
//             On tablet the logo alone identifies the brand.
//           */}
//           <span className="font-heading text-sm md:hidden lg:block lg:text-lg tracking-[0.12em] text-foreground uppercase whitespace-nowrap">
//             Luxe Living Concepts
//           </span>
//         </Link>

//         {/* Desktop & Tablet Nav */}
//         <ul className="hidden md:flex items-center gap-5 lg:gap-10">
//           {links.map((l) => (
//             <li key={l.to}>
//               <Link
//                 to={l.to}
//                 className={`text-[10px] lg:text-xs tracking-[0.15em] lg:tracking-[0.2em] uppercase font-body font-medium transition-colors duration-300 hover:text-primary ${
//                   pathname === l.to
//                     ? "text-primary border-b border-primary pb-1"
//                     : "text-foreground"
//                 }`}
//               >
//                 {l.label}
//               </Link>
//             </li>
//           ))}
//         </ul>

//         {/* Mobile hamburger */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-foreground p-2"
//           aria-label="Toggle menu"
//         >
//           {open ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </div>

//       {/* Mobile menu */}
//       {open && (
//         <div className="md:hidden bg-luxe-cream border-t border-border animate-fade-in">
//           <ul className="flex flex-col items-center gap-6 py-8">
//             {links.map((l) => (
//               <li key={l.to}>
//                 <Link
//                   to={l.to}
//                   onClick={() => setOpen(false)}
//                   className={`text-sm tracking-[0.15em] uppercase font-body transition-colors duration-300 ${
//                     pathname === l.to ? "text-primary" : "text-foreground"
//                   }`}
//                 >
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-luxe-cream/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-24 px-4 md:px-6">
        {/* Logo & Brand Name */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <img
            src={logo}
            alt="Luxe Living Concepts"
            className="h-10 md:h-12 lg:h-16 w-auto"
          />
          {/* Removed md:hidden to keep text visible on tablets.
            Used text-xs on md (tablet) and text-lg on lg (desktop) 
            to ensure it fits the available space.
          */}
          <span className="font-heading text-xs sm:text-sm md:text-sm lg:text-lg tracking-[0.12em] text-foreground uppercase whitespace-nowrap">
            Luxe Living Concepts
          </span>
        </Link>

        {/* Desktop & Tablet Nav */}
        <ul className="hidden md:flex items-center gap-4 lg:gap-10">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className={`text-[10px] lg:text-xs tracking-[0.15em] lg:tracking-[0.2em] uppercase font-body font-medium transition-colors duration-300 hover:text-primary ${
                  pathname === l.to
                    ? "text-primary border-b border-primary pb-1"
                    : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-luxe-cream border-t border-border animate-fade-in">
          <ul className="flex flex-col items-center gap-6 py-8">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className={`text-sm tracking-[0.15em] uppercase font-body transition-colors duration-300 ${
                    pathname === l.to ? "text-primary" : "text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;