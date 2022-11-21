import { RequestHandler } from "express";
import LastFetch from "../../models/LastFetch";
import * as helpers from "../database/saveData";

// import fetchFromExportApi from './fetchData'
export const receiveHL: RequestHandler = (req, res) => {
  const data = req.body.data;
  helpers.saveBooks(data);
};

export const getLastFetch: RequestHandler = async (req, res) => {
  const LastFetchRecords = await LastFetch.countDocuments({});
  // if there is not record in the last fetch, return null, else, get the last fetch
  if (LastFetchRecords == 0) {
    res.send({ LastFetch: null });
  } else {
    const lastFetch = await LastFetch.find();
    const lastFetchDate = lastFetch[0].lastFetchWasAt;
    res.send({ LastFetch: lastFetchDate });
  }
};

export const updateLastFetch: RequestHandler = (req, res) => {
  const data = req.body.data;
  helpers.saveLastUpdated(data);
};
