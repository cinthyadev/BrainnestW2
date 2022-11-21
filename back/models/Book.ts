import mongoose from "mongoose";
import { Schema } from "mongoose";

const schemaBuilder = mongoose.Schema;
const bookSchema = new schemaBuilder({
  user_book_id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  readable_title: {
    type: String,
  },
  source: {
    type: String,
  },
  cover_image_url: {
    type: String,
  },
  unique_url: {
    type: String,
  },
  book_tags: {
    type: Array,
    ref: "Tag",
  },
  category: {
    type: String,
  },
  readwise_url: {
    type: String,
  },
  source_url: {
    type: String,
  },
  asin: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array,
    ref: "Highligh",
  },
  mongoId: {
    type: Schema.Types.ObjectId,
  },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
export default Book;
