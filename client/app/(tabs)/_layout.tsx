import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import { Header } from '@/components/header/header';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <>
      <Header />
      <Tabs
        initialRouteName="index"
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="gallery"
          options={{
            title: 'Gallery',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="folder-multiple-image" color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} color={color} size={26} />
            ),
          }}
        />
        <Tabs.Screen
          name="personal"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, focused }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}

