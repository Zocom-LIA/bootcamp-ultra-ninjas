import './style.scss';
import { ReactNode } from 'react';
import { StyleTypes } from '@zocom/types';
import React from 'react'
import cartIcon from './../../../../../assets/cart.svg';

export const Header = () => {
    return (
        // <img src={'./../../../../../assets/cart.svg'} alt="cart icon" />
        <img src={cartIcon} alt="cart icon" />
    )
}