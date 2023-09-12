import { Grid, IconButton, Tooltip, Typography } from '@mui/material';
import { MyShoppingStyles } from './MyShoppingStyles';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const MyShopping = () => {
  const style = MyShoppingStyles;
  const navigation = useNavigate();

  return (
    <Grid sx={style.container}>
      <Typography sx={style.title}>Mis Compras</Typography>
      <Tooltip title="Ir atras">
        <IconButton onClick={() => navigation('/')}>
          <ArrowBack sx={{ width: 30, height: 30 }} />
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export { MyShopping };
