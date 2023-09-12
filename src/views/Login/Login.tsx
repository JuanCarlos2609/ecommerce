import { useState } from 'react';
import {
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Theme,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { ArrowBack, Visibility, VisibilityOff } from '@mui/icons-material';
import { CustomBackground, LoginStyles } from './LoginStyles';
import shopping from '../../assets/img/shopping.png';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { LoginValues } from './types';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [recoveryPassword, setRecoveryPassword] = useState<boolean>(false);
  const [recoveryPass, setRecoveryPass] = useState('');
  const [show, setShow] = useState<boolean>(false);
  const theme: Theme = useTheme();
  const navigate = useNavigate();
  const match = useMediaQuery(theme.breakpoints.up('sm'));
  const style = LoginStyles;
  const requiredValue: string = 'Este campo es obligatorio.';
  const validEmail: string = 'Escriba un email válido.';

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email(validEmail).required(requiredValue),
    password: Yup.string().required(requiredValue),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema,
    onSubmit: (values: LoginValues) => {},
  });

  const handleRecoveryPass = (): void => {};

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} sx={style.containerForm}>
        <Grid sx={{ width: { md: '100%', lg: '70%' }, p: '25px' }}>
          <Grid sx={style.contentIcon}>
            <Grid
              component="img"
              src={shopping}
              alt="logo"
              sx={{ width: 'auto', height: '50px' }}
            />
            <Tooltip title="Ir a home">
              <IconButton onClick={(): void => navigate('/')}>
                <ArrowBack sx={{ width: '30px', height: '30px' }} />
              </IconButton>
            </Tooltip>
          </Grid>
          {recoveryPassword ? (
            <>
              <Typography sx={style.registerText}>
                ¿Has olvidato tu contraseña?
              </Typography>
              <Typography sx={{ fontSize: '16px', mt: '15px', mb: '40px' }}>
                ¡No te preocupes!, Escribe tu email y recibirás instrucciones
                para recuperarla.
              </Typography>
              <Stack direction="column" spacing={4}>
                <TextField
                  fullWidth
                  required
                  type="email"
                  label="Email"
                  placeholder="mail@dominio.com"
                  value={recoveryPass}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setRecoveryPass(e.target.value)
                  }
                />

                <Button
                  fullWidth
                  variant="contained"
                  disabled={recoveryPass === '' ? true : false}
                  sx={style.logIn}
                  onClick={(): void => handleRecoveryPass()}
                >
                  Recuperar contraseña
                </Button>

                <Typography
                  component="a"
                  sx={style.helperText}
                  onClick={(): void => setRecoveryPassword(!recoveryPassword)}
                >
                  volver
                </Typography>
              </Stack>
            </>
          ) : (
            <>
              <Typography sx={style.registerText}>Ingresa tu cuenta</Typography>
              <Stack
                component="form"
                direction="column"
                spacing={4}
                onSubmit={formik.handleSubmit}
              >
                <TextField
                  fullWidth
                  id="email"
                  type="email"
                  label="Email"
                  placeholder="mail@dominio.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                  fullWidth
                  id="password"
                  type={show ? 'text' : 'password'}
                  label="Contraseña"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  InputProps={{
                    endAdornment: show ? (
                      <IconButton onClick={(): void => setShow(!show)}>
                        <VisibilityOff />
                      </IconButton>
                    ) : (
                      <IconButton onClick={(): void => setShow(!show)}>
                        <Visibility />
                      </IconButton>
                    ),
                  }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  onClick={() => formik.submitForm()}
                  sx={style.logIn}
                >
                  Ingresar
                </Button>
                <Typography
                  component="a"
                  sx={style.helperText}
                  onClick={(): void => setRecoveryPassword(!recoveryPassword)}
                >
                  Has olvidado tu contraseña?
                </Typography>
              </Stack>
            </>
          )}
        </Grid>
      </Grid>
      {match ? (
        <>
          <CustomBackground item xs={12} sm={6} md={8} />
        </>
      ) : null}
    </Grid>
  );
};

export { Login };
