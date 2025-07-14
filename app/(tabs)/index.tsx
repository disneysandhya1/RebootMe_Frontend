import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const moodOptions = ["😔", "😐", "🙂", "😃", "🤩"];
const moodTips: { [key: number]: string } = {
  0: "Take deep breaths and go for a calming walk 🌿",
  1: "Do something that makes you smile 😊",
  2: "Maintain this calm by walking outside 🚶‍♀️",
  3: "Share your joy with someone you care about 💬",
  4: "Channel your energy into a creative activity 🎨"
};

const stretchOptions = [
  { name: "Neck Roll", description: "Gently roll your neck to relieve tension", duration: "30s" },
  { name: "Shoulder Shrug", description: "Lift and drop your shoulders", duration: "20s" },
  { name: "Wrist Stretch", description: "Extend your arm and pull back on your fingers", duration: "15s each" }
];

const quotes = [
  "Your mental health is a priority, not a luxury. 💚",
  "Self-care is how you take your power back. 🧘‍♀️",
  "You don’t have to control your thoughts. You just have to stop letting them control you. 💭",
  "Healing is not linear. Keep going. 🌱",
  "Be kind to your mind. 🧠"
];

export default function HomeScreen() {
  const [waterCount, setWaterCount] = useState(0);
  const [mood, setMood] = useState<number | null>(null);
  const [stretch, setStretch] = useState(stretchOptions[0]);
  const [quote, setQuote] = useState('');
  const [eyeBreakActive, setEyeBreakActive] = useState(false);
  const [eyeSeconds, setEyeSeconds] = useState(20);
  const [streak, setStreak] = useState(0);

  // Eye break timer
  const startEyeBreak = () => {
    setEyeBreakActive(true);
    setEyeSeconds(20);
    const interval = setInterval(() => {
      setEyeSeconds(prev => {
        if (prev === 1) {
          clearInterval(interval);
          setEyeBreakActive(false);
          Alert.alert("Eye Break Done!", "Hope your eyes feel better! 👀");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Daily streak logic
  const checkStreak = async () => {
    try {
      const today = new Date().toDateString();
      const lastDate = await AsyncStorage.getItem('lastOpenedDate');
      const savedStreak = await AsyncStorage.getItem('streak');
      const streakCount = savedStreak ? parseInt(savedStreak) : 0;

      if (lastDate === today) {
        setStreak(streakCount); // already visited today
      } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if (lastDate === yesterday.toDateString()) {
          const newStreak = streakCount + 1;
          await AsyncStorage.setItem('streak', newStreak.toString());
          setStreak(newStreak);
        } else {
          await AsyncStorage.setItem('streak', '1');
          setStreak(1);
        }
        await AsyncStorage.setItem('lastOpenedDate', today);
      }
    } catch (err) {
      console.error('Streak check failed', err);
    }
  };

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * stretchOptions.length);
    setStretch(stretchOptions[randomIndex]);
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    checkStreak();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🧠 RebootMe</Text>
      <Text style={styles.quote}>💡 {quote}</Text>

      {/* Hydration */}
      <Text style={styles.section}>💧 Hydration Tracker</Text>
      <Text style={styles.info}>Glasses Drank: {waterCount}</Text>
      <TouchableOpacity style={styles.button} onPress={() => setWaterCount(waterCount + 1)}>
        <Text style={styles.buttonText}>+ Add a Glass</Text>
      </TouchableOpacity>

      {/* Mood */}
      <Text style={styles.section}>😊 Mood Check-In</Text>
      <View style={styles.emojiRow}>
        {moodOptions.map((emoji, index) => (
          <TouchableOpacity key={index} onPress={() => setMood(index)}>
            <Text style={[styles.emoji, mood === index && styles.selectedEmoji]}>{emoji}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {mood !== null && (
        <View style={styles.tipBox}>
          <Text style={styles.tipText}>🧠 Wellness Suggestion</Text>
          <Text style={styles.info}>{moodTips[mood]}</Text>
        </View>
      )}

      {/* Stretch */}
      <Text style={styles.section}>🙆 Stretch Break</Text>
      <Text style={styles.info}>{stretch.name}</Text>
      <Text style={styles.smallText}>{stretch.description} ({stretch.duration})</Text>

      {/* Eye Break */}
      <Text style={styles.section}>👀 Eye Break Reminder</Text>
      <Text style={styles.info}>
        Every 40 minutes, take a 20-second eye break. Blink and look at something 20 feet away!
      </Text>
      <TouchableOpacity style={styles.eyeButton} onPress={startEyeBreak}>
        <Text style={styles.buttonText}>Start 20s Eye Break</Text>
      </TouchableOpacity>
      {eyeBreakActive && (
        <Text style={styles.eyeTimer}>Relaxing... {eyeSeconds}s</Text>
      )}

      {/* Streak */}
      <Text style={styles.section}>🔥 Daily Wellness Streak</Text>
      <Text style={styles.info}>You're on a {streak}-day streak! Keep going! 🚀</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingTop: 50,
    backgroundColor: '#eaf9ea', // soft green
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2e7d32',
  },
  quote: {
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#4caf50',
    marginBottom: 20,
  },
  section: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
    color: '#1b5e20',
  },
  info: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  smallText: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#4caf50',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20
  },
  eyeButton: {
    backgroundColor: '#43a047',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  emoji: {
    fontSize: 30,
  },
  selectedEmoji: {
    borderColor: '#2e7d32',
    borderWidth: 2,
    borderRadius: 30,
    padding: 5,
  },
  tipBox: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  tipText: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#1b5e20',
  },
  eyeTimer: {
    fontSize: 16,
    color: '#c62828',
    textAlign: 'center',
    marginBottom: 10,
  },
});
