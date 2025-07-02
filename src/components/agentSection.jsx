import { FaRobot, FaArrowRight } from "react-icons/fa";

export const AgentsSection = () => (
    <section id="agents" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Nos Agents</span> Spécialisés
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Découvrez notre gamme d'agents IA conçus pour répondre à des besoins métiers spécifiques.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Replace with dynamic content */}
                <div className="bg-gray-900 bg-opacity-30 rounded-2xl overflow-hidden shadow-xl gradient-border card-hover transform hover:-translate-y-2 transition duration-300">
                    <div className="h-56 bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center relative overflow-hidden">
                        <FaRobot className="text-6xl text-white opacity-90" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs bg-yitro-accent text-white font-medium">Nouveau</span>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-white">Nom de l'agent</h3>
                        <p className="text-gray-300 mb-4 text-sm">Description de l'agent...</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <span className="px-3 py-1 rounded-full text-xs bg-yitro-accent text-white">Tag</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-lg font-semibold gradient-text">Prix MGA</span>
                            <a href="#" className="px-4 py-2 rounded-lg bg-gradient-to-r from-yitro-dark to-yitro-light text-white hover:from-yitro-light hover:to-yitro-dark transition text-sm font-medium">
                                Voir plus
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-16">
                <a href="#" className="px-8 py-3 rounded-lg text-lg font-semibold gradient-border text-white hover:text-yitro-cta transition transform hover:scale-105 inline-flex items-center">
                    <span>Explorer tous nos agents</span>
                    <FaArrowRight className="ml-2" />
                </a>
            </div>
        </div>
    </section>
);