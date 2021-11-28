import React, { } from 'react';
import {
    Text, View,
    StyleSheet, Image,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const ListCard = (props) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate(props.nextPage, { data: props.data })}>
            <View style={styles.imageOuter}>
                <Image
                    source={{ uri: props.image }}
                    style={styles.imageInner} />
            </View>
            <View style={styles.colView}>
                <Text style={styles.nameText}>{props.name}</Text>
                <Text>{props.companyName}</Text>
            </View>
        </TouchableOpacity>
    )
}

export const NameView = (props) => {
    return (
        <View style={{ marginBottom: 5 }}>
            <Text style={styles.label}>{props.tittle}</Text>
            <View style={styles.fieldView}>
                <Text>{props.content}</Text>
            </View>
        </View>
    )
}

export const AddressView = (props) => {
    return (
        <View style={{ marginBottom: 5 }}>
            <Text style={styles.label}>{props.tittle}</Text>
            <View style={styles.addressFieldView}>
                <Text>{props.content1}</Text>
                <Text>{props.content2}</Text>
                <Text>{props.content3}</Text>
                <Text>{props.content4}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#e3ebed',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row'
    },
    nameText: {
        fontSize: 18,
        fontWeight: '600',
        textTransform: 'capitalize'
    },
    imageOuter: {
        height: 60,
        width: 60,
        overflow: 'hidden',
        borderRadius: 100
    },
    imageInner: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    colView: {
        paddingLeft: 10,
        justifyContent: 'center'
    },
    label: {
        color: '#95a0ae',
        textTransform: 'capitalize'
    },
    fieldView: {
        height: 40,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 5,
        paddingHorizontal: 5
    },
    addressFieldView: {
        height: 100,
        backgroundColor: '#FFF',
        borderRadius: 5,
        justifyContent: 'center',
        marginTop: 5,
        paddingHorizontal: 5
    },
})