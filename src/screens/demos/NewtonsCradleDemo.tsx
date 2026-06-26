import { View, Text, StyleSheet, Dimensions, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewtonsCradle from "../../components/pendulum/NewtonsCradle";
import { useEffect, useRef } from "react";

const { width } = Dimensions.get("window");

const STATS = [
  { label: "Balls", value: "4" },
  { label: "Angle", value: "40°" },
  { label: "Period", value: "2.5s" },
];

// Animated floating circle for background
function FloatingOrb({
  size,
  x,
  y,
  duration,
  delay,
  opacity,
}: {
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  opacity: number;
}) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.delay(delay),
        Animated.timing(anim, {
          toValue: 1,
          duration,
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 0,
          duration,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const translateY = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -18],
  });

  return (
    <Animated.View
      style={{
        position: "absolute",
        left: x,
        top: y,
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: "#f59e0b",
        opacity,
        transform: [{ translateY }],
      }}
    />
  );
}

const ORBS = [
  { size: 120, x: -40, y: 80, duration: 2000, delay: 0, opacity: 0.045 },
  {
    size: 80,
    x: width - 60,
    y: 140,
    duration: 3500,
    delay: 800,
    opacity: 0.035,
  },
  { size: 60, x: width / 2, y: 260, duration: 3800, delay: 400, opacity: 0.03 },
  { size: 40, x: 60, y: 340, duration: 2900, delay: 1200, opacity: 0.04 },
];

export default function NewtonsCradleDemo() {
  return (
    <SafeAreaView style={styles.safe}>
      {/* Subtle floating orbs in background */}
      {ORBS.map((orb, i) => (
        <FloatingOrb key={i} {...orb} />
      ))}

      <View style={styles.container}>
        <Text style={styles.heading}>
          Newton's <Text style={{ color: "#f59e0b" }}>Cradle</Text>
        </Text>
        <Text style={styles.sub}>
          Conservation of momentum, one sine wave {"\n"}at a time.
        </Text>

        <View style={styles.stage}>
          <NewtonsCradle />
        </View>

        {/* Stats */}
        <View style={styles.statsRow}>
          {STATS.map((s, i) => (
            <View key={i} style={styles.statCard}>
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f9f9f7" },
  container: { flex: 1, padding: 24 },
  heading: {
    fontFamily: "ClashDisplay_B",
    fontSize: 26,
    color: "#111",
  },
  sub: {
    fontFamily: "Sora_M",
    fontSize: 13,
    color: "#aaa",
    marginTop: 4,
    marginBottom: 48,
  },
  stage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  statsRow: {
    flexDirection: "row",
    gap: 12,
    paddingBottom: 32,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: "#e8e8e8",
    paddingVertical: 16,
    alignItems: "center",
    gap: 4,
  },
  statValue: {
    fontFamily: "Sora_B",
    fontSize: 20,
    color: "#111",
  },
  statLabel: {
    fontFamily: "Sora_M",
    fontSize: 11,
    color: "#bbb",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
});
