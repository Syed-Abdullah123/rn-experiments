import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CardSkeleton from "../../components/shimmer/CardSkeleton";
import ListSkeleton from "../../components/shimmer/ListSkeleton";
import ArticleSkeleton from "../../components/shimmer/ArticleSkeleton";
import ProfileSkeleton from "../../components/shimmer/ProfileSkeleton";
import MediaSkeleton from "../../components/shimmer/MediaSkeleton";

type Section = {
  id: string;
  label: string;
  component: React.ReactNode;
};

const SECTIONS: Section[] = [
  { id: "1", label: "Social Card", component: <CardSkeleton /> },
  { id: "2", label: "List Rows", component: <ListSkeleton /> },
  { id: "3", label: "Article / Blog", component: <ArticleSkeleton /> },
  { id: "4", label: "Profile Card", component: <ProfileSkeleton /> },
  { id: "5", label: "Media / Video Feed", component: <MediaSkeleton /> },
];

export default function ShimmerLoaderDemo() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.heading}>Shimmer Loaders</Text>
        {SECTIONS.map((s) => (
          <View key={s.id} style={styles.section}>
            <Text style={styles.sectionLabel}>
              {s.id.padStart(2, "0")} — {s.label}
            </Text>
            <View style={styles.card}>{s.component}</View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f9f9f7" },
  scroll: { padding: 20, gap: 28 },
  heading: {
    fontFamily: "ClashDisplay_B",
    fontSize: 26,
    color: "#111",
    marginBottom: 4,
  },
  section: { gap: 10 },
  sectionLabel: {
    fontFamily: "Sora_M",
    fontSize: 10,
    color: "#aaa",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    borderWidth: 0.5,
    borderColor: "#e5e5e5",
  },
});
