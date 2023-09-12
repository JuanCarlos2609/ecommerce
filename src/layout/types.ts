import { ReactNode } from 'react';

export interface ScreenLayoutProps {
  children: ReactNode;
}

export interface LocationProps {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: any;
}
