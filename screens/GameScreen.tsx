import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GameScreen = () => {
    return (
        <View>
            <Text>Opponent Guess</Text>
            Guess
            <View>
                <Text>Higher or lower ?</Text>+-
            </View>
            <View>LOG ROUND</View>
        </View>
    )
}

export default GameScreen

const styles = StyleSheet.create({})