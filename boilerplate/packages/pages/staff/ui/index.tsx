import { Header } from '@zocom/header';
import './style.scss';
import React from 'react';
import { Kitchen_ongoing_card } from '@zocom/kitchen_ongoing_card';
import { KitchenDoneCard } from '@zocom/kitchen_done_card';

export const StaffOrders = () => {
  return (
    <section className='orderView'>
      <section className='ongoing-text'>
      <h2 className='h2-ongoing'>ongoing</h2>
        <hr></hr>
        <section>
        <Kitchen_ongoing_card />
        </section>
      </section>
      
      <section>
        <KitchenDoneCard />
      </section>
    </section>
  );
};
