'use client';

import { DASHBOARD_ROUTE, SIGNIN_ROUTE } from '@/constants/routes';
import { auth } from '@/services/firebase';
import { redirect } from 'next/navigation';

export default function Home() {

  if (!auth.currentUser) {
    redirect(SIGNIN_ROUTE);
  } else {
    redirect(DASHBOARD_ROUTE);
  }

  return (<>
    <p>Hello</p>
  </>)
}