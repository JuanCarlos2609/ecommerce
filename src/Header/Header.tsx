import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Badge,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
  Tooltip,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  AccountBox,
  Menu as MuiIcon,
  ShoppingBag,
  ShoppingCart,
} from '@mui/icons-material';
import { HeaderStyles } from './HeaderStyles';
import shopping from '../assets/img/shopping.png';
import { useNavigate } from 'react-router-dom';
import { Drawer } from '../components/Drawer';
import { MenuArray } from './types';

const Header = () => {
  const style = HeaderStyles;
  const theme = useTheme();
  const navigation = useNavigate();
  const match = useMediaQuery(theme.breakpoints.down('sm'));
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const menuOptions: MenuArray[] = [
    {
      name: 'Iniciar Sesión',
      onClick: (): void => navigation('/login'),
      icon: <AccountBox fontSize="small" />,
    },
    {
      name: 'Ver mis compras',
      onClick: (): void => navigation('/my-shopping'),
      icon: <ShoppingCart fontSize="small" />,
    },
  ];

  return (
    <>
      <AppBar component="nav" position="fixed" color="default">
        <Toolbar sx={style.toolbar}>
          <Box
            component="img"
            src={shopping}
            alt="logo-ecommerce"
            sx={style.logo}
            onClick={(): void => navigation('/')}
          />
          {!match ? (
            <Stack direction="row" spacing={2}>
              <Button
                sx={style.button}
                onClick={(): void => navigation('/login')}
              >
                Ingresar
              </Button>
              <IconButton onClick={(): void => navigation('/my-shopping')}>
                <Tooltip title="Ver mis compras">
                  <Badge badgeContent={4} color="secondary">
                    <ShoppingBag sx={style.icon} />
                  </Badge>
                </Tooltip>
              </IconButton>
            </Stack>
          ) : (
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <Badge badgeContent={4} color="secondary">
                <ShoppingBag sx={style.icon} />
              </Badge>
              <IconButton onClick={(): void => setOpenDrawer(!openDrawer)}>
                <MuiIcon />
              </IconButton>
            </Stack>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        title="Menú"
      >
        <MenuList>
          {menuOptions.map((item: MenuArray) => (
            <MenuItem onClick={item.onClick} key={item.name}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText>{item.name}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Drawer>
    </>
  );
};

export default Header;
