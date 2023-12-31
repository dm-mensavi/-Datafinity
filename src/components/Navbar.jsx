import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleNavbar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav
			id="navbar"
			className=" bg-transparent relative z-10 font-semibold p-4 sm:px-10 lg:px-40 md:px-16">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center">
					<div className="text-xl font-bold text-[#FF6551]">Datafinity</div>
					<div className="hidden md:flex sm:space-x-2 lg:space-x-5 sm:ml-8 lg:ml-32">
						<a href="/" className="text-gray-700">
							Home
						</a>
						<a href="#products" className="text-gray-700">
							Product
						</a>
						<a href="#pricing" className="text-gray-700">
							Pricing
						</a>
						<a href="#https://wa.link/k1312c" className="text-gray-700">
							Contact
						</a>
					</div>
				</div>

				<div className="md:hidden flex items-center">
					{isOpen ? (
						<FiX
							className="text-3xl text-black cursor-pointer"
							onClick={toggleNavbar}
						/>
					) : (
						<FiMenu
							className="text-3xl text-black cursor-pointer"
							onClick={toggleNavbar}
						/>
					)}
				</div>

				<div
					className={`md:hidden absolute top-16 right-0 bg-white p-4 w-[80vw] h-[100vh] ${
						isOpen ? "block" : "hidden"
					}`}>
					<div className="flex flex-col items-start space-y-6 pl-10">
						<a href="#navbar" className="text-gray-700" onClick={toggleNavbar}>
							Home
						</a>
						<a href="#products" className="text-gray-700" onClick={toggleNavbar}>
							Product
						</a>
						<a href="#pricing" className="text-gray-700" onClick={toggleNavbar}>
							Pricing
						</a>
						<a href="https://wa.link/k1312c" target="_blank" rel="noreferrer" className="text-gray-700" onClick={toggleNavbar}>
							Contact
						</a>
						<button className="bg-[#FF6551] text-white py-2 px-3 rounded-md flex items-center">
							<a href="https://wa.link/k1312c" rel="noreferrer" target="_blank" onClick={toggleNavbar}>
								CONTACT US
							</a>
							<AiOutlineArrowRight size={10} className="ml-2" />
						</button>
					</div>
				</div>

				<div className="hidden md:flex items-center space-x-8">
					<a
						href="https://chat.whatsapp.com/D8k77UcWBuQ77kI3DWJbMA"
						rel="noreferrer"
						target="_blank"
						className="text-[#FF6551]">
						Connect
					</a>
					<button className="bg-[#FF6551] text-white py-2 px-5 rounded-md flex items-center">
						<a
							href="https://t.me/Gahbreil_Coded"
							rel="noreferrer"
							target="_blank">
							JOIN US
						</a>
						<AiOutlineArrowRight size={10} className="ml-2" />
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
