import "./Home.scss";
import {
  FormSection,
  TitleDescription,
  TitleSection,
  Slider,
} from "../../components";

const Home = () => {
  return (
    <div className="home flexCenterColumn">
      <TitleSection />
      <TitleDescription />
      <FormSection />
      <Slider />
    </div>
  );
};

export default Home;
