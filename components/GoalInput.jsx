import { useState } from "react";
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Button,
    Alert,
    Modal,
    Image,
} from "react-native";
import color from "../colors.json";

const GoalInput = (props) => {
    const [goal, setGoal] = useState("");

    function changeGoal(value) {
        setGoal(value);
    }

    function cancelGoal() {
        setGoal("");
        props.setVisible(false);
    }

    function addGoalItem() {
        if (goal) {
            props.setGoalList((goals) => [...goals, goal]);
            setGoal("");
        } else {
            Alert.alert("Ooops!", "You can't add empty goals into the list!!");
        }
        props.setVisible(false);
    }

    return (
        <Modal visible={props.visible} animationType="fade" transparent>
            <View style={styles.inputContainer}>
                <View style={{ alignItems: "center" }}>
                    <Image source={require("../assets/goalIcon.png")} />
                </View>
                <TextInput
                    placeholder="Enter a goal"
                    placeholderTextColor={"gray"}
                    style={styles.textInput}
                    value={goal}
                    onChangeText={changeGoal}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.actionButton}>
                        <Button
                            title="Cancel"
                            color={color.danger}
                            onPress={cancelGoal}
                        />
                    </View>
                    <View style={styles.actionButton}>
                        <Button
                            title="Add goal"
                            color={color.success}
                            onPress={addGoalItem}
                        />
                    </View>
                </View>
                <View style={{ alignItems: "center", marginTop: 7 }}>
                    <Text style={{ color: color.info }}>
                        Press and hold to delete a goal item
                    </Text>
                </View>
            </View>
        </Modal>
    );
};
export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 0.5,
        borderRadius: 4,
        marginHorizontal: 8,
        marginTop: "50%",
        paddingHorizontal: 10,
        paddingBottom: 8,
        backgroundColor: color.dark,
    },
    textInput: {
        paddingVertical: 9,
        paddingHorizontal: 12,
        borderWidth: 0.5,
        borderRadius: 5,
        borderColor: color.white,
        color: color.light,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    actionButton: {
        width: 170,
    },
});
