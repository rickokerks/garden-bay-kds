import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type OrderCardProps = {
    orderId: string;
    items: { name: string; quantity: number }[];
    status: string;
    onPriorityPress: () => void;
    onReadyPress: () => void;
    arrivalTime: string; // New prop for time the order arrived
    tableNumber: string; // New prop for table number
    orderType: string; // New prop for dine-in or takeout
};

const OrderCard: React.FC<OrderCardProps> = ({
    orderId,
    items,
    status,
    onPriorityPress,
    onReadyPress,
    arrivalTime,
    tableNumber,
    orderType
}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>Order #{orderId}</Text>
            {/* New details: Time of arrival, table number, and order type */}
            <Text style={styles.details}>Arrived: {arrivalTime}</Text>
            <Text style={styles.details}>Table: {tableNumber}</Text>
            <Text style={styles.details}>Order Type: {orderType}</Text>

            {items.map((item, index) => (
                <Text key={index}>
                    • {item.name} x{item.quantity}
                </Text>
            ))}
            <Text style={styles.status}>Status: {status}</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={onPriorityPress} style={styles.priorityButton}>
                    <Text style={styles.buttonText}>Prioritize</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={onReadyPress} style={styles.readyButton}>
                    <Text style={styles.buttonText}>Ready</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 200, // square shape
        height: 250, // Adjusted height to accommodate new details
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 16,
        marginRight: 12,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
        justifyContent: 'space-between',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    status: {
        marginTop: 8,
        fontStyle: 'italic',
    },
    details: {
        marginTop: 4,
        fontSize: 12,
        color: '#555',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    priorityButton: {
        backgroundColor: '#f1c40f', // Yellow
        paddingVertical: 8,
        width: 80,
        alignItems: 'center',
        borderRadius: 5,
    },
    readyButton: {
        backgroundColor: '#2ecc71', // Green
        paddingVertical: 8,
        width: 80,
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontWeight: 'bold',
        color: '#000', // Black text
        fontSize: 14,
    },
});

export default OrderCard;
