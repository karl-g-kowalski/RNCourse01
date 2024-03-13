import { Button, Image, Modal, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';

export default function GoalInput(props) {

    const [goalText, setGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setGoalText(enteredText);
    };

    function addGoalHandler() {
        props.onAddGoal( goalText );
        setGoalText("");
    }

    // need props for text input and button press
    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/goal.png')} style={styles.image} />
                <TextInput 
                    onChangeText={goalInputHandler} 
                    placeholder='Your course goal' 
                    style={styles.textInput}
                    value={goalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button 
                            title='Cancel' 
                            onPress={props.onCancel}
                            color="#f31282"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button 
                            title='Add Goal' 
                            onPress={addGoalHandler}
                            color="#b180f0"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        backgroundColor: '#311b6b',
        padding: 16,
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 6,
        borderColor:'#e4d0ff',
        backgroundColor:'#e4d0ff',
        color: '#120438',
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        width: '100',
        marginHorizontal: 8,
        marginTop: 16
    },
    image: {
        width: 100,
        height: 100,
        margin: 20
    }
});