import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import PrimaryButtons from '../components/PrimaryButtons'
import User from './models'

const StartGameScreen = () => {
    let [divesh, setdivesh] = React.useState<User>({ name: 'sdf', age: 1, id: 1 })
    // setdivesh({})
    return (
        <View style={styles.innerContainer}>
            <TextInput style={styles.inputcolor} maxLength={2} keyboardType={'number-pad'} />
            <View style={styles.button}>
                <View style={styles.buttoContain}>
                    <PrimaryButtons>Reset</PrimaryButtons>
                </View>
                <View style={styles.buttoContain}><PrimaryButtons>Confirm</PrimaryButtons></View>


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