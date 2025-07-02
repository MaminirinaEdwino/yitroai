import {FaRobot, FaUser, FaBolt, FaPaperPlane} from "react-icons/fa6";
import UserMessage from "./userMessage";
import BotMessage from "./botMessage";
import { useState } from "react";

export default function Chatbot() {
    const [listMessage, setListMessage] = useState([]);
    const [message, setMessage] = useState("");
    const sendMessage = (e)=>{
		
    }
	return <div className="md:w-1/2 flex justify-center">
		<div className="relative w-full max-w-md">
			<div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-yitro-light opacity-20 blur-xl"></div>
			<div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-yitro-accent opacity-20 blur-xl"></div>
			<div className="relative bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-2xl p-6 shadow-2xl gradient-border float">
				<div className="flex justify-center mb-6">
					<div className="relative">
						<div className="w-20 h-20 rounded-full bg-gradient-to-r from-yitro-dark to-yitro-light flex items-center justify-center pulse">
							<FaRobot className="fas fa-robot text-3xl text-white"></FaRobot>
						</div>
						<div className="badge">
							<FaBolt className="fas fa-bolt"></FaBolt>
						</div>
					</div>
				</div>
				<div>
					{ listMessage.length == 0 && <UserMessage message={"Je cherche une IA pour automatiser mon service client, que me conseillez-vous ?"}></UserMessage>}
					{listMessage.length == 0 && <BotMessage message={<p className="text-sm text-white">Notre agent
					<strong>Yitro-Chat Pro</strong>
					est parfait pour cela ! Il gère 85% des requêtes clients avec une satisfaction de 94%. Essayez la démo gratuite !</p>}></BotMessage>}

				</div>
				<div className="mt-4 flex items-center">
					<input type="text" placeholder="Posez votre question à notre assistant..." className="flex-1 bg-gray-900 border border-gray-700 rounded-l-lg py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-yitro-light" onInput={(e)=>setMessage(e.target.value)} value={message}/>
					<button className="bg-gradient-to-r from-yitro-dark to-yitro-light text-white px-4 py-2 rounded-r-lg hover:from-yitro-light hover:to-yitro-dark transition">
						<FaPaperPlane className="fas fa-paper-plane"></FaPaperPlane>
					</button>
				</div>
			</div>
		</div>
	</div>
}
