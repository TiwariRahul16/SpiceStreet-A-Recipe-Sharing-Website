import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = () => {
  return (
<>
<main className="container my-4">
      
      {/* Explore Recipes Section */}
      <section className="mb-4">
        <div className="d-flex justify-content-between align-items-center">
          
          {/* Dropdown for Recipe Categories */}
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" type="button" id="recipeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Explore Recipes
            </button>
            <ul className="dropdown-menu profile_dropDown" aria-labelledby="recipeDropdown">
              <li><Link className="dropdown-item" to="#dessert">🍰 Dessert</Link></li>
              <li><Link className="dropdown-item" to="#indian">🍛 Indian</Link></li>
              <li><Link className="dropdown-item" to="#italian">🍕 Italian</Link></li>
              <li><Link className="dropdown-item" to="#chinese">🥡 Chinese</Link></li>
              <li><Link className="dropdown-item" to="#mexican">🌮 Mexican</Link></li>
              <li><Link className="dropdown-item" to="#french">🥖 French</Link></li>
              <li><Link className="dropdown-item" to="#leftover">♻️ Leftover Recipes</Link></li>
            </ul>
          </div>

          {/* Search Bar */}
          <div className="input-group w-50">
            <input type="text" className="form-control" placeholder="Search recipes..." />
            <button className="btn btn-outline-primary" type="button">Search</button>
          </div>
        </div>
      </section>

      {/* Recipe Sections */}
      <section id="dessert" className="mb-5">
        <h3 className="text-center mb-3">🍰 Dessert Recipes</h3>
        <div className="row">
          {[
            {
              title: "Chocolate Cake",
              author: "By John Doe",
              desc: "A rich and delicious chocolate cake recipe.",
              img: "https://images.unsplash.com/photo-1572449043416-55f4685c9bbf",
              link: "ChocolateCakeDetail"
            },
            {
              title: "Strawberry Cheesecake",
              author: "By Emily Smith",
              desc: "A creamy and fresh strawberry cheesecake.",
              img: "https://images.unsplash.com/photo-1606312619349-a3de01b0b5c0",
              link: "CheesecakeDetail"
            },
            {
              title: "Chocolate Brownie",
              author: "By Alex Johnson",
              desc: "Fudgy brownies with a rich chocolate flavor.",
              img: "https://images.unsplash.com/photo-1588483977150-9c2127ab7bcc",
              link: "BrownieDetail"
            }
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.title} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6>{item.author}</h6>
                  <p className="card-text">{item.desc}</p>
                  <Link className="btn btn-outline-danger" to={item.link}>Dessert</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="indian" className="mb-5">
        <h3 className="text-center mb-3">🍛 Indian Recipes</h3>
        <div className="row">
          {[
            {
              title: "Butter Chicken",
              author: "By Rajesh Kumar",
              desc: "A creamy and flavorful North Indian dish.",
              img: "https://images.unsplash.com/photo-1601070922463-0dd2b05a3fec",
              link: "ButterChickenDetail"
            },
            {
              title: "Paneer Tikka",
              author: "By Anjali Sharma",
              desc: "Spiced and grilled paneer with a smoky flavor.",
              img: "https://images.unsplash.com/photo-1596560548465-4de74d07e62f",
              link: "PaneerTikkaDetail"
            },
            {
              title: "Hyderabadi Biryani",
              author: "By Rahul Tiwari",
              desc: "Aromatic rice dish with flavorful spices.",
              img: "https://images.unsplash.com/photo-1553621042-f6e147245754",
              link: "BiryaniDetail"
            }
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.title} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6>{item.author}</h6>
                  <p className="card-text">{item.desc}</p>
                  {/* <Link className="btn btn-outline-danger" to={`/recipe/${item.id}`}>View Recipe</Link> */}
                  <Link className="btn btn-outline-danger" to={`/recipeDetail`}>View Recipe</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="italian" className="mb-5">
        <h3 className="text-center mb-3">🍕 Italian Recipes</h3>
        <div className="row">
          {[
            {
              title: "Margherita Pizza",
              author: "By Luigi Rossi",
              desc: "Classic pizza with tomato, mozzarella, and basil.",
              img: "https://images.unsplash.com/photo-1541599540903-216a46ca1dc9",
              link: "PizzaDetail"
            },
            {
              title: "Pasta Carbonara",
              author: "By Giuseppe Verdi",
              desc: "Creamy and cheesy Italian pasta dish.",
              img: "https://images.unsplash.com/photo-1528279027-45d0f453c27e",
              link: "PastaDetail"
            },
            {
              title: "Lasagna",
              author: "By Maria Romano",
              desc: "Layered pasta with meat, cheese, and sauce.",
              img: "https://images.unsplash.com/photo-1599789197514-d91c9e5fb350",
              link: "LasagnaDetail"
            }
          ].map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="card">
                <img src={item.img} className="card-img-top" alt={item.title} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6>{item.author}</h6>
                  <p className="card-text">{item.desc}</p>
                  <Link className="btn btn-outline-danger" to={item.link}>Italian</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
</>
  )
}

export default RecipeCard
