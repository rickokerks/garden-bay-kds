import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native';
import Header from './components/Header';
import OrderCard from './components/OrderCard';
import styles from './App.styles'; // Import the styles

export default function App() {
  const [logoutButtonVisible, setLogoutButtonVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('All'); // State to track the active tab
  const [searchQuery, setSearchQuery] = useState(''); // State for the search bar
  const [allOrders, setAllOrders] = useState([
    { orderId: '101', items: [{ name: 'Seafood', quantity: 2 }, { name: 'Fries', quantity: 1 }], status: 'new' },
    { orderId: '102', items: [{ name: 'Shrimp Sisig', quantity: 1 }], status: 'preparing' },
    { orderId: '103', items: [{ name: 'Gcash', quantity: 3 }], status: 'new' },
    { orderId: '104', items: [{ name: 'java rice', quantity: 2 }], status: 'preparing' },
  ]);
  const [priorityOrders, setPriorityOrders] = useState<Array<{ orderId: string; items: { name: string; quantity: number }[]; status: string }>>([]);
  const [readyOrders, setReadyOrders] = useState<Array<{ orderId: string; items: { name: string; quantity: number }[]; status: string }>>([]);

  const toggleLogoutButton = () => {
    setLogoutButtonVisible((prevVisible) => !prevVisible);
  };

  const handleLogout = () => {
    console.log('Logged out');
    setLogoutButtonVisible(false);
  };

  const handleTabPress = (tab: string) => {
    setActiveTab(tab);
  };

  const handlePriorityPress = (orderId: string) => {
    const order = allOrders.find((o) => o.orderId === orderId);
    if (order) {
      setPriorityOrders([...priorityOrders, order]);
      setAllOrders(allOrders.filter((o) => o.orderId !== orderId)); // Remove from All Orders
    }
  };

  const handleReadyPress = (orderId: string) => {
    const order = allOrders.find((o) => o.orderId === orderId);
    if (order) {
      setReadyOrders([...readyOrders, order]);
      setAllOrders(allOrders.filter((o) => o.orderId !== orderId)); // Remove from All Orders
    }
  };

  const renderOrders = (orders: any[]) => {
    const filteredOrders = orders.filter((order) =>
      order.items.some((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    return filteredOrders.map((order) => (
      <OrderCard
        key={order.orderId}
        orderId={order.orderId}
        items={order.items}
        status={order.status}
        onPriorityPress={() => handlePriorityPress(order.orderId)}
        onReadyPress={() => handleReadyPress(order.orderId)}
      />
    ));
  };

  return (
    <View style={{ flex: 1 }}>
      <Header onMenuPress={toggleLogoutButton} />

      {/* Tabs Container */}
      <View style={styles.tabsContainer}>
        <View style={styles.tabButtons}>
          <TouchableWithoutFeedback onPress={() => handleTabPress('All')}>
            <View style={[styles.tabButton, activeTab === 'All' && styles.activeTabButton]}>
              <Text style={[styles.tabButtonText, activeTab === 'All' && styles.activeTabButtonText]}>
                All
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleTabPress('Priority')}>
            <View style={[styles.tabButton, activeTab === 'Priority' && styles.activeTabButton]}>
              <Text style={[styles.tabButtonText, activeTab === 'Priority' && styles.activeTabButtonText]}>
                Priority
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleTabPress('Ready')}>
            <View style={[styles.tabButton, activeTab === 'Ready' && styles.activeTabButton]}>
              <Text style={[styles.tabButtonText, activeTab === 'Ready' && styles.activeTabButtonText]}>
                Ready
              </Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

        {/* Search Bar */}
        <TextInput
          style={styles.searchBar}
          placeholder="Search orders..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>

      {/* Main Content Area */}
      <View style={styles.content}>
        {activeTab === 'All' && renderOrders(allOrders)}
        {activeTab === 'Priority' && renderOrders(priorityOrders)}
        {activeTab === 'Ready' && renderOrders(readyOrders)}
      </View>

      {/* Logout Button (visible when profile icon is clicked) */}
      {logoutButtonVisible && (
        <>
          <TouchableWithoutFeedback onPress={toggleLogoutButton}>
            <View style={styles.overlay} />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleLogout}>
            <View style={styles.logoutButtonPopup}>
              <Text style={styles.logoutButtonText}>Sign Out</Text>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
    </View>
  );
}