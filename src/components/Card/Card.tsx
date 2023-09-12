import {
  Button,
  CardContent,
  CardMedia,
  Grid,
  Card as MuiCard,
  Stack,
  Typography,
} from '@mui/material';
import { CardStyles } from './CardStyle';
import { Data } from '../../redux/Products/types';

const Card = ({
  title,
  image,
  price,
}: Omit<Data, 'description' | 'category' | 'rating'>) => {
  const style = CardStyles;

  return (
    <MuiCard sx={style.root}>
      <CardMedia
        component="img"
        src={image}
        alt={title}
        sx={{ width: '100%', height: 150 }}
      />
      <CardContent>
        <Stack direction="column" spacing={2}>
          <Typography sx={style.titleProduct}>{title}</Typography>
          <Typography sx={style.priceText}>${price}</Typography>
          <Grid component="div" sx={style.contentBtn}>
            <Stack direction="row" spacing={1}>
              <Button sx={style.btn} variant="contained">
                Agregar
              </Button>
              <Button sx={style.btn} variant="contained">
                Ver detalles
              </Button>
            </Stack>
          </Grid>
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export { Card };
