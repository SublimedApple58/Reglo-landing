import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const REDIRECT_STORAGE_KEY = 'reglo_redirect_path';

export default function RouteRecovery() {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectPath = sessionStorage.getItem(REDIRECT_STORAGE_KEY);
    if (!redirectPath || redirectPath === '/') {
      return;
    }

    sessionStorage.removeItem(REDIRECT_STORAGE_KEY);
    navigate(redirectPath, { replace: true });
  }, [navigate]);

  return null;
}
