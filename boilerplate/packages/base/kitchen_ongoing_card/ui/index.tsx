import './styles.scss';
import menuData from './../../../../../data/menu.json';
import { Button, ButtonType} from "@zocom/button";
import { StyleTypes } from "@zocom/types";

export const Kitchen_ongoing_card = () => {
    //{menuData.wontons[1].name}

    const handleClick = () => {
        console.log("clicked!");
      };

    return(
    <>
    <h2 className='h2-ongoing'>ONGOING -------</h2>
        <article className='kitchen-ongoing-card-wrapper'>
            <h1>#ordernummer</h1>
            <section>
                <p>mat + pris</p>
                <p>totala summan</p>
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