import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {
  AudioSession,
  LiveKitRoom,
  useLocalParticipant,
  registerGlobals,
  useRoomContext,
  useDataChannel,
  ReceivedDataMessage,
} from '@livekit/react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { LocalParticipant, LogLevel, Participant, ParticipantEvent, RemoteParticipant, RoomEvent, setLogLevel, TrackPublication } from 'livekit-client';
import MicroButtonBack from '../backs/MicroButtonBack';

registerGlobals();
setLogLevel(LogLevel.debug);

const wsURL = 'https://livekit-test.amovil.com.co/';

interface Props {
	handleTranscription: (result: any, isUserTrack: boolean) => void;
}

export default function LiveKitApp({ handleTranscription }: Props) {
	const [token, setToken] = useState("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSmFtZXMgQW1heWEiLCJ2aWRlbyI6eyJyb29tSm9pbiI6dHJ1ZSwicm9vbSI6Ijg0MTg5MS1NNzU2MS0yMjIyMjIyMiIsImNhblB1Ymxpc2giOnRydWUsImNhblN1YnNjcmliZSI6dHJ1ZSwiY2FuUHVibGlzaERhdGEiOnRydWUsImNhblB1Ymxpc2hTb3VyY2VzIjpbImNhbWVyYSIsIm1pY3JvcGhvbmUiLCJzY3JlZW5fc2hhcmUiLCJzY3JlZW5fc2hhcmVfYXVkaW8iXSwiY2FuVXBkYXRlT3duTWV0YWRhdGEiOnRydWV9LCJzdWIiOiJwcmV2ZW50YSIsImlzcyI6ImRldmtleSIsIm5iZiI6MTc0MjY1MTIzNSwiZXhwIjoxNzQyNjcyODM1fQ.VtE33tba-diIJje6FdM7_8-NPJzJqS58DXELzukAnWo");
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => setIsReady(true), 2000);
		return () => clearTimeout(timer);
	}, []);
	
	useEffect(() => {
		const startAudio = async () => {
			try {
				await AudioSession.startAudioSession();
				console.log("AudioSession iniciada");
			} catch (err) {
				console.error("Error iniciando AudioSession:", err);
			}
		};
		startAudio();
		return () => {
		  AudioSession.stopAudioSession();
		};
	}, []);


	return isReady ? (
		<LiveKitRoom
			token={token}
			serverUrl={wsURL}
			connect={true}
			audio={true}
			onConnected={() => console.log("✅ Conectado a la sala")}
			onDisconnected={() => console.log("⚠️ Sala desconectada")}
			onError={(error) => console.error("❌ Error en LiveKitRoom:", error)}
		>
			<TranscriptionHandler handleTranscription={handleTranscription} />
			<ManageSubscriptions />
			<AudioControl />
		</LiveKitRoom>
	) : (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
		  <Text>Iniciando conexión...</Text>
		</View>
	);
};

const TranscriptionHandler = ({ handleTranscription }: { handleTranscription: (result: any, isUserTrack: boolean) => void }) => {
	const room = useRoomContext(); // 🔹 Ahora sí estamos dentro de LiveKitRoom
	const { localParticipant } = useLocalParticipant();
	const [isUserTrack, setIsUserTrack] = useState(true);
	console.log("room:", room);
	console.log("localParticipant:", localParticipant);
	
	// console.log("📌 Participantes conectados:", room.remoteParticipants);
	// const { send } = useDataChannel((dataMessage: ReceivedDataMessage<string>) => {
	// 	console.log("📩 Callback de useDataChannel ejecutado!", dataMessage);
		
	// 	let decoder = new TextDecoder("utf-8");
	// 	let message = decoder.decode(dataMessage.payload);
	// 	let sender = dataMessage.from?.identity ?? "Desconocido";
	
	// 	console.log("📩 Mensaje recibido:", { sender, content: message });
	
	// 	handleTranscription({ sender, content: message });
	// });

	useEffect(() => {
		if (!room) return;

		const onTranscription = (result: any) => {
			console.log("🎤 Evento Completo de Transcripción:", result);
			if (result && result[0].final) {
				handleTranscription(result, false);
			}
		};

		room.on(RoomEvent.TranscriptionReceived, onTranscription);
	
		return () => {
			room.off(RoomEvent.TranscriptionReceived, onTranscription);
		};
	}, [room, handleTranscription]);
  
	return null;
};

const ManageSubscriptions = () => {
	const room = useRoomContext(); // Obtiene la sala actual
  
	useEffect(() => {
	  const handleParticipantConnected = (participant: RemoteParticipant) => {
		console.log("🔹 Nuevo participante remoto:", participant.identity);
  
		participant.trackPublications.forEach(publication => {
		  if (!publication.isSubscribed) {
			publication.setSubscribed(true);
			console.log("✅ Suscrito a la pista:", publication.trackSid);
		  }
		});
  
		// Escuchar cambios en las pistas
		participant.on(ParticipantEvent.TrackPublished, (publication) => {
		  if (!publication.isSubscribed) {
			publication.setSubscribed(true);
			console.log("📡 Suscribiéndose a nueva pista publicada:", publication.trackSid);
		  }
		});
	  };
  
	  // Escuchar cuando un participante se conecta
	  room.on(RoomEvent.ParticipantConnected, handleParticipantConnected);
  
	  return () => {
		room.off(RoomEvent.ParticipantConnected, handleParticipantConnected);
	  };
	}, [room]);
  
	return null;
};

const AudioControl = () => {
	const [isMuted, setIsMuted] = useState(true);
	
	const { localParticipant } = useLocalParticipant();
  
	const toggleAudio = async () => {
		if (isMuted) {
		  await localParticipant.setMicrophoneEnabled(true); // Activar audio
		} else {
		  await localParticipant.setMicrophoneEnabled(false); // Silenciar audio
		}
		setIsMuted(!isMuted);
	};
  
	return (
		<View style={styles.container}>
			<MicroButtonBack ancho={80} alto={80} enabled={!isMuted} />
			<TouchableOpacity onPress={toggleAudio} style={styles.microButton}>
				<MaterialCommunityIcons name={isMuted ? "microphone-off" : "microphone"} size={30} color={"#E6E9EF"} />
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 20,
		backgroundColor: '#E6E9EF',
	},
	microButton: {
		width: 80,
		height: 80,
		padding: 10,
		borderRadius: '50%',
		justifyContent: 'center',
		alignItems: 'center',
		overflow: 'hidden',
	},
});