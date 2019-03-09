import React from 'react';
import { connect } from 'react-redux';
import { PageWrapper, ColorName } from './Layout.ui';

const Layout = ({ activeColor: { name, hex }, children }) => {
  return (
    <PageWrapper color={hex}>
      <ColorName color={hex}>{name}</ColorName>
      {children}
    </PageWrapper>
  );
};

export default connect(
  ({ activeColor }) => ({
    activeColor
  }),
  null
)(Layout);
