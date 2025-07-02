import { FaRobot } from "react-icons/fa6";

export default function BotMessage({message}) {
	return <div className="bg-gradient-to-r from-yitro-dark to-yitro-light rounded-xl p-4 bot_message animate-fade-in-bot">
		<div className="flex items-start">
			<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
				<FaRobot className="fas fa-robot text-yitro-light"></FaRobot>
			</div>
			<div className="ml-3">
				{message}
			</div>
		</div>
	</div>
}
