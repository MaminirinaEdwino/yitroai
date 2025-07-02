import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const testimonials = [
    {
        initials: "SM",
        name: "Sophie Martin",
        title: "Directrice Marketing, RetailPro",
        feedback: "L'analyse prédictive de leur agent IA nous a permis d'optimiser nos stocks et d'augmenter nos ventes de 35%. Un retour sur investissement exceptionnel.",
        stars: 4.5,
    },
    {
        initials: "TL",
        name: "Thomas Leroy",
        title: "Directeur Financier, FinExpert",
        feedback: "La rapidité et la précision de l'agent de traitement de documents nous font gagner des dizaines d'heures chaque mois. Une solution indispensable.",
        stars: 5,
    },{
        initials: "JD",
        name: "Jean Dupont",
        title: "CEO, TechSolutions",
        feedback: "L'agent IA de Yitro a transformé notre service client.",
        stars: 5,
    }
];

export const TestimonialsSection = ()=>{
    return <>
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
                {
        testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border card-hover">
                <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-yitro-accent flex items-center justify-center">
                        <span className="text-white font-bold">{testimonial.initials}</span>
                    </div>
                    <div className="ml-4">
                        <h4 className="font-bold">{testimonial.name}</h4>
                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                </div>
                <p className="text-gray-300 italic">{testimonial.feedback}</p>
                <div className="mt-4 flex text-yitro-cta">
                    {Array.from({ length: Math.floor(testimonial.stars) }, (_, i) => (
                        <FaStar key={i} />
                    ))}
                    {testimonial.stars % 1 !== 0 && <FaStarHalfAlt />}
                </div>
            </div>
        ))
    }
                </div>
                <div class="mt-16 flex flex-col items-center">
                <div class="flex space-x-2 mb-8">
                    <div class="w-3 h-3 rounded-full bg-yitro-accent"></div>
                    <div class="w-3 h-3 rounded-full bg-yitro-light"></div>
                    <div class="w-3 h-3 rounded-full bg-yitro-accent"></div>
                </div>
                <button class="px-8 py-3 rounded-lg text-lg font-semibold gradient-border text-white hover:text-yitro-cta transition transform hover:scale-105">
                    Voir plus de témoignages
                </button>
            </div>
            </div>
        </section>
    
    </>
}