import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { ArrowLeft, RefreshCw, X } from 'lucide-react-native';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Modal, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// 타로 카드 데이터 (30장으로 확장)
const TAROT_CARDS = [
    { name: 'The Fool (광대)', meaning: '새로운 시작, 순수함, 모험. 무계획적이지만 잠재력이 가득한 여정의 시작을 의미합니다.' },
    { name: 'The Magician (마법사)', meaning: '창조력, 의지, 재능. 당신이 가진 능력과 기술을 활용하여 원하는 것을 현실로 만들 수 있는 힘을 상징합니다.' },
    { name: 'The High Priestess (여사제)', meaning: '직관, 비밀, 지혜. 드러나지 않은 진실과 내면의 목소리에 귀 기울여야 할 때임을 암시합니다.' },
    { name: 'The Empress (여황제)', meaning: '풍요, 다산, 모성애. 관계에서의 풍요로움과 안정, 창조적인 결실을 맺을 시기임을 나타냅니다.' },
    { name: 'The Emperor (황제)', meaning: '권위, 안정, 리더십. 관계에서의 주도권과 책임감을 가지고 안정적인 기반을 다져야 함을 의미합니다.' },
    { name: 'The Hierophant (교황)', meaning: '전통, 신념, 조언. 기존의 가치관이나 사회적 통념 안에서 관계의 해답을 찾아야 할 시기임을 나타냅니다.' },
    { name: 'The Lovers (연인)', meaning: '사랑, 관계, 선택. 중요한 관계에서의 조화와 결합, 혹은 중대한 선택의 기로에 서 있음을 나타냅니다.' },
    { name: 'The Chariot (전차)', meaning: '승리, 의지력, 통제. 강한 의지와 자신감을 바탕으로 어려움을 극복하고 목표를 향해 나아가는 추진력을 의미합니다.' },
    { name: 'Strength (힘)', meaning: '용기, 내면의 힘, 인내. 외적인 힘이 아닌, 부드러움과 인내심을 통한 내면의 강인함으로 상황을 다스리는 지혜를 상징합니다.' },
    { name: 'The Hermit (은둔자)', meaning: '성찰, 탐구, 고독. 관계에서 한 걸음 물러나 조용히 자신을 돌아보고 내면의 지혜를 구해야 할 때입니다.' },
    { name: 'Wheel of Fortune (운명의 수레바퀴)', meaning: '운명, 변화, 전환점. 당신의 의지와 상관없이 관계에 큰 변화의 시기가 찾아왔음을 암시합니다.' },
    { name: 'Justice (정의)', meaning: '균형, 공정, 결단. 감정에 치우치지 않고 이성적이고 현실적인 판단을 내려야 할 때임을 나타냅니다.' },
    { name: 'The Hanged Man (매달린 남자)', meaning: '희생, 인내, 새로운 관점. 현재의 어려움은 더 큰 깨달음을 얻기 위한 과정일 수 있습니다. 다른 시각으로 상황을 바라보세요.' },
    { name: 'Death (죽음)', meaning: '끝, 변화, 새로운 시작. 기존 관계의 끝이나 큰 변화를 의미하지만, 이는 새로운 시작을 위한 필수적인 과정입니다.' },
    { name: 'Temperance (절제)', meaning: '조화, 균형, 인내. 서로 다른 것들을 조화롭게 융합하며 관계의 안정을 찾아야 할 시기입니다.' },
    { name: 'The Devil (악마)', meaning: '속박, 유혹, 집착. 건강하지 못한 관계나 끊어내지 못하는 집착에 얽매여 있음을 경고합니다.' },
    { name: 'The Tower (탑)', meaning: '급작스러운 변화, 붕괴, 깨달음. 예상치 못한 사건으로 인해 기존의 관계나 믿음이 무너질 수 있습니다.' },
    { name: 'The Star (별)', meaning: '희망, 영감, 긍정. 어려운 시기가 지나고 새로운 희망과 긍정적인 미래가 펼쳐질 것임을 암시합니다.' },
    { name: 'The Moon (달)', meaning: '불안, 환상, 혼란. 관계에 대한 막연한 불안감이나 오해가 있을 수 있습니다. 현실을 명확히 직시해야 합니다.' },
    { name: 'The Sun (태양)', meaning: '성공, 긍정, 활력. 모든 것이 명확해지고, 성공과 기쁨이 가득한 긍정적인 에너지를 나타내는 매우 좋은 카드입니다.' },
    { name: 'Judgement (심판)', meaning: '부활, 용서, 결단. 과거의 관계를 되돌아보고 중요한 결정을 내려야 할 시기입니다.' },
    { name: 'The World (세계)', meaning: '완성, 성취, 통합. 하나의 관계가 성공적으로 완성되고, 그 결실을 맺는 만족스러운 상태를 의미합니다.' },
    { name: 'Ace of Cups', meaning: '새로운 감정, 사랑의 시작, 정서적 풍요. 새로운 사랑이 시작되거나 감정이 충만해짐을 의미합니다.' },
    { name: 'Two of Cups', meaning: '결합, 파트너십, 조화. 두 사람의 마음이 하나로 합쳐지는 아름다운 관계의 시작을 나타냅니다.' },
    { name: 'Ace of Swords', meaning: '새로운 아이디어, 명확성, 진실. 관계에 대한 새로운 깨달음이나 명확한 소통이 필요한 시점입니다.' },
    { name: 'Two of Swords', meaning: '결정 장애, 교착 상태, 휴전. 어떤 결정도 내리지 못하고 갈등을 외면하고 있는 상태를 의미합니다.' },
    { name: 'Ace of Pentacles', meaning: '새로운 기회, 안정, 현실화. 관계가 현실적으로 안정된 기반 위에 세워질 새로운 기회를 의미합니다.' },
    { name: 'Two of Pentacles', meaning: '균형, 적응, 우선순위. 일과 사랑, 혹은 두 사람 사이에서 균형을 잡으려 노력하고 있는 상태를 나타냅니다.' },
    { name: 'Page of Wands', meaning: '열정적인 소식, 새로운 탐험. 관계에 대한 흥미로운 소식이나 새로운 탐험을 시작하고 싶은 열정을 의미합니다.' },
    { name: 'Knight of Cups', meaning: '로맨틱한 제안, 매력, 감성. 감성적인 접근이나 로맨틱한 제안이 있을 수 있음을 암시합니다.' },
];

// 배열을 무작위로 섞는 함수
const shuffleArray = (array: any[]) => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

// 카드 아이템 컴포넌트
const CardItem = ({ card, onPress, index }: { card: any, onPress: () => void, index: number }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: 1,
            duration: 300,
            delay: index * 30, // 각 카드마다 딜레이
            useNativeDriver: true,
        }).start();
    }, [index]);

    const animatedStyle = {
        opacity: animatedValue,
        transform: [
            { scale: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [0.8, 1] }) },
            { translateY: animatedValue.interpolate({ inputRange: [0, 1], outputRange: [20, 0] }) }
        ]
    };

    return (
        <Animated.View style={[styles.cardWrapper, animatedStyle]}>
            <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
                <View style={styles.cardBack}>
                    <Text style={styles.cardBackText}>✨</Text>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default function TarotDetailScreen() {
  const router = useRouter();
  const [cards, setCards] = useState<any[]>([]);
  const [selectedCard, setSelectedCard] = useState<any | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    handleShuffle();
  }, []);

  const handleShuffle = () => {
    setSelectedCard(null);
    setCards([]); // 카드를 비워서 애니메이션을 초기화합니다.
    setTimeout(() => {
        setCards(shuffleArray(TAROT_CARDS));
    }, 100);
  };

  const handleCardPress = (card: any) => {
    setSelectedCard(card);
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    handleShuffle();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient colors={['#4c1d95', '#1e1b4b']} style={styles.gradient}>
        {/* 결과 표시 모달 */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <X size={24} color="#6b7280" />
              </TouchableOpacity>
              {selectedCard && (
                <>
                  <Text style={styles.resultTitle}>{selectedCard.name}</Text>
                  <Text style={styles.resultMeaning}>{selectedCard.meaning}</Text>
                  <TouchableOpacity style={styles.resetButton} onPress={closeModal}>
                    <RefreshCw size={16} color="#fff" />
                    <Text style={styles.resetButtonText}>다시 뽑기</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          </View>
        </Modal>

        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
              <ArrowLeft size={24} color="#fff" />
            </TouchableOpacity>
            
            <View style={styles.header}>
                <Text style={styles.title}>연애 타로</Text>
                <Text style={styles.description}>
                  마음 속으로 질문을 떠올린 후,{'\n'}카드 한 장을 선택해주세요.
                </Text>
            </View>
            
            <View style={styles.cardListContainer}>
                <View style={styles.cardRow}>
                    {cards.slice(0, 10).map((card, index) => (
                        <CardItem 
                            key={`row1-${index}`} 
                            card={card} 
                            onPress={() => handleCardPress(card)} 
                            index={index} 
                        />
                    ))}
                </View>
                <View style={styles.cardRow}>
                    {cards.slice(10, 20).map((card, index) => (
                        <CardItem 
                            key={`row2-${index}`} 
                            card={card} 
                            onPress={() => handleCardPress(card)} 
                            index={index + 10}
                        />
                    ))}
                </View>
                 <View style={styles.cardRow}>
                    {cards.slice(20, 30).map((card, index) => (
                        <CardItem 
                            key={`row3-${index}`} 
                            card={card} 
                            onPress={() => handleCardPress(card)} 
                            index={index + 20}
                        />
                    ))}
                </View>
            </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#1e1b4b' },
    gradient: { flex: 1 },
    container: { flex: 1, paddingHorizontal: 16 },
    backButton: { marginVertical: 16, alignSelf: 'flex-start' },
    header: { alignItems: 'center', marginBottom: 24 },
    title: { fontSize: 28, fontWeight: 'bold', color: '#fff' },
    description: { fontSize: 16, color: '#e0e7ff', marginTop: 8, textAlign: 'center' },
    cardListContainer: {
        flex: 1,
        paddingTop: '40%', // 화면 상단에서부터의 여백을 주어 위치를 올립니다.
        alignItems: 'center',
        gap: 8, // 줄 간의 간격
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 6, // 카드 간의 간격
    },
    cardWrapper:{
        // 애니메이션을 위해 wrapper가 필요합니다.
    },
    cardContainer: { 
      width: 30, 
      height: 50,
    },
    cardBack: { 
      width: '100%', 
      height: '100%', 
      borderRadius: 4, 
      backgroundColor: '#f5d0fe', 
      borderWidth: 1, 
      borderColor: '#e9d5ff', 
      justifyContent: 'center', 
      alignItems: 'center',
    },
    cardBackText: { 
      fontSize: 14, 
      color: '#a855f7' 
    },
    
    // Modal Styles
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center', padding: 20 },
    modalContent: { backgroundColor: '#fff', borderRadius: 16, padding: 24, width: '100%', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 10, elevation: 10 },
    closeButton: { position: 'absolute', top: 12, right: 12 },
    resultTitle: { fontSize: 22, fontWeight: 'bold', color: '#111827', marginBottom: 12, marginTop: 16, textAlign: 'center' },
    resultMeaning: { fontSize: 16, color: '#4b5563', textAlign: 'center', lineHeight: 24, marginBottom: 24 },
    resetButton: { flexDirection: 'row', backgroundColor: '#ec4b99', paddingVertical: 12, paddingHorizontal: 20, borderRadius: 20, alignItems: 'center' },
    resetButtonText: { color: '#fff', fontWeight: 'bold', marginLeft: 8 },
});

