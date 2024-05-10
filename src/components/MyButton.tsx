import React from "react";
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    TouchableOpacityProps,
} from 'react-native'

interface MyButtonProps extends TouchableOpacityProps {
    title: string
}
export function MyButton({title, style, ...rest}: MyButtonProps) {
    return(
        <TouchableOpacity {...rest} style={[styles.button, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export function ButtonM({title, style, ...rest}: MyButtonProps) {
    return(
        <TouchableOpacity {...rest} style={[styles.button1, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

export function ButtonRegis({title, style, ...rest}: MyButtonProps) {
    return(
        <TouchableOpacity {...rest} style={[styles.button2, style]}>
            <Text style={styles.text2}>{title}</Text>
        </TouchableOpacity>
    );
}

export function ButtonAula({title, style, ...rest}: MyButtonProps) {
    return(
        <TouchableOpacity {...rest} style={[styles.buttonA, style]}>
            <Text style={styles.textA}>{title}</Text>
        </TouchableOpacity>
    );
}

export function ButtonExcluir({title, style, ...rest}: MyButtonProps) {
    return(
        <TouchableOpacity {...rest} style={[styles.buttonEx, style]}>
            <Text style={styles.textA}>{title}</Text>
        </TouchableOpacity>
    );
}

export function ButtonAdd({title, style, ...rest}: MyButtonProps) {
    return(
        <TouchableOpacity {...rest} style={[styles.buttonAdd, style]}>
            <Text style={styles.textA}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: "bold",
        color: '#fff',
        fontSize: 25,
        textAlign: 'center'
    },

    text2: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center'
    },

    button: {
        backgroundColor: '#e87605',
        borderRadius: 8,
        padding: 20
    },

    button1: {
        backgroundColor: '#647ca3',
        borderRadius: 8,
        padding: 40
    },

    button2: {
        padding: 5,
    },

    buttonA: {
        backgroundColor: '#0335fc',
        borderRadius: 8,
        padding: 8
    },
    buttonEx: {
        backgroundColor: '#870404',
        borderRadius: 8,
        padding: 8
    },
    buttonAdd: {
        backgroundColor: '#1d7d02',
        borderRadius: 8,
        padding: 8
    },
    textA: {
        fontWeight: "bold",
        color: '#fff',
        fontSize: 20,
        textAlign: 'center'
    }
})