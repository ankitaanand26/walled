import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';

export default function ReportScreen() {
  const [issue, setIssue] = useState('');
  const [isCardDisabled, setIsCardDisabled] = useState(false);

  const handleSubmit = () => {
    Alert.alert('Issue reported', 'Our support team will contact you.', [{ text: 'OK' }]);
    setIssue('');
  };

  const handleDisableCard = () => {
    Alert.alert(
      isCardDisabled ? 'Enable Card' : 'Disable Card',
      `Are you sure you want to ${isCardDisabled ? 'enable' : 'disable'} your card?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: isCardDisabled ? 'Enable' : 'Disable',
          style: 'destructive',
          onPress: () => setIsCardDisabled(!isCardDisabled),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report an Issue</Text>
      <TextInput
        style={styles.input}
        placeholder="Describe your issue..."
        multiline
        numberOfLines={5}
        value={issue}
        onChangeText={setIssue}
      />
      
      {/* Report Button */}
      <TouchableOpacity style={styles.reportButton} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit Report</Text>
      </TouchableOpacity>

      <View style={styles.divider} />

      <Text style={styles.title}>Card Settings</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: isCardDisabled ? '#28a745' : '#dc3545' }]}
        onPress={handleDisableCard}
      >
        <Text style={styles.buttonText}>{isCardDisabled ? 'Enable Card' : 'Disable Card'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#E8E2DA' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#455763' },
  input: { width: '100%', padding: 15, borderWidth: 1, borderRadius: 10, backgroundColor: 'white', marginBottom: 15 },
  reportButton: { backgroundColor: '#D6C9B4', padding: 15, borderRadius: 10, alignItems: 'center' },
  button: { padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 10 },
  buttonText: { color: '#455763', fontWeight: 'bold' },
  divider: { height: 20 },
});
