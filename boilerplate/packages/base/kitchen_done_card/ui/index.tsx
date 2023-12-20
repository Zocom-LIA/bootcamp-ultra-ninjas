import { StyleTypes } from '@zocom/types';
import './styles.scss';
import { Button, ButtonType } from '@zocom/button';


export const Kitchen_done_card = () => {
    //{menuData.wontons[1].name}

    const handleClick = () => {
        console.log("clicked!");
      };

    return(
    <>
        <h2 className='h2-done'>DONE --------</h2>
        <article className='kitchen-done-card-wrapper'>
            <h1>#ordernummer</h1>
            <section>
                <p>mat + pris</p>
                <p>totala summan</p>
            </section>

            <section>
                <p className='wait-order-time'>tillagningstid</p>
            </section>

            <Button type={ButtonType.REGULAR} style={StyleTypes.DEFAULT} onClick={handleClick}>
                serverad
            </Button>

        </article>
    </>
    );
};