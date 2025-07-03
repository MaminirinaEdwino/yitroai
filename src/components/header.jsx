import React, { useState } from 'react';
import { FaRobot, FaShoppingCart, FaSignOutAlt, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Header = ({user, cartCount}) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		
		<nav className="fixed w-full z-50 gradient-bg shadow-lg backdrop-blur-2xl ">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center">
							<span className="text-2xl font-bold gradient-text flex items-center">
								<FaRobot className="fas fa-robot mr-2"></FaRobot>
								yitroAI
							</span>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								<a href="#home" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:text-yitro-cta transition">Accueil</a>
								<a href="#features" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yitro-cta transition">Fonctionnalités</a>
								<Link to="/marketplace" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yitro-cta transition">Marketplace</Link>
								<a href="/#agents" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yitro-cta transition">Nos Agents</a>
								<a href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yitro-cta transition">Tarifs</a>
								<a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-yitro-cta transition">Contact</a>
							</div>
						</div>
					</div>

					<div className="hidden md:block">
						<div className="ml-4 flex items-center md:ml-6 space-x-4">
							<a href="/cart" className="relative px-4 py-2 rounded-md text-sm font-medium text-white hover:text-yitro-cta transition">
								<FaShoppingCart className="fas fa-shopping-cart"></FaShoppingCart>
								{
								cartCount > 0 && (
									<span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-yitro-accent rounded-full">
										{cartCount}</span>
								)
							} </a>
							{
							user.isAuthenticated ? (
								<>
									<span className="text-white truncate max-w-[200px] inline-block">Bonjour, {
										user.firstName || user.username
									}!</span>
									<a href="/logout" className="px-4 py-2 rounded-md text-sm font-medium gradient-border text-white hover:text-purple-300 transition">
										<FaSignOutAlt className="fas fa-sign-out-alt mr-2"></FaSignOutAlt>Déconnexion
									</a>
								</>
							) : (
								<>
									<a href="/login" className="px-4 py-2 rounded-md text-sm font-medium gradient-border text-white hover:text-purple-300 transition flex items-center">
										<FaSignInAlt className="fas fa-sign-in-alt mr-2"></FaSignInAlt>Connexion
									</a>
									<a href="/signup" className="px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-yellow-600 to-yellow-500 text-white hover:from-yellow-700 hover:to-yellow-600 transition duration-500 shadow-lg flex items-center">
										<FaUserPlus className="fas fa-user-plus mr-2"></FaUserPlus>Inscription
									</a>
								</>
							)
						} </div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button onClick={toggleMobileMenu}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-yitro-dark focus:outline-none">
							<svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
							</svg>
						</button>
					</div>
				</div>
			</div>

			{/* Mobile menu */}
			{
			mobileMenuOpen && (
				<div className="md:hidden gradient-bg">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						<a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-yitro-cta transition">Accueil</a>
						<a href="#features" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition">Fonctionnalités</a>
						<Link to="/marketplace" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition">Marketplace</Link>
						<a href="/cart" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition">Panier {
							cartCount > 0 && `(${cartCount})`
						}</a>
						<a href="#agents" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition">Nos Agents</a>
						<a href="#pricing" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition">Tarifs</a>
						<a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition">Contact</a>
						{
						user.isAuthenticated ? (
							<>
								<span className="block px-3 py-2 rounded-md text-base font-medium text-white truncate">Bonjour, {
									user.firstName || user.username
								}!</span>
								<a href="/logout" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-purple-300 transition">Déconnexion</a>
							</>
						) : (
							<>
								<a href="/login" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition">Connexion</a>
								<a href="/signup" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white transition">Inscription</a>
							</>
						)
					} </div>
				</div>
			)
		} </nav>
	);
};

export default Header;
