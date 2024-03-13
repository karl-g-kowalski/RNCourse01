import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

// cannot code like web app
// this is JSX
// apparently commenting OUTSIDE the return() statement is JavaScript commenting,
// while commenting INSIDE the return() has to be JSX commenting

export default function App() {

    // const [goalText, setGoalText] = useState("");
    const [courseGoals, setCourseGoals] = useState([]);
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function addGoalHandler(goalText) {
        //
        //setCourseGoals((courseGoals) => [...courseGoals, goalText]);
        setCourseGoals([...courseGoals, {text: goalText, itemID: Math.random().toString()}]);
        endAddGoalHandler();
    };

    function deleteGoalHandler(goalID) {
        console.log("attempting to delete goal: ID", goalID);
        const updatedCourseGoals = courseGoals.filter( (goal) => {
            return goal.itemID !== goalID;
        });
        console.log("Updated goals:", updatedCourseGoals);
        setCourseGoals(updatedCourseGoals);
    }

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    //  goal management app
    return (
        <>
            <StatusBar style='light' />
            <View style={styles.appContainer}>
                <Button title='Add New Goal' color="#a065ec" onPress={startAddGoalHandler}/>
                <GoalInput onAddGoal={addGoalHandler} onCancel={endAddGoalHandler} visible={modalIsVisible} />
                
                <View style={styles.goalsContainer}>
                    {/* ScrollView is placed in an outer view to control its sizing */}
                    <FlatList 
                            data={courseGoals} 
                            renderItem={(itemData) => {
                        return <GoalItem 
                            text={itemData.item.text} 
                            goalID={itemData.item.itemID} 
                            onDeleteItem={deleteGoalHandler}
                        />;
                        }}
                        keyExtractor={(item, index) => {
                            return item.itemID
                        }}
                    />
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 50, 
        paddingHorizontal: 16,
        backgroundColor: '#1e085a',
    },
    goalsContainer: {
        flex: 5
    },
});
