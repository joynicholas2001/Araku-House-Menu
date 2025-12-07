// src/app.jsx
import React, { useState } from "react";
import "./index.css"

// Structured menu data using your exact items & prices
const MENU = [
  {
    category: "Coffee & More",
    sections: [
      {
        title: "Cappuccino",
        items: [
          { name: "Cappuccino", price: "₹120" },
          { name: "Hazelnut Cappuccino", price: "₹140" },
          { name: "Caramel Cappuccino", price: "₹140" },
          { name: "Vanilla Cappuccino", price: "₹140" },
        ],
      },
      {
        title: "Latte",
        items: [
          { name: "Cafe Latte", price: "₹130" },
          { name: "Hazelnut Latte", price: "₹150" },
          { name: "Caramel Latte", price: "₹150" },
          { name: "Vanilla Latte", price: "₹150" },
        ],
      },
      {
        title: "Espresso",
        items: [
          { name: "Espresso Single Shot", price: "₹100" },
          { name: "Espresso Double Shot", price: "₹130" },
          { name: "Americano", price: "₹120" },
        ],
      },
      {
        title: "Frappuccino",
        items: [
          { name: "Classic Coffee Frappuccino", price: "₹160" },
          { name: "Mocha Frappuccino", price: "₹180" },
          { name: "Caramel Frappuccino", price: "₹180" },
          { name: "Vanilla Frappuccino", price: "₹180" },
          { name: "Hazelnut Frappuccino", price: "₹180" },
        ],
      },
      {
        title: "Hot Chocolate & Mochas",
        items: [
          { name: "Classic Hot Chocolate", price: "₹140" },
          { name: "White Hot Chocolate", price: "₹150" },
          { name: "Cafe Mocha", price: "₹150" },
          { name: "White Cafe Mocha", price: "₹160" },
        ],
      },
      {
        title: "Non-Coffee Beverages",
        items: [
          { name: "Masala Tea", price: "₹60" },
          { name: "Green Tea", price: "₹80" },
          { name: "Lemon Tea", price: "₹70" },
          { name: "Fresh Lime Soda", price: "₹80" },
          { name: "Fruit Juices", price: "₹100" },
        ],
      },
      {
        title: "Chillers",
        items: [
          { name: "Cold Coffee (Iced Coffee)", price: "₹140" },
          { name: "Cold Brew", price: "₹170" },
          { name: "Iced Latte", price: "₹150" },
        ],
      },
    ],
  },
  {
    category: "Breakfast & Breads",
    sections: [
      {
        title: "Breakfast",
        items: [
          { name: "Classic Omelette", price: "₹100" },
          { name: "Masala Omelette", price: "₹120" },
          { name: "French Toast", price: "₹140" },
          { name: "Pancakes (3 pcs)", price: "₹150" },
          { name: "Avocado Toast", price: "₹220" },
          { name: "Breakfast Platter", price: "₹240" },
        ],
      },
    ],
  },
  {
    category: "Sandwiches",
    sections: [
      {
        title: "Sandwiches",
        items: [
          { name: "Veg Grilled Sandwich", price: "₹140" },
          { name: "Cheese Grilled Sandwich", price: "₹160" },
          { name: "Paneer Tikka Sandwich", price: "₹180" },
          { name: "Chicken Grilled Sandwich", price: "₹200" },
          { name: "Chicken Tikka Sandwich", price: "₹220" },
        ],
      },
    ],
  },
  {
    category: "Burgers",
    sections: [
      {
        title: "Burgers",
        items: [
          { name: "Veg Burger", price: "₹140" },
          { name: "Paneer Burger", price: "₹160" },
          { name: "Chicken Burger", price: "₹180" },
          { name: "Chicken Cheese Burger", price: "₹200" },
        ],
      },
    ],
  },
  {
    category: "Pizza & Pasta",
    sections: [
      {
        title: "Pizza",
        items: [
          { name: "Margherita Pizza", price: "₹180" },
          { name: "Veggie Supreme Pizza", price: "₹220" },
          { name: "Paneer Tikka Pizza", price: "₹240" },
          { name: "Chicken Pizza", price: "₹260" },
        ],
      },
      {
        title: "Pasta",
        items: [
          { name: "Veg Red Sauce Pasta", price: "₹160" },
          { name: "Veg White Sauce Pasta", price: "₹170" },
          { name: "Chicken Red Sauce Pasta", price: "₹200" },
          { name: "Chicken White Sauce Pasta", price: "₹210" },
          { name: "Araku House Special Pasta", price: "₹280" },
        ],
      },
    ],
  },
  {
    category: "Salads & Bowls",
    sections: [
      {
        title: "Salads & Bowls",
        items: [
          { name: "Garden Fresh Salad", price: "₹200" },
          { name: "Mediterranean Bowl", price: "₹260" },
          { name: "Quinoa Salad Bowl", price: "₹240" },
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
          { name: "Signature Chocolate Cake", price: "₹180" },
          { name: "Tiramisu", price: "₹160" },
          { name: "Cheesecake", price: "₹170" },
          { name: "Brownie Sundae", price: "₹190" },
          { name: "Artisan Tart", price: "₹150" },
        ],
      },
    ],
  },
  {
    category: "Snacks",
    sections: [
      {
        title: "Snacks",
        items: [
          { name: "French Fries", price: "₹100" },
          { name: "Garlic Bread", price: "₹120" },
          { name: "Nachos with Salsa", price: "₹140" },
          { name: "Spring Rolls", price: "₹130" },
        ],
      },
    ],
  },
];

const categories = MENU.map((c) => c.category);

const App = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeData =
    MENU.find((c) => c.category === activeCategory) || MENU[0];
  const [order, setOrder] = useState({});

  const parsePrice = (priceStr) => {
    // turn strings like "₹1,200" into number 1200
    if (!priceStr) return 0;
    const n = Number(String(priceStr).replace(/[^0-9.-]+/g, ""));
    return Number.isFinite(n) ? n : 0;
  };

  const formatPrice = (n) => `₹${n.toFixed(0)}`;

  const addItem = (item) => {
    setOrder((prev) => {
      const key = item.name;
      const prevQty = prev[key]?.qty || 0;
      const priceNum = parsePrice(item.price);
      return {
        ...prev,
        [key]: { name: item.name, price: priceNum, qty: prevQty + 1 },
      };
    });
  };

  const removeItem = (item) => {
    setOrder((prev) => {
      const key = item.name;
      const entry = prev[key];
      if (!entry) return prev;
      if (entry.qty <= 1) {
        const copy = { ...prev };
        delete copy[key];
        return copy;
      }
      return { ...prev, [key]: { ...entry, qty: entry.qty - 1 } };
    });
  };

  const clearOrder = () => setOrder({});

  const orderItems = Object.values(order);
  const orderTotal = orderItems.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div className="min-h-screen bg-araku-dark text-araku-cream flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl rounded-3xl bg-araku-card border border-araku-border shadow-2xl overflow-hidden backdrop-blur-xl relative">
        {/* soft background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-araku-highlight blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-araku-accent blur-3xl" />
        </div>

        {/* Header */}
        <header className="bg-araku-accent px-6 py-5 md:px-10 md:py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-lg md:text-2xl font-bold tracking-wide text-araku-cream">
              Araku House
            </p>
            <h1 className="text-2xl md:text-4xl font-bold text-araku-cream text-left w-full">Our Menu</h1>
            <p className="text-xs md:text-sm text-slate-900/80 mt-1 max-w-xl">
              All our dishes are freshly prepared after you order. Please allow
              a minimum of 20 minutes for service so you can enjoy your food hot
              and at its best.
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
        <nav className="relative z-10 border-b border-araku-border bg-araku-dark/95 px-4 md:px-8">
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

        {/* Menu Sections */}
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
                          <span className="text-sm md:text-base font-semibold text-araku-highlight whitespace-nowrap">{item.price}</span>
                          {/* quantity controls */}
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
                                <span className="text-sm w-6 text-center">{order[item.name].qty}</span>
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
              <h3 className="text-sm font-semibold text-araku-cream mb-3">Your Order</h3>
              {orderItems.length === 0 ? (
                <p className="text-xs text-araku-muted">No items yet. Add items to preview your order.</p>
              ) : (
                <div className="space-y-3">
                  {orderItems.map((it) => (
                    <div key={it.name} className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-sm font-medium text-araku-cream">{it.name}</div>
                        <div className="text-xs text-araku-muted">{formatPrice(it.price)} × {it.qty} = <span className="text-araku-highlight font-semibold">{formatPrice(it.price * it.qty)}</span></div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button onClick={() => removeItem({ name: it.name })} className="px-2 py-1 rounded-md bg-araku-border text-sm text-araku-cream">-</button>
                        <div className="w-6 text-center">{it.qty}</div>
                        <button onClick={() => addItem({ name: it.name, price: formatPrice(it.price) })} className="px-2 py-1 rounded-md bg-araku-highlight text-sm text-araku-card">+</button>
                      </div>
                    </div>
                  ))}

                  <div className="border-t border-araku-border pt-3 flex items-center justify-between">
                    <div className="text-sm text-araku-muted">Total</div>
                    <div className="text-lg font-bold text-araku-highlight">{formatPrice(orderTotal)}</div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <button onClick={() => clearOrder()} className="flex-1 px-3 py-2 rounded-md bg-araku-border text-sm text-araku-cream">Clear</button>
                    <button className="flex-1 px-3 py-2 rounded-md bg-araku-highlight text-sm text-araku-card">Checkout</button>
                  </div>
                </div>
              )}
            </aside>
          </div>

          {/* Footer note */}
          <div className="mt-6 md:mt-8 border-t border-araku-border pt-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2 text-[11px] md:text-xs text-araku-muted">
            <p>
              All prices are inclusive of taxes. Menu items and prices are subject to change.
            </p>

            <div className="flex flex-col md:items-end text-right">
              <p>
                <span className="font-extrabold text-araku-accent">Araku House</span>
                <span className="ml-2 text-araku-muted">• Café &amp; Organic Store, Vijayawada</span>
              </p>

              <a
                href="https://ruahverse.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-[11px] md:text-xs text-slate-400 hover:text-araku-accent transition-colors duration-150"
                aria-label="Designed by Ruah Verse (opens in a new tab)"
              >
                <span className="sr-only">Designed by Ruah Verse </span>
                <span className="uppercase tracking-wider font-medium">Designed by Ruah Verse</span>
              </a>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default App;