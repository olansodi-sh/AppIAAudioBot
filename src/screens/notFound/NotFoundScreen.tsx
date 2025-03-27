import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/stackNavigator/StackNavigator';
import { NotFoundStyle } from './NotFoundStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NotFoundScreen () {
	const navigation = useNavigation<NavigationProp<RootStackParams>>();
	console.log(navigation.getState());
	return (
		<>
			<View style={NotFoundStyle.container}>
				<Text style={{fontFamily: 'SpaceMono'}}>Este apartado no existe</Text>
				<TouchableOpacity onPress={() => navigation.navigate("HomeScreen")} style={NotFoundStyle.link}>
					<Ionicons name="arrow-undo" size={24} color="black" />
					<Text>Volver a Inicio</Text>
				</TouchableOpacity>
			</View>
		</>
	);
};
