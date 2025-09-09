import React from 'react';
import Svg, { Defs, LinearGradient, Stop, Text } from 'react-native-svg';

// '커넥트' 텍스트로만 이루어진 새로운 SVG 로고 컴포넌트입니다.
export function Logo() {
  return (
    <Svg height="30" width="80" viewBox="0 0 80 30">
      <Defs>
        <LinearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#ff7777ff" stopOpacity="1" />
          <Stop offset="1" stopColor="#ff0808ff" stopOpacity="1" />
        </LinearGradient>
      </Defs>
      <Text
        fill="url(#grad)" // 그라데이션 색상을 적용합니다.
        fontSize="22"
        fontWeight="bold"
        x="0"
        y="22"
      >
        커넥트
      </Text>
    </Svg>
  );
}

