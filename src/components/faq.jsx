import React, {useState} from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const Faq = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleFaq = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	const faqData = [
		{
			question: "Puis-je changer de forfait ultérieurement ?",
			answer: "Oui, vous pouvez changer de forfait à tout moment. Les ajustements de tarif seront appliqués à votre prochaine période de facturation."
		}, {
			question: "Y a-t-il des frais supplémentaires pour les requêtes excédentaires ?",
			answer: "Oui, des frais supplémentaires s'appliquent pour les requêtes au-delà de votre quota mensuel. Ces frais sont calculés au prorata et vous serez averti avant d'atteindre votre limite."
		}, {
			question: "Quelle est la durée du contrat ?",
			answer: "Nos contrats sont annuels avec facturation mensuelle. Vous pouvez résilier à tout moment avec un préavis de 30 jours."
		}
	];

	return (
		<div className="mt-16 bg-gray-900 bg-opacity-30 rounded-2xl p-8 gradient-border max-w-4xl mx-auto">
			<h3 className="text-xl font-bold mb-4 text-center">Questions fréquentes</h3>
			<div className="space-y-4">
				{
				faqData.map((faq, index) => (
					<div key={index}
						className="border-b border-gray-800 pb-4">
						<button className="faq-toggle w-full flex justify-between items-center text-left"
							onClick={
								() => toggleFaq(index)
						}>
							<span className="font-medium">
								{
								faq.question
							}</span>
							<FaChevronDown className={
								`fas fa-chevron-down text-yitro-light transition-transform ${
									activeIndex === index ? 'rotate-180' : ''
								}`
							}></FaChevronDown>
						</button>
						<div className={
							`faq-content mt-2 text-gray-300 ${
								activeIndex === index ? '' : 'hidden'
							}`
						}>
							{
							faq.answer
						} </div>
					</div>
				))
			} </div>
		</div>
	);
};

export default Faq;
