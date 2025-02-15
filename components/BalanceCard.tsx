import { View, Text, StyleSheet } from 'react-native';

export default function BalanceCard({ balance }: { balance: number }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Wallet Balance</Text>
      <Text style={styles.balance}>${balance.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#2196F3', padding: 20, borderRadius: 10, alignItems: 'center' },
  title: { color: 'white', fontSize: 16 },
  balance: { color: 'white', fontSize: 28, fontWeight: 'bold', marginTop: 5 },
});
