import { StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SIDEBAR_WIDTH = SCREEN_WIDTH * 0.2; // 20% of screen width

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'row', // Align items horizontally
        flexWrap: 'wrap', // Allow wrapping to the next row
        justifyContent: 'flex-start', // Align items to the start
        padding: 10, // Add some padding
        backgroundColor: '#f0f0f0',
    },
    sidebar: {
        position: 'absolute',
        top: 60, // Below the header
        left: 0,
        bottom: 0,
        width: SIDEBAR_WIDTH, // Sidebar width set to 20% of the screen width
        backgroundColor: '#2c454c', // Changed to dark color as requested
        padding: 20,
        paddingBottom: 80, // Additional padding at bottom to accommodate logout button
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 2, height: 0 },
        justifyContent: 'space-between', // Space between content and logout
        flexDirection: 'column', // Stack children vertically
    },
    overlay: {
        position: 'absolute',
        top: 60, // Below the header
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0,0,0,0.3)', // Dark overlay behind sidebar
    },
    logoutButton: {
        position: 'absolute',
        bottom: 20, // Positioned at the bottom of the sidebar
        left: 20, // Align with sidebar padding
        right: 20, // Align with sidebar padding
        paddingVertical: 12, // More vertical padding for better touchability
        backgroundColor: '#fff', // Changed to white as requested
        alignItems: 'flex-start', // Left-aligned text as requested
        justifyContent: 'center',
        borderRadius: 8, // Slightly larger border radius
        paddingLeft: 15, // Add padding for left-aligned text
    },
    logoutButtonText: {
        color: '#000', // Changed to black as requested
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