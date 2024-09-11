import * as React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';

export const Header = () => {
    const navigation = useNavigation();

    const _goBack = () => navigation.goBack();

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header style={styles.header}>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Title" titleStyle={styles.title} />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
    },
    title: {
        color: 'gray',
        fontSize: 20,
    },
});
