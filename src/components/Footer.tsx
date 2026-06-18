import Link from "next/link";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTwitter,
} from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-[#051747] via-[#0c2a84] to-[#051747] text-[#FEFEFE]">
            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

                    {/* Column 1 */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-5">
                            <Image
                                src="/images/logo_ssc.png"
                                alt="SSC Foundation Logo"
                                width={50}
                                height={50}
                              //  className="object-contain"
                                priority
                            />
                            <div>
                                <h2 className="text-2xl font-bold">
                                    Charity Foundation
                                </h2>
                            </div>

                        </div>

                        <p className="text-[#E7E9F0] max-w-md leading-7">
                            Empowering communities and creating opportunities through
                            education, healthcare, and social welfare initiatives.
                        </p>

                        <div className="flex gap-2 mt-4">
                            {[FaFacebook, FaInstagram, FaLinkedin, FaTwitter].map(
                                (Icon, index) => (
                                    <Link
                                        key={index}
                                        href="#"
                                        className="
                      p-2
                      rounded-full
                      transition-all
                      duration-300
                      hover:bg-[#FEFEFE]
                      hover:text-[#051747]
                    "
                                    >
                                        <Icon size={30} />
                                    </Link>
                                )
                            )}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-lg mb-5">
                            Pages
                        </h3>

                        <ul className="space-y-3 text-[#E7E9F0]">
                            <li>
                                <Link className="hover:text-white" href="/">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-white" href="/about">
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-white" href="/programs">
                                    Programs
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-white" href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div className="md:col-span-2">
                        <h3 className="font-semibold text-lg mb-5">
                            Support
                        </h3>

                        <ul className="space-y-3 text-[#E7E9F0]">
                            <li>
                                <Link className="hover:text-white" href="/donate">
                                    Donate
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-white" href="#">
                                    Volunteer
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-white" href="#">
                                    Events
                                </Link>
                            </li>

                            <li>
                                <Link className="hover:text-white" href="#">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div className="md:col-span-3">
                        <h3 className="font-semibold text-lg mb-5">
                            Stay Connected
                        </h3>

                        <p className="text-[#E7E9F0] mb-5 leading-6">
                            Together we can create a better future.
                            Subscribe for updates and upcoming initiatives.
                        </p>

                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="
                  px-4 py-3
                  rounded-xl
                  bg-[#E7E9F0]
                  text-[#051747]
                  outline-none
                "
                            />

                            <button
                                className="
                  bg-[#FEFEFE]
                  text-[#051747]
                  font-semibold
                  py-3
                  rounded-xl
                  transition-all
                  duration-300
                  hover:bg-[#E7E9F0]
                  hover:scale-[1.02]
                "
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                </div>

                <div className="border-t border-[#535F80] mt-12 pt-6 text-center text-sm text-[#E7E9F0]">
                    © 2026 Charity Foundation. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}