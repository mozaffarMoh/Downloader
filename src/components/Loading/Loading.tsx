import { LinearProgress } from "@mui/material";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-container">
      <LinearProgress color="error" className="linear-progress" />
    </div>
  );
};

export default Loading;
