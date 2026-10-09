import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity} from 'react-native';

function CustomButton({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

function ProfileCard({ name, role }) {
  return (
    <View style={styles.card}>
      <View style={styles.avatarPlaceholder}>
        <Text style={styles.avatarText}>👤</Text>
      </View>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardName}>{name}</Text>
        <Text style={styles.cardRole}>{role}</Text>
      </View>
    </View>
  );
}

export default function App() {
  const [profiles, setProfiles] = useState([]);

  const addProfileCard = () => {
    const newId = profiles.length + 1;
    const newProfile = {
      id: newId,
      name: `User #${newId}`,
      role: 'Developer',
    };
    setProfiles([...profiles, newProfile]);
  };

  return (
    <View style={styles.container}>
      <CustomButton title="+Add Profile Card" onPress={addProfileCard} />
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        {profiles.map((profile) => (
          <ProfileCard
          key={profile.id}
          name={profile.name}
          role={profile.role}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    backgroundColor: '#f5f5f5',
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  scrollContainer: {
    paddingBottom: 40,
  },

  card: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  avatarPlaceholder: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e1e1e1',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  avatarText: {
    fontSize: 24,
  },
  cardTextContainer: {
    flex: 1,
  },
  cardName: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});