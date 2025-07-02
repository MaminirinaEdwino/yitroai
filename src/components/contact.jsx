import {
	FaMapMarkerAlt,
	FaPhoneAlt,
	FaEnvelope,
	FaTwitter,
	FaLinkedinIn,
	FaFacebookF
} from 'react-icons/fa';

const Contact = () => {
	return (
		<section id="contact" className="py-20 gradient-bg">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl md:text-5xl font-bold mb-6">
							<span className="gradient-text">Contactez</span>-nous
						</h2>
						<p className="text-xl text-gray-300 mb-8">
							Prêt à transformer votre entreprise avec nos agents IA ? Notre équipe est à votre disposition pour répondre à toutes vos questions.
						</p>

						<div className="space-y-6">
							<div className="flex items-start">
								<div className="flex-shrink-0 h-10 w-10 rounded-full bg-yitro-accent flex items-center justify-center">
									<FaMapMarkerAlt className="text-white"/>
								</div>
								<div className="ml-4">
									<h4 className="font-bold">Adresse</h4>
									<p className="text-gray-300">Antananarivo, Antsirabe, Madagascar</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 h-10 w-10 rounded-full bg-yitro-accent flex items-center justify-center">
									<FaPhoneAlt className="text-white"/>
								</div>
								<div className="ml-4">
									<h4 className="font-bold">Téléphone</h4>
									<p className="text-gray-300">+261 37 216 61</p>
								</div>
							</div>

							<div className="flex items-start">
								<div className="flex-shrink-0 h-10 w-10 rounded-full bg-yitro-accent flex items-center justify-center">
									<FaEnvelope className="text-white"/>
								</div>
								<div className="ml-4">
									<h4 className="font-bold">Email</h4>
									<p className="text-gray-300">yitronix_marketplace@gmail.com</p>
								</div>
							</div>
						</div>

						<div className="mt-8 flex space-x-4">
							<a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yitro-accent transition">
								<FaTwitter className="text-white"/>
							</a>
							<a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yitro-accent transition">
								<FaLinkedinIn className="text-white"/>
							</a>
							<a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yitro-accent transition">
								<FaFacebookF className="text-white"/>
							</a>
						</div>
					</div>

					<div className="bg-gray-900 bg-opacity-50 rounded-2xl p-8 gradient-border">
						<h3 className="text-xl font-bold mb-6">Envoyez-nous un message</h3>
						<form>
							<div className="mb-4">
								<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
								<input type="text" id="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yitro-light"/>
							</div>
							<div className="mb-4">
								<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
								<input type="email" id="email" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yitro-light"/>
							</div>
							<div className="mb-4">
								<label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Sujet</label>
								<select id="subject" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yitro-light">
									<option>Demande d'information</option>
									<option>Support technique</option>
									<option>Demande de devis</option>
									<option>Autre</option>
								</select>
							</div>
							<div className="mb-6">
								<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
								<textarea id="message" rows="4" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yitro-light"></textarea>
							</div>
							<button type="submit" className="w-full py-3 rounded-lg font-semibold bg-gradient-to-r from-yitro-dark to-yitro-light text-white hover:from-yitro-light hover:to-yitro-dark transition">
								Envoyer le message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
