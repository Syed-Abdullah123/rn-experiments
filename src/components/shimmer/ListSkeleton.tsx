import { View, StyleSheet } from 'react-native';
import ShimmerBox from './ShimmerBox';

function ListRow() {
  return (
    <View style={styles.row}>
      <ShimmerBox width={40} height={40} borderRadius={20} />
      <View style={styles.lines}>
        <ShimmerBox width="70%" height={10} />
        <ShimmerBox width="50%" height={9} />
      </View>
    </View>
  );
}

export default function ListSkeleton() {
  return (
    <View style={styles.wrapper}>
      {[0, 1, 2, 3].map((i) => <ListRow key={i} />)}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 16 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  lines: { flex: 1, gap: 7 },
});