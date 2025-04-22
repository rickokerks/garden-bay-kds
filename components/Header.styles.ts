import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    header: {
        height: 70,
        backgroundColor: '#2c454c',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    logo: {
        width: 140,
        height: 50,
        resizeMode: 'contain',
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    icon: {
        marginRight: 4,
    },
    timeText: {
        color: '#fff',
        fontSize: 13,
    },
});
