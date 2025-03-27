import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/home/HomeScreen";
import NotFoundScreen from "../../screens/notFound/NotFoundScreen";
import ChatScreen from "../../screens/chat/ChatScreen";
import FirstLoginScreen from "../../screens/firstLogin/FirstLogin";
import SecondLoginScreen from "../../screens/secondLogin/SecondLogin";


export type RootStackParams = {
    HomeScreen: undefined,
    ChatScreen: undefined,
    NotFoundScreen: undefined,
	FirstLogin: undefined,
	SecondLogin: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="FirstLogin" screenOptions={{
			headerShown: false
		}}>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="ChatScreen" component={ChatScreen} />
			<Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
			<Stack.Screen name="FirstLogin" component={FirstLoginScreen} />
			<Stack.Screen name="SecondLogin" component={SecondLoginScreen} />
		</Stack.Navigator>
	);
}

export default StackNavigator;