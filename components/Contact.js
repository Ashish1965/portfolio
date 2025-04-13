import React, { useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import baseUrl from "@/helpers/baseUrl";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeContext";
const Contact = () => {
  const router = useRouter();
  const { theme } = useTheme();
  // console.log(theme);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const res = await fetch(`${baseUrl}/api/receive`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Subject: formData.subject,
        Message: formData.message,
      }),
    });
    const res2 = await res.json();
    if (res2.error) {
      if (theme === "light") {
        toast.error(res2.error);
      } else {
        toast.error(res2.error, {
          style: {
            borderRadius: "10px",
            background: "#2d3748",
            color: "#fff",
          },
        });
      }
    } else {
      if (theme === "light") {
        toast.success("Message Sent");
      } else {
        toast.success("Message Sent", {
          style: {
            borderRadius: "10px",
            background: "#2d3748",
            color: "#fff",
          },
        });
      }
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }

  return (
    <div id="contact" className="w-full">
      <div className="max-w-[1240px] m-auto px-2 py-8 w-full  ">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4 dark:text-gray-500 text-gray-700">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <img
                  className="rounded-xl hover-scale-effect"
                  src="/assets/contact.avif"
                  alt="contact"
                />
              </div>
              <div>
                <h2 className="py-2 dark:text-gray-500 text-gray-700">Ashish Narawariya</h2>
                <p className="dark:text-gray-500 text-gray-700">Full Stack Web Developer</p>
                <p className="py-4 dark:text-gray-500 text-gray-600">
                  Thank you for taking the time to explore my portfolio! If
                  you're passionate about technology, innovation, or have a
                  project in mind that needs a creative touch, I'd love to
                  connect. Let's collaborate and build something exceptional
                  together!
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 dark:text-gray-500 text-gray-700">
                  Connect With Me
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                  <Link href="https://www.linkedin.com/in/ashish-narawariya-7536b6242/">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect ">
                      <FaLinkedin className="dark:bg-gray-500" />
                    </div>
                  </Link>
                  <Link href="https://github.com/Ashish1965/">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                      <FaGithub className="dark:bg-gray-500" />
                    </div>
                  </Link>

                  <Link href="https://www.instagram.com/ashishnarawariya/">
                    <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                      <FaInstagram className="dark:bg-gray-500" />
                    </div>
                  </Link>
                  <Link href="https://x.com/AshishNara33521/">
                    <div className="rounded-full shadow-lg shadow-gray-500 dark:shadow-gray-700 p-6 cursor-pointer hover-scale-effect">
                      <FaXTwitter className="dark:bg-gray-500" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 dark:shadow-gray-700 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-gray-500">
                      Name
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2 dark:text-gray-500">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                      type="text"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-500">
                    Email
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-500">
                    Subject
                  </label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2 dark:text-gray-500">
                    Message
                  </label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300 dark:border-gray-700 dark:bg-gray-800"
                    rows="10"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-gray-100 mt-4 bg-blue-500 hover:bg-blue-400 hover:scale-105 active:scale-100 dark:shadow-gray-700"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/#home">
            <div className="rounded-full shadow-lg shadow-gray-400 dark:shadow-gray-700 p-4 cursor-pointer hover-scale-effect-icon">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
