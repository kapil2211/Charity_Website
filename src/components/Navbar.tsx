import React from "react";
import Link from "next/link";
import Image from "next/image";
const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Programs", href: "/programs" },
    { name: "Contact", href: "/contact" },
    { name: "Donate", href: "/donate" },
];

export default function Navbar() {
    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#051747] via-[#0c2a84] to-[#051747] text-[#FEFEFE] shadow-lg">
            <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/logo_ssc.png"
                        alt="SSC Foundation Logo"
                        width={50}
                        height={50}
                       
                        priority
                    />

                    <div>
                        <h1 className="font-bold text-xl tracking-wide">
                            Charity Foundation
                        </h1>
                    </div>
                </Link>

                {/* Navigation */}
                <ul className="hidden md:flex items-center gap-2">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="
                  px-5 py-2
                  rounded-full
                  font-medium
                  transition-all
                  duration-300
                  hover:bg-[#FEFEFE]
                  hover:text-[#051747]
                  hover:shadow-md
                "
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Login Button */}
                <button
                    className="
            bg-[#FEFEFE]
            text-[#051747]
            px-6 py-2.5
            rounded-full
            font-semibold
            transition-all
            duration-300
            hover:bg-[#E7E9F0]
            hover:scale-105
            hover:shadow-lg
          "
                >
                    Login
                </button>

            </div>
        </nav>
    );
}