import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import Video from "../../database/models/Video";

export default withApiAuthRequired(async function handler(req, res) {
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
  }
});
