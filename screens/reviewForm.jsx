import { TextInput, View,Text } from 'react-native';
import React from 'react';
import { Formik } from 'formik';
import { Button } from 'react-native';
import { globalStyles } from '../styles/global';
import * as yup from 'yup';
import FlatButton from '../shared/button';


let reviewSchema = yup.object({
    title: yup.string()
        .required()
        .min(4),
    body: yup.string()
        .required()
        .min(8),
    rating: yup.string()
        .required()
        .test(' is num 1-5', 'Rating must be a number 1 - 5',(val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    }),

  });

const ReviewForm = ({addReview}) => {
    return ( 
        <View>
            <Formik
                initialValues={{ title: '',body: '',rating: ''}}
                validationSchema={reviewSchema}
                onSubmit={(values,actions) =>{
                    //  console.log(values)
                    actions.resetForm();
                    addReview(values);
                }}
            >
                {({ handleChange, handleBlur, handleSubmit, values,touched ,errors }) => (
                <View>
                    <TextInput

                        placeholder="Review Title"
                        onChangeText={handleChange('title')}
                        onBlur={handleBlur('email')}
                        value={values.title}
                        style={globalStyles.input}

                    />
                    <Text style={globalStyles.errorText}>{touched.title && errors.title}</Text>
                    <TextInput
                        multiline minHeight={60}
                        placeholder="Review body"
                        onChangeText={handleChange('body')}
                        onBlur={handleBlur('body')}
                        value={values.body}
                        style={globalStyles.input}

                    />
                    <Text style={globalStyles.errorText}>{touched.body && errors.body}</Text>

                    <TextInput

                        placeholder="Review rating (1-5)"
                        onChangeText={handleChange('rating')}
                        onBlur={handleBlur('rating')}
                        value={values.rating}
                        style={globalStyles.input}
                        keyboardType='numeric'
                    />
                    <Text style={globalStyles.errorText}>{touched.rating && errors.rating}</Text>

                    {/* <Button onPress={handleSubmit} title="Submit" color='maroon' /> */}
                    <FlatButton text={'submit'} onPress={handleSubmit} />
                </View>
                )}
            </Formik>
        </View>
     );
}
 
export default ReviewForm;