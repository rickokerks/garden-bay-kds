import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import styles from './Header.styles';

type Props = {
    onMenuPress: () => void;
};

const Header: React.FC<Props> = ({ onMenuPress }) => {
    const [currentTime, setCurrentTime] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setCurrentTime(now.toLocaleTimeString());
            setCurrentDate(now.toLocaleDateString());
        };

        updateTime();
        const timer = setInterval(updateTime, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <View style={styles.header}>
            <View style={styles.timeContainer}>
                <View style={styles.timeRow}>
                    <Feather name="calendar" size={16} color="#fff" style={styles.icon} />
                    <Text style={styles.timeText}>{currentDate}</Text>
                </View>
                <View style={styles.timeRow}>
                    <Feather name="clock" size={16} color="#fff" style={styles.icon} />
                    <Text style={styles.timeText}>{currentTime}</Text>
                </View>
            </View>

            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/gardenbaylogo2.png')}
                    style={styles.logo}
                />
            </View>

            <TouchableOpacity style={styles.profileButton} onPress={onMenuPress}>
                <Feather name="user" size={22} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default Header;