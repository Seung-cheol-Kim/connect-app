import { useRouter } from 'expo-router';
import { X } from 'lucide-react-native';
import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function WritePostScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) {
      Alert.alert('알림', '제목과 내용을 모두 입력해주세요.');
      return;
    }
    console.log('Submitted:', { title, content });
    router.back();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        {/* 헤더: 닫기 버튼과 등록 버튼 */}
        <View style={styles.header}>
          {/* 왼쪽 버튼 영역 */}
          <View style={styles.headerSide}>
            <TouchableOpacity onPress={() => router.back()}>
              <X size={28} color="#1f2937" />
            </TouchableOpacity>
          </View>
          
          {/* 중앙 제목 */}
          <Text style={styles.headerTitle}>글쓰기</Text>

          {/* 오른쪽 버튼 영역 */}
          <View style={[styles.headerSide, { alignItems: 'flex-end' }]}>
            <TouchableOpacity 
              style={[styles.submitButton, (!title.trim() || !content.trim()) && styles.submitButtonDisabled]}
              onPress={handleSubmit}
              disabled={!title.trim() || !content.trim()}
            >
              <Text style={styles.submitButtonText}>등록</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 입력 필드 */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.titleInput}
            placeholder="제목을 입력하세요"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.contentInput}
            placeholder="내용을 입력하세요..."
            value={content}
            onChangeText={setContent}
            multiline
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12, // 헤더 높이를 줄였습니다 (12 -> 8)
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
    height: 90, // 헤더 높이를 고정하여 안정성을 높입니다.
  },
  // 헤더 양쪽 영역의 너비를 맞춰주어 제목이 중앙에 오도록 합니다.
  headerSide: {
    width: 80, 
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center', // 텍스트를 중앙 정렬합니다.
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  submitButton: {
    backgroundColor: '#ec4899',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  submitButtonDisabled: {
    backgroundColor: '#f9a8d4', // 비활성화 시 색상 변경
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    flex: 1,
    padding: 16,
  },
  titleInput: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    marginBottom: 16,
  },
  contentInput: {
    flex: 1,
    fontSize: 16,
    textAlignVertical: 'top', 
  },
});

