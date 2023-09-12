import styled from '@emotion/styled';
import { Grid } from '@mui/material';

export const LoginStyles = {
  containerForm: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  contentIcon: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  registerText: {
    fontSize: '20px',
    mt: '20px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    mb: 4,
  },

  logIn: {
    fontSize: '16px',
    textTransform: 'capitalize',
    fontWeight: 500,
  },

  helperText: {
    textAlign: 'center',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#0E79BF',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export const CustomBackground = styled(Grid)({
  width: '100%',
  height: '100vh',
  background: `
    radial-gradient(67.13% 47.81% at 71.53% 28.91%, rgba(125, 211, 252, .5) 0, rgba(186, 230, 253, .1) 64.39%, rgba(249, 168, 212, 0) 100%),
    radial-gradient(58.8% 49.38% at 0 61.56%, #fbcfe8 0, rgba(254, 219, 246, 0) 87.62%),
    radial-gradient(55.84% 50% at 50% 50%, rgba(203, 185, 255, .8) 0, rgba(216, 202, 254, 0) 100%),
    #fdf2f8
  `,
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
});
