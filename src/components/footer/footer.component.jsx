import React from 'react';

import './footer.styles.scss';

import SHOP_DATA from '../../pages/shop/shop.data';

class Footer extends React.Component{
    constructor() {
        super();
    
        this.state = {
            collections: SHOP_DATA
          };
      }
      render() {
        const { collections } = this.state;
        return(   
            <div className='footer'>
                <div>
                    <center>
                        { collections.map(({ id, title }) => ( <a href={title} className='clothers' key={id} > {title} </a> ) ) }   
                    </center>
                </div>
                <div className='developer'>
                    <span>Produzido poor PassoCurto desenvolvimento</span>
                </div>
            </div>
            )
        }
    }

export default Footer;