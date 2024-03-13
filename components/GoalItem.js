import { Pressable, StyleSheet, Text, View } from 'react-native';

function GoalItem(props) {
    return  (
        // whenever any of the subviews under Pressable is tapped/clicked/pressed, the onPress function will execute
        // the JavaScript bind() function takes two parameters
        //      the first is the "this" pareameter (we're not using it here)
        //      the second is the paramter to be passed into the function on which the bind() function is called
        <View  style={styles.goalItem}>
            <Pressable 
                android_ripple={{color: '#dddddd'}} 
                onPress={props.onDeleteItem.bind(this, props.goalID)}
                style={ ({pressed}) => { pressed && styles.pressedItem } }
            >
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    pressedItem: {
        opacity: 0.5,
    },
    goalText: {
        color: 'white',
        padding: 8,
    }
});


export default GoalItem;

