import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import Video from "../../database/models/Video";
import connect from "../../database/connect";

export default withApiAuthRequired(async function handler(req, res) {
  connect();
  if (req.method === "POST") {
    try {
      const { user } = getSession(req, res);

      const newVideo = new Video({
        title: req.body.title,
        description: req.body.description,
        ownerId: user.sub,
      });

      await newVideo.save();

      res.json(newVideo);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else if (req.method === "PUT") {
    try {
      const video = await Video.findById(req.body.videoId);

      if (!video) {
        res.status(404).json({ error: "Video not found" });
      }

      await video.update({ $set: req.body });

      res.json("Video updated");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
});
