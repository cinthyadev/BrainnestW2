// import { getAllHL } from "../routes/dashboardControllers"
import Book from "../../models/Book";
import LastFetch from "../../models/LastFetch";

export const saveLastUpdated = async (data: String) => {
  const lastFetchedRecords = await LastFetch.countDocuments({});
  let newDate = new LastFetch({ lastFetchWasAt: data });

  if (lastFetchedRecords == 0) {
    newDate.save((error, newDate) => {
      if (error) throw error;
      console.log("Last Updated at:", newDate);
    });
  } else {
    const LastFetchRecord = await LastFetch.find();
    const LastFetchId = LastFetchRecord[0]["_id"].toString();
    const filter = { _id: LastFetchId };
    const update = { lastFetchWasAt: data };

    let newUpdated = await LastFetch.findOneAndUpdate(filter, update);
    const change = await LastFetch.findOne(filter);
    // console.log('Last Updated changed to:', change);
  }
};
export const saveBooks = async (data: Array<object>) => {
  const bookRecords = await Book.countDocuments({});

  // first time saving data
  if (bookRecords == 0) {
    data.map((item) => {
      var new_hl = new Book(item);

      new_hl.save((error, data) => {
        if (error) throw error;
      });
    });
    // console.log(data)
    // await Book.create(data, (error:Error, createdHL:Object) => {
    //     if (error) throw error
    //     console.log(createdHL);

    // })
    const bookRecords = await Book.countDocuments({});
  } else {
    // check if there are new documents to add. If not, don't save anything
    if (data.length > 0) {
      console.log("saving new data");
      Book.create(data, (error, createdHL: Object) => {
        if (error) throw error;
        console.log("saved data", createdHL);
      });
    } else {
      console.log("Up to date!!");
    }
  }
};
