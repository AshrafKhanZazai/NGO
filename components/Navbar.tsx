// "use client";
// import React, { useState } from "react";
// import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
// import { cn } from "../lib/utils";

// export function MineNavbar() {
//   return (
//     <div className="relative w-full flex items-center justify-start">
//       <Navbar />
//     </div>
//   );
// }

// function Navbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//       className={cn("fixed inset-x-0 max-full z-50 mx-auto justify-between", className)}
//     >
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="About">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">About Us</HoveredLink>
//             <HoveredLink href="/interface-design">Core Values</HoveredLink>
//             <HoveredLink href="/seo">Contact Us</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Programs">
//           <div className="text-sm grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-10 p-4">
//             <ProductItem
//               title="Programs & Projects"
//               href="#"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Empowering communities through education, training, and aid."
//             />
//             <ProductItem
//               title="Services"
//               href="#"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Providing health, education, and social support services."
//             />
//             <ProductItem
//               title="News & Updates"
//               href="#"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Latest announcements, projects, and success stories."
//             />
//             <ProductItem
//               title="Our Impact"
//               href="#"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Transforming lives through education, aid, and development."
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Get Involved">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Volunteer</HoveredLink>
//             <HoveredLink href="/individual">Donate</HoveredLink>
//             <HoveredLink href="/team">Partner with Us</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }

// function MineNavbar({ className }: { className?: string }) {
//   const [active, setActive] = useState<string | null>(null);
//   return (
//     <div
//       className={cn(
//         "inset-x-0 mx-auto justify-between bg-white dark:bg-black shadow-md", 
//         className
//       )}
//     >
//       <Menu setActive={setActive}>
//         <MenuItem setActive={setActive} active={active} item="About">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">About Us</HoveredLink>
//             <HoveredLink href="/interface-design">Core Values</HoveredLink>
//             <HoveredLink href="/seo">Contact Us</HoveredLink>
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Programs">
//           <div className="text-sm grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-10 p-4">
//             <ProductItem
//               title="Programs & Projects"
//               href="#"
//               src="https://assets.aceternity.com/demos/algochurn.webp"
//               description="Empowering communities through education, training, and aid."
//             />
//             <ProductItem
//               title="Services"
//               href="#"
//               src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
//               description="Providing health, education, and social support services."
//             />
//             <ProductItem
//               title="News & Updates"
//               href="#"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
//               description="Latest announcements, projects, and success stories."
//             />
//             <ProductItem
//               title="Our Impact"
//               href="#"
//               src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
//               description="Transforming lives through education, aid, and development."
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Get Involved">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Volunteer</HoveredLink>
//             <HoveredLink href="/individual">Donate</HoveredLink>
//             <HoveredLink href="/team">Partner with Us</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }


