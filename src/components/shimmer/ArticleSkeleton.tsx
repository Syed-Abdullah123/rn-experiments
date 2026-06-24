import { View, StyleSheet } from 'react-native';
import ShimmerBox from './ShimmerBox';

export default function ArticleSkeleton() {
  return (
    <View style={styles.wrapper}>
      <ShimmerBox height={160} borderRadius={12} />
      <ShimmerBox width="85%" height={14} />
      <ShimmerBox width="55%" height={14} />
      <View style={styles.body}>
        <ShimmerBox height={10} />
        <ShimmerBox width="95%" height={10} />
        <ShimmerBox width="75%" height={10} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { gap: 10 },
  body: { gap: 8, marginTop: 4 },
});