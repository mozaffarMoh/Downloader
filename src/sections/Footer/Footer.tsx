import "./Footer.scss";
import { footerArray } from "./footerArray";

const Footer = () => {
  return (
    <div className="footer flexCenter">
      <h4>© 2023 - 2024 | Designed and coded by Mozaffar Mohammad</h4>
      <div className="social-icons flexCenter">
        {footerArray.map((icon: any, index: number) => {
          return (
            <a href={icon.href} target="_blank" key={index}>
              <img src={icon.src} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
