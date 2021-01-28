import React from 'react';

const scale = [
  0,
  8,
  16,
  32,
  64
];

const createScaledPropertyGetter = (scale) => (prop) => (x) => {
  return (typeof x === 'number' && typeof scale[x] === 'number')
    ? {[prop]: scale[x]}
    : null
};
const getScaledProperty = createScaledPropertyGetter(scale);

export const getMargin = getScaledProperty('margin');
export const getPadding = getScaledProperty('padding');

const Box = ({
  m,
  p,
  ...props
  }) => {

  const sx = {
    ...getMargin(m),
    ...getPadding(p)
  };

  return <div {...props} style={sx}/>
};

const BoxComponent = () => (
  <div>
    <Box m={2} p={3}>
      A box with 16px margin and 32px padding
    </Box>
  </div>
);

export default BoxComponent;