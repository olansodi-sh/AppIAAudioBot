import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FloatButtonStyle } from './FloatButtonStyle'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../routes/stackNavigator/StackNavigator';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IAChatButtonBack from '../backs/IAChatButtonBack';

const FloatButton = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <IAChatButtonBack />
            <TouchableOpacity
                style={FloatButtonStyle.floatButton}
                onPress={() => navigation.navigate("ChatScreen")}
                activeOpacity={0.7}
            >
                <View style={FloatButtonStyle.iconContainer}>
                    <MaterialCommunityIcons name='robot-excited' size={35} color="#023047" />
                </View>
            </TouchableOpacity>
        </View>
  )
}

export default FloatButton;
