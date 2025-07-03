import {useState} from 'react';
import {FaRobot, FaChevronLeft, FaChevronRight, FaShoppingCart} from 'react-icons/fa';
import Header from './header';
import Footer from './footer';

const MarketPlace = ({user, cartCount}) => {
	const [secteurs, setSecteurs] = useState([]);
	const [selectedSecteur, setSelectedSecteur] = useState('');
	const [selectedPrixMax, setSelectedPrixMax] = useState('');
	const [agents, setAgents] = useState([]);
	const [pagination, setPagination] = useState({
		hasOtherPages: false,
		hasPrevious: false,
		hasNext: false,
		pages: [],
		currentPage: 1,
		previousPageNumber: null,
		nextPageNumber: null
	});

	const handleFilterChange = (form) => {
		const formData = new FormData(form);
		const secteur = formData.get('secteur');
		const prixMax = formData.get('prix_max');
		setSelectedSecteur(secteur);
		setSelectedPrixMax(prixMax);
		// Simulate filtering logic here
	};

	const handlePageChange = (pageNumber) => { // Simulate pagination logic here
		setPagination((prev) => ({
			...prev,
			currentPage: pageNumber
		}));
	};

	return (
		<>
			<Header user={user} cartCount={cartCount}></Header>
			<section className="py-20 bg-gray-900">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold mb-4">
							<span className="gradient-text">Marketplace</span>
							des Agents IA
						</h2>
						<p className="text-xl text-gray-300 max-w-3xl mx-auto">
							Trouvez l'agent IA parfait pour votre entreprise, filtre par secteur ou prix.
						</p>
					</div>

					{/* Formulaire de filtrage */}
					<form onSubmit={
							(e) => {
								e.preventDefault();
								handleFilterChange(e.target);
							}
						}
						className="mb-8 flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
						<select name="secteur" className="flex-1 bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yitro-light gradient-border"
							value={selectedSecteur}
							onChange={
								(e) => setSelectedSecteur(e.target.value)
						}>
							<option value="">Tous les secteurs</option>
							{
							secteurs.map((secteur) => (
								<option key={
										secteur.secteur
									}
									value={
										secteur.secteur
								}>
									{
									secteur.secteur
								} </option>
							))
						} </select>
						<input type="number" name="prix_max" placeholder="Prix max (MGA)"
							value={selectedPrixMax}
							onChange={
								(e) => setSelectedPrixMax(e.target.value)
							}
							className="flex-1 bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yitro-light gradient-border"/>
						<button type="submit" className="py-3 px-6 rounded-lg bg-gradient-to-r from-yitro-dark to-yitro-light text-white hover:from-yitro-light hover:to-yitro-dark transition transform hover:scale-105 shadow-lg">
							Filtrer
						</button>
					</form>

					{/* Liste des agents */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{
						agents.length > 0 ? (agents.map((agent) => (
							<div key={
									agent.id
								}
								className="bg-gray-900 bg-opacity-30 rounded-2xl overflow-hidden shadow-xl gradient-border card-hover">
								<div className="h-56 bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center relative overflow-hidden">
									{
									agent.image ? (
										<img src={
												agent.image.url
											}
											alt={
												agent.nom
											}
											className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"/>
									) : (
										<FaRobot className="text-6xl text-white opacity-90"/>
									)
								}
									<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-2 text-white">
										{
										agent.nom
									}</h3>
									<p className="text-gray-300 mb-4 text-sm">
										{
										agent.description.length > 100 ? `${
											agent.description.substring(0, 100)
										}...` : agent.description
									} </p>
									<div className="flex flex-wrap gap-2 mb-4">
										{
										agent.tags.split(' ').map((tag, index) => (
											<span key={index}
												className="px-3 py-1 rounded-full text-xs bg-yitro-dark text-white">
												{tag} </span>
										))
									} </div>
									<div className="flex items-center justify-between mt-4">
										<span className="text-lg font-semibold gradient-text">
											{
											agent.prix
										}
											MGA</span>
										<button onClick={
												() => console.log(`Acheter agent ${
													agent.id
												}`)
											}
											className="px-4 py-2 rounded-lg bg-gradient-to-r from-yitro-dark to-yitro-light text-white hover:from-yitro-light hover:to-yitro-dark transition text-sm font-medium">
											<FaShoppingCart className="mr-2"/>
											Acheter
										</button>
									</div>
								</div>
							</div>
						))) : (
							<div className="col-span-full text-center py-12">
								<FaRobot className="text-5xl text-yitro-accent mb-4 mx-auto"/>
								<p className="text-xl text-gray-300">Aucun agent trouvé avec ces critères.</p>
								<button onClick={
										() => {
											setSelectedSecteur('');
											setSelectedPrixMax('');
										}
									}
									className="mt-4 inline-block px-6 py-2 rounded-lg bg-gray-800 text-yitro-light hover:text-white transition">
									Réinitialiser les filtres
								</button>
							</div>
						)
					} </div>

					{/* Pagination */}
					{
					pagination.hasOtherPages && (
						<div className="mt-12 flex justify-center">
							<div className="flex space-x-2">
								{
								pagination.hasPrevious && (
									<button onClick={
											() => handlePageChange(pagination.previousPageNumber)
										}
										className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yitro-dark transition">
										<FaChevronLeft className="text-white"/>
									</button>
								)
							}
								{
								pagination.pages.map((num) => (
									<button key={num}
										onClick={
											() => handlePageChange(num)
										}
										className={
											`w-10 h-10 rounded-full ${
												pagination.currentPage === num ? 'bg-gradient-to-r from-yitro-dark to-yitro-light text-white font-bold' : 'bg-gray-800 text-white hover:bg-yitro-dark transition'
											} flex items-center justify-center`
									}>
										{num} </button>
								))
							}
								{
								pagination.hasNext && (
									<button onClick={
											() => handlePageChange(pagination.nextPageNumber)
										}
										className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-yitro-dark transition">
										<FaChevronRight className="text-white"/>
									</button>
								)
							} </div>
						</div>
					)
				} </div>
			</section>
            <Footer></Footer>
		</>
	);
};

export default MarketPlace;
