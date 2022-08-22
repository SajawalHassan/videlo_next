import React, { useState } from "react";
import axios from "axios";

import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default withPageAuthRequired(function requests() {
  const [response, setResponse] = useState("");

  const handleVideoCreate = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/api/video", {
        title: "saldamsd",
        description: "This is my new video",
      });

      console.log(data);
      setResponse("Video created");
    } catch (error) {
      setResponse(error.response.data.error);
      console.log(error);
    }
  };

  const handleVideoEdit = async () => {
    try {
      const { data } = await axios.put("http://localhost:3000/api/video", {
        title: "My edited video",
        description: "This is my new edited video",
        videoId: "63038d2eb1c3148ce95e3223",
      });

      console.log(data);
      setResponse("Video edited");
    } catch (error) {
      setResponse(error.response.data.error);
      console.log(error);
    }
  };

  return (
    <div>
      {/* <button
        onClick={() => handleVideoCreate()}
        className="p-2 rounded-sm bg-blue-500 m-2"
      >
        Make a POST request to http://localhost:3000/api/video
      </button>
      {response && (
        <h1 className="p-2 bg-blue-500 rounded-sm w-[20rem] mx-auto">
          {response}
        </h1>
      )} */}

      <button
        onClick={() => handleVideoEdit()}
        className="p-2 rounded-sm bg-blue-500 m-2"
      >
        Make a PUT request to http://localhost:3000/api/video
      </button>
      {response && (
        <h1 className="p-2 bg-blue-500 rounded-sm w-[20rem] mx-auto">
          {response}
        </h1>
      )}
    </div>
  );
});
