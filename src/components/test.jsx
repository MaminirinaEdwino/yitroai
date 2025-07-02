

    const RestOfThePage = () => (
        <>
            <AgentsSection />
            <PricingSection />
            <TestimonialsSection />
            <ContactSection />
            <NewsletterSection />
        </>
    );

    export default Test;
    const AgentsSection = () => (
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

    const PricingSection = () => (
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

    const TestimonialsSection = () => (
        <section className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Ils nous <span className="gradient-text">font confiance</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Découvrez ce que nos clients disent de nos solutions IA.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-yitro-accent flex items-center justify-center">
                                <span className="text-white font-bold">JD</span>
                            </div>
                            <div className="ml-4">
                                <h4 className="font-bold">Jean Dupont</h4>
                                <p className="text-sm text-gray-400">CEO, TechSolutions</p>
                            </div>
                        </div>
                        <p className="text-gray-300 italic">
                            "L'agent IA de Yitro a transformé notre service client."
                        </p>
                        <div className="mt-4 flex text-yitro-cta">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const ContactSection = () => (
        <section id="contact" className="py-20 gradient-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Contactez</span>-nous
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Prêt à transformer votre entreprise avec nos agents IA ?
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yitro-accent flex items-center justify-center">
                                    <FaMapMarkerAlt className="text-white" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold">Adresse</h4>
                                    <p className="text-gray-300">Antananarivo, Madagascar</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

    const NewsletterSection = () => (
        <section className="py-16 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="gradient-text">Abonnez-vous</span> à notre newsletter
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Recevez les dernières actualités sur l'IA.
                </p>
                <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
                    <input type="email" placeholder="Votre email" className="flex-1 bg-gray-800 border border-gray-700 rounded-l-lg sm:rounded-r-none py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yitro-light mb-2 sm:mb-0" />
                    <button className="bg-gradient-to-r from-yitro-dark to-yitro-light text-white px-6 py-3 rounded-r-lg sm:rounded-l-none hover:from-yitro-light hover:to-yitro-dark transition">
                        S'abonner
                    </button>
                </div>
            </div>
        </section>
    )