import { LinearProgress } from "@mui/material";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading flexCenterColumn">
      <LinearProgress color="error" className="linear-progress" />
      <p>wait for your link to be processed ...</p>
    </div>
  );
};

export default Loading;
