import { FaCheck } from "react-icons/fa";
export const PricingSection = () => (
    <section id="pricing" class="py-20 gradient-bg">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-4">
                    <span class="gradient-text">Tarifs</span> Transparents
                </h2>
                <p class="text-xl text-gray-300 max-w-3xl mx-auto">
                    Des formules adaptées à tous les besoins, de la startup à la grande entreprise.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover relative">
                    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yitro-dark to-yitro-light rounded-t-2xl"></div>
                    <h3 class="text-xl font-bold mb-2">Starter</h3>
                    <p class="text-gray-400 mb-6">Idéal pour les petites équipes</p>
                    <div class="text-2xl font-bold mb-2">1500000.00MGA<span class="text-lg font-normal text-gray-400">/mois</span></div>
                    <p class="text-gray-400 mb-6">Pour 1 agent IA</p>
                    
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">1 Agent IA au choix</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">1 000 messages/mois</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Mises à jour régulières</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Support par email</span>
                        </li>
                    </ul>
                    
                    <button class="w-full py-3 rounded-lg btn-cta font-medium transform hover:scale-105 transition">Choisir ce plan</button>
                </div>
                
                <div class="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover relative transform scale-105 z-10">
                    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yitro-dark to-yitro-light rounded-t-2xl"></div>
                    <div class="absolute -top-5 left-0 w-full flex justify-center">
                        <span class="bg-yitro-cta text-yitro-text px-4 py-1 relative -top-3 rounded-full text-sm font-semibold">Le plus populaire</span>
                    </div>
                    <h3 class="text-xl font-bold mb-2">Pro</h3>
                    <p class="text-gray-400 mb-6">Pour les entreprises en croissance</p>
                    <div class="text-2xl font-bold mb-2">4500000.00MGA<span class="text-lg font-normal text-gray-400">/mois</span></div>
                    <p class="text-gray-400 mb-6">Jusqu'à 3 agents IA</p>
                    
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">3 Agents IA au choix</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">20 000 messages/mois</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Personnalisation avancée</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Support prioritaire</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Analytics en temps réel</span>
                        </li>
                    </ul>
                    
                    <button class="w-full py-3 rounded-lg btn-primary text-white font-medium transform hover:scale-105 transition">Choisir ce plan</button>
                </div>
                
                <div class="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover relative">
                    <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yitro-dark to-yitro-light rounded-t-2xl"></div>
                    <h3 class="text-xl font-bold mb-2">Enterprise</h3>
                    <p class="text-gray-400 mb-6">Solutions sur mesure</p>
                    <div class="text-2xl font-bold mb-2">Sur mesure</div>
                    <p class="text-gray-400 mb-6">Agents IA illimités</p>
                    
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Agents IA illimités</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Messages illimités</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Développement sur mesure</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Intégration API complète</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">Support dédié 24/7</span>
                        </li>
                        <li class="flex items-center">
                            <FaCheck class="fas fa-check text-green-400 mr-2"></FaCheck>
                            <span class="text-gray-300">SLA personnalisé</span>
                        </li>
                    </ul>
                    
                    <button class="w-full py-3 rounded-lg btn-cta font-medium transform hover:scale-105 transition">Nous contacter</button>
                </div>
            </div>
            
            <div class="mt-16 bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border max-w-4xl mx-auto">
                <h3 class="text-xl font-bold mb-4 text-center">Questions fréquentes</h3>
                <div class="space-y-4">
                    <div class="border-b border-gray-800 pb-4">
                        <button class="faq-toggle w-full flex justify-between items-center text-left">
                            <span class="font-medium">Puis-je changer de forfait ultérieurement ?</span>
                            <FaCheck class="fas fa-chevron-down text-yitro-light transition-transform"></FaCheck>
                        </button>
                        <div class="faq-content hidden mt-2 text-gray-300">
                            Oui, vous pouvez changer de forfait à tout moment. Les ajustements de tarif seront appliqués à votre prochaine période de facturation.
                        </div>
                    </div>
                    <div class="border-b border-gray-800 pb-4">
                        <button class="faq-toggle w-full flex justify-between items-center text-left">
                            <span class="font-medium">Y a-t-il des frais supplémentaires pour les requêtes excédentaires ?</span>
                            <FaCheck class="fas fa-chevron-down text-yitro-light transition-transform"></FaCheck>
                        </button>
                        <div class="faq-content hidden mt-2 text-gray-300">
                            Oui, des frais supplémentaires s'appliquent pour les requêtes au-delà de votre quota mensuel. Ces frais sont calculés au prorata et vous serez averti avant d'atteindre votre limite.
                        </div>
                    </div>
                    <div class="border-b border-gray-800 pb-4">
                        <button class="faq-toggle w-full flex justify-between items-center text-left">
                            <span class="font-medium">Quelle est la durée du contrat ?</span>
                            <FaCheck class="fas fa-chevron-down text-yitro-light transition-transform"></FaCheck>
                        </button>
                        <div class="faq-content hidden mt-2 text-gray-300">
                            Nos contrats sont annuels avec facturation mensuelle. Vous pouvez résilier à tout moment avec un préavis de 30 jours.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);



