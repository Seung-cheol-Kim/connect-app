import { useRouter } from 'expo-router'; // 화면 이동을 위해 useRouter 추가
import { Heart, MessageCircle, Plus } from 'lucide-react-native'; // Plus 아이콘 추가
import React, { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- 타입 정의 ---
interface Post {
  id: string;
  category: '이별' | '연애' | '썸' | '재회' | '결혼/부부';
  gender: 'male' | 'female';
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  time: string;
}
// --- 타입 정의 끝 ---

// Mock 데이터: 실제로는 서버에서 이 데이터를 받아오게 됩니다.
const categories = ['전체', '이별', '연애', '썸', '재회', '결혼/부부'];

const posts: Post[] = [
  { id: '1', category: '연애', gender: 'female', title: "연애 3년차, 매너리즘 극복했어요!", content: "다들 도움 주셔서 감사해요. 결국 소통이 답이었네요...", author: "행복한연인", likes: 156, comments: 43, time: "2시간 전" },
  { id: '2', category: '재회', gender: 'male', title: "재회 성공 후기 (1년 만에 다시 만났어요)", content: "정말 많은 분들이 도움 주셨는데, 드디어 재회했어요! 포기하지 마세요 여러분.", author: "재회성공자", likes: 298, comments: 87, time: "4시간 전" },
  { id: '3', category: '썸', gender: 'female', title: "썸남한테 이렇게 카톡 보냈는데 어떤가요?", content: "제가 너무 급발진 한 걸까요? 답장이 없어서 불안해요 ㅠㅠ 사진 첨부합니다.", author: "콩닥콩닥", likes: 45, comments: 112, time: "5시간 전" },
  { id: '4', category: '이별', gender: 'male', title: "이별 후유증... 너무 힘드네요.", content: "헤어진 지 한 달 째, 아직도 매일 밤 그 사람 생각이 나요. 어떻게 해야 잊을 수 있을까요?", author: "눈물만주룩", likes: 188, comments: 76, time: "8시간 전" },
  { id: '5', category: '결혼/부부', gender: 'female', title: "남편이랑 사소한 걸로 자꾸 싸워요.", content: "결혼 선배님들 조언 좀 부탁드립니다. 양말 뒤집어 놓는 거 때문에...", author: "신혼일기", likes: 97, comments: 54, time: "1일 전" },
  { id: '6', category: '연애', gender: 'male', title: "여자친구 선물 추천 좀 해주세요!", content: "곧 100일인데 뭘 줘야할지 감이 안 잡히네요. 20대 여자분들 도와주세요!", author: "선물고민남", likes: 210, comments: 95, time: "2일 전" },
];

export default function CommunityScreen() {
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const router = useRouter(); // router 객체 생성

  const filteredPosts = selectedCategory === '전체' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);
  
  // FlatList의 각 아이템을 렌더링하는 함수
  const renderPostItem = ({ item }: { item: Post }) => (
    // 게시글을 누르면 상세 페이지로 이동하도록 설정 (추후 구현)
    <TouchableOpacity style={styles.postCard} onPress={() => { /* router.push(`/post/${item.id}`) */ }}>
      <View style={styles.postHeader}>
        <View style={styles.authorInfo}>
          {/* 작성자 성별에 따라 색상 변경 */}
          <View style={[styles.genderIndicator, { backgroundColor: item.gender === 'male' ? '#bae6fd' : '#fbcfe8' }]} />
          <Text style={styles.postAuthor}>{item.author}</Text>
          <Text style={styles.postCategory}>· {item.category}</Text>
        </View>
      </View>
      <Text style={styles.postTitle}>{item.title}</Text>
      <Text style={styles.postContent} numberOfLines={2}>{item.content}</Text>
      <View style={styles.postFooter}>
        <View style={styles.postStats}>
          <Heart color="#ef4444" size={14} /><Text style={styles.postStatText}>{item.likes}</Text>
          <MessageCircle color="#6b7280" size={14} /><Text style={styles.postStatText}>{item.comments}</Text>
        </View>
        <Text style={styles.postTime}>{item.time}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* 카테고리 선택 스크롤 메뉴 */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryContainer}>
          {categories.map(category => (
            <TouchableOpacity 
              key={category} 
              style={[styles.categoryButton, selectedCategory === category && styles.selectedCategoryButton]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* 게시글 목록 */}
      <FlatList
        data={filteredPosts}
        renderItem={renderPostItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />

      {/* === 글쓰기 플로팅 버튼 추가 === */}
      <TouchableOpacity 
        style={styles.fab} 
        onPress={() => { /* router.push('/create-post') */ }}
      >
        <Plus color="#fff" size={28} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f9fafb',
  },
  categoryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  categoryButton: {
    backgroundColor: '#e5e7eb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  selectedCategoryButton: {
    backgroundColor: '#ec4899',
  },
  categoryText: {
    color: '#4b5563',
    fontWeight: '600',
  },
  selectedCategoryText: {
    color: '#fff',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 80, // FAB에 가려지지 않도록 하단 여백 추가
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#f3f4f6',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  postAuthor: {
    fontWeight: 'bold',
    color: '#111827',
  },
  postCategory: {
    fontSize: 12,
    color: '#6b7280',
    marginLeft: 4,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#1f2937',
  },
  postContent: {
    fontSize: 14,
    color: '#4b5563',
    marginBottom: 12,
    lineHeight: 20,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  postStatText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#6b7280',
  },
  postTime: {
    fontSize: 12,
    color: '#9ca3af',
  },
  // Floating Action Button (FAB) 스타일
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ec4899',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});

