import React, { useState, useRef, useEffect } from 'react'
import { Text, View, TouchableOpacity, ScrollView, TextInput, Animated } from 'react-native'
import { ChatScreenStyle } from './ChatScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LiveKitApp from '../../components/liveKit/LiveKit';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { PERMISSIONS, request } from 'react-native-permissions';
import QuickMessageBack from '../../components/backs/QuickMessageBack';
import SelectedMessageBack from '../../components/backs/UserMessageBack';
import IAMessageBack from '../../components/backs/IAMessageBack';
import UserMessageBack from '../../components/backs/UserMessageBack';

request(PERMISSIONS.ANDROID.RECORD_AUDIO).then(response => {
	console.log(response);
});

type ChatMessage = { 
	id: string;
	text: string;
	agent: string;
	width: number;
	height: number 
};

const ChatScreen = () => {
  	const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
	const [isMenuActive, setIsMenuActive] = useState(true);
	const [selectedOption, setSelectedOption] = useState(0);

    const navigation = useNavigation();
	
	// Animación del ícono
	const iconAnimation = useRef(new Animated.Value(0)).current; // Valor animado para la posición del ícono

	// Función para animar el ícono
	const startIconAnimation = () => {
		Animated.loop(
			Animated.sequence([
			Animated.timing(iconAnimation, {
				toValue: 5,
				duration: 500,
				useNativeDriver: true,
			}),
			Animated.timing(iconAnimation, {
				toValue: 0,
				duration: 500,
				useNativeDriver: true,
			}),
			]),
			{ iterations: 5 }
		).start();
	};
  
	// Inicia la animación cuando el componente se monta
	useEffect(() => {
	  	startIconAnimation();
	}, []);

	// Mensajes rápidos predefinidos
	const quickMessages = [
		"Sintentizar Intención",
	];
	
	// Función para enviar un mensaje rápido
	const sendQuickMessage = (quickMessage: string) => {
		setChatMessages([...chatMessages, { 
			id: (chatMessages.length + 1).toString(), 
			text: quickMessage,
			agent: "user",
			width: 0,
			height: 0
		}]);
	};

	const handleTranscription = (result: any, isUserTrack: boolean) => {
		console.log("🔹 Transcripción recibida:", result[0]);

		let transcriptionResult = result[0];
	
		setChatMessages((prevMessages) => {
			const existingMessage = prevMessages.find(msg => msg.id === transcriptionResult.id);
	
			if (existingMessage) {
				return prevMessages.map(msg =>
					msg.id === transcriptionResult.id ? { ...msg, text: transcriptionResult.text } : msg
				);
			} else {
				return [
					...prevMessages,
					{
						id: transcriptionResult.id,
						text: transcriptionResult.text,
						agent: isUserTrack ? "user" : "IA",
						width: 0,
						height: 0
					}
				];
			}
		});
	};

	const updateMessageSize = (id: string, width: number, height: number) => {
		setChatMessages((prevMessages) =>
			prevMessages.map((msg) =>
				msg.id === id ? { ...msg, width, height } : msg
			)
		);
	};
	
	const sizes = quickMessages.map(() => useState({ width: 0, height: 0 })); // Arreglo de estados

    return (
		<SafeAreaView style={ChatScreenStyle.safeArea}>
			<View style={ChatScreenStyle.container}>
				<View style={ChatScreenStyle.header}>
					<View>
						<MaterialIcons name="arrow-back-ios" size={25} color="black" onPress={() => navigation.goBack()} style={{marginLeft: 10}} />
					</View>
					<Text style={ChatScreenStyle.headerTitle}>IA</Text>
				</View>
		
				<View style={ChatScreenStyle.body}>
					{isMenuActive && (
						<View style={ChatScreenStyle.quickMessagesWrapper}>
							<View style={ChatScreenStyle.quickMessagesContainer}>
							{quickMessages.map((msg, index) => {
								const [size, setSize] = sizes[index]; // Usar el estado correspondiente

								return (
									<TouchableOpacity
										key={index}
										onLayout={(event) => {
											const { width, height } = event.nativeEvent.layout;
											if (size.width !== 0) return;
											setSize({ width, height });
										}}
										onPress={() => {
											sendQuickMessage(msg);
											setIsMenuActive(false);
											setSelectedOption(index + 1);
										}}
										style={ChatScreenStyle.quickMessageButton}
									>
										{/* Fondo del Mensaje con el tamaño dinámico */}
										<QuickMessageBack width={size.width} height={size.height} />

										{/* Contenido */}
										<Text style={ChatScreenStyle.quickMessageText}>{msg}</Text>
										<Animated.View style={{ transform: [{ translateX: iconAnimation }] }}>
											<Ionicons name="return-up-forward-outline" size={20} color="black" style={ChatScreenStyle.quickMessageIcon} />
										</Animated.View>
									</TouchableOpacity>
								);
							})}
							</View>
						</View>
					)}

					{/* Historial del chat */}
					<ScrollView style={ChatScreenStyle.chatContainer} contentContainerStyle={{ flexGrow: 1, paddingVertical: 20 }}>
						{chatMessages.map((msg) => (
							<View
								key={msg.id}
								style={msg.agent == 'user' 
									? ChatScreenStyle.userMessageBubble 
									: ChatScreenStyle.botMessageBubble}
								onLayout={(event) => {
									const { width, height } = event.nativeEvent.layout;
									if (!msg.width) {
										updateMessageSize(msg.id, width, height);
									}
								}}
							>
								{msg.agent === 'user' && msg.width !== 0 ? (
									<UserMessageBack width={msg.width} height={msg.height} />
								) : <IAMessageBack width={msg.width} height={msg.height} />}

								<Text style={
									msg.agent == 'user' 
										? ChatScreenStyle.messageUserText 
										: ChatScreenStyle.messageBotText}
								>{msg.text}</Text>
							</View>
						))}
					</ScrollView>

					{selectedOption == 1 && (
						<View style={ChatScreenStyle.inputContainer}>
							<LiveKitApp handleTranscription={handleTranscription} />
						</View>
					)}
				</View>
			</View>
		</SafeAreaView>
    );
}

export default ChatScreen;