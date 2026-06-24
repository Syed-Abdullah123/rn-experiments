import { View, StyleSheet } from 'react-native';
import ShimmerBox from './ShimmerBox';

function MediaCard() {
  return (
    <View style={styles.card}>
      <ShimmerBox height={110} borderRadius={10} />
      <View style={styles.meta}>
        <ShimmerBox width={34} height={34} borderRadius={17} />
        <View style={styles.text}>
          <ShimmerBox width="90%" height={10} />
          <ShimmerBox width="65%" height={9} />
          <ShimmerBox width="50%" height={9} />
        </View>
      </View>
    </View>
  );
}

export default function MediaSkeleton() {
  return (
    <View style={styles.grid}>
      <MediaCard />
      <MediaCard />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: { flexDirection: 'row', gap: 12 },
  card: { flex: 1, gap: 10 },
  meta: { flexDirection: 'row', gap: 8 },
  text: { flex: 1, gap: 6 },
});