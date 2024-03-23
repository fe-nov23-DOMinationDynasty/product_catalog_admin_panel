/* eslint-disable @typescript-eslint/no-explicit-any */
// ** Icon imports
import Login from 'mdi-material-ui/Login';
import Table from 'mdi-material-ui/Table';
import CubeOutline from 'mdi-material-ui/CubeOutline';
import HomeOutline from 'mdi-material-ui/HomeOutline';
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase';
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline';
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline';
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline';
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline';
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types';

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: HomeOutline as any,
      path: '/',
    },
    {
      title: 'Account Settings',
      icon: AccountCogOutline as any,
      path: '/account-settings',
    },
    {
      sectionTitle: 'Pages',
    },
    {
      title: 'Login',
      icon: Login as any,
      path: '/pages/login',
      openInNewTab: true,
    },
    {
      title: 'Register',
      icon: AccountPlusOutline as any,
      path: '/pages/register',
      openInNewTab: true,
    },
    {
      title: 'Error',
      icon: AlertCircleOutline as any,
      path: '/pages/error',
      openInNewTab: true,
    },
    {
      sectionTitle: 'User Interface',
    },
    {
      title: 'Typography',
      icon: FormatLetterCase as any,
      path: '/typography',
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended as any,
    },
    {
      title: 'Cards',
      icon: CreditCardOutline as any,
      path: '/cards',
    },
    {
      title: 'Tables',
      icon: Table as any,
      path: '/tables',
    },
    {
      icon: CubeOutline as any,
      title: 'Form Layouts',
      path: '/form-layouts',
    },
  ];
};

export default navigation;
