import { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function GuessTheNumber(props) {

    const { maxTries, maxValue } = props

    const [guess, setGuess] = useState("")
    const [score, setScore] = useState(0)
    const [tries, setTries] = useState(0)
    const [bestScore, setBestScore] = useState(0)

    const triesJSX = () => {
        const result = []
        for (let i = 0; i < maxTries; i++) {
            result.push(
                <View style={tries > i ? [styles.box, styles.fail] : styles.box}></View>
            )
        }
        return result
    }

    const handleGuess = () => {

        // Example fetch (pas utile ici)
        fetch("https://api.agify.io?name=michael")
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch((e) => console.log(e))

        const result = Math.floor(Math.random()*maxValue + 1)
        if (result === parseInt(guess)) {
            setScore(c => c + 1)
        }
        else {
            if (tries < maxTries - 1) {
                setTries(c => c + 1)
            }
            else {
                if (score > bestScore) {
                    setBestScore(score)
                }
                setTries(0)
                setScore(0)
            }
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Guess the number !</Text>
            <TextInput style={styles.input} value={guess} onChangeText={t => setGuess(t)}></TextInput>
            <Pressable onPress={handleGuess} style={styles.button}>
                <Text style={styles.textButton}>Guess !</Text>
            </Pressable>
            <Text>Score actuel : {score}</Text>
            <View style={styles.boxContainer}>
                {triesJSX()}
            </View>
            <Text>Best score : {bestScore}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    title: {
        fontSize: 30,
        marginBottom: 8
    },
    input: {
        width: 200,
        padding: 8,
        borderStyle: "solid",
        borderColor: "black",
        borderRadius: 16,
        borderWidth: 1,
        marginBottom: 8
    },
    button: {
        width: 200,
        padding: 10,
        backgroundColor: "purple",
        borderRadius: 16,
        marginBottom: 8
    },
    textButton: {
        textAlign: "center",
        color: "white"
    },
    boxContainer: {
        flexDirection: "row",
        gap: 2
    },
    box: {
        width: 50,
        height: 80,
        backgroundColor: "orange",
        opacity: 0.5
    },
    fail: {
        opacity: 1
    }
})