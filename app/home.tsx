import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Profile Icon */}
      <TouchableOpacity onPress={() => router.push('/settings')}>
        <FontAwesome name="user-circle" size={50} color="#455763" />
    </TouchableOpacity>

      {/* Wallet Balance */}
      <Text style={styles.balanceText}>Wallet Balance</Text>
      <Text style={styles.balanceAmount}>₹12,500</Text>

      {/* Buttons */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/recharge')}>
        <Text style={styles.buttonText}>Recharge Wallet</Text>
      </TouchableOpacity>

      {/* <TouchableOpacity style={styles.button} onPress={() => router.push('/transaction-history')}>
        <Text style={styles.buttonText}>Transaction History</Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={styles.reportButton} onPress={() => router.push('/report')}>
        <Text style={styles.buttonText}>Report an Issue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D3DADC' },
  profileIcon: { width: 50, height: 50, borderRadius: 25, position: 'absolute', top: 40, right: 20 },
  balanceText: { fontSize: 22, color: '#455763', marginBottom: 5 },
  balanceAmount: { fontSize: 32, fontWeight: 'bold', color: '#455763', marginBottom: 20 },
  button: { backgroundColor: '#D6C9B4', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center', marginBottom: 10 },
  reportButton: { backgroundColor: '#E8E2DA', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#455763', fontWeight: 'bold' },
});
