import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

export default function RechargeScreen() {
  const [amount, setAmount] = useState('');

  const handleRecharge = () => {
    Alert.alert('Recharge Successful', `₹${amount} added to wallet.`);
    setAmount('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recharge Wallet</Text>

      <TextInput style={styles.input} placeholder="Enter Amount" keyboardType="numeric" value={amount} onChangeText={setAmount} />

      <TouchableOpacity style={styles.button} onPress={handleRecharge}>
        <Text style={styles.buttonText}>Recharge</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D3DADC' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#455763', marginBottom: 20 },
  input: { width: '80%', padding: 15, borderRadius: 10, borderWidth: 1, marginBottom: 10, backgroundColor: 'white' },
  button: { backgroundColor: '#D6C9B4', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center' },
  buttonText: { color: '#455763', fontWeight: 'bold' },
});
