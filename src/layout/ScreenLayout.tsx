import { Box } from '@mui/material';
import Header from '../Header/Header';
import { useLocation } from 'react-router-dom';
import { LocationProps, ScreenLayoutProps } from './types';

const ScreenLayout = ({ children }: ScreenLayoutProps) => {
  const location: LocationProps = useLocation();

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#F9FAFB' }}>
      {location.pathname === '/login' ? null : <Header />}
      <Box
        component="div"
        sx={{
          p: location.pathname === '/login' ? 0 : '30px',
          pt: location.pathname === '/login' ? 0 : '150px',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export { ScreenLayout };
