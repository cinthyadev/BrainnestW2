import mongoose from "mongoose";

const schemaBuilder = mongoose.Schema;
const highlightSchema = new schemaBuilder({
  id: {
    type: Number,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  location_type: {
    type: String,
  },
  note: {
    type: String,
    default: null,
  },
  color: {
    type: String,
  },
  highlighted_at: {
    type: Date,
  },
  created_at: {
    type: Date,
  },
  updated_at: {
    type: Date,
  },
  external_id: {
    type: String,
  },
  end_location: {
    type: String,
    default: null,
  },
  url: {
    type: String,
    default: null,
  },
  book_id: {
    type: Number,
  },
  tags: {
    type: Array,
  },
  is_favorite: {
    type: false,
  },
  is_discard: {
    type: false,
  },
  readwise_url: {
    type: String,
  },
});

const Highlight = mongoose.model("Highlight", highlightSchema);
module.exports = Highlight;
