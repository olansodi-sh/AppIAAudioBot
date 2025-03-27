import { StyleSheet } from "react-native";

export const HomeScreenStyle = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#E6E9EF',
    },

    container: {
        height: '100%',
        padding: 20,
        backgroundColor: '#E6E9EF',
        position: 'relative',
    },

    text: {
        color: '#212529',
        fontSize: 18,
    },
    
    floatButtonContainer: {
        position: 'absolute',
        bottom: 40,
        right: 40,
    },

})