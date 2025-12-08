// src/app.jsx
import React, { useState } from "react";
import "./index.css";

// Full menu items extracted and organised to match provided menu images
const MENU = [
  {
    category: "Coffee & More",
    sections: [
      {
        title: "Americano & Tea",
        items: [
          { name: "Green Tea", price: "119" },
          { name: "Lemon Tea", price: "119" },
          { name: "Classic Americano", price: "149" },
          { name: "Iced Americano", price: "149" },
          { name: "Vietnamese Americano", price: "159" },
          { name: "Extra Espresso", price: "39" },
          { name: "Almond/Oat Milk (add on)", price: "60" },
        ],
      },
      {
        title: "Mochas",
        items: [
          { name: "Cafe Mocha", price: "219" },
          { name: "White Chocolate Mocha", price: "229" },
        ],
      },
      {
        title: "Flat White",
        items: [{ name: "Classic Flat White", price: "179" }],
      },
      {
        title: "Filter Coffee",
        items: [{ name: "Araku Filter Coffee", price: "159" }],
      },
      {
        title: "Lattes",
        items: [
          { name: "Classic Latte", price: "179" },
          { name: "Vanilla Latte", price: "199" },
          { name: "Irish Latte", price: "209" },
          { name: "Caramel Latte", price: "209" },
          { name: "Cinnamon Latte", price: "209" },
          { name: "Hazelnut Latte", price: "219" },
          { name: "Nutella Latte", price: "229" },
          { name: "Lottus Biscoff Latte", price: "249" },
          { name: "Pistachio Latte", price: "249" },
        ],
      },
      {
        title: "Cappuccino",
        items: [
          { name: "Classic Cappuccino", price: "179" },
          { name: "Vanilla Cappuccino", price: "199" },
          { name: "Irish Cappuccino", price: "209" },
          { name: "Caramel Cappuccino", price: "209" },
          { name: "Cinnamon Cappuccino", price: "209" },
          { name: "Hazelnut Cappuccino", price: "229" },
          { name: "Nutella Cappuccino", price: "249" },
          { name: "Lottus Biscoff Cappuccino", price: "249" },
          { name: "Pistachio Cappuccino", price: "249" },
        ],
      },
      {
        title: "Signature Iced Lattes",
        items: [
          { name: "Chocolate Cheesecake Iced Latte", price: "269" },
          { name: "Strawberry Cheesecake Iced Latte", price: "269" },
          { name: "Raspberry Cheesecake Iced Latte", price: "269" },
          { name: "Mango Cheesecake Iced Latte", price: "269" },
        ],
      },
      {
        title: "Matchas",
        items: [
          { name: "Matcha Cappuccino", price: "299" },
          { name: "Matcha Latte", price: "299" },
          { name: "Strawberry Vanilla Iced Matcha Latte", price: "349" },
          { name: "Mango Cheesecake Iced Matcha Latte", price: "349" },
          { name: "Matcha Affogato", price: "369" },
        ],
      },
    ],
  },

  {
    category: "Chillers",
    sections: [
      {
        title: "Frappuccino",
        items: [
          { name: "Frappe", price: "209" },
          { name: "Mocha Frappe", price: "209" },
          { name: "Choco Frappe", price: "219" },
          { name: "White Mocha Frappe", price: "219" },
          { name: "Vanilla Frappe", price: "219" },
          { name: "Double Chocochip Frappe", price: "219" },
          { name: "Caramel Frappe", price: "229" },
          { name: "Hazlenut Frappe", price: "229" },
          { name: "Nutella Frappe", price: "229" },
          { name: "Brownie Fudge Frappe", price: "229" },
        ],
      },
      {
        title: "Iced Tea",
        items: [
          { name: "Iced Tea", price: "139" },
          { name: "Lime Iced Tea", price: "139" },
          { name: "Iced Cinnamon Tea", price: "149" },
          { name: "Orange Iced Tea", price: "159" },
          { name: "Mango Iced Tea", price: "159" },
          { name: "Lychee Iced Tea", price: "159" },
          { name: "Blueberry Iced Tea", price: "159" },
          { name: "Strawberry Iced Tea", price: "159" },
        ],
      },
      {
        title: "Refreshers",
        items: [
          { name: "Purple High Heels", price: "149" },
          { name: "Green Apple Blush", price: "149" },
          { name: "Boy In Blue", price: "169" },
          { name: "Orange Love", price: "159" },
          { name: "Girl In Pink", price: "159" },
          { name: "Passion Litchi Punch", price: "169" },
          { name: "Caramel Cinnamon", price: "169" },
          { name: "Passion Heat Mojito", price: "169" },
          { name: "Seasonal Sensation", price: "179" },
          { name: "Araku Sunset", price: "179" },
        ],
      },
      {
        title: "Boba",
        items: [
          { name: "Berry Mochi Dream", price: "279" },
          { name: "Cinnabee Hug", price: "249" },
          { name: "Salted Caramel Pebble", price: "250" },
          { name: "Brown Sugar Bunny", price: "259" },
          { name: "Mango Momo", price: "250" },
        ],
      },
      {
        title: "Affogato",
        items: [
          { name: "Hot Chocolate", price: "229" },
          { name: "Hot Chocolate Affogato", price: "239" },
          { name: "Classic Affogato", price: "239" },
          { name: "White Chocolate Affogato", price: "259" },
          { name: "Nutella Affogato", price: "249" },
          { name: "Lotus Biscoff Affogato", price: "249" },
          { name: "Pistachio Affogato", price: "249" },
          { name: "Hazle Nut Affogato", price: "259" },
        ],
      },
      {
        title: "Cold Brews",
        items: [
          { name: "Cold Brew Black Coffee", price: "230" },
          { name: "Cold Brew White Chocolate Mocha", price: "249" },
          { name: "Bombon Cold Brew", price: "250" },
          { name: "Vanilla Cream Cold Brew", price: "259" },
        ],
      },
    ],
  },

  {
    category: "Soups & Starters",
    sections: [
      {
        title: "Soups",
        items: [
          { name: "Cream of Mushroom Soup", price: "199" },
          { name: "Cream of Chicken Soup", price: "209" },
        ],
      },
      {
        title: "Vegetarian Appetizers",
        items: [
          { name: "OG Fries (Classic/Cheese)", price: "159/209" },
          { name: "Loaded Garden Nachos", price: "249" },
          { name: "Boom & Mushroom", price: "289" },
          { name: "Cream Cloud Mushrooms", price: "299" },
          { name: "Marry Me Paneer", price: "299" },
          { name: "Paneer Bullets", price: "349" },
          { name: "Baby Corn Love Bites", price: "349" },
        ],
      },
      {
        title: "Non-Vegetarian Appetizers",
        items: [
          { name: "Loaded Chicken Nachos", price: "289" },
          { name: "Fire Crunch Chicken Pops", price: "299" },
          { name: "Chicken Skewer Medley", price: "319" },
          { name: "Threaded Thunder Chicken", price: "329" },
          { name: "Hot Chick On Fire", price: "349" },
          { name: "Prawn Popcorn Punch", price: "359" },
          { name: "Glow Up Garlic Prawns", price: "369" },
          { name: "Wings (BBQ/Teriyaki)", price: "349" },
        ],
      },
      {
        title: "Omelettes",
        items: [
          { name: "Cheese Omelet", price: "199" },
          { name: "Wild Spinach & Mushroom Omelet", price: "209" },
          { name: "English Masala Omelet", price: "209" },
          { name: "Cherry Tomatoes & Onions Omelet", price: "219" },
        ],
      },
    ],
  },

  {
    category: "Breads & Pizzas",
    sections: [
      {
        title: "Vegetarian Sandwiches",
        items: [
          { name: "Garden Fresh Sandwich", price: "299" },
          { name: "Fiery Cottage Sandwich", price: "309" },
          { name: "Greek Mushroom Sandwich", price: "309" },
        ],
      },
      {
        title: "Non-Vegetarian Sandwiches",
        items: [
          { name: "Chipotle Jalapeno Chicken", price: "329" },
          { name: "Araku Smoked Chicken", price: "329" },
          { name: "Avocado Chicken", price: "349" },
        ],
      },
      {
        title: "Signature House Pizza",
        items: [
          { name: "Araku Smoked Chicken Pizza", price: "459" },
          { name: "Chimichurri Chicken Pizza", price: "449" },
          { name: "Chicken Tikka Pizza", price: "449" },
          { name: "Smokey Paneer Pizza", price: "429" },
          { name: "Wild Forest Mushroom Pizza", price: "429" },
          { name: "Cheesy Malai Paneer Pizza", price: "449" },
          { name: "Garden Fresh Pizza", price: "409" },
          { name: "Giant House Full Pizza", price: "999" },
        ],
      },
      {
        title: "Pasta",
        items: [
          { name: "Charred Kiss", price: "399" },
          { name: "White Whisper", price: "359" },
          { name: "Arrabiata Bliss", price: "359" },
        ],
      },
    ],
  },

  {
    category: "Burgers & Platters",
    sections: [
      {
        title: "Burgers",
        items: [
          { name: "Grilled Chicken", price: "309" },
          { name: "Crispy Chick Filla", price: "319" },
          { name: "Med Chicken Burger", price: "319" },
          { name: "Crunch Veg Stack", price: "309" },
          { name: "Moroccan Mystique Paneer", price: "309" },
          { name: "Veg Tempest", price: "309" },
        ],
      },
      {
        title: "Signature Steaks",
        items: [
          { name: "The Umami Affair", price: "409" },
          { name: "Avocado Chicken Rush", price: "429" },
          { name: "Herby Chicken Feelings", price: "429" },
        ],
      },
      {
        title: "Platters (Rice Bowls & More)",
        items: [
          { name: "Afghani Cream", price: "409" },
          { name: "Kali Mirch", price: "399" },
          { name: "Andhra Wild Gongura Rush", price: "399" },
        ],
      },
    ],
  },

  {
    category: "Desserts",
    sections: [
      {
        title: "Desserts",
        items: [
          { name: "Filled Cookie", price: "119" },
          { name: "Butter Cookies", price: "119" },
          { name: "Triple Treat Brownie", price: "199" },
          { name: "Orange Almond Cake", price: "249" },
          { name: "Caramel Banocha Cake", price: "249" },
          { name: "Lemon Blueberry Cake", price: "259" },
          { name: "Death Chocolate Cake", price: "269" },
          { name: "Blueberry Cheesecake", price: "269" },
          { name: "Butter Biscoff Cake", price: "269" },
          { name: "Araku Tiramisu", price: "279" },
        ],
      },
    ],
  },
];

const App = () => {
  const [order, setOrder] = useState({});

  const parsePrice = (p) => {
    if (p == null) return 0;
    if (typeof p === "number") return p;
    const num = String(p).replace(/[^0-9.]/g, "");
    return Number(num) || 0;
  };

  const formatPrice = (v) => {
    return `₹${Number(v).toFixed(0)}`;
  };

  const addItem = (item) => {
    setOrder((prev) => {
      const name = item.name;
      const price = parsePrice(item.price);
      const entry = prev[name] || { qty: 0, price };
      return { ...prev, [name]: { qty: entry.qty + 1, price } };
    });
  };

  const removeItem = (item) => {
    setOrder((prev) => {
      const name = item.name;
      const entry = prev[name];
      if (!entry) return prev;
      if (entry.qty <= 1) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [name]: { ...entry, qty: entry.qty - 1 } };
    });
  };

  const clearOrder = () => setOrder({});

  const categories = MENU.map((m) => m.category);
  const [activeCategory, setActiveCategory] = useState(categories[0] || "");
  const activeData =
    MENU.find((m) => m.category === activeCategory) || MENU[0];

  const orderItems = Object.keys(order).map((name) => ({
    name,
    qty: order[name].qty,
    price: order[name].price,
  }));

  const orderTotal = orderItems.reduce(
    (s, it) => s + it.price * it.qty,
    0
  );

  return (
    <div className="min-h-screen bg-araku-dark text-araku-cream p-4 md:p-8">
      {/* Header */}
      <header className="bg-araku-accent px-6 py-5 md:px-10 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-lg md:text-2xl font-bold tracking-wide text-araku-cream">
            Araku House
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-araku-cream text-left w-full">
            Our Menu
          </h1>
          <p className="text-xs md:text-sm text-slate-900/80 mt-1 max-w-xl">
            All our dishes are freshly prepared after you order. Please allow a
            minimum of 20 minutes for service so you can enjoy your food hot and
            at its best.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-1">
          <span className="inline-flex items-center rounded-full bg-araku-chip px-3 py-1 text-[11px] md:text-xs font-medium uppercase tracking-wide">
            Dine-in • Takeaway
          </span>
          <span className="text-[11px] md:text-xs text-slate-900/80">
            Timings: 8:00 AM – 10:00 PM
          </span>
        </div>
      </header>

      {/* Category Tabs */}
      <nav className="relative z-10 border-b border-araku-border bg-araku-dark/95 px-4 md:px-8 mt-4">
        <div className="flex flex-wrap gap-2 py-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`menu-tab text-[11px] md:text-xs px-3 md:px-4 py-1.5 ${
                activeCategory === cat ? "menu-tab-active" : ""
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* Menu Sections + Order Panel */}
      <main className="relative z-10 px-4 md:px-8 py-6 md:py-8">
        <div className="flex items-center justify-between mb-4 md:mb-6">
          <h2 className="text-lg md:text-xl font-semibold tracking-wide text-araku-cream">
            {activeCategory}
          </h2>
          <span className="text-[11px] md:text-xs text-araku-muted">
            All prices are inclusive of taxes
          </span>
        </div>

        <div className="md:flex md:gap-6">
          <div className="flex-1 space-y-6 md:space-y-8">
            {activeData.sections.map((section) => (
              <section key={section.title} className="space-y-3 md:space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm md:text-base font-semibold tracking-[0.18em] uppercase text-araku-muted">
                    {section.title}
                  </h3>
                  <span className="h-px flex-1 bg-gradient-to-r from-araku-border/80 to-transparent" />
                </div>

                <div className="grid gap-3 md:gap-4 md:grid-cols-2">
                  {section.items.map((item) => (
                    <article
                      key={item.name}
                      className="group menu-card flex flex-col gap-1.5"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <h4 className="text-sm md:text-base font-semibold text-araku-cream group-hover:text-araku-highlight transition-colors duration-200">
                          {item.name}
                        </h4>
                        <div className="flex items-center gap-3">
                          <span className="text-sm md:text-base font-semibold text-araku-highlight whitespace-nowrap">
                            {formatPrice(parsePrice(item.price))}
                          </span>
                          <div className="flex items-center gap-2">
                            {order[item.name]?.qty ? (
                              <>
                                <button
                                  onClick={() => removeItem(item)}
                                  className="px-2 py-1 rounded-md bg-araku-border text-sm text-araku-cream hover:bg-araku-accent"
                                  aria-label={`Decrease ${item.name}`}
                                >
                                  -
                                </button>
                                <span className="text-sm w-6 text-center">
                                  {order[item.name].qty}
                                </span>
                                <button
                                  onClick={() => addItem(item)}
                                  className="px-2 py-1 rounded-md bg-araku-highlight text-sm text-araku-card hover:brightness-110"
                                  aria-label={`Increase ${item.name}`}
                                >
                                  +
                                </button>
                              </>
                            ) : (
                              <button
                                onClick={() => addItem(item)}
                                className="text-xs px-3 py-1 rounded-md bg-araku-chip text-araku-cream hover:opacity-90"
                              >
                                Add
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Order panel */}
          <aside className="w-full md:w-80 mt-6 md:mt-0 bg-araku-card border border-araku-border p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-araku-cream mb-3">
              Your Order
            </h3>
            {orderItems.length === 0 ? (
              <p className="text-xs text-araku-muted">
                No items yet. Add items to preview your order.
              </p>
            ) : (
              <div className="space-y-3">
                {orderItems.map((it) => (
                  <div
                    key={it.name}
                    className="flex items-center justify-between gap-3"
                  >
                    <div>
                      <div className="text-sm font-medium text-araku-cream">
                        {it.name}
                      </div>
                      <div className="text-xs text-araku-muted">
                        {formatPrice(it.price)} × {it.qty} ={" "}
                        <span className="text-araku-highlight font-semibold">
                          {formatPrice(it.price * it.qty)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeItem({ name: it.name })}
                        className="px-2 py-1 rounded-md bg-araku-border text-sm text-araku-cream"
                      >
                        -
                      </button>
                      <div className="w-6 text-center">{it.qty}</div>
                      <button
                        onClick={() =>
                          addItem({ name: it.name, price: it.price })
                        }
                        className="px-2 py-1 rounded-md bg-araku-highlight text-sm text-araku-card"
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))}

                <div className="border-t border-araku-border pt-3 flex items-center justify-between">
                  <div className="text-sm text-araku-muted">Total</div>
                  <div className="text-lg font-bold text-araku-highlight">
                    {formatPrice(orderTotal)}
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => clearOrder()}
                    className="flex-1 btn-secondary"
                  >
                    Clear
                  </button>
                  <button className="flex-3 btn-primary">
                    Proceed to Counter
                  </button>
                </div>
              </div>
            )}
          </aside>
        </div>

        {/* Footer note */}
        <div className="mt-6 md:mt-8 border-t border-araku-border pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[11px] md:text-xs text-araku-muted">
          <p>
            All prices are inclusive of taxes. Menu items and prices are subject
            to change.
          </p>

          <div className="flex flex-col md:items-end text-right">
            <p>
              <span className="font-extrabold text-araku-accent">
                Araku House
              </span>
              <span className="ml-2 text-araku-muted">
                • Café &amp; Organic Store, Vijayawada
              </span>
            </p>

            <a
              href="https://ruahverse.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block text-[11px] md:text-xs text-slate-400 hover:text-araku-accent transition-colors duration-150"
              aria-label="Designed by Ruah Verse (opens in a new tab)"
            >
              <span className="sr-only">Designed by Ruah Verse </span>
              <span className="uppercase tracking-wider font-medium">
                Designed by Ruah Verse
              </span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;