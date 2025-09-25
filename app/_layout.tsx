import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

// 이 파일은 앱의 전체 내비게이션 구조를 관리합니다.
export default function RootLayout() {

  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setButtonStyleAsync('dark');
    }
  }, []);

  return (
    <Stack>
      {/* 기본 탭 내비게이터를 보여주는 부분 */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* 글쓰기 화면을 modal 형태로 보여주도록 설정 */}
      <Stack.Screen 
        name="writePost" 
        options={{ 
          presentation: 'modal', 
          headerShown: false,
        }} 
      />

      {/* 4개의 운세 상세 화면을 Stack에 추가합니다. */}
      <Stack.Screen name="tarotDetail" options={{ headerShown: false }} />
      <Stack.Screen name="loveFortuneDetail" options={{ headerShown: false }} />
      <Stack.Screen name="reunionFortuneDetail" options={{ headerShown: false }} />
      <Stack.Screen name="marriageFortuneDetail" options={{ headerShown: false }} />
    </Stack>
  );
}

