import { Navigate } from 'react-router';
import SuspenseLazy from '@/components/suspense-lazy';
import Page404 from './pages/page404';

const Home = SuspenseLazy(() => import('@/pages/home'));
const About = SuspenseLazy(() => import('@/pages/about'));

export const routes = [
  {
    path: '/',
    element: <Navigate to="home" />, // 重定向
  },
  {
    path: '/home',
    element: Home,
  },
  {
    path: '/about',
    element: About,
  },
  // 未匹配到页面
  {
    path: '*',
    element: <Page404 />,
  },
];
