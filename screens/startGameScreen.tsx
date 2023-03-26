import { StyleSheet, Text, TextInput, View, Alert } from 'react-native'
import React, { useState, useEffect, FC } from 'react'
import PrimaryButtons from '../components/PrimaryButtons'
import User from './models'

const StartGameScreen: FC<{ pickedNumber: (data: any) => void }> = (prop) => {
    let [inputNumber, setInputNumber] = useState<string>('')
    let [randomNum, setrandom] = useState<number>(0)
    useEffect(() => {
        setrandom(Math.floor(Math.random() * 10) + 1)
    }, [])


    let onChangeNumber = (enteredText: string) => {
        let numberinput = Number(enteredText)
        setInputNumber(enteredText)
        // console.log(numberinput)

    }
    let onResetHandle = () => {
        alert('onreset')
    }
    let onConfirmHandle = () => {
        if (isNaN(Number(inputNumber)) || Number(inputNumber) > 99 || Number(inputNumber) <= 0) {
            Alert.alert('NOT A VALID INPUT',
                'PLease reset now',
                [{ text: 'okay', style: 'destructive', onPress: onResetHandle }])
        }
        else {

            prop.pickedNumber(Number(inputNumber))


            // if (Number(inputNumber) === randomNum) {
            //     Alert.alert('You won',
            //         'PLease reset now',
            //         [{ text: 'okay', style: 'destructive', onPress: onResetHandle }])
            // }
            // else if (Number(inputNumber) > randomNum) {
            //     alert('Lower')
            // }
            // else if (Number(inputNumber) < randomNum) {
            //     alert('Higer')
            // }
            // else {
            //     alert(false)
            // }
        }

    }
    return (
        <View style={styles.innerContainer}>
            <TextInput style={styles.inputcolor} maxLength={2} keyboardType={'number-pad'} onChangeText={onChangeNumber} value={inputNumber} />
            <View style={styles.button}>
                <View style={styles.buttoContain}>
                    <PrimaryButtons onPress={onResetHandle}>Reset</PrimaryButtons>
                </View>
                <View style={styles.buttoContain}><PrimaryButtons onPress={onConfirmHandle}>Confirm</PrimaryButtons></View>
            </View>
        </View>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    innerContainer:
    {
        display: 'flex',
        alignItems: 'center',
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: '#61047b',
        borderRadius: 8,
        elevation: 10,
    },
    inputcolor:
    {
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: '#f0c741',
        borderBottomWidth: 2,
        color: '#f8d669',
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        margin: 20
    },
    buttoContain: {
        flex: 1
    }
})