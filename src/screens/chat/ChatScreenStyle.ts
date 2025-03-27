import { StyleSheet } from "react-native";

export const ChatScreenStyle = StyleSheet.create({

    safeArea: {
        flex: 1,
        backgroundColor: '#E6E9EF',
    },
    
    container: {
        height: '100%',
        backgroundColor: '#E6E9EF',
    },
    
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#F0F0F0',
        shadowColor: '#000',
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.8,
        shadowRadius: 12,
        elevation: 8,
    },
    
    headerTitle: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#E6E9EF',
    },
    
    quickMessagesWrapper: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        right: 0,
        paddingTop: 30,
        paddingRight: 10,
        flex: 1,
        alignItems: 'flex-end',
        zIndex: 1,
        backgroundColor: '#E6E9EF',
        opacity: 1,
    },
    
    quickMessagesContainer: {
        flexDirection: 'column',
        gap: 10,
    },
    
    quickMessageButton: {
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    
    quickMessageText: {
        fontSize: 14,
        color: '#333',
    },
    
    quickMessageIcon: {
        marginLeft: 15,
        color: '#333',
    },
    
    chatContainer: {
        width: '100%',
        paddingHorizontal: 10,
    },
    
    userMessageBubble: {
        maxWidth: '80%',
        borderRadius: 25,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginRight: 10,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    
    botMessageBubble: {
        maxWidth: '80%',
        borderRadius: 25,
        paddingTop: 25,
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
    
    messageBotText: {
        color: '#333',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 10,
    },
    
    messageUserText: {
        color: '#777',
        fontSize: 14,
        fontFamily: 'Montserrat-Regular',
        paddingHorizontal: 10,
    },
    
    inputContainer: {
        height: 130,
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#A6B4C870',
        backgroundColor: '#E6E9EF',
    },

})