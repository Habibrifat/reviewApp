import { StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1,
        padding:20,
    },
    titleText:{
        // fontFamily: 'Poppins',
        fontSize:32,
        textAlign:"center",
        color: '#333'
      },
    paragraph:{
        marginVertical: 8,
        lineHeight: 20,
    },
    input:{
      borderWidth: 1,
      borderColor: '#ddd',
      padding:10,
      fontSize:18,
      borderRadius:6,
    },
    errorText:{
      color: 'red',
      fontSize: 18,
      padding: 10,
      textTransform: 'capitalize',
      fontStyle: 'italic',
    }

    });