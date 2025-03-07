import React from "react";

const About = () => {
  return (
<>
{/* <div className="container">
  <h2>About Forkistry</h2>
  <p>
    Welcome to <strong>Forkistry</strong> – your ultimate destination for exploring and sharing mouthwatering recipes from around the world! Whether you’re passionate about cooking, a food lover, or a professional chef, we bring you a diverse collection of global flavors, from savory dishes to decadent desserts.
  </p>

  <h3>Our Mission</h3>
  <p>
    At Forkistry, we celebrate the art of cooking by making global cuisine accessible to everyone. Our goal is to inspire creativity in the kitchen, helping food enthusiasts discover, cook, and enjoy authentic dishes from every corner of the world. 
  </p>

  <h3>What We Offer</h3>
  <ul>
    <li>🌍 <b>Global Recipe Collection</b> – Explore flavors from Asia, Europe, the Americas, Africa, and beyond.</li>
    <li>🍽️ <b>Step-by-Step Cooking Guides</b> – Easy-to-follow instructions with visuals for a seamless cooking experience.</li>
    <li>🧑‍🍳 <b>Expert Cooking Tips</b> – Get insights from chefs and home cooks to enhance your skills.</li>
    <li>🍰 <b>Desserts & Special Treats</b> – Indulge in cakes, pastries, and sweets from different cultures.</li>
    <li>🌱 <b>Healthy & Dietary-Specific Recipes</b> – Find vegetarian, vegan, keto, and gluten-free options.</li>
    <li>📌 <b>Meal Planning & Kitchen Hacks</b> – Practical tips to make cooking effortless and enjoyable.</li>
  </ul>

  <h3>Why Forkistry?</h3>
  <ul>
    <li>✅ <b>Authentic & Diverse Recipes</b> – Curated from different cultures and traditions.</li>
    <li>✅ <b>Beginner & Pro-Friendly</b> – Whether you're new to cooking or an expert, there's something for everyone.</li>
    <li>✅ <b>Community-Driven Platform</b> – Share your own recipes, get inspired, and connect with fellow food lovers.</li>
    <li>✅ <b>Completely Free</b> – No subscriptions or hidden fees – just a passion for great food!</li>
  </ul>

  <h3>Join Our Global Food Community</h3>
  <p>
    Love cooking? Be part of our vibrant community where food lovers from all backgrounds share their favorite recipes. Experiment, learn, and enjoy the world’s best flavors – all in one place at <strong>Forkistry</strong>.
  </p>

  <h3>Contact Us</h3>
  <p>
    Have questions or suggestions? We’d love to hear from you!
    <br />
    📧 <strong>Email:</strong> support@Forkistry.com
    <br />
    📞 <strong>Phone:</strong> +91 9156847578
  </p>
</div> */}

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
            src="https://images.unsplash.com/photo-1661685452870-e89b6e8c14fa?q=80&w=2070"
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
              img: "https://as1.ftcdn.net/v2/jpg/05/94/82/16/1000_F_594821637_Rzb8t6sMmPQBylvBX1Kme9sgB0pcoeyi.jpg",
              description: "Explore authentic dishes from different continents.",
            },
            {
              title: "🍽️ Step-by-Step Guides",
              img: "https://www.conceptdraw.com/solution-park/resource/images/solutions/food-cooking-recipes/Food-and-Beverage-Cooking-Recipes-Canadian-Apple-Pie-Recipe.png",
              description: "Detailed recipes with images.",
            },
            {
              title: "🧑‍🍳 Expert Cooking Tips",
              img: "https://images.unsplash.com/photo-1699206332834-8fa9f45a906c?q=80&w=1974",
              description: "Tips from culinary experts.",
            },
            {
              title: "🍰 Desserts & Special Treats",
              img: "https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?q=80&w=1935",
              description: "Satisfy your sweet cravings.",
            },
            {
              title: "🌱 Healthy Recipes",
              img: "https://images.unsplash.com/photo-1728734866304-02c4e7ef783b?q=80&w=1935",
              description: "Vegetarian, vegan, and gluten-free options.",
            },
            {
              title: "📌 Meal Planning",
              img: "https://static.wixstatic.com/media/b5fa29_35b9fcff6e4544b38676ffa0b9be045b~mv2.jpg",
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
            src="https://www.life.ca/naturallife/images/community-kitchen.jpg"
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
