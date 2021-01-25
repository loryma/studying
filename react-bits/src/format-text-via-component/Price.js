import React from 'react';

const Price = (props) => {

  const price = props.children.toLocaleString('en', {
    style: props.showSymbol ? 'currency' : undefined,
    currency: props.showSymbol ? 'USD' : undefined,
    maximumFractionDigits: props.showDecimals ? 2 : 0
  });

  return <span className={props.className}>{price}</span>
};

const Page = () => {
  const lambPrice = 1234.567;
  const jetPrice = 999999.99;
  const bootPrice = 34.567;

  return (
    <div>
      <p>One lamb is <Price className="expensive">{lambPrice}</Price></p>
      <p>One jet is <Price showDecimals={false}>{jetPrice}</Price></p>
      <p>Those gumboots will set ya back
        <Price
        showDecimals={false}
        showSymbol={false}>
        {bootPrice}
        </Price>
        bucks.
      </p>
    </div>
  );
};

export default Page;