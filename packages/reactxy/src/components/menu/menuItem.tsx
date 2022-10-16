/*
 * @Author: Chengbotao
 * @Date: 2022-10-17 00:21:47
 */
import React, { Children, FC } from 'react';
import classNames from 'classnames';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const classes = classNames('xy-menu-item', className, {
    'is-disabled': disabled,
  });

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

export default MenuItem;
