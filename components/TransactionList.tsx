import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function TransactionList({ transactions }: { transactions: any[] }) {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.transaction}>
          <Text style={styles.transactionText}>{item.type} to {item.recipient}</Text>
          <Text style={[styles.amount, item.amount < 0 ? styles.negative : styles.positive]}>
            {item.amount < 0 ? '-' : '+'}${Math.abs(item.amount).toFixed(2)}
          </Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  transaction: { flexDirection: 'row', justifyContent: 'space-between', padding: 15, backgroundColor: 'white', borderRadius: 10, marginBottom: 10 },
  transactionText: { fontSize: 16 },
  amount: { fontSize: 16, fontWeight: 'bold' },
  positive: { color: 'green' },
  negative: { color: 'red' },
});
