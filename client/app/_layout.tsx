import { Header } from '@/components/header/header';
import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { PaperProvider } from 'react-native-paper';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  const [user, setUser] = useState(false);

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuthenticated = await checkUserAuthentication();
      if (isAuthenticated) {
        router.replace('/signup');
      } else {
        setUser(true);
      }
    };

    checkAuth();
  }, []);

  if (!loaded) {
    return null;
  }

  if (!user) {
    return null;
  }

  return (
    <PaperProvider theme={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName="index">
        <Stack.Screen name="index" />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </PaperProvider>
  );
}

async function checkUserAuthentication() {
  return new Promise((resolve) => setTimeout(() => resolve(false), 1000));
}