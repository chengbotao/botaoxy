import React, { FC, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';

export enum ButtonSize {
  Large = 'lg',
  Small = 'sm',
}
export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Danger = 'danger',
  Link = 'link',
}
export interface ButtonProps
  extends Partial<ButtonHTMLAttributes<HTMLElement> & AnchorHTMLAttributes<HTMLElement>> {
  disabled?: boolean;
  href?: string;
  className?: string;
  size?: ButtonSize;
  btnType?: ButtonType;
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = (props) => {
  const { btnType, disabled, className, size, href, children, ...restProps } = props;
  const classes = classNames('xy-button', className, {
    [`xy-button-${btnType}`]: btnType,
    [`xy-button-${size}`]: size,
    disabled: btnType === ButtonType.Link && disabled,
  });

  if (btnType === ButtonType.Link && href) {
    return (
      <a className={classes} href={href} {...restProps}>
        {children}
      </a>
    );
  } else {
    return (
      <button className={classes} disabled={disabled} {...restProps}>
        {children}
      </button>
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: ButtonType.Default,
};

export default Button;
