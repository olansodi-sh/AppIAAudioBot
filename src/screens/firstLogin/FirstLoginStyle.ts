import { center } from "@shopify/react-native-skia";
import { StyleSheet } from "react-native";

export const FirstLoginStyle = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#E6E9EF',
    },
    
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E6E9EF',
        padding: 20,
    },
    
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        paddingBottom: 30,
    },
    
    logoText: {
        marginLeft: 10,
        fontSize: 48,
        color: '#333',
        fontFamily: 'Raleway-Regular',
        textAlign: 'center'
    },
    
    form: {
        width: '100%',
    },

    inputForm: {
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        textAlign: 'center',
    },

    input: {
        width: 280,
        textAlign: 'center',
        fontSize: 16,
        color: "#555",
        paddingHorizontal: 20,
        fontFamily: 'Montserrat-Regular',
    },

    buttonContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    submitButton: {
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

    modalContainer: {
        position: 'absolute',
        flex: 1,
        backgroundColor: 'green'
    }

})