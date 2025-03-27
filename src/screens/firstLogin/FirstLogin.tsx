import React, { useState, useRef, useEffect } from 'react'
import { Text, View, TextInput, Animated, TouchableOpacity, Alert } from 'react-native'
import { FirstLoginStyle } from './FirstLoginStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import InputFormBack from '../../components/backs/InputFormBack';
import RegularButton from '../../components/backs/RegularButton';
import ModalError from '../../components/error/ModalError';
import { RootStackParams } from '../../routes/stackNavigator/StackNavigator';
import RNSecureStorage, { ACCESSIBLE } from 'rn-secure-storage';

const FirstLoginScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [formData, setFormData] = useState({
        numBusiness: '',
        passBusiness: ''
    });

    const handleChange = (fieldName: string, value: string) => {
        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: value
        }));
    };

    const handleSubmit = () => {
        if (formData.numBusiness != "" && formData.passBusiness != "") {
            console.log(formData);

            RNSecureStorage.setItem("FirstLog", formData.passBusiness, {accessible: ACCESSIBLE.WHEN_UNLOCKED}).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            });

            navigation.navigate("SecondLogin");
        } else {
            setIsModalOpen(true);
        }
    }
    
    const onClose = () => {
        setIsModalOpen(false);
    }

    useEffect(() => {
        RNSecureStorage.exist("FirstLog").then((res) => {
            if (res) {
                navigation.navigate("SecondLogin");
            }
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    



    return (
        <SafeAreaView style={{...FirstLoginStyle.safeArea}}>
            <View style={FirstLoginStyle.container}>
                <View style={FirstLoginStyle.logo}>
                    <Text style={FirstLoginStyle.logoText}>PídeloIA</Text>
                </View>
        
                <View style={FirstLoginStyle.form}>
                    <View style={FirstLoginStyle.inputForm}>
                        <InputFormBack />
                        <TextInput onChangeText={(text) => handleChange("numBusiness", text)} autoCapitalize={'none'} placeholderTextColor="#999" placeholder='Digite el número de empresa' style={FirstLoginStyle.input} />
                    </View>

                    <View style={FirstLoginStyle.inputForm}>
                        <InputFormBack />
                        <TextInput onChangeText={(text) => handleChange("passBusiness", text)} autoCapitalize={'none'} secureTextEntry={true} placeholderTextColor="#999" placeholder='Digite la clave de la empresa' style={FirstLoginStyle.input} />
                    </View>

                    <View style={FirstLoginStyle.buttonContainer}>
                        <RegularButton alto={45} ancho={150} />
                        <TouchableOpacity style={FirstLoginStyle.submitButton} onPress={handleSubmit}>
                            <Text style={FirstLoginStyle.buttonText}>Ingresar</Text>
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

export default FirstLoginScreen;