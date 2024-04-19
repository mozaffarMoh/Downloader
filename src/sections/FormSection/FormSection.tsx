import { Button, TextField } from "@mui/material";
import "./FormSection.scss";
import { BiDownload } from "react-icons/bi";
import { useForm } from "react-hook-form";
import React from "react";
import { Loading, VideoDetails } from "../../components";
import usePost from "../../usePost";

function FormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  }: any = useForm();
  const buttonRef: any = React.useRef(null);
  const [userLink, setUserLink] = React.useState("");
  const [hideQualityLabel, setHideQualityLabel] = React.useState(false);
  const body = { url: userLink };
  const [data, checkLinkPost, loading, success, errorMessage]: any = usePost(
    "video",
    body
  );

  const handleCheckLink = () => {
    checkLinkPost();
  };

  React.useEffect(() => {
    if (success) {
      setHideQualityLabel(false);
    }
  }, [success]);

  /* Check link when press on Enter key */
  React.useEffect(() => {
    const handleEnterKey = (e: any) => {
      if (e.key === "Enter") {
        e.preventDefault();
        trigger("link").then((isValid: any) => {
          if (isValid) {
            handleSubmit(handleCheckLink)();
          }
        });
      }
    };

    document.addEventListener("keydown", handleEnterKey);

    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [handleSubmit, trigger]);

  return (
    <div className="form-section-container flexCenterColumn">
      <form
        className="form-section flexCenterColumn"
        onSubmit={handleSubmit(handleCheckLink)}
      >
        <TextField
          variant="outlined"
          color="error"
          fullWidth
          label="Paste your link here"
          value={userLink}
          {...register("userLink", {
            required: "Please paste your link !!",
          })}
          onChange={(e: any) => setUserLink(e.target.value)}
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
      {errorMessage && (
        <p className="error-message-api">Error : {errorMessage}</p>
      )}
      {data && (
        <VideoDetails
          data={data}
          hideQualityLabel={hideQualityLabel}
          setHideQualityLabel={setHideQualityLabel}
        />
      )}
    </div>
  );
}

export default FormSection;
