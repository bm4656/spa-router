import { useContext, useEffect } from 'react';
import { RouteContext } from '../components/Router';

export default function useRouter() {
  const { setPathname } = useContext(RouteContext);

  const push = ({ state, url }: { state?: unknown; url: string }) => {
    history.pushState(state, '', url);
    setPathname(window.location.pathname);
  };

  const handlePopState = () => {
    setPathname(window.location.pathname);
  };

  useEffect(() => {
    window.onpopstate = handlePopState;

    return () => {
      window.onpopstate = null;
    };
  }, []);

  return { push };
}
