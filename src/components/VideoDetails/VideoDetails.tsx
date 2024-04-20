import React from "react";
import "./VideoDetails.scss";
import FormControl from "@mui/material/FormControl";
import { Button, MenuItem, Select } from "@mui/material";

function VideoDetails({
  data,
  hideQualityLabel,
  setHideQualityLabel,
  setShowPlayer,
}: any) {
  let [time, setTime] = React.useState("");
  let [videoLink, setVideoLink] = React.useState("");
  let [showErrorQualityMessage, setShowErrorQualityMessage] =
    React.useState(false);

  /* Adjust video time */
  React.useEffect(() => {
    let seconds = data.videoDetails.lengthSeconds;
    let hours: any = Math.floor(seconds / 3600);
    let minutes: any = Math.floor((seconds % 3600) / 60);
    let remainingSeconds: any = seconds % 60;

    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    remainingSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;

    setTime(hours + ":" + minutes + ":" + remainingSeconds);
  }, [data]);

  /* Handle select quality */
  const handleSelectQuality = (e: any) => {
    setHideQualityLabel(true);
    setVideoLink(e.target.value);
    setShowErrorQualityMessage(false);
  };

  /* Handle check quality */
  const handleCheckQuality = () => {
    if (!videoLink) {
      setShowErrorQualityMessage(true);
    }
  };

  return (
    <div className="video-details flexCenterColumn">
      <img
        src={
          data.videoDetails.thumbnails[data.videoDetails.thumbnails.length - 1]
            .url
        }
      />
      <br />
      <p>{data.videoDetails.title}</p>
      <br />
      <span>{time}</span>
      <br />
      <FormControl fullWidth>
        {!hideQualityLabel && <label>Select quality</label>}
        <Select
          className="select-quality"
          onChange={handleSelectQuality}
          value={videoLink}
        >
          {data.formats.map((item: any, index: number) => {
            return (
              <MenuItem value={item.url} key={index}>
                {`${item.mimeType.split(";")[0].toUpperCase().trim()} ${
                  item.qualityLabel ? item.qualityLabel : ""
                }`}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      {!videoLink && showErrorQualityMessage && (
        <p className="error-quality-message">
          Please select a quality to download !!
        </p>
      )}
      <br />
      <Button
        variant="contained"
        className="download-button"
        color="warning"
        fullWidth
        target="_blank"
        href={videoLink}
        onClick={handleCheckQuality}
      >
        Download
      </Button>
      <Button
        variant="contained"
        fullWidth
        className="watch-here-button"
        color="secondary"
        onClick={() => setShowPlayer(true)}
      >
        Watch video Online
      </Button>
    </div>
  );
}

export default VideoDetails;
