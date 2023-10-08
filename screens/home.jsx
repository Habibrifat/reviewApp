import { View,StyleSheet,Text, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback } from "react-native";
import {globalStyles}  from "../styles/global";
import { useState } from "react";
import Card from "../shared/card";
import { MaterialIcons} from '@expo/vector-icons';
import ReviewForm from "./reviewForm";
import { Keyboard } from "react-native";

export default function Home({ navigation }){

    const [modalOpen , setModalOpen] = useState(false); 
    const [review,setReview] = useState([
        { title: 'Zelda, Breath of Fresh Airports',rating: 5, body: 'Zelda', key: '1'},
        { title: 'Gotta Catch Them All',rating: 4, body: 'Zelda', key: '2'},
        { title: 'Fresh, Air fly birds ',rating: 3, body: 'Zelda', key: '3'},
        { title: 'No,So "Final" Fantasy',rating: 5, body: 'Zelda', key: '5'},
    ]);

    const handleItemPress = (item) => {
        navigation.navigate('Review', { item });
    };
    
    const addReview = (reviews) => {
        reviews.key = Math.random().toString();
        setReview((currentReviews) => {
            return [reviews, ...currentReviews];
        });
        setModalOpen(false);
    }

    return(
        <View style={globalStyles.container}>

            {/* Modal */}
                <Modal visible={modalOpen} animationType="slide">
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
                        <View style={styles.modalContent}>
                            <MaterialIcons
                                name="close"
                                size={24}
                                style={{...styles.modalToggle,...styles.modalClose}}
                                onPress={()=>setModalOpen(false)}
                                />
                            {/* <Text>Hello from the modal</Text> */}
                            <ReviewForm addReview={addReview}/>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>

                <MaterialIcons
                    name="add"
                    size={24}
                    style={{...styles.modalToggle}}
                    onPress={()=>setModalOpen(true)}
                />
            {/* Modal */}

            <Text style={globalStyles.titleText}>Home Screens</Text>
            <Text style={globalStyles.titleText}>Home Screens</Text>
            <Text style={globalStyles.titleText}>Home Screens</Text>
            <Text style={globalStyles.titleText}>Home Screens</Text>
            <FlatList
                data={review}
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={() => handleItemPress(item)}>
                        <Card>
                            <Text style={styles.title}>{ item.title }</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
            <Button
                title="Go to Review"
                onPress={() => navigation.navigate('Review')}
            />
        </View>

    )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
    },
    title:{
        // fontFamily: 'Dancing',
        fontSize:24,
        textAlign:"center"
      },
      modalToggle:{
        marginBottom:10,
        borderWidth:1,
        borderColor:'#f2f2f2',
        padding:10,
        borderRadius:10,
        alignSelf: 'center',
      },
      modalClose:{
        marginTop:20,
        marginBottom:0,
      },
      modalContent: {
        flex: 1,
      },

})