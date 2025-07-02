


import { FaEnvelope } from 'react-icons/fa';

const NewsLetterSection = () => {
    return (
        <section className="py-16 bg-gray-900">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    <span className="gradient-text">Abonnez-vous</span> à notre newsletter
                </h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                    Recevez les dernières actualités sur l'IA, des études de cas et des offres exclusives directement dans votre boîte mail.
                </p>
                <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto">
                    <div className="flex items-center bg-gray-800 border border-gray-700 rounded-l-lg sm:rounded-r-none py-3 px-4 mb-2 sm:mb-0">
                        <FaEnvelope className="text-gray-500 mr-2" />
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="flex-1 bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-yitro-light"
                        />
                    </div>
                    <button className="bg-gradient-to-r from-yitro-dark to-yitro-light text-white px-6 py-3 rounded-r-lg sm:rounded-l-none hover:from-yitro-light hover:to-yitro-dark transition">
                        S'abonner
                    </button>
                </div>
                <p className="text-xs text-gray-500 mt-3">
                    Nous respectons votre vie privée. Vous pouvez vous désabonner à tout moment.
                </p>
            </div>
        </section>
    );
};

export default NewsLetterSection;