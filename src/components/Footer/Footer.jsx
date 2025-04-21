import "./Footer.css"

 function Footer() {
  

  return (
    <footer>
      <p className="footer__name">Developed by Liam Devine</p>
      <p className="footer__date">{new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;