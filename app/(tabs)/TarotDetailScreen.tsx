import { useRouter } from 'expo-router';
import { ArrowLeft, Sparkles } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TarotDetailScreen() {
  const router = useRouter();
  
  const fortuneResult = {
    title: '연애 타로',
    content: "카드가 당신의 연애에 긍정적인 신호를 보내고 있습니다. 연인 카드는 두 사람의 관계가 더욱 깊어질 것을 암시하며, 새로운 시작을 의미하는 페이지 카드도 함께 보입니다. 망설이지 말고 당신의 마음을 표현하세요.",
    keywords: ["깊어지는 관계", "새로운 시작", "용기"],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#1f2937" />
        </TouchableOpacity>

        <View style={styles.resultCard}>
          <View style={styles.cardHeader}>
            <Sparkles size={28} color="#ec4899" />
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
