import mongoose from "mongoose";

const schemaBuilder = mongoose.Schema;
const LastFetchSchema = new schemaBuilder({
  lastFetchWasAt: {
    type: String,
    default: null,
  },
});

const LastFetch = mongoose.model("LastFetch", LastFetchSchema);
module.exports = LastFetch;
export default LastFetch;
