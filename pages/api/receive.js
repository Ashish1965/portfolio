import initDB from "@/helpers/initDB";
import Receiver from "@/model/Receiver";
initDB();

export default async (req, res) => {
  const { Name, Email, Phone, Subject, Message } = req.body;
  try {
    if (!Name || !Email || !Phone || !Subject || !Message) {
      return res.status(422).json({ error: "Please Add all Fields" });
    }

    const newUser = await new Receiver({
      name: Name,
      phone: Phone,
      email: Email,
      subject: Subject,
      message: Message,
    }).save();
    // console.log(newUser);
    res.status(201).json({ message: "!Success" });
  } catch (err) {
    res.status(200).json({ error: "Error! Please Send the message again."});
  }
};
