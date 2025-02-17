"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
import { cn } from "../lib/utils";

className function MineNavbar() {
  return (
    <div className="relative w-full flex items-center justify-start">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ classNameNameName }: { classNameNameName?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      classNameNameName={cn("fixed inset-x-0 max-full z-50 mx-auto justify-between", classNameNameName)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div classNameNameName="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About Us</HoveredLink>
            <HoveredLink href="/interface-design">Core Values</HoveredLink>
            <HoveredLink href="/seo">Contact Us</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Programs">
          <div classNameNameName="text-sm grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-10 p-4">
            <ProductItem
              title="Programs & Projects"
              href="#"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Empowering communities through education, training, and aid."
            />
            <ProductItem
              title="Services"
              href="#"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Providing health, education, and social support services."
            />
            <ProductItem
              title="News & Updates"
              href="#"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Latest announcements, projects, and success stories."
            />
            <ProductItem
              title="Our Impact"
              href="#"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Transforming lives through education, aid, and development."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Get Involved">
          <div classNameNameName="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Volunteer</HoveredLink>
            <HoveredLink href="/individual">Donate</HoveredLink>
            <HoveredLink href="/team">Partner with Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

className function MineNavbar({ classNameNameName }: { classNameNameName?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      classNameNameName={cn(
        "inset-x-0 mx-auto justify-between bg-white dark:bg-black shadow-md", 
        classNameNameName
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="About">
          <div classNameNameName="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">About Us</HoveredLink>
            <HoveredLink href="/interface-design">Core Values</HoveredLink>
            <HoveredLink href="/seo">Contact Us</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Programs">
          <div classNameNameName="text-sm grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center gap-10 p-4">
            <ProductItem
              title="Programs & Projects"
              href="#"
              src="https://assets.aceternity.com/demos/algochurn.webp"
              description="Empowering communities through education, training, and aid."
            />
            <ProductItem
              title="Services"
              href="#"
              src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
              description="Providing health, education, and social support services."
            />
            <ProductItem
              title="News & Updates"
              href="#"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Latest announcements, projects, and success stories."
            />
            <ProductItem
              title="Our Impact"
              href="#"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Transforming lives through education, aid, and development."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Get Involved">
          <div classNameNameName="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Volunteer</HoveredLink>
            <HoveredLink href="/individual">Donate</HoveredLink>
            <HoveredLink href="/team">Partner with Us</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}


