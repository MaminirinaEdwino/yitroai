import React from 'react';
import { FaRocket, FaPlayCircle, FaStar, FaStarHalfAlt, FaRobot, FaBolt, FaUser, FaPaperPlane, FaBrain, FaShieldAlt, FaCogs, FaChartLine, FaHeadset } from 'react-icons/fa';
import Chatbot from './chatbot';
const HeroSection = () => {
    return (
        <>
            <section id="home" className="hero-bg min-h-screen flex items-center relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 hero-content relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <div className="inline-block px-4 py-2 rounded-full bg-gray-800 bg-opacity-50 mb-6 gradient-border">
                                <span className="text-sm font-medium gradient-text">Nouvelle génération d'IA</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                <span className="gradient-text">L'Intelligence Artificielle</span>
                                à portée de clic
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 max-w-lg">
                                <span className="font-semibold">Yitronix</span>
                                - La première marketplace d'agents IA spécialisés.
                                <span className="block mt-2">Trouvez, testez et déployez l'IA parfaite pour votre entreprise.</span>
                            </p>
                            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                                <a href="{% url 'store:catalogue' %}" className="px-8 py-4 rounded-lg text-lg font-semibold btn-primary text-white transition transform hover:scale-105 shadow-lg flex items-center justify-center">
                                    <FaRocket className="fas fa-rocket mr-2"></FaRocket>
                                    Explorer la Marketplace
                                </a>
                                <button className="px-8 py-4 rounded-lg text-lg font-semibold gradient-border text-white hover:text-yitro-cta transition transform hover:scale-105 flex items-center justify-center">
                                    <FaPlayCircle className="fas fa-play-circle mr-2"></FaPlayCircle>
                                    Voir la démo
                                </button>
                            </div>
                            <div className="mt-8 flex items-center space-x-4">
                                <div className="flex -space-x-2">
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/44.jpg" alt="Client"/>
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Client"/>
                                    <img className="w-10 h-10 rounded-full border-2 border-gray-800" src="https://randomuser.me/api/portraits/women/68.jpg" alt="Client"/>
                                </div>
                                <div>
                                    <div className="flex text-yitro-cta">
                                        <FaStar className="fas fa-star"></FaStar>
                                        <FaStar className="fas fa-star"></FaStar>
                                        <FaStar className="fas fa-star"></FaStar>
                                        <FaStar className="fas fa-star"></FaStar>
                                        <FaStar className="fas fa-star-half-alt"></FaStar>
                                    </div>
                                    <p className="text-sm text-gray-300">500+ entreprises nous font confiance</p>
                                </div>
                            </div>
                        </div>
                       {/* chatbot */}
                       <Chatbot></Chatbot>
                    </div>
                </div>
            </section>

            <section id="features" className="py-20 gradient-bg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">Pourquoi</span>
                            choisir Yitro ?
                        </h2>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                            Nos agents IA sont conçus pour s'adapter parfaitement à vos besoins spécifiques et évoluer avec votre entreprise.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 features-grid">
                        <div className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center mb-6">
                                <FaBolt className="fas fa-bolt text-2xl text-white"></FaBolt>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Intégration rapide</h3>
                            <p className="text-gray-300">
                                Nos agents s'intègrent en quelques jours à vos systèmes existants sans perturber vos opérations.
                            </p>
                        </div>

                        <div className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center mb-6">
                                <FaBrain className="fas fa-brain text-2xl text-white"></FaBrain>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Apprentissage continu</h3>
                            <p className="text-gray-300">
                                Nos IA apprennent en permanence pour s'améliorer et s'adapter à l'évolution de votre activité.
                            </p>
                        </div>

                        <div className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center mb-6">
                                <FaShieldAlt className="fas fa-shield-alt text-2xl text-white"></FaShieldAlt>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Sécurité renforcée</h3>
                            <p className="text-gray-300">
                                Vos données sont protégées par des protocoles de sécurité avancés et un chiffrement de bout en bout.
                            </p>
                        </div>

                        <div className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center mb-6">
                                <FaCogs className="fas fa-cogs text-2xl text-white"></FaCogs>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Personnalisation totale</h3>
                            <p className="text-gray-300">
                                Chaque agent est configuré selon vos besoins spécifiques pour une solution parfaitement adaptée.
                            </p>
                        </div>

                        <div className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center mb-6">
                                <FaChartLine className="fas fa-chart-line text-2xl text-white"></FaChartLine>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Analyses avancées</h3>
                            <p className="text-gray-300">
                                Obtenez des insights précieux grâce à nos outils d'analyse de données en temps réel.
                            </p>
                        </div>

                        <div className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center mb-6">
                                <FaHeadset className="fas fa-headset text-2xl text-white"></FaHeadset>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Support 24/7</h3>
                            <p className="text-gray-300">
                                Notre équipe est disponible à tout moment pour vous accompagner et répondre à vos questions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
