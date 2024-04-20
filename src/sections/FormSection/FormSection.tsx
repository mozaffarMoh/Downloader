import { Button, TextField } from "@mui/material";
import "./FormSection.scss";
import { BiDownload } from "react-icons/bi";
import { useForm } from "react-hook-form";
import React from "react";
import { Loading, VideoDetails, YouTubePlayer } from "../../components";
import usePost from "../../usePost";

function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  }: any = useForm();
  const buttonRef: any = React.useRef(null);
  const [userLink, setUserLink] = React.useState("");
  const [hideQualityLabel, setHideQualityLabel] = React.useState(false);
  const [showPlayer, setShowPlayer] = React.useState(false);
  const body = { url: userLink };
  const [data, handleCheckLink, loading, success, errorMessage]: any = usePost(
    "video",
    body
  );

  // Update the form value when userLink changes
  React.useEffect(() => {
    setValue("userLink", userLink);
  }, [userLink, setValue]);

  /* Check link when press on Enter key */
  const checkWhenPressEnter = (e: any) => {
    if (e.key === "Enter") {
      handleSubmit(handleCheckLink)();
    }
  };

  /* Hide Quality label when success */
  React.useEffect(() => {
    if (success) {
      setHideQualityLabel(false);
    }
  }, [success]);

  return (
    <div className="form-section-container flexCenterColumn">
      <form
        className="form-section flexCenterColumn"
        onSubmit={handleSubmit(handleCheckLink)}
        onKeyDown={checkWhenPressEnter}
      >
        <TextField
          variant="outlined"
          color="error"
          fullWidth
          label="Paste your link here"
          {...register("userLink", {
            required: "Please paste your link !!",
          })}
          onChange={(e: any) => setUserLink(e.target.value)}
          onPaste={(e: any) => setUserLink(e.target.value)}
          value={userLink}
        />
        {errors.userLink && (
          <div className="error-message">{errors.userLink.message}</div>
        )}
        <Button
          ref={buttonRef}
          type="submit"
          variant="contained"
          fullWidth
          color="error"
          className="flexCenterColumn"
        >
          Download
          <BiDownload size={25} />
        </Button>
      </form>

      {loading && <Loading />}
      {errorMessage && <p className="error-message-api">{errorMessage}</p>}
      {data && (
        <VideoDetails
          data={data}
          hideQualityLabel={hideQualityLabel}
          setHideQualityLabel={setHideQualityLabel}
          setShowPlayer={setShowPlayer}
        />
      )}
      <script src="https://www.youtube.com/iframe_api"></script>
      {showPlayer && <YouTubePlayer videoId={data?.videoDetails?.videoId} />}
    </div>
  );
}

export default FormSection;
