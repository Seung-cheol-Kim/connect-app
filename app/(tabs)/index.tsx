import { useRouter } from 'expo-router';
import { Award, Clock, Eye, Flower2, Heart, HeartOff, LucideProps, MessageCircle, Play, Sparkles, Star, TrendingUp, Undo2 } from 'lucide-react-native';
import React from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// --- 타입 정의 ---
interface Category {
  id: string;
  name: string;
  icon: React.FC<LucideProps>;
  color: string;
}

interface Counselor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  rank: number;
}

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  time: string;
  isHot: boolean;
}

interface LoveContent {
    id: number;
    title: string;
    duration: string;
    views: number;
    category: string;
}
// --- 타입 정의 끝 ---


// --- Mock 데이터 ---
const bannerAd = {
  image: "https://images.unsplash.com/photo-1580115959433-b53b5b6ad9c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGxvdmUlMjBiYW5uZXJ8ZW58MXx8fHwxNzU2OTAyMjMyfDA&ixlib-rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  title: "💕 새해 연애운 대박 이벤트",
  subtitle: "무료 연애 상담 + 타로 점보기"
};

const categories: Category[] = [
  { id: 'community', name: '이별', icon: HeartOff, color: '#60a5fa' },
  { id: 'community', name: '연애', icon: Heart, color: '#f472b6' },
  { id: 'community', name: '썸', icon: Sparkles, color: '#a78bfa' },
  { id: 'community', name: '재회', icon: Undo2, color: '#34d399' },
  { id: 'community', name: '결혼/부부', icon: Flower2, color: '#fbbf24' },
];

const topCounselors: Counselor[] = [
  { id: 1, name: "김사랑 상담사", specialty: "연애/이별", rating: 4.9, reviews: 1847, image: "https://images.unsplash.com/photo-1620148222862-b95cf7405a7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Vuc2Vsb3IlMjB0aGVyYXBpc3QlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzU2OTAyMjM1fDA", rank: 1 },
  { id: 2, name: "박연애 상담사", specialty: "썸/재회", rating: 4.8, reviews: 1623, image: "https://placehold.co/100x100/F9A8D4/4A2324?text=박", rank: 2 },
  { id: 3, name: "이결혼 상담사", specialty: "결혼/부부", rating: 4.9, reviews: 1456, image: "https://placehold.co/100x100/A5B4FC/3730A3?text=이", rank: 3 },
];

const loveContent: LoveContent[] = [
    { id: 1, title: "연애 초기 실수하지 않는 법", duration: "12:45", views: 25600, category: "연애팁" },
    { id: 2, title: "이별 후 마음 치유하는 방법", duration: "18:20", views: 41200, category: "힐링" },
    { id: 3, title: "썸남/썸녀 마음 확인하는 법", duration: "15:30", views: 33800, category: "썸 전략" }
];

const hotPosts: Post[] = [
  { id: 1, title: "연애 3년차, 매너리즘 극복했어요!", content: "다들 도움 주셔서 감사해요. 결국 소통이 답이었네요...", author: "행복한연인", likes: 156, comments: 43, time: "2시간 전", isHot: true },
  { id: 2, title: "재회 성공 후기 (1년 만에 다시 만났어요)", content: "정말 많은 분들이 도움 주셨는데, 드디어 재회했어요!", author: "재회성공자", likes: 298, comments: 87, time: "4시간 전", isHot: true },
  { id: 3, title: "첫 데이트 성공 팁 공유합니다", content: "연애 초보였는데 여기서 배운 팁들로 첫 데이트 대성공!", author: "데이트왕초보", likes: 89, comments: 24, time: "6시간 전", isHot: false },
];
// --- Mock 데이터 끝 ---

export default function HomeScreen() {
  const router = useRouter(); 

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {/* Banner Ad */}
          <TouchableOpacity style={styles.card} onPress={() => router.push('/(tabs)/fortune')}>
            <ImageBackground source={{ uri: bannerAd.image }} style={styles.bannerImage} imageStyle={{ borderRadius: 12 }}>
              <View style={styles.bannerOverlay} />
              <View style={styles.bannerTextContainer}>
                <Text style={styles.bannerTitle}>{bannerAd.title}</Text>
                <Text style={styles.bannerSubtitle}>{bannerAd.subtitle}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>

          {/* 카테고리 섹션 */}
          <View style={styles.categoryContainer}>
            {categories.map(category => {
              const Icon = category.icon;
              return (
                <TouchableOpacity key={category.name} style={styles.categoryItem} onPress={() => router.push('/(tabs)/community')}>
                  <View style={[styles.iconContainer, { backgroundColor: category.color }]}>
                    <Icon color="#fff" size={23} />
                  </View>
                  <Text style={styles.categoryText}>{category.name}</Text>
                </TouchableOpacity>
              )
            })}
          </View>

          {/* 인기 상담사 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleContainer}>
                 <Award color="#f59e0b" size={20} />
                 <Text style={styles.sectionTitle}>인기 상담사</Text>
              </View>
              <TouchableOpacity>
                 <Text style={styles.seeMoreText}>더보기</Text>
              </TouchableOpacity>
            </View>
            {topCounselors.map((counselor) => (
              <View key={counselor.id} style={[styles.card, styles.counselorCard]}>
                <Image source={{ uri: counselor.image }} style={styles.counselorAvatar} />
                <View style={styles.rankBadge}>
                  <Text style={styles.rankText}>{counselor.rank}</Text>
                </View>
                <View style={styles.counselorInfo}>
                  <Text style={styles.counselorName}>{counselor.name}</Text>
                  <View style={styles.counselorDetails}>
                    <Star color="#f59e0b" size={14} fill="#f59e0b" />
                    <Text style={styles.counselorRating}>{counselor.rating}</Text>
                    <Text style={styles.counselorReviews}>• 후기 {counselor.reviews.toLocaleString()}개</Text>
                  </View>
                </View>
                <TouchableOpacity style={styles.counselButton}>
                  <Text style={styles.counselButtonText}>상담하기</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* 연애 콘텐츠 섹션 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionTitleContainer}>
                 <Play color="#ef4444" size={20} />
                 <Text style={styles.sectionTitle}>연애 콘텐츠</Text>
              </View>
               <TouchableOpacity>
                 <Text style={styles.seeMoreText}>더보기</Text>
              </TouchableOpacity>
            </View>
            {loveContent.map((content) => (
              <TouchableOpacity key={content.id} style={[styles.card, styles.contentCard]}>
                 <View style={styles.thumbnailContainer}>
                    <View style={styles.durationBadge}>
                        <Text style={styles.durationText}>{content.duration}</Text>
                    </View>
                 </View>
                 <View style={styles.contentInfo}>
                    <Text style={styles.contentTitle} numberOfLines={2}>{content.title}</Text>
                    <View style={styles.contentDetails}>
                        <View style={styles.contentCategoryBadge}>
                            <Text style={styles.contentCategoryText}>{content.category}</Text>
                        </View>
                        <Eye color="#6b7280" size={12} />
                        <Text style={styles.contentViews}>{content.views.toLocaleString()}</Text>
                    </View>
                 </View>
              </TouchableOpacity>
            ))}
          </View>
          
          {/* 인기 커뮤니티 */}
          <View style={styles.section}>
            <View style={styles.sectionHeader}>
               <View style={styles.sectionTitleContainer}>
                  <TrendingUp color="#f97316" size={20} />
                  <Text style={styles.sectionTitle}>인기 커뮤니티</Text>
               </View>
               <TouchableOpacity onPress={() => router.push('/(tabs)/community')}>
                 <Text style={styles.seeMoreText}>더보기</Text>
              </TouchableOpacity>
            </View>
            {hotPosts.map((post) => (
              <TouchableOpacity key={post.id} style={[styles.card, styles.postCard]}>
                <View style={styles.postHeader}>
                  <Text style={styles.postTitle} numberOfLines={1}>{post.title}</Text>
                  {post.isHot && <View style={styles.hotBadge}><Text style={styles.hotBadgeText}>HOT</Text></View>}
                </View>
                <Text style={styles.postContent} numberOfLines={2}>{post.content}</Text>
                <View style={styles.postFooter}>
                  <Text style={styles.postAuthor}>{post.author}</Text>
                  <View style={styles.postStats}>
                    <Heart color="gray" size={12} /><Text style={styles.postStatText}>{post.likes}</Text>
                    <MessageCircle color="gray" size={12} /><Text style={styles.postStatText}>{post.comments}</Text>
                    <Clock color="gray" size={12} /><Text style={styles.postStatText}>{post.time}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// 스타일 시트
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f9fafb' },
  container: { flex: 1 },
  content: { paddingVertical: 16 },
  card: { backgroundColor: '#fff', borderRadius: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 3, marginHorizontal: 16, marginBottom: 16 },
  bannerImage: { width: '100%', height: 128, justifyContent: 'center', alignItems: 'center' },
  bannerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 12 },
  bannerTextContainer: { ...StyleSheet.absoluteFillObject, alignItems: 'center', justifyContent: 'center' },
  bannerTitle: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
  bannerSubtitle: { color: '#fff', fontSize: 14, marginTop: 4 },
  section: { marginBottom: 16, paddingHorizontal: 16 },
  sectionHeader: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 12,
    justifyContent: 'space-between'
  },
  sectionTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginLeft: 8, color: '#1f2937' },
  seeMoreText: {
    color: '#6b7280',
    fontWeight: '500',
  },
  // Category Styles
  categoryContainer: {
    flexDirection: 'row', // 아이콘들을 가로로 배열
    justifyContent: 'space-between', // 아이콘들 사이에 균등한 간격
    paddingHorizontal: 20, // 좌우 여백
    paddingVertical: 12,
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    // marginRight 제거
  },
  iconContainer: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginBottom: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 4 },
  categoryText: { color: '#374151', fontWeight: '500', fontSize: 12 },
  // Counselor Styles
  counselorCard: { flexDirection: 'row', alignItems: 'center', padding: 12, marginHorizontal: 0 },
  counselorAvatar: { width: 50, height: 50, borderRadius: 25 },
  rankBadge: { position: 'absolute', top: 8, left: 50, width: 18, height: 18, borderRadius: 9, backgroundColor: '#f59e0b', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#fff' },
  rankText: { color: '#fff', fontSize: 10, fontWeight: 'bold' },
  counselorInfo: { flex: 1, marginLeft: 12 },
  counselorName: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
  counselorDetails: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  counselorRating: { marginLeft: 4, color: '#4b5563', fontSize: 12 },
  counselorReviews: { marginLeft: 8, color: '#4b5563', fontSize: 12 },
  counselButton: { paddingHorizontal: 12, paddingVertical: 6, borderWidth: 1, borderColor: '#d1d5db', borderRadius: 16 },
  counselButtonText: { color: '#374151', fontWeight: '600', fontSize: 12 },
  // Love Content Styles
  contentCard: { flexDirection: 'row', padding: 12, alignItems: 'center', marginHorizontal: 0 },
  thumbnailContainer: { width: 100, height: 70, backgroundColor: '#e5e7eb', borderRadius: 8, justifyContent: 'flex-end', alignItems: 'flex-end' },
  durationBadge: { backgroundColor: 'rgba(0,0,0,0.7)', paddingHorizontal: 4, paddingVertical: 2, borderRadius: 4, margin: 4 },
  durationText: { color: '#fff', fontSize: 10, fontWeight: '500' },
  contentInfo: { flex: 1, marginLeft: 12 },
  contentTitle: { fontSize: 14, fontWeight: 'bold', color: '#1f2937', marginBottom: 8 },
  contentDetails: { flexDirection: 'row', alignItems: 'center' },
  contentCategoryBadge: { backgroundColor: '#f3f4f6', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8, marginRight: 8 },
  contentCategoryText: { color: '#4b5563', fontSize: 10, fontWeight: '500' },
  contentViews: { marginLeft: 4, fontSize: 12, color: '#6b7280' },
  // Post Styles
  postCard: { padding: 12, backgroundColor: '#fff', borderRadius: 12, borderWidth: 1, borderColor: '#f3f4f6', marginHorizontal: 0 },
  postHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  postTitle: { fontSize: 16, fontWeight: 'bold', flex: 1, marginRight: 8, color: '#1f2937' },
  hotBadge: { backgroundColor: '#fee2e2', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 8 },
  hotBadgeText: { color: '#b91c1c', fontSize: 10, fontWeight: 'bold' },
  postContent: { color: '#4b5563', marginBottom: 12, fontSize: 14 },
  postFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  postAuthor: { color: '#6b7280', fontSize: 12 },
  postStats: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  postStatText: { marginLeft: 2, color: '#6b7280', fontSize: 12 },
});

