import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import { ScreenLayout } from './layout';
import { Login } from './views/Login';
import { MyShopping } from './views/MyShopping';

const Root = () => {
  return (
    <BrowserRouter>
      <ScreenLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-shopping" element={<MyShopping />} />
        </Routes>
      </ScreenLayout>
    </BrowserRouter>
  );
};

export default Root;
