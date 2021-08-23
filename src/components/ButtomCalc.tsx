import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getColor } from '../utils';


interface Props {
    text: string;
    color?: 'grey' | 'naranja' | 'default';
    btnWidth?: boolean;
    action: (numberText: string) => void;
}

const ButtomCalc = ({ text, color = 'default', btnWidth = false, action }: Props) => {


    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={{
                ...styles.btn,
                backgroundColor: getColor(color),
                width: (btnWidth) ? 180 : 80
            }}>
                <Text style={{ ...styles.btnText, color: (color === "grey") ? 'black' : 'white' }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10

    },

    btnText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300'
    },
});

export default ButtomCalc
