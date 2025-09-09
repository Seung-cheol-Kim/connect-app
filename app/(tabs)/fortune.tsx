import { Flower, Heart, Sparkles, Users } from 'lucide-react-native';
import React from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// 각 운세 메뉴에 대한 타입 정의
interface FortuneMenu {
  id: string;
  title: string;
  subtitle: string;
  icon: React.FC<{ color: string; size: number }>;
  image: string;
  gradient: string[];
}

// 운세 메뉴 데이터
const fortuneMenus: FortuneMenu[] = [
  {
    id: 'tarot',
    title: '연애 타로',
    subtitle: '그 사람의 속마음이 궁금하다면?',
    icon: Sparkles,
    image: 'https://images.unsplash.com/photo-1596714083050-6da64937929a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: ['#a855f7', '#d8b4fe'],
  },
  {
    id: 'love',
    title: '오늘의 연애운',
    subtitle: '새로운 인연이 찾아올까요?',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1525263306242-d074389088a8?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: ['#ec4899', '#f9a8d4'],
  },
  {
    id: 'reunion',
    title: '재회운',
    subtitle: '다시 만날 수 있을까요?',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1542327534-59a1fe8ea5eb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: ['#10b981', '#6ee7b7'],
  },
  {
    id: 'marriage',
    title: '결혼운',
    subtitle: '나의 배우자는 어떤 사람?',
    icon: Flower,
    image: 'https://images.unsplash.com/photo-1597157639143-6c5a2a7a8a11?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    gradient: ['#f59e0b', '#fcd34d'],
  },
];

export default function FortuneScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>운세/타로</Text>
        <Text style={styles.description}>당신의 연애가 궁금하신가요?{'\n'}고민을 선택해보세요.</Text>
        
        <View style={styles.menuContainer}>
          {fortuneMenus.map(menu => {
            const Icon = menu.icon;
            return (
              <TouchableOpacity key={menu.id} style={styles.card}>
                <ImageBackground source={{ uri: menu.image }} style={styles.cardBackground} imageStyle={{ borderRadius: 16 }}>
                  <View style={styles.cardOverlay} />
                  <View style={styles.cardContent}>
                    <View style={[styles.iconContainer, { backgroundColor: menu.gradient[0] }]}>
                      <Icon color="#fff" size={24} />
                    </View>
                    <View>
                      <Text style={styles.cardTitle}>{menu.title}</Text>
                      <Text style={styles.cardSubtitle}>{menu.subtitle}</Text>
                    </View>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  description: {
    fontSize: 16,
    color: '#6b7280',
    marginTop: 8,
    marginBottom: 24,
  },
  menuContainer: {
    gap: 16,
  },
  card: {
    height: 120,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  cardBackground: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cardOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderRadius: 16,
  },
  cardContent: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 2,
  },
});

