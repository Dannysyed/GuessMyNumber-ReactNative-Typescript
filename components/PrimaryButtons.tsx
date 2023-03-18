import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { PropsWithChildren } from 'react'

const PrimaryButtons: React.FC<PropsWithChildren & { onPress: () => void, }> = (props) => {
    return (
        <View style={styles.Outlet}>
            <Pressable style={({ pressed }) => pressed ? [styles.pressed, styles.container] : styles.container} onPress={props.onPress} android_ripple={{ color: '#ac12a4' }}>
                <Text style={styles.text}>{props.children}</Text>
            </Pressable>
        </View >
    )
}

export default PrimaryButtons

const styles = StyleSheet.create({
    Outlet: {
        borderRadius: 40,
        margin: 4,
        overflow: 'hidden'
    },
    container: {
        backgroundColor: '#60065c',
        // borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        margin: 4,
        elevation: 2,
        color: 'white',
        textAlign: 'center'

    },
    pressed: {
        opacity: 0.3
    },
    text: {
        color: 'white',
        textAlign: 'center'
    }
})