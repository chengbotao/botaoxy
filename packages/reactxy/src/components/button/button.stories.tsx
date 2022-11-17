/*
 * @Author: Chengbotao
 * @Date: 2022-11-17 14:00:24
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './button';

const defaultButton = () => (
  <>
    <Button onClick={action('clicked')}>default button</Button>
  </>
);
const buttonWithSize = () => (
  <>
    <Button size="lg">large button</Button>
    <Button size="sm">small button</Button>
  </>
);
const buttonWithType = () => (
  <>
    <Button btnType="danger"> danger button</Button>
    <Button btnType="link">link button</Button>
    <Button btnType="primary">primary button</Button>
  </>
);
const buttonWithDisabled = () => (
  <>
    <Button disabled>default button</Button>
    <Button btnType="link" disabled>
      link button
    </Button>
  </>
);

storiesOf('Button<按钮>', module)
  .add('Button', defaultButton)
  .add('不同尺寸的 Button', buttonWithSize)
  .add('不同类型的 Button', buttonWithType)
  .add('禁用状态的 button', buttonWithDisabled);
