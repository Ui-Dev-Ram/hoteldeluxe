# HotelDeluxe 🏨
A modern hotel listing website built with **Next.js**, optimized for SEO and performance.

---

## 🔧 Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/Ui-Dev-Ram/hoteldeluxe.git
cd hoteldeluxe
Install dependencies:

bash
Copy
Edit
npm install
Run the development server:

bash
Copy
Edit
npm run dev
Build for production:

bash
Copy
Edit
npm run build
npm start
🏗️ Architecture Overview
pgsql
Copy
Edit
/app
  ├── layout.jsx          → Layout wrapper (shared header, metadata, etc.)
  ├── page.jsx            → Home page (list of hotels)
  ├── [id]/page.jsx       → Dynamic hotel detail page
  └── globals.css         → Global styles

/data
  └── hotel.js            → Static data for hotels (can be replaced with API)

public/
  └── images/             → Static hotel images

next.config.mjs           → Next.js configuration
package.json              → Project metadata and scripts
Routing: File-based routing via /app directory.

Dynamic Pages: Hotel detail pages generated using dynamic route [id].

Styling: Tailwind CSS or custom CSS inside globals.css.

🔍 SEO Techniques Used
Meta Tags:

Dynamic <title> and <meta description> per hotel.

robots and viewport meta tags added.

Image Optimization:

Used <Image> component from next/image (or plan to add).

Lazy loading enabled.

Clean URLs:

Hotel pages are accessible via /hotels/1, /hotels/2, etc.

Lighthouse Score:

Target: 90+ for Performance and SEO.

Minified assets and optimized images.

