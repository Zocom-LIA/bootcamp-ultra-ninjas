import { Header } from '@zocom/header';
import './style.scss';
import React from 'react';
import { Kitchen_ongoing_card } from '@zocom/kitchen_ongoing_card';
import { Kitchen_done_card } from '@zocom/kitchen_done_card';

export const StaffOrders = () => {
  return (
    <section className='orderView'>
      <section>
        <Kitchen_ongoing_card />
      </section>
      <section>
        <Kitchen_done_card />
      </section>
    </section>
  );
};
