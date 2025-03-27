import React from 'react'
import { Text, View } from 'react-native'
import FloatButton from '../../components/floatButton/FloatButton'

import { HomeScreenStyle } from './HomeScreenStyle'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
	return (
		<SafeAreaView style={HomeScreenStyle.safeArea}>
			<View style={HomeScreenStyle.container}>
				<Text style={{fontFamily: 'Raleway-Regular'}}>Home Screen</Text>

				<View style={HomeScreenStyle.floatButtonContainer}>
					<FloatButton />
				</View>
			</View>
		</SafeAreaView>
	)
}

export default HomeScreen;