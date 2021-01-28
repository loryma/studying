import React from 'react';
import { bold, space, colors } from './styleModules';

const Button = ({ big, color = colors.white, backgroundColor=colors.blue, outline, ...props }) => {
  const sx = {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    textDecoration: 'none',
    display: 'inline-block',
    margin: 0,
    paddingTop: big ? space[2] : space[1],
    paddingBottom: big ? space[2] : space[1],
    paddingLeft: space[2],
    paddingRight: space[2],
    color,
    backgroundColor : backgroundColor && !outline ? backgroundColor : 'transparent',
    WebkitAppearance: 'none',
    MozAppearance: 'none'
  };

  return (
    <button {...props} style={sx}>
      {props.children}
    </button>
  )
};

const ButtonBig = (props) => <Button {...props} big/>;
const ButtonGreen = (props) => <Button {...props} backgroundColor={colors.green}/>;
const ButtonRed = (props) => <Button {...props} backgroundColor={colors.red}/>;
const ButtonOutline = (props) => <Button {...props} color={colors.black} outline/>;

export { ButtonBig, ButtonGreen, ButtonRed, ButtonOutline };