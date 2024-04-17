import "./Home.scss";
import {
  FormSection,
  TitleDescription,
  TitleSection,
  Slider,
  Footer,
} from "../../sections";
import { LineSpacer } from "../../components";

const Home = () => {
  return (
    <div className="home flexCenterColumn">
      <TitleSection />
      <LineSpacer />
      <TitleDescription />
      <FormSection />
      <Slider />
      <LineSpacer />
      <Footer />
    </div>
  );
};

export default Home;
