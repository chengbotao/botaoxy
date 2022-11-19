/*
 * @Author: Chengbotao
 * @Date: 2022-11-19 23:48:27
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './input';

const defaultInput = () => (
  <>
    <Input
      style={{ width: '300px' }}
      placeholder="placeholder"
      onChange={action('onChange')}
      prepend="https://"
    ></Input>
  </>
);
const inputWithSize = () => (
  <>
    <Input sized="lg"></Input>
    <Input sized="sm"></Input>
  </>
);

const inputWithDisabled = () => (
  <>
    <Input disabled></Input>
  </>
);

storiesOf('Input<输入框>', module)
  .add('Input', defaultInput)
  .add('不同尺寸的 Input', inputWithSize)
  .add('禁用状态的 Input', inputWithDisabled);
