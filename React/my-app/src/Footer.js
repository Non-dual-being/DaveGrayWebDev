import React from 'react'
import theme from './ThemeColors';

const FooterStyling = {
    backgroundColor: theme.colors.background,
    position: "fixed",
    bottom: "0",
    display: "flex",
    width: "100%",
    padding: "1rem 0",
    flexDirection: 'row', // Hoofd-as is horizontaal
    alignItems: 'center', // Kinderen worden gecentreerd langs de verticale as
    justifyContent: 'center', // Kinderen worden gecentreerd langs de horizontale as
}

const Footer = () => {
   const today = new Date();
  return (
    <footer><p>Copyright &copy; {today.getFullYear()}</p></footer>
  )
}

export default Footer