import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, className, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-1">
      <span>{label}</span>
      <input
        className={`h-10 rounded border border-gray-400 px-3 py-2 ${className ?? ''}`}
        {...props}
      />
    </label>
  );
}