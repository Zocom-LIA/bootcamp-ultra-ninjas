import './style.scss';
import { KitchenOngoingCard } from '@zocom/kitchen_ongoing_card';
import { KitchenDoneCard } from '@zocom/kitchen_done_card';

export const StaffOrders = () => {
  return (
    <section className='staff'>
      <section className='staff__ongoing-text'>
      <h2 className='staff__heading'>ongoing <hr className='staff__line'></hr></h2>
        <section>
        <KitchenOngoingCard />
        </section>
      </section>
      
      <section>
      <h2 className='staff__heading'>done <hr className='staff__line'></hr></h2>
        <KitchenDoneCard />
      </section>
    </section>
  );
};
