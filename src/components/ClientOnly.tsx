'use client';
/**
 * Hack to work around NextJS hydration
 *
 * This component will only render its children on the client side.
 *
 * solves the problem Error: useLocalStorage is a client-only hook
 * by wrapping the component that uses the hook in this component
 * @param {ClientOnlyProps} props - The properties object.
 * 
 * @see https://github.com/uidotdev/usehooks/issues/218
 */
import { useIsClient } from '@uidotdev/usehooks';

type ClientOnlyProps = {
  children: React.ReactNode;
};

export const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const isClient = useIsClient();

  // Render children if on client side, otherwise return null
  return isClient ? <>{children}</> : null;
};
