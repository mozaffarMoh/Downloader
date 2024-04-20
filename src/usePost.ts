import React from "react";
import axios from "axios";

const usePost = (endPoint: string, body: any) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState("");

    const postFunc = () => {
        setLoading(true)
        setErrorMessage("")
        setData(null)

        axios.post('https://downloader-api-y5lo.onrender.com/' + endPoint,
            body,
            { headers: { "Content-Type": 'application/json' } }
        )
            .then((res) => {
                setLoading(false)
                setData(res?.data);
                setSuccess(true);
                setTimeout(() => {
                    setSuccess(false)
                }, 4000);
            })
            .catch((err: any) => {
                let message:any = err?.response?.data?.error
                setLoading(false)
                if (message?.startsWith("Video id")) {
                    setErrorMessage("This URL is not found")
                } else {
                    setErrorMessage(message)
                }
            });



    }

    return [data, postFunc, loading, success, errorMessage];

}

export default usePost;