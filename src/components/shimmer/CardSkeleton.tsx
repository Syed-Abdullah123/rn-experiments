import { View, StyleSheet } from 'react-native';
import ShimmerBox from './ShimmerBox';

export default function CardSkeleton() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <ShimmerBox width={44} height={44} borderRadius={22} />
        <View style={styles.headerText}>
          <ShimmerBox width="60%" height={10} />
          <ShimmerBox width="40%" height={9} />
        </View>
      </View>
      <ShimmerBox height={140} borderRadius={10} />
      <ShimmerBox width="90%" height={10} />
      <ShimmerBox width="70%" height={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 10 },
  header: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  headerText: { flex: 1, gap: 6 },
});