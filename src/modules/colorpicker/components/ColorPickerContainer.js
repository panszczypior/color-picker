import React from 'react';
import { connect } from 'react-redux';
import common from '../../common';

const {
  components: { Button, Input }
} = common;

const ColorPickerContainer = () => {
  return (
    <div>
      <Input onChange={() => console.log('input change')} />
      <Button onClick={() => console.log('button clicked')}>accept</Button>
    </div>
  );
};

export default connect()(ColorPickerContainer);
