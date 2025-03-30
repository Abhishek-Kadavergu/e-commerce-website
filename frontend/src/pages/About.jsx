import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p>
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Quality Assurance:</h3>
            <p className="text-gray-600 mt-2">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Convenience:</h3>
            <p className="text-gray-600 mt-2">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="border p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg">Exceptional Customer Service:</h3>
            <p className="text-gray-600 mt-2">
              Our team of dedicated professionals is here to assist you,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>

        {/* <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold">Subscribe now & get 20% off</h3>
          <p className="text-gray-500 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="mt-4 flex justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="border px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-black text-white px-4 py-2 rounded-r-lg hover:bg-gray-800">
              SUBSCRIBE
            </button>
          </div>
        </div> */}
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
