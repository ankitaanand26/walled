import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function SettingsScreen() {
  const router = useRouter();

  // State for transaction limits
  const [dailyLimit, setDailyLimit] = useState(5000); // Default value
  const [weeklyLimit, setWeeklyLimit] = useState(25000); // Default value

  // Function to handle limit change
  const updateLimit = (type: 'daily' | 'weekly') => {
    Alert.prompt(
      `Set ${type === 'daily' ? 'Daily' : 'Weekly'} Limit`,
      `Enter new ${type} transaction limit:`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: (value) => type === 'daily' ? setDailyLimit(Number(value)) : setWeeklyLimit(Number(value)) }
      ],
      'plain-text',
      type === 'daily' ? String(dailyLimit) : String(weeklyLimit)
    );
  };

  // Logout Function
  const handleLogout = () => {
    Alert.alert('Logged Out', 'You have been successfully logged out.', [
      { text: 'OK', onPress: () => router.replace('/login') }
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      {/* Transaction Limits Section */}
      <Text style={styles.sectionTitle}>Transaction Limits</Text>

      <View style={styles.limitContainer}>
        <Text style={styles.limitText}>Daily Limit: ₹{dailyLimit}</Text>
        <TouchableOpacity onPress={() => updateLimit('daily')}>
          <FontAwesome name="pencil" size={20} color="#455763" />
        </TouchableOpacity>
      </View>

      <View style={styles.limitContainer}>
        <Text style={styles.limitText}>Weekly Limit: ₹{weeklyLimit}</Text>
        <TouchableOpacity onPress={() => updateLimit('weekly')}>
          <FontAwesome name="pencil" size={20} color="#455763" />
        </TouchableOpacity>
      </View>

      <View style={styles.divider} />

      {/* Logout Button */}
      <TouchableOpacity style={[styles.button, styles.logoutButton]} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#D3DADC' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15, color: '#455763' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: '#455763' },
  limitContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#E8E2DA', padding: 15, borderRadius: 10, marginBottom: 10 },
  limitText: { fontSize: 16, color: '#455763' },
  button: { backgroundColor: '#D6C9B4', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#455763', fontWeight: 'bold' },
  logoutButton: { backgroundColor: '#E8E2DA' },
  divider: { height: 20 },
});
