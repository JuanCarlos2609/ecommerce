import { ReactNode } from 'react';
import { Close } from '@mui/icons-material';
import {
  Box,
  IconButton,
  Drawer as MuiDrawer,
  Typography,
} from '@mui/material';
import { DrawerStyles } from './DrawerStyles';

interface DrawerProps {
  open: boolean;
  onClose: (value: boolean) => void;
  title: string;
  children: ReactNode;
}

const Drawer = ({ open, onClose, title, children }: DrawerProps) => {
  const style = DrawerStyles;
  return (
    <MuiDrawer open={open} anchor="right" sx={style.root}>
      <Box sx={style.container}>
        <Box component="div" sx={style.contentIcon}>
          <IconButton onClick={() => onClose(false)}>
            <Close />
          </IconButton>
        </Box>

        <Typography sx={style.title}>{title}</Typography>

        <Box component="div">{children}</Box>
      </Box>
    </MuiDrawer>
  );
};

export { Drawer };
