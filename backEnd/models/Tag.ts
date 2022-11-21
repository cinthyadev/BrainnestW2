import mongoose from "mongoose";

const schemaBuilder = mongoose.Schema;
const tagSchema = new schemaBuilder({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

export const Tag = mongoose.model("Tag", tagSchema);
module.exports = Tag;
