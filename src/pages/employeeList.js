import React, { useState, useEffect } from 'react';
import {
    View, StyleSheet,
    ScrollView, TextInput
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ListCard } from '../component/common';

const EmployeeList = () => {

    const [employee, setEmployee] = useState([]);
    const [employeeList, setEmployeeList] = useState([]);
    const [searchName, setSearchName] = useState('');

    useEffect(() => {
        apiCall()
    }, [])

    const apiCall = async () => {
        let resp = await fetch(`http://www.mocky.io/v2/5d565297300000680030a986`)
        let response = await resp.json()
        setEmployee(response);
        setEmployeeList(response);
    }

    const searchEmployee = (value) => {
        setSearchName(value);
        let filterData = employee.filter((emp) => {
            let employeeName = emp.name
            return employeeName.toLowerCase().startsWith(value.toLowerCase())
        })
        setEmployeeList(filterData);
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchBox}>
                <View style={styles.iconView}>
                    <MaterialIcons name="search" size={22} color="#7A7A78" />
                </View>
                <View style={styles.searchTextView}>
                    <TextInput style={{ color: '#7A7A78' }}
                        placeholder="Search for Employee"
                        value={searchName}
                        onChangeText={(value) => searchEmployee(value)} />
                </View>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}
                style={styles.content}>
                {employeeList.length ?
                    employeeList.map(emp =>
                        <ListCard
                            key={emp.id}
                            image={emp.profile_image}
                            name={emp.name}
                            companyName={emp.company != null && emp.company.name}
                            nextPage={'EmployeeView'}
                            data={emp} />
                    ) : null}
            </ScrollView>
        </View>
    )
}

export default EmployeeList;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    content: {
        height: '100%',
    },
    searchBox: {
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor: '#7A7A78',
        borderRadius: 10
    },
    iconView: {
        justifyContent: 'center',
        paddingHorizontal: 5
    },
    searchTextView: {
        justifyContent: 'center',
        width: '85%',
        height: 40
    }
})