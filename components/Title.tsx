import { StyleSheet, Text, View } from 'react-native'
import React, { useState, FC, PropsWithChildren } from 'react'

const Title: FC<PropsWithChildren> = (prop) => {
    return (
        <View>
            <Text style={styles.title}>{prop.children}</Text>
        </View>
    )
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12

    }
})