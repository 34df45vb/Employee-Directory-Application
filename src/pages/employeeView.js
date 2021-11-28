import React from 'react';
import {
    Image, ScrollView,
    StyleSheet, View
} from 'react-native';
import {
    AddressView,
    NameView
} from '../component/common';

const EmployeeView = ({ route }) => {

    const { data } = route.params;

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.content}>
                <View style={styles.imageOuter}>
                    <Image
                        source={{ uri: data.profile_image }}
                        style={styles.imageInner} />
                </View>
                <NameView
                    tittle={'name'}
                    content={data.name} />
                <NameView
                    tittle={'user name'}
                    content={data.username} />
                <NameView
                    tittle={'email address'}
                    content={data.email} />
                <AddressView
                    tittle={'address'}
                    content1={data.address.street}
                    content2={data.address.suite}
                    content3={data.address.city}
                    content4={data.address.zipcode} />
                <NameView
                    tittle={'phone'}
                    content={data.phone} />
                <NameView
                    tittle={'Website'}
                    content={data.website} />
                {data.company != null &&
                    <AddressView
                        tittle={'company details'}
                        content1={data.company.name}
                        content2={data.company.catchPhrase}
                        content3={data.company.bs} />}
            </ScrollView>
        </View>
    )
}

export default EmployeeView

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    content: {
        height: '100%',
    },
    imageOuter: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        overflow: 'hidden',
        borderRadius: 100,
        marginVertical: 20
    },
    imageInner: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
})