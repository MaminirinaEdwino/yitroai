import { FaCheck } from "react-icons/fa";
export const PricingSection = () => (
    <section id="pricing" className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="gradient-text">Tarifs</span> Transparents
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Des formules adaptées à tous les besoins, de la startup à la grande entreprise.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover relative">
                    <h3 className="text-xl font-bold mb-2">Starter</h3>
                    <p className="text-gray-400 mb-6">Idéal pour les petites équipes</p>
                    <div className="text-2xl font-bold mb-2">1500000.00MGA<span className="text-lg font-normal text-gray-400">/mois</span></div>
                    <ul className="space-y-3 mb-8">
                        <li className="flex items-center">
                            <FaCheck className="text-green-400 mr-2" />
                            <span className="text-gray-300">1 Agent IA au choix</span>
                        </li>
                    </ul>
                    <button className="w-full py-3 rounded-lg btn-cta font-medium transform hover:scale-105 transition">Choisir ce plan</button>
                </div>
            </div>
        </div>
    </section>
);