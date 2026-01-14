import { useEffect, useRef, useState } from 'react';

type ToastState = {
  variant: 'success' | 'error';
  message: string;
} | null;

type ToastOptions = {
  duration?: number;
};

export function useToast(options: ToastOptions = {}) {
  const { duration = 4000 } = options;
  const [toast, setToast] = useState<ToastState>(null);
  const timeoutRef = useRef<number | null>(null);

  const showToast = (variant: 'success' | 'error', message: string) => {
    setToast({ variant, message });
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = window.setTimeout(() => {
      setToast(null);
      timeoutRef.current = null;
    }, duration);
  };

  const clearToast = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setToast(null);
  };

  useEffect(() => () => clearToast(), []);

  return { toast, showToast, clearToast };
}
