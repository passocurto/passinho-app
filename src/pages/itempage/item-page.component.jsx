import React from 'react';

import SHOP_DATA from '../shop/shop.data';

import CollectionPreview from '../../components/collection-preview/collection-preview';


class itemPage extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        collections: SHOP_DATA
      };
    }
  
    render() {
      const { collections } = this.state;
      return (
        <div className='item-page'>
          { collections.map(({ id, ...otherCollectionProps }) => ( <CollectionPreview key={id} {...otherCollectionProps} /> )) }
        </div>
      );
    }
  }
  
  export default itemPage;


