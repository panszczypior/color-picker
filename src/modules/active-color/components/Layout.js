import React from 'react';
import { connect } from 'react-redux';
import { PageWrapper, ColorName, FloatingContainer } from './Layout.ui';

const Layout = ({ activeColor: { name, hex }, children }) => {
  return (
    <PageWrapper color={hex}>
      <ColorName color={hex}>{name}</ColorName>
      <FloatingContainer>{children}</FloatingContainer>
    </PageWrapper>
  );
};

export default connect(
  ({ activeColor }) => ({
    activeColor
  }),
  null
)(Layout);
