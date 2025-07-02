import { FaUser } from "react-icons/fa6";

export default function UserMessage({message}) {
	return <div className="bg-gray-900 rounded-xl p-4 my-2 user_msg animate-fade-in animation-time">
		<div className="flex items-start">
			<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center">
				<FaUser className="fas fa-user text-yitro-light"></FaUser>
			</div>
			<div className="ml-3">
				<p className="text-sm text-gray-300">{message}</p>
			</div>
		</div>
	</div>
}
