import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CircleStackIcon from '@heroicons/react/24/solid/CircleStackIcon';
import FlagIcon from '@heroicons/react/24/solid/FlagIcon';
import RocketLaunchIcon from '@heroicons/react/24/solid/RocketLaunchIcon';
import DocumentChartBarIcon from '@heroicons/react/24/solid/DocumentChartBarIcon';
import { SvgIcon } from '@mui/material';

export const items = [
  {
    title: 'Overview',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Dataset',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <CircleStackIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Process',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <FlagIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Evaluation',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <RocketLaunchIcon />
      </SvgIcon>
    )
  },
  {
    title: 'Report',
    path: '/',
    icon: (
      <SvgIcon fontSize="small">
        <DocumentChartBarIcon />
      </SvgIcon>
    )
  },
  // {
  //   title: 'Customers',
  //   path: '/customers',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UsersIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Companies',
  //   path: '/companies',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <ShoppingBagIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Account',
  //   path: '/account',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Settings',
  //   path: '/settings',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <CogIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Login',
  //   path: '/auth/login',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <LockClosedIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Register',
  //   path: '/auth/register',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <UserPlusIcon />
  //     </SvgIcon>
  //   )
  // },
  // {
  //   title: 'Error',
  //   path: '/404',
  //   icon: (
  //     <SvgIcon fontSize="small">
  //       <XCircleIcon />
  //     </SvgIcon>
  //   )
  // }
];
