/*
 * @Author: Chengbotao
 * @Date: 2022-10-17 00:09:40
 */
import React, { FC, createContext, useState } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizontal' | 'vertical';
type MenuSelectCallback = (selectedIndex: number) => void;

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: MenuSelectCallback;
  children?: React.ReactNode;
}

interface MenuContext {
  index: number;
  onSelect?: MenuSelectCallback;
}
export const menuContext = createContext<MenuContext>({ index: 0 });

const Menu: FC<MenuProps> = (props) => {
  const { className, defaultIndex, style, mode, children } = props;

  const [currentActive, setCurrentActive] = useState(defaultIndex);
  const classes = classNames('xy-menu', className, {
    'xy-menu-vertical': mode === 'vertical',
  });
  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'vertical',
};

export default Menu;
