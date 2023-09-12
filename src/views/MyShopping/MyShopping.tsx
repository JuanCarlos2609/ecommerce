import { Typography } from '@mui/material';
import { MyShoppingStyles } from './MyShoppingStyles';

const MyShopping = () => {
  const style = MyShoppingStyles;
  return (
    <div>
      <Typography sx={style.title}>Mis Compras</Typography>
    </div>
  );
};

export { MyShopping };
