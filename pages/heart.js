import Image from "next/image";
import React from "react";
import Disease from "../public/assets/projects/disease.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={Disease}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Heart Disease Predictor</h2>
          <h3>Python</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Welcome to our project dedicated to predicting heart disease using
            advanced machine learning techniques in Python. Our goal is to
            develop an accurate and reliable predictive model that assists in
            early detection and proactive management of cardiovascular health.
            The Heart Disease Prediction Model is an initiative aimed at
            leveraging machine learning algorithms and medical data to forecast
            the likelihood of heart disease in individuals. Through extensive
            data analysis and predictive modeling techniques in Python, we aim
            to empower healthcare professionals and individuals with valuable
            insights into potential heart health risks. Our project utilizes the
            power of Python's data science libraries, including Pandas, NumPy,
            Matplotlib, and scikit-learn. Through a combination of exploratory
            data analysis (EDA), feature engineering, and machine learning
            algorithms such as Logistic Regression, Decision Trees, and Random
            Forests, we've developed a robust predictive model.
          </p>
          <a href="https://colab.research.google.com/drive/1SOtToB5Gqadht38v8kww7CUpUysnXHAL?usp=sharing">
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Numpy
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pandas
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Seaborn
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SKLearn
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Google Colab
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
