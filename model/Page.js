import mongoose from "mongoose";

const pageSchema = new mongoose.Schema({
  pid: {
    type: String,
  },
  name: {
    type: String,
  },

  lang: [],
  description: {
    type: String
  },
  demo: {
    type: String
  },
  image: {
    type: String
  },
  tech: []
});

export default mongoose.models.Page || mongoose.model("Page", pageSchema);
