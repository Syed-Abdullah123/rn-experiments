import { View, Text, FlatList, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";
import ComponentCard from "../components/ComponentCard";

// SVG icons — inline for now, swap with your own SVG components
import Svg, { Path, Rect, Circle } from "react-native-svg";

const ShimmerIcon = ({ color }: { color?: string }) => (
  <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
    <Path
      d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
      stroke={color ?? "#6366f1"}
      strokeWidth={1.8}
      strokeLinecap="round"
    />
  </Svg>
);

const StaggerIcon = ({ color }: { color?: string }) => (
  <Svg width={30} height={30} viewBox="0 0 24 24" fill="none">
    <Rect
      x="3"
      y="3"
      width="7"
      height="7"
      rx="1.5"
      stroke={color ?? "#22c55e"}
      strokeWidth={1.8}
    />
    <Rect
      x="14"
      y="3"
      width="7"
      height="7"
      rx="1.5"
      stroke={color ?? "#22c55e"}
      strokeWidth={1.8}
    />
    <Rect
      x="3"
      y="14"
      width="7"
      height="7"
      rx="1.5"
      stroke={color ?? "#22c55e"}
      strokeWidth={1.8}
    />
    <Rect
      x="14"
      y="14"
      width="7"
      height="7"
      rx="1.5"
      stroke={color ?? "#22c55e"}
      strokeWidth={1.8}
    />
  </Svg>
);

const COMPONENTS = [
  {
    id: "shimmer",
    label: "Shimmer Loader",
    Icon: ShimmerIcon,
    color: "#6366f1",
  },
  { id: "stagger", label: "Stagger Grid", Icon: StaggerIcon, color: "#22c55e" },
  // Add more here as you build them
];

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.header}>
        <Text style={styles.title}>coool stuff ✦</Text>
        <Text style={styles.sub}>Tap anything to explore</Text>
      </View>
      <FlatList
        data={COMPONENTS}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <ComponentCard
            label={item.label}
            Icon={item.Icon as any}
            accentColor={item.color}
            onPress={() =>
              navigation.navigate("Demo", { id: item.id, title: item.label })
            }
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f9f9f7" },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 12,
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#111",
    letterSpacing: -0.5,
  },
  sub: {
    fontSize: 13,
    color: "#aaa",
    marginTop: 2,
  },
  grid: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  row: {
    justifyContent: "flex-start",
    gap: 20,
    marginBottom: 28,
  },
});
