import React, { useState } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { SecondLoginStyle } from './SecondLoginStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import InputFormBack from '../../components/backs/InputFormBack';
import RegularButton from '../../components/backs/RegularButton';
import ModalError from '../../components/error/ModalError';
import { RootStackParams } from '../../routes/stackNavigator/StackNavigator';

const SecondLoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        document: '',
        zone: '',
        passZone: '',
    });

    const handleChange = (fieldName: string, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSubmit = () => {
        if (formData.document != "" && formData.zone != "" && formData.passZone != "") {
            navigation.navigate("HomeScreen");
        } else {
            setIsModalOpen(true);
        }
    }
    
    const onClose = () => {
        setIsModalOpen(false);
    }



    return (
        <SafeAreaView style={{...SecondLoginStyle.safeArea}}>
            <View style={SecondLoginStyle.container}>
                <View style={SecondLoginStyle.logo}>
                    <Text style={SecondLoginStyle.logoText}>Acceso a Zona</Text>
                </View>
        
                <View style={SecondLoginStyle.form}>
                    <View style={SecondLoginStyle.inputForm}>
                        <InputFormBack />
                        <TextInput onChangeText={(text) => handleChange("document", text)} autoCapitalize={'none'} placeholderTextColor="#999" placeholder='Número de documento' style={SecondLoginStyle.input} />
                    </View>

                    <View style={SecondLoginStyle.inputForm}>
                        <InputFormBack />
                        <TextInput onChangeText={(text) => handleChange("zone", text)} autoCapitalize={'none'} placeholderTextColor="#999" placeholder='Digite número de Zona' style={SecondLoginStyle.input} />
                    </View>
                    
                    <View style={SecondLoginStyle.inputForm}>
                        <InputFormBack />
                        <TextInput onChangeText={(text) => handleChange("passZone", text)} autoCapitalize={'none'} secureTextEntry={true} placeholderTextColor="#999" placeholder='Digite la clave de Zona' style={SecondLoginStyle.input} />
                    </View>

                    <View style={SecondLoginStyle.buttonContainer}>
                        <RegularButton alto={45} ancho={150} />
                        <TouchableOpacity style={SecondLoginStyle.submitButton} onPress={handleSubmit}>
                            <Text style={SecondLoginStyle.buttonText}>Ingresar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {isModalOpen && (
                <ModalError visible={isModalOpen} text='Asegúrate de ingresar todos los datos en el formulario' onClose={onClose} />
            )}
        </SafeAreaView>
    );
}

export default SecondLoginScreen;