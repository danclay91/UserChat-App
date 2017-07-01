import { StyleSheet } from 'react-native'; 

const loginStyles = StyleSheet.create({
    container:{
        paddingTop: 30
    }, 
    userInput: {
        height:30, 
        borderWidth:1, 
        borderColor:'gray'
    },
    loginButton: {
        height:50, 
        width: 100,
        backgroundColor: 'red',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
    }
})

export default loginStyles;