import { View,StyleSheet } from "react-native";

const Header = () => {
    return ( <>
        <View style={styles.header}>
            <View>
                <Text style={styles.headerText}>Review App</Text>
            </View>
        </View>
    </> );
}
 
export default Header;

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    headerText:{
        fontWeight: 'bold',
        fontSize: 30,
        color: '#333',
        letterSpacing: 1,
        textAlign: 'center'
    }
})