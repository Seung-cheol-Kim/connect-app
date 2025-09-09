import * as NavigationBar from 'expo-navigation-bar';
import { Stack } from 'expo-router';
import React, { useEffect } from 'react';
import { Platform } from 'react-native';

// 이 파일은 앱의 전체 내비게이션 구조를 관리합니다.
export default function RootLayout() {

  // 앱이 시작될 때 한 번만 실행되는 코드 추가
  useEffect(() => {
    // 안드로이드 기기에서만 실행되도록 설정
    if (Platform.OS === 'android') {
      // 시스템 내비게이션 바의 아이콘 색상을 어둡게 설정합니다.
      NavigationBar.setButtonStyleAsync('dark');
    }
  }, []); // []가 비어있으면 앱 실행 시 한 번만 호출됩니다.

  return (
    <Stack>
      {/* 기본 탭 내비게이터를 보여주는 부분 */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      
      {/* 글쓰기 화면을 modal 형태로 보여주도록 설정 */}
      <Stack.Screen 
        name="writePost" 
        options={{ 
          presentation: 'modal', 
          headerShown: true, // 헤더를 다시 보이도록 설정합니다.
          title: '글쓰기',     // 헤더에 표시될 제목
        }} 
      />
    </Stack>
  );
}

