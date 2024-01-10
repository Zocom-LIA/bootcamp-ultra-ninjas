import React, { useState } from 'react';
import './style.scss';
import { KitchenOngoingCard } from '@zocom/kitchen_ongoing_card';
import { KitchenDoneCard } from '@zocom/kitchen_done_card';
import { Header } from '@zocom/header';

interface Order {
    id: string;
    // Add other properties as needed
}

export const StaffOrders: React.FC = () => {
    const [ongoingOrders, setOngoingOrders] = useState<Order[]>([
      {id:'1'}
    ]);
    const [doneOrders, setDoneOrders] = useState<Order[]>([
      {id:'2'}
    ]);



    const handleRedoClick = (orderId: string) => {
        // Find the order in ongoingOrders
        const orderIndex = ongoingOrders.findIndex((order) => order.id === orderId);

        if (orderIndex !== -1) {
            // Move the order from ongoing to done
            const updatedOngoingOrders = [...ongoingOrders.slice(0, orderIndex), ...ongoingOrders.slice(orderIndex + 1)];
            const updatedDoneOrders = [...doneOrders, ongoingOrders[orderIndex]];

            setOngoingOrders(updatedOngoingOrders);
            setDoneOrders(updatedDoneOrders);
        }
    };


    const handleDeleteClick = (orderId: string) => {
      const updatedDoneOrders = doneOrders.filter((order) => order.id !== orderId);
      setDoneOrders(updatedDoneOrders);
  };

    return (
        <section className='staff'>
            <Header />
            <section className='staff__container'>
                <section className='staff__ongoing'>
                    <h2 className='staff__heading'>ongoing <hr className='staff__line'></hr></h2>

                    {ongoingOrders.map((order) => (
                        <KitchenOngoingCard key={order.id} orderId={order.id} onRedoClick={handleRedoClick} />
                    ))}
                </section>

                <section className='staff__done'>
                    <h2 className='staff__heading'>done <hr className='staff__line'></hr></h2>

                    {doneOrders.map((order) => (
                        <KitchenDoneCard key={order.id} orderId={order.id} onDeleteClick={() => handleDeleteClick(order.id)}/>
                    ))}
                </section>
            </section>
        </section>
    );
};
