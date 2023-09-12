import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { list } from '../../redux/Products/reducer';
import { Grid } from '@mui/material';
import { Card } from '../../components/Card';
import { Data } from '../../redux/Products/types';

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.products.products);

  useEffect(() => {
    dispatch(list());
  }, [dispatch]);

  return (
    <Grid
      container
      spacing={2}
      sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'start' } }}
    >
      {products.map((item: Data) => (
        <Grid item key={`${item.id}-${item.title}`}>
          <Card
            title={item.title}
            image={item.image}
            price={item.price}
            id={item.id}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export { Home };
