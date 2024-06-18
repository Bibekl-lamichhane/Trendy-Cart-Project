import React from "react";

const About = () => {
  return (
    <div className="min-h-screen my-5">
      <div className="container mx-auto px-4 pt-18 py-15 md:flex md:items-center md:justify-between">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl  font-bold text-orange-500 mb-4">
            About Trendy Cart
          </h1>
          <p className="text-lg leading-relaxed">
            Trendy Cart is your one-stop shop for all your shopping needs. We
            are passionate about bringing you the best selection of products,
            from timeless classics to contemporary bestsellers. Whether you're
            searching for the latest gadgets, stylish apparel, or must-read
            books, we have something for everyone. We believe everyone deserves
            access to quality products, no matter their location or budget.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            That's why we offer competitive prices and fast shipping on all
            orders. Dive into a world of endless possibilities with Trendy Cart
            today!
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src="/aboutus.png"
            alt="Mero Pustak - About Us"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl font-bold text-orange-500 mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          Our mission at Trendy Cart is to bring a diverse range of products to
          a wider audience. We believe that quality items have the power to
          enhance, entertain, and inspire, and we want to help people discover
          the joy of finding exactly what they need. Whether it's the latest
          tech, fashionable clothing, or compelling reads, our goal is to make
          top-quality products accessible to everyone.
        </p>
      </div>
      <div className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl  text-orange-500 font-bold mb-4">Our Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl shadow-lg">
            <h3 className="text-lg font-bold  mb-2">Customer Satisfaction</h3>
            <p className="text-baseleading-relaxed">
              We are committed to providing our customers with excellent service
              and a positive shopping experience.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-lg">
            <h3 className="text-lg font-bold  mb-2">Quality Products</h3>
            <p className="text-base  leading-relaxed">
              We offer a wide selection of high-quality items from reputable
              brands, ensuring you get the best products available.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-lg">
            <h3 className="text-lg font-bold  mb-2">Competitive Prices</h3>
            <p className="text-base leading-relaxed">
              We offer competitive prices on all our products, making them
              affordable for everyone.
            </p>
          </div>
          <div className="p-4 border rounded-xl shadow-lg">
            <h3 className="text-lg font-bold  mb-2">Fast Shipping</h3>
            <p className="text-base  leading-relaxed">
              We offer fast shipping on all orders to ensure you receive your
              purchases quickly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
