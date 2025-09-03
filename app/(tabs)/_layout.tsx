import React from 'react';
import { Tabs } from 'expo-router';
import { Home, Sparkles, Bot, MessageCircle,Box, Users, User } from 'lucide-react-native';

// 이 파일이 하단 탭 메뉴의 전체적인 디자인과 구성을 결정합니다.
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#ec4899', // 활성 탭 아이콘 색상
        headerTitleAlign: 'center',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '800',
        },
        tabBarStyle: {
          paddingTop: 4,
        }
      }}>
      <Tabs.Screen
        name="index" // 파일 이름 (index.tsx)
        options={{
          title: '홈', // 탭에 표시될 이름
          tabBarIcon: ({ color }) => <Home color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="fortune" // 파일 이름 (fortune.tsx)
        options={{
          title: '운세',
          tabBarIcon: ({ color }) => <Sparkles color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="Chat" // 파일 이름 (Chat.tsx)
        options={{
          title: '채팅방',
          tabBarIcon: ({ color }) => <MessageCircle color={color} size={24} />,
        }}
      />
      {/* === 커뮤니티 탭 추가 === */}
      <Tabs.Screen
        name="community" // 파일 이름 (community.tsx)
        options={{
          title: '커뮤니티',
          tabBarIcon: ({ color }) => <Box color={color} size={24} />,
        }}
      />
      {/* ===================== */}
      <Tabs.Screen
        name="counseling" // 파일 이름 (consulting.tsx)
        options={{
          title: '상담',
          tabBarIcon: ({ color }) => <Users color={color} size={24} />,
        }}
      />
      <Tabs.Screen
        name="myPage" // 파일 이름 (myPage.tsx)
        options={{
          title: '마이페이지',
          tabBarIcon: ({ color }) => <User color={color} size={24} />,
        }}
      />
    </Tabs>
  );
}

