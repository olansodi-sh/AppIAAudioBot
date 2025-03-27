import { Box, BoxShadow, Canvas, rect, RoundedRect, rrect, Shadow } from '@shopify/react-native-skia';
import React from 'react'
import { Modal, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from 'react-native-gesture-handler';
import RegularButton from '../backs/RegularButton';

interface Props {
    visible: boolean;
    onClose: () => void;
    text: string;
}

const ModalError = ({ visible, onClose, text }: Props) => {
    return (
        <Modal visible={visible} transparent animationType="fade">
            <View style={styles.overlay}>
                {/* Contenedor del mensaje */}
                <View style={styles.modalContainer}>
                    <Canvas style={{ position: 'absolute', width: 500, height: 600, flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <RoundedRect x={75} y={75} width={350} height={450} r={25} color="#E6E9EF80" />

                        <RoundedRect x={100} y={100} width={300} height={400} r={25} color="#E6E9EF" >
                            <Shadow dx={19} dy={25} blur={20} color="#A6B4C870" inner={false} />
                            <Shadow dx={13} dy={14} blur={12} color="#A6B4C850" inner={false} />
                            <Shadow dx={-8} dy={-8} blur={10} color="#A6B4C850" inner={false} />
                        </RoundedRect>
                    </Canvas>
                    
                    <Text style={styles.errorTopText}>¡Importante!</Text>

                    <Text style={styles.errorBodyText}>{text}</Text>
            
                    <View style={styles.buttonContainer}>
                        <RegularButton alto={45} ancho={150} />
                        <TouchableOpacity style={styles.button} onPress={onClose}>
                            <Text style={styles.buttonText}>Aceptar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgb(230, 233, 239, 0.3)",
    },
    modalContainer: {
        position: "relative",
        width: 300,
        height: 400,
        justifyContent: "center",
        alignItems: "center",
    },
    errorTopText: {
        position: "absolute",
        top: 0,
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 15,
        fontSize: 20,
        color: "#333",
        fontWeight: "bold",
        textAlign: "center",
    },
    errorBodyText: {
        position: "absolute",
        width: '100%',
        paddingHorizontal: 20,
        fontSize: 16,
        color: "#999",
        textAlign: "center",
    },
    buttonContainer: {
        position: "absolute",
        bottom: 0,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    button: {
        height: 45,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#333',
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        fontWeight: 700,
    },
});

export default ModalError;
