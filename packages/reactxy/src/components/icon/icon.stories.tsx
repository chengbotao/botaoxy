/*
 * @Author: Chengbotao
 * @Date: 2022-11-17 22:53:28
 */
import React from 'react';
import { storiesOf } from '@storybook/react';
import Icon from './icon';

const primaryIcon = () => (
    <>
        <Icon theme="primary" icon="coffee"></Icon>
    </>
)

storiesOf('Icon<图标>', module).add('Icon', primaryIcon);
