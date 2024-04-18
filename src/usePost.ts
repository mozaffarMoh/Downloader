import React from "react";
import axios from "axios";

const usePost = (endPoint: string, body: any) => {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [success, setSuccess] = React.useState(false);

    const postFunc = () => {
        setLoading(true)

        axios.post('https://downloader-api-lhwy.onrender.com/' + endPoint,
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
                console.log(err)
                setLoading(false)
            });



    }

    return [data, postFunc, loading, success];

}

export default usePost;