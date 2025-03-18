import React from "react";

const About = () => {
  return (
<>
<div className="container py-5">
      {/* Hero Section */}
      <div className="row align-items-center mb-5">
        <div className="col-md-6">
          <h2 className="display-4 fw-bold typing-text">Welcome to Forkistry</h2>
          <p className="lead">
            Discover a world of flavors with <strong>Forkistry</strong> – your ultimate destination for global recipes, expert cooking tips, and delicious inspiration. Whether you're a home cook, food enthusiast, or professional chef, our platform brings you the best dishes from around the world.
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/images/about-img1.jpg"
            alt="Delicious Food"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="mb-5">
        <h3 className="display-6 mb-3">Our Mission</h3>
        <p>
          At Forkistry, we believe that food is more than just nourishment—it's an experience. Our mission is to celebrate the diversity of global cuisine and make cooking accessible, enjoyable, and inspiring for everyone.
        </p>
      </div>

      {/* What We Offer */}
      <div className="mb-5">
        <h3 className="display-6 mb-4">What We Offer</h3>
        <div className="row g-4">
          {[
            {
              title: "🌍 Global Recipes",
              img: "/images/about-img2.jpg",
              description: "Explore authentic dishes from different continents.",
            },
            {
              title: "🍽️ Step-by-Step Guides",
              img: "/images/about-img3.jpg",
              description: "Detailed recipes with images.",
            },
            {
              title: "🧑‍🍳 Expert Cooking Tips",
              img: "/images/about-img4.jpg",
              description: "Tips from culinary experts.",
            },
            {
              title: "🍰 Desserts & Special Treats",
              img: "/images/about-img5.jpg",
              description: "Satisfy your sweet cravings.",
            },
            {
              title: "🌱 Healthy Recipes",
              img: "/images/about-img6.jpg",
              description: "Vegetarian, vegan, and gluten-free options.",
            },
            {
              title: "📌 Meal Planning",
              img: "/images/about-img7.jpg",
              description: "Plan your meals easily.",
            },
          ].map((item, index) => (
            <div className="col-md-6 col-lg-4 about_card" key={index}>
              <div className="card shadow h-100">
                <img src={item.img} className="card-img-top about_img rounded" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <button className="btn btn-outline-primary" type="button">Explore</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Community */}
      <div className="row align-items-center my-5">
        <div className="col-md-6">
          <h3 className="display-6 mb-3">Join Our Food Community</h3>
          <p>
            Become a part of our vibrant community where food lovers share their passion and creations. Experiment, learn, and celebrate the joy of cooking!
          </p>
        </div>
        <div className="col-md-6">
          <img
            src="/images/about-community-kitchen.jpg"
            alt="Join Community"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* Contact Us */}
      <div className="bg-light p-4 rounded shadow">
        <h3 className="display-6 mb-3">Contact Us</h3>
        <p>
          Have questions or suggestions? We'd love to hear from you!
        </p>
        <p>
          📧 <strong>Email:</strong> <a href="mailto:support@Forkistry.com" className="text-primary">support@Forkistry.com</a>
        </p>
        <p>
          📞 <strong>Phone:</strong> <a href="tel:+919156847578" className="text-primary">+91 9156847578</a>
        </p>
      </div>
    </div>

</>
  );
};

export default About;
