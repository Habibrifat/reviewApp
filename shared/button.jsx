import { Text, TouchableOpacity, View,StyleSheet } from "react-native";

const FlatButton = ({text,onPress}) => {
    return ( 
        <>
            <TouchableOpacity onPress={onPress}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        {text}
                    </Text>
                </View>
            </TouchableOpacity>
        </>
     );
}
 
export default FlatButton;

const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical: 14,
        PaddingHorizontal:10,
        backgroundColor: '#f01d71',
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    },
})