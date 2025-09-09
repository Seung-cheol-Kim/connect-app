import { Tabs } from 'expo-router';
import { Box, Home, Menu, MessageCircle, Sparkles, User } from 'lucide-react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Logo } from '../../components/Logo'; // 1. 로고 컴포넌트를 import 합니다.

// 이 파일이 하단 탭 메뉴의 전체적인 디자인과 구성을 결정합니다.
export default function TabLayout() {
  const insets = useSafeAreaInsets();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ec4899', // 활성 탭 아이콘 색상
        
        // --- 헤더 스타일 ---
        headerStyle: {
          backgroundColor: '#fff', 
          height: 70, 
          borderBottomColor: '#f3f4f6',
        },
        headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 18,
        },
        headerTitleAlign: 'center',
        
        // --- 탭 바 스타일 ---
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
         tabBarStyle: {
          height: 60 + insets.bottom, // 기본 높이(60)에 하단 시스템 바의 높이를 더해줍니다.
          paddingBottom: insets.bottom, // 아이콘과 텍스트가 가려지지 않도록 안쪽 여백을 줍니다.
          paddingTop: 4,
          borderTopWidth: 1, 
          borderTopColor: '#f3f4f6',
        }
      }}>
      <Tabs.Screen
        name="index" // 파일 이름 (index.tsx)
        options={{
          title: '', // 헤더의 제목은 비워둡니다.
          tabBarLabel: '홈', // 하단 탭의 텍스트는 '홈'으로 설정합니다.
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16, marginBottom:10 }}>
              <Logo />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16, marginBottom:10 }}>
              <Menu size={24} color="#1f2937" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="fortune" // 파일 이름 (fortune.tsx)
        options={{
          title: '', // 헤더의 제목은 비워둡니다.
          tabBarLabel: '운세', // 하단 탭의 텍스트는 '운세'으로 설정합니다.
          tabBarIcon: ({ color }) => <Sparkles color={color} size={24} />,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16, marginBottom:10 }}>
              <Logo />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16, marginBottom:10 }}>
              <Menu size={24} color="#1f2937" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Chat" // 파일 이름 (Chat.tsx)
        options={{
          title: '', // 헤더의 제목은 비워둡니다.
          tabBarLabel: '채팅방', // 하단 탭의 텍스트는 '채팅방'으로 설정합니다.
          tabBarIcon: ({ color }) => <MessageCircle color={color} size={24} />,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16, marginBottom:10 }}>
              <Logo />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16, marginBottom:10 }}>
              <Menu size={24} color="#1f2937" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="community" // 파일 이름 (community.tsx)
        options={{
          title: '', // 헤더의 제목은 비워둡니다.
          tabBarLabel: '커뮤니티', // 하단 탭의 텍스트는 '커뮤니티'으로 설정합니다.
          tabBarIcon: ({ color }) => <Box color={color} size={24} />,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16, marginBottom:10 }}>
              <Logo />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16, marginBottom:10 }}>
              <Menu size={24} color="#1f2937" />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="myPage" // 파일 이름 (myPage.tsx)
        options={{
          title: '', // 헤더의 제목은 비워둡니다.
          tabBarLabel: '마이페이지', // 하단 탭의 텍스트는 '마이페이지'으로 설정합니다.
          tabBarIcon: ({ color }) => <User color={color} size={24} />,
          headerLeft: () => (
            <TouchableOpacity style={{ marginLeft: 16, marginBottom:10 }}>
              <Logo />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 16, marginBottom:10 }}>
              <Menu size={24} color="#1f2937" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tabs>
  );
}

