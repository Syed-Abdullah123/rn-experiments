import { Pressable, View, Text, StyleSheet } from 'react-native';
import { SvgProps } from 'react-native-svg';

type Props = {
  label: string;
  Icon: React.FC<SvgProps>;
  accentColor: string;
  onPress: () => void;
};

export default function ComponentCard({ label, Icon, accentColor, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.wrapper, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View style={[styles.circle, { backgroundColor: accentColor + '22', borderColor: accentColor + '55' }]}>
        <Icon width={30} height={30} color={accentColor} />
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 8,
  },
  pressed: {
    opacity: 0.6,
    transform: [{ scale: 0.95 }],
  },
  circle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    borderWidth: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 11,
    color: '#555',
    textAlign: 'center',
    fontWeight: '500',
  },
});