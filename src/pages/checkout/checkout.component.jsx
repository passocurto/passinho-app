import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total }) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Produto</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Descrição</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantidade</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Preço</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remover</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      {/* Please use the following test credit card for payments */}
      {/*  <br > */}
      {/*  4242 4242 4242 4242 - Exp: 01 20 - CVV: 123  */}
    </WarningContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
