// ** Icon imports
import Login from 'mdi-material-ui/Login';
import Table from 'mdi-material-ui/Table';
import CubeOutline from 'mdi-material-ui/CubeOutline';
import HomeOutline from 'mdi-material-ui/HomeOutline';
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline';
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline';
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline';
import CartOutline from 'mdi-material-ui/CartOutline';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types';

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline,
      path: '/',
    },
    {
      title: 'Products',
      icon: CartOutline,
      path: '/products',
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline,
      path: '/account-settings',
    },
    {
      sectionTitle: 'Pages',
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true,
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true,
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true,
    },
    {
      sectionTitle: 'User Interface',
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables',
    },
    {
      title: 'Form Layouts',
      icon: CubeOutline,
      path: '/form-layouts',
    },
  ];
};

export default navigation;
