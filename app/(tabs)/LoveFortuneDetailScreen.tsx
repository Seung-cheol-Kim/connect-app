import { useRouter } from 'expo-router';
import { ArrowLeft, Heart } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function LoveFortuneDetailScreen() {
  const router = useRouter();

  const fortuneResult = {
    title: '오늘의 연애운',
    content: "뜻밖의 장소에서 새로운 인연을 만날 가능성이 높은 날입니다. 열린 마음으로 주변을 둘러보세요. 이미 연인이 있다면, 사소한 선물이나 다정한 말 한마디가 관계에 활력을 불어넣어 줄 것입니다.",
    keywords: ["새로운 인연", "기회", "표현"],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#1f2937" />
        </TouchableOpacity>

        <View style={styles.resultCard}>
          <View style={styles.cardHeader}>
            <Heart size={28} color="#ec4899" />
            <Text style={styles.title}>{fortuneResult.title}</Text>
          </View>
          <Text style={styles.content}>{fortuneResult.content}</Text>
          <View style={styles.keywordContainer}>
            {fortuneResult.keywords.map(keyword => (
              <View key={keyword} style={styles.keywordBadge}>
                <Text style={styles.keywordText}># {keyword}</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity style={styles.shareButton}>
          <Text style={styles.shareButtonText}>결과 공유하기</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#f9fafb' },
  container: { padding: 20, flexGrow: 1 },
  backButton: { marginBottom: 16, alignSelf: 'flex-start' },
  resultCard: { backgroundColor: '#fff', borderRadius: 16, padding: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.1, shadowRadius: 8, elevation: 5 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, borderBottomWidth: 1, borderBottomColor: '#f3f4f6', paddingBottom: 16 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#111827', marginLeft: 12 },
  content: { fontSize: 16, lineHeight: 26, color: '#374151', marginBottom: 24 },
  keywordContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  keywordBadge: { backgroundColor: '#fce7f3', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  keywordText: { color: '#be185d', fontWeight: '500' },
  shareButton: { marginTop: 24, backgroundColor: '#ec4899', paddingVertical: 16, borderRadius: 12, alignItems: 'center' },
  shareButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
