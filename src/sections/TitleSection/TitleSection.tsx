import "./TitleSection.scss";
import logo from "../../../favicon.svg";
import { useNavigate } from "react-router-dom";

function TitleSection() {
  const navigate = useNavigate();

  return (
    <div className="title-section flexCenter">
      <img src={logo} />
      <div className="title-text flexCenter">
        <p onClick={() => navigate("/")}>Downloader</p>
      </div>
      <img src={logo} />
    </div>
  );
}

export default TitleSection;
