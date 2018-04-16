import React from 'react';
import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

const Root = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function Loading({ color = '#55ACEE', size = 'large' } = {}) {
  return (
    <Root>
      <ActivityIndicator size={size} color={color} />
    </Root>
  );
}
