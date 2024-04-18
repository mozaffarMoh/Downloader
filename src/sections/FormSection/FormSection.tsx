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
  const [link, setLink] = React.useState("");
  const body = { url: link };
  const [data, handleCheckLink, loading] = usePost("video_info", body);

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

  console.log(data);

  return (
    <div className="form-section-container">
      <form
        className="form-section flexCenterColumn"
        onSubmit={handleSubmit(handleCheckLink)}
      >
        <TextField
          variant="outlined"
          color="error"
          fullWidth
          label="Paste your link here"
          value={link}
          {...register("link", {
            required: "Please paste your link !!",
            /*      pattern: {
            value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
            message: "Link should be a website link !!",
          }, */
          })}
          onChange={(e: any) => setLink(e.target.value)}
        />
        {errors.link && (
          <div className="error-message">{errors.link.message}</div>
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
      {data && <VideoDetails data={data} />}
    </div>
  );
}

export default FormSection;
