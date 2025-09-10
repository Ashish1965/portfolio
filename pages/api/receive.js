import initDB from "@/helpers/initDB";
import Receiver from "@/model/Receiver";
initDB();

export default async (req, res) => {
  const { Name, Email, Phone, Subject, Message } = req.body;
  try {
    // 1. Check all required fields
    if (!Name || !Email || !Phone || !Subject || !Message) {
      return res.status(422).json({ error: "Please add all fields" });
    }

    // 2. Name validation (only alphabets and spaces)
    const nameRegex = /^[a-zA-Z ]+$/;
    if (!nameRegex.test(Name)) {
      return res.status(422).json({ error: "Please provide a valid name" });
    }

    // 3. Phone validation (10 digits)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(Phone)) {
      return res.status(422).json({ error: "Please provide a valid phone number" });
    }
    // 4. Email validation
    const emailRegex = /^[^\s@]+@[^\s@]{2,}\.[^\s@]{2,}$/;
    if (!emailRegex.test(Email)) {
      return res.status(422).json({ error: "Please provide a valid email" });
    }


    // 5. Save to DB if valid
    const newUser = await new Receiver({
      name: Name,
      phone: Phone,
      email: Email,
      subject: Subject,
      message: Message,
    }).save();

    res.status(201).json({ message: "Success!" });
  } catch (err) {
    console.error("Error saving message:", err);
    res.status(500).json({ error: "Error! Please try again." });
  }
};
