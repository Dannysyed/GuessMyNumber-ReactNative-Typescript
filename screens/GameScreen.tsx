import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState, FC } from 'react'
import Title from '../components/Title'
import PrimaryButtons from '../components/PrimaryButtons'
let minNumber = 1
let maxNumber = 100
const GameScreen: FC<{ currentNumber: number }> = ({ currentNumber }) => {
    function generateRandomBetween(min: number, max: number, exclude: number): number {
        const rndNum = Math.floor(Math.random() * (max - min)) + min;

        if (rndNum === exclude) {
            return generateRandomBetween(min, max, exclude);
        } else {
            return rndNum;
        }
    }
    const initialGuess = generateRandomBetween(minNumber, maxNumber, currentNumber)
    const [currentGuess, setCurrentGuess] = useState(initialGuess)



    console.log(currentGuess, '>>>>>>>>>>>>')

    const ChangeGuess = (data: string) => {
        if (data === 'decrease' && currentGuess < currentNumber || data === 'increase' && currentGuess > currentNumber) {
            Alert.alert('ITs is a lie')
        }

        if (data == 'decrease') {
            maxNumber = currentGuess
            setCurrentGuess(generateRandomBetween(minNumber, maxNumber, currentGuess))
        }
        else {
            minNumber = currentGuess + 1
            setCurrentGuess(generateRandomBetween(minNumber, maxNumber, currentGuess))
        }
    }
    return (
        <View style={styles.screen}>
            <Title>Opponent Guess</Title>
            <Text style={styles.Guess}>{currentGuess}</Text>
            <View>
                <Text>Higher or lower ?</Text>
                <PrimaryButtons onPress={ChangeGuess.bind(null, 'increase')}>+</PrimaryButtons>
                <PrimaryButtons onPress={ChangeGuess.bind(null, 'decrease')}>-</PrimaryButtons>
            </View>
            <View><Text>LOG ROUND</Text></View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 30,
        marginTop: 10
    },
    Guess: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#61047b',
        textAlign: 'center',
        borderWidth: 3,
        borderColor: '#61047b',
        margin: 30,
        paddingVertical: 30

    }

})