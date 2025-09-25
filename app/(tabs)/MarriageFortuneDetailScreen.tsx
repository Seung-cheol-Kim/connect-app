import { useRouter } from 'expo-router';
import { ArrowLeft, HeartHandshake } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MarriageFortuneDetailScreen() {
  const router = useRouter();
  
  const fortuneResult = {
    title: '결혼운',
    content: "두 사람의 관계가 안정기에 접어들어 결혼을 이야기하기 좋은 시기입니다. 미래에 대한 진솔한 대화를 나눠보세요. 서로의 가치관을 존중한다면 더 큰 행복이 기다리고 있을 것입니다.",
    keywords: ["안정", "미래", "대화"],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#1f2937" />
        </TouchableOpacity>

        <View style={styles.resultCard}>
          <View style={styles.cardHeader}>
            <HeartHandshake size={28} color="#ec4899" />
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
