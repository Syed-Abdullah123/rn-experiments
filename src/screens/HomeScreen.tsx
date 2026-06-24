import { View, Text, FlatList, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { RootStackParamList } from "../../App";
import ComponentCard from "../components/ComponentCard";

import { COMPONENTS } from "../data/components";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.safe}>
      {/* <View style={styles.header}>
        <Text style={styles.title}>coool stuff ✦</Text>
        <Text style={styles.sub}>Tap anything to explore</Text>
      </View> */}
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
            onPress={() => navigation.navigate(item.screen as any)}
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
    paddingTop: 24,
  },
  row: {
    justifyContent: "flex-start",
    gap: 20,
    marginBottom: 28,
  },
});
