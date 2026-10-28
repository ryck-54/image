import type { ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-500 text-white hover:bg-blue-800',
  secondary: 'bg-gray-500 text-white hover:bg-gray-700',
  danger: 'bg-red-500 text-white hover:bg-red-700',
};

export function Button({
  children,
  className,
  variant = 'primary',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`h-10 rounded px-4 py-2 font-bold disabled:opacity-50 ${variantClasses[variant]} ${className ?? ''}`}
      {...props}
    >
      {children}
    </button>
  );
}