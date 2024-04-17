import "./TitleSection.scss";
import logo from "../../../favicon.svg";
import { useNavigate } from "react-router-dom";

function TitleSection() {
  const navigate = useNavigate();

  return (
    <div className="title-section flexCenter">
      <img src={logo} />
      <h1 onClick={() => navigate("/")}>Downloader</h1>
      <img src={logo} />
    </div>
  );
}

export default TitleSection;
