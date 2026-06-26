import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import HomeScreen from '././src/screens/HomeScreen';
import ShimmerLoaderDemo from './src/screens/demos/ShimmerLoaderDemo';
import NewtonsCradleDemo from './src/screens/demos/NewtonsCradleDemo';

export type RootStackParamList = {
  Home: undefined;
  ShimmerLoaderDemo: undefined;
  NewtonsCradleDemo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [loaded] = useFonts({
    ClashDisplay_R: require('./assets/fonts/ClashDisplay-Regular.otf'),
    ClashDisplay_M: require('./assets/fonts/ClashDisplay-Medium.otf'),
    ClashDisplay_B: require('./assets/fonts/ClashDisplay-Bold.otf'),
    Sora_R: require('./assets/fonts/Sora-Regular.ttf'),
    Sora_M: require('./assets/fonts/Sora-Medium.ttf'),
    Sora_B: require('./assets/fonts/Sora-Bold.ttf'),
  })

  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ShimmerLoaderDemo" component={ShimmerLoaderDemo} />
        <Stack.Screen name="NewtonsCradleDemo" component={NewtonsCradleDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}