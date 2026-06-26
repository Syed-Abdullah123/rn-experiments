import { useEffect } from "react";
import { useWindowDimensions } from "react-native";
import { Canvas, Circle, Line, Group, vec } from "@shopify/react-native-skia";
import {
  useSharedValue,
  useDerivedValue,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";

const BALL_COUNT = 4;
const BALL_RADIUS = 20;
const STRING_LENGTH = 150;
const SPACING = BALL_RADIUS * 2 + 2; // balls touch at rest
const CANVAS_HEIGHT = 340;
const PIVOT_Y = 60;

// How many radians the swinging balls travel
const MAX_ANGLE = 40 * (Math.PI / 180);

// Full period in ms — tune this for feel
const PERIOD_MS = 2500;

export default function NewtonsCradle() {
  const { width } = useWindowDimensions();

  // Pivot positions
  const totalWidth = SPACING * BALL_COUNT;
  const startX = (width - totalWidth) / 2 + BALL_RADIUS;
  const pivotXs = Array.from(
    { length: BALL_COUNT },
    (_, i) => startX + i * SPACING,
  );

  // Single time driver: goes 0 → 2π, repeat forever
  const t = useSharedValue(0);

  useEffect(() => {
    t.value = withRepeat(
      withTiming(Math.PI * 2, {
        duration: PERIOD_MS,
        easing: Easing.linear,
      }),
      -1,
      false,
    );
  }, []);

  // sin(t): negative half → left ball swings, positive half → right ball swings
  // Both meet at 0 (center) — perfect contact every cycle
  const leftAngle = useDerivedValue(() => {
    const s = Math.sin(t.value);
    return s < 0 ? s * MAX_ANGLE : 0;
  });

  const rightAngle = useDerivedValue(() => {
    const s = Math.sin(t.value);
    return s > 0 ? s * MAX_ANGLE : 0;
  });

  // Per-ball derived positions
  const balls = pivotXs.map((px, i) => {
    const angle =
      i === 0
        ? leftAngle
        : i === BALL_COUNT - 1
          ? rightAngle
          : ({ value: 0 } as any);

    const bx = useDerivedValue(
      () => px + Math.sin(angle.value) * STRING_LENGTH,
    );
    const by = useDerivedValue(
      () => PIVOT_Y + Math.cos(angle.value) * STRING_LENGTH,
    );

    return { px, bx, by, active: i === 0 || i === BALL_COUNT - 1 };
  });

  const barX1 = pivotXs[0] - BALL_RADIUS - 30;
  const barX2 = pivotXs[BALL_COUNT - 1] + BALL_RADIUS + 30;

  return (
    <Canvas style={{ width, height: CANVAS_HEIGHT }}>
      {/* Top bar */}
      <Line
        p1={vec(barX1, PIVOT_Y)}
        p2={vec(barX2, PIVOT_Y)}
        strokeWidth={7}
        strokeCap="butt"
        color="#1a1a1a"
      />

      {balls.map(({ px, bx, by, active }, i) => {
        const p1 = useDerivedValue(() => vec(px, PIVOT_Y));
        const p2 = useDerivedValue(() => vec(bx.value, by.value));
        const shadowCx = useDerivedValue(() => bx.value + 2);
        const shadowCy = useDerivedValue(() => by.value + 4);
        const shineCx = useDerivedValue(() => bx.value - 6);
        const shineCy = useDerivedValue(() => by.value - 6);

        return (
          <Group key={i}>
            <Line
              p1={p1}
              p2={p2}
              strokeWidth={1.5}
              strokeCap="round"
              color="#999"
            />
            <Circle
              cx={shadowCx}
              cy={shadowCy}
              r={BALL_RADIUS}
              color="rgba(0,0,0,0.10)"
            />
            <Circle
              cx={bx}
              cy={by}
              r={BALL_RADIUS}
            //   color={active ? "#1a1a1a" : "#1a1a1a"}
              color={active ? "#f59e0b" : "#1a1a1a"}
            />
            <Circle
              cx={shineCx}
              cy={shineCy}
              r={5}
              color="rgba(255,255,255,0.2)"
            />
          </Group>
        );
      })}
    </Canvas>
  );
}
