import { useRouter } from 'expo-router';
import { ArrowLeft, Users } from 'lucide-react-native';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ReunionFortuneDetailScreen() {
  const router = useRouter();

  const fortuneResult = {
    title: '재회운',
    content: "과거를 돌아보며 성찰의 시간을 갖기에 좋은 때입니다. 섣부른 연락보다는 당신 스스로가 단단해지는 것이 우선입니다. 서로에게 정말 필요한 존재인지 고민해보세요. 시간은 당신의 편이 되어줄 것입니다.",
    keywords: ["성찰", "시간", "신중함"],
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <ArrowLeft size={24} color="#1f2937" />
        </TouchableOpacity>

        <View style={styles.resultCard}>
          <View style={styles.cardHeader}>
            <Users size={28} color="#ec4899" />
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
