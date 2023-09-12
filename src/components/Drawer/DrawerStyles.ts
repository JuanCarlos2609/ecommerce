import { Theme } from '@mui/material';

export const DrawerStyles = {
  root: {
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
  },

  container: {
    flexDirection: 'column',
    width: 320,
    p: 2,
  },

  contentIcon: {
    display: 'flex',
    justifyContent: 'flex-end',
  },

  title: {
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: 700,
    fontSize: '18px',
  },
};
