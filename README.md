# 🛒 E-Commerce Website (Next.js • JSON-Based)

A clean, portfolio-focused e-commerce website built with **Next.js App Router**.
This project demonstrates modern frontend architecture, cart logic, and checkout flow using **static JSON data** instead of a database.

> **Live production reference:** https://www.easyshoppi.com  
> *(This repository is a simplified, open-source version created for portfolio demonstration.)*

---

## ✨ Why I Built This

I built this project to demonstrate **frontend engineering skills** — not backend CRUD complexity.

The focus areas are:
- Next.js App Router architecture
- Component-driven UI design
- Cart and checkout business logic
- Global state management
- Clean routing and user experience

For clarity and speed, product and category data are intentionally read from **static JSON files**.
This keeps the project easy to understand while still being production-ready in structure.

---

## 🚀 Features

- Product & category listing from JSON files
- Dynamic category and product pages
- Add to cart / remove from cart
- Quantity updates with live totals
- Cart persistence using `localStorage`
- Checkout form with validation
- Mock payment flow
- Thank-you page with cart reset
- Fully client-side, fast, and simple

---

## 🧱 Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Context
- **Data Source:** Static JSON files
- **Persistence:** Browser `localStorage`

---

## 🗂️ Project Structure

```
src/
 ├── app/
 │   ├── page.tsx
 │   ├── category/[slug]/page.tsx
 │   ├── product/[slug]/page.tsx
 │   ├── cart/page.tsx
 │   ├── checkout/page.tsx
 │   └── thank-you/page.tsx
 │
 ├── data/
 │   ├── products.json
 │   └── categories.json
 │
 ├── components/
 │   ├── Navbar.tsx
 │   ├── ProductCard.tsx
 │   ├── CartItem.tsx
 │   └── CheckoutForm.tsx
 │
 ├── context/
 │   └── CartContext.tsx
 │
 ├── lib/
 │   ├── cart.ts
 │   └── utils.ts
```

---

## 🧠 Data Strategy

This project intentionally does **not** use a database.

All products and categories are read from static JSON files to:
- Keep the project lightweight
- Focus on frontend logic and UX
- Avoid unnecessary backend complexity

In a real production system, these JSON files can be replaced with API endpoints or a database **without changing the frontend architecture**.

---

## 🛍️ User Flow

1. Browse products by category
2. View product details
3. Add items to cart
4. Update quantities or remove items
5. Proceed to checkout
6. Submit checkout form
7. See confirmation on thank-you page

---

## 🛠️ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open:
```
http://localhost:3000
```

---

## ⚠️ Known Limitations

- No authentication or user accounts
- No real payment gateway (checkout is mocked)
- No backend APIs or database
- Cart is browser-specific (localStorage)

These trade-offs are intentional for portfolio clarity.

---

## 🔄 Possible Extensions

- Replace JSON data with API or database
- Add admin product management
- Integrate real payment gateway
- Add user authentication
- Server-side cart persistence

---

## 📌 Portfolio Context

This project complements my production e-commerce platform (**Easyshoppi**) and showcases frontend engineering decisions, clean architecture, and realistic user flows in a simplified, open-source format.

---

## 📝 License

MIT
