import Page from "@/model/Page";
import initDB from "@/helpers/initDB";
// import Receiver from "@/model/Receiver";

initDB();
export default async (req, res) => {
  if (req.method === "GET") {
    await getPage(req, res);
  }
};

async function getPage(req, res) {
  const { individualPage } = req.query;
  // console.log(individualPage);
  try {
    const individual = await Page.findOne({pid : individualPage});
    res.status(200).json(individual);
    // console.log(individual);
  } catch (err) {
    console.log(err);
  }
}
