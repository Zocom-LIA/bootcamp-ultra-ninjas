import './styles.scss';
import menuData from './../../../../../data/menu.json';
import { Button, ButtonType} from "@zocom/button";
import { StyleTypes, SizeTypes } from "@zocom/types";

export const Kitchen_ongoing_card = () => {
    //{menuData.wontons[1].name}

    const handleClick = () => {
        console.log("clicked!");
      };

    return(
    <>
    {/* <h2 className='h2-ongoing'>ONGOING ----------</h2> */}
        <article className='kitchen-ongoing-card-wrapper'>
            <h1 className='order-number'>#4kjwsdf234k</h1>

        <section className='list-wrapper'>
            <section className='item'>
                <p>{menuData.wontons[0].name} ................. 3 st {menuData.wontons[0].price} sek</p>
                <p>{menuData.wontons[1].name} .................. 2 st {menuData.wontons[1].price} sek</p>
                <hr></hr>
                <p className='total-sum'>[total]</p>
            </section>
        </section>

            <section>
                <p className='wait-ongoing-time'>väntetid</p>
            </section>


            <Button type={ButtonType.REGULAR} style={StyleTypes.DEFAULT} onClick={handleClick}>
                redo att serveras
            </Button>

        </article>
    </>
    );
};