import { View, Text, Pressable, StyleSheet } from "react-native";
import color from "../colors.json";

const GoalItems = (props) => {
    return (
        <View style={styles.goalItemContainer}>
            <Pressable
                android_ripple={styles.itemRipple}
                delayLongPress={800}
                onLongPress={props.deleteItem.bind(this, props.children)}
                style={({ pressed }) => pressed && styles.pressedGoalItem}
            >
                <Text style={styles.goalItemText}>{props.children}</Text>
            </Pressable>
        </View>
    );
};
export default GoalItems;

const styles = StyleSheet.create({
    goalItemContainer: {
        borderWidth: 1,
        borderColor: color.dark,
        borderRadius: 5,
        width: 370,
        marginVertical: 8,
    },
    goalItemText: {
        textAlign: "center",
        marginVertical: 20,
        color: color.warning,
    },
    itemRipple: {
        color: color.dark,
        height: 900,
    },
    pressedGoalItem: {
        opacity: 0.9,
    },
});
