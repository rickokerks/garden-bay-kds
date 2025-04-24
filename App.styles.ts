import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row', // Align items horizontally
        flexWrap: 'wrap', // Allow wrapping to the next row
        justifyContent: 'flex-start', // Align items to the start
        padding: 10, // Add some padding
        backgroundColor: '#f0f0f0',
    },
    overlay: {
        position: 'absolute',
        top: 60, // Below the header
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)', // Dark overlay behind logout button
    },
    logoutButtonPopup: {
        position: 'absolute',
        top: 70, // Just below the header
        right: 20, // Positioned at the right side
        paddingVertical: 12, // More vertical padding for better touchability
        paddingHorizontal: 20,
        backgroundColor: '#ff4d4d', // Red background
        alignItems: 'center', // Center-aligned text
        justifyContent: 'center',
        borderRadius: 8, // Slightly larger border radius
        elevation: 5, // Shadow for Android
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    logoutButtonText: {
        color: '#fff', // White text color
        fontSize: 14, // Smaller font size
        fontWeight: 'bold',
    },
    tabsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 20,
        gap: 10,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 0, // Remove any default bottom border
        elevation: 0, // Remove Android shadow
        shadowOpacity: 0, // Remove iOS shadow
        justifyContent: 'flex-start', // Align items to the start
    },

    tabButtons: {
        flexDirection: 'row',
        gap: 10,
    },

    searchBar: {
        width: 500, // Set a fixed width
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },

    tabButton: {
        width: 100, // fixed width for all buttons
        height: 40, // fixed height for consistent button size
        backgroundColor: '#ddd',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    activeTabButton: {
        backgroundColor: '#2c454c',
    },

    tabButtonText: {
        fontSize: 16,
        color: '#333',
    },

    activeTabButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;