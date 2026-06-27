import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import "./Button.css";

type ButtonVariant = "primary" | "outline";

type BaseButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButtonProps = BaseButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLinkProps = BaseButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const buttonClassName = `button button--${variant} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <a className={buttonClassName} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
}

export default Button;
