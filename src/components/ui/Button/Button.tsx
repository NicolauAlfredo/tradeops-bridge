import type { ReactNode } from "react";
import "./Button.css";

type ButtonVariant = "primary" | "outline";

type CommonButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type LinkButtonProps = CommonButtonProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
};

type NativeButtonProps = CommonButtonProps & {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

type ButtonProps = LinkButtonProps | NativeButtonProps;

function Button(props: ButtonProps) {
  const buttonClassName = `button button--${props.variant ?? "primary"} ${
    props.className ?? ""
  }`.trim();

  if (props.href !== undefined) {
    const { href, target, rel, onClick, children } = props;

    return (
      <a
        href={href}
        target={target}
        rel={rel}
        onClick={onClick}
        className={buttonClassName}
      >
        {children}
      </a>
    );
  }

  const { type = "button", disabled, onClick, children } = props;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonClassName}
    >
      {children}
    </button>
  );
}

export default Button;