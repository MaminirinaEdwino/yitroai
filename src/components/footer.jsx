import {FaTwitter, FaLinkedinIn, FaGithub, FaYoutube} from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="gradient-bg py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 md:grid-cols-5 gap-8">
					<div className="col-span-2">
						<span className="text-2xl font-bold gradient-text">YITRONIX</span>
						<p className="text-gray-300 mt-4">
							Leader en solutions d'agents IA sur mesure pour les entreprises. Nous transformons vos processus avec une intelligence artificielle adaptée.
						</p>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Navigation</h4>
						<ul className="space-y-2">
							<li>
								<a href="#home" className="text-gray-300 hover:text-white transition">Accueil</a>
							</li>
							<li>
								<a href="#features" className="text-gray-300 hover:text-white transition">Fonctionnalités</a>
							</li>
							<li>
								<a href="#agents" className="text-gray-300 hover:text-white transition">Nos Agents</a>
							</li>
							<li>
								<a href="#pricing" className="text-gray-300 hover:text-white transition">Tarifs</a>
							</li>
							<li>
								<a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Légal</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition">Conditions générales</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition">Politique de confidentialité</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition">Mentions légales</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition">Cookies</a>
							</li>
						</ul>
					</div>
					<div>
						<h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Ressources</h4>
						<ul className="space-y-2">
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition">Blog</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition">Documentation</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition">FAQ</a>
							</li>
							<li>
								<a href="#" className="text-gray-300 hover:text-white transition">Centre d'aide</a>
							</li>
						</ul>
					</div>
				</div>
				<div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
					<p className="text-gray-400 text-sm">
						&copy; 2025 Yitro. Tous droits réservés.
					</p>
					<div className="flex space-x-6 mt-4 md:mt-0">
						<a href="#" className="text-gray-400 hover:text-white transition">
							<FaTwitter/>
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition">
							<FaLinkedinIn/>
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition">
							<FaGithub/>
						</a>
						<a href="#" className="text-gray-400 hover:text-white transition">
							<FaYoutube/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
