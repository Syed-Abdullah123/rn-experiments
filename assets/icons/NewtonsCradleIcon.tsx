import Svg, { Line, Circle } from 'react-native-svg';

type Props = {
  color?: string;
};

export default function NewtonsCradleIcon({ color = '#1a1a1a' }: Props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none">
      {/* Top bar */}
      <Line x1="3" y1="5" x2="30" y2="5" stroke={color} strokeWidth={2} strokeLinecap="round" />

      {/* Strings */}
      <Line x1="6.5"  y1="5" x2="6.5"  y2="20" stroke={color} strokeWidth={1.2} strokeLinecap="round" />
      <Line x1="13" y1="5" x2="13" y2="20" stroke={color} strokeWidth={1.2} strokeLinecap="round" />
      <Line x1="19.5" y1="5" x2="19.5" y2="20" stroke={color} strokeWidth={1.2} strokeLinecap="round" />
      <Line x1="26" y1="5" x2="26" y2="20" stroke={color} strokeWidth={1.2} strokeLinecap="round" />

      {/* Balls */}
      <Circle cx="6.5"  cy="23" r="3" fill={color} />
      <Circle cx="13" cy="23" r="3" fill={color} />
      <Circle cx="19.5" cy="23" r="3" fill={color} />
      <Circle cx="26" cy="23" r="3" fill={color} />
    </Svg>
  );
}