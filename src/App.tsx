import { Button, TextField } from "@mui/material";
import "./App.scss";
import { BiDownload } from "react-icons/bi";
import { useForm } from "react-hook-form";
import React from "react";
import logo from "../favicon.svg";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  }: any = useForm();
  const buttonRef: any = React.useRef(null);
  const [link, setLink] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  /* Check Link */
  const handleCheckLink = () => {
    setSuccess(true);
  };

  /* Empty the fields when success */
  React.useEffect(() => {
    if (success) {
      setLink("");
      setSuccess(false);
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
        console.log(trigger);
      }
    };

    document.addEventListener("keydown", handleEnterKey);

    return () => {
      document.removeEventListener("keydown", handleEnterKey);
    };
  }, [handleSubmit, trigger]);

  return (
    <div className="app flexCenterColumn">
      <div className="title-section flexCenter">
        <img src={logo} />
        <h1>Downloader</h1>
        <img src={logo} />
      </div>
      <div className="line"></div>
      <h2>Free Online Video Downloader</h2>
      <h3>Download videos for free || Youtube, Facebook, Instagram, etc...</h3>
      <form
        className="container flexCenterColumn"
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
            pattern: {
              value:
                /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
              message: "Link should be a website link !!",
            },
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
    </div>
  );
}

export default App;
