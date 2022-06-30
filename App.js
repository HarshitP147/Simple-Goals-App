import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    View,
    Alert,
    ScrollView,
    Button,
    Vibration,
    Text,
} from "react-native";

import color from "./colors.json";

import GoalInput from "./components/GoalInput";
import GoalItems from "./components/GoalItems";

export default function App() {
    const [goalList, setGoalList] = useState([]);
    const [visible, setVisible] = useState(false);

    function deleteGoalItem(name) {
        setGoalList((list) => list.filter((items) => items != name));
        Vibration.vibrate(100);
    }

    function deleteAll() {
        Alert.alert("Hold up", "Are you sure you want to delete all goals?", [
            {
                text: "No",
            },
            {
                text: "Yes",
                onPress: () => {
                    setGoalList([]);
                    Vibration.vibrate(300);
                },
            },
        ]);
    }

    return (
        <>
            <StatusBar style="inverted" backgroundColor={color.black} />
            <View
                style={{
                    ...styles.container,
                    backgroundColor: visible ? "rgba(0,0,0,0.95)" : color.black,
                }}
            >
                <GoalInput
                    setGoalList={setGoalList}
                    visible={visible}
                    setVisible={setVisible}
                />
                <View style={{ alignItems: "center" }}>
                    <ScrollView keyboardDismissMode="on-drag">
                        {goalList.map((goal, index) => (
                            <GoalItems key={index} deleteItem={deleteGoalItem}>
                                {goal}
                            </GoalItems>
                        ))}
                    </ScrollView>
                </View>
            </View>
            <View style={styles.actionButtonContainer}>
                <Text style={styles.appHeading}>The Goals App</Text>
                <View style={styles.actionButton}>
                    <Button
                        title="Delete all"
                        color={color.danger}
                        onPress={deleteAll}
                    />
                </View>
                <View style={styles.actionButton}>
                    <Button
                        title="Add items"
                        color={color.info}
                        onPress={() => setVisible(true)}
                    />
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop: 22,
        paddingTop: 22,
        flex: 1,
    },
    appHeading: {
        color: color.secondary,
        fontSize: 30,
        paddingVertical: 10,
    },
    actionButtonContainer: {
        backgroundColor: color.black,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
    },
    actionButton: {
        paddingVertical: 6,
        width: 360,
    },
});
