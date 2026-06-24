import { View, StyleSheet } from 'react-native';
import ShimmerBox from './ShimmerBox';

export default function ProfileSkeleton() {
  return (
    <View style={styles.wrapper}>
      <ShimmerBox width={72} height={72} borderRadius={36} />
      <ShimmerBox width="50%" height={13} />
      <ShimmerBox width="35%" height={10} />
      <ShimmerBox width={90} height={28} borderRadius={14} />
      <View style={styles.stats}>
        <View style={styles.stat}>
          <ShimmerBox width={40} height={16} />
          <ShimmerBox width={50} height={10} />
        </View>
        <View style={styles.stat}>
          <ShimmerBox width={40} height={16} />
          <ShimmerBox width={50} height={10} />
        </View>
        <View style={styles.stat}>
          <ShimmerBox width={40} height={16} />
          <ShimmerBox width={50} height={10} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { alignItems: 'center', gap: 10 },
  stats: { flexDirection: 'row', gap: 24, marginTop: 6 },
  stat: { alignItems: 'center', gap: 5 },
});