# Bulgarian Education Hub

A professional website for an overseas educational consultancy specializing in Bulgarian universities. The platform showcases leading Bulgarian institutions offering programs in Medicine, Nursing, Veterinary Science, Culinary Arts, Management, Technical Engineering, and Maritime Studies.

## Features

- **University Listings** - Browse 8+ Bulgarian universities with detailed information
- **Program Showcase** - 50+ academic programs across 7 study categories
- **Responsive Design** - Fully mobile-responsive interface
- **Dark Mode** - Built-in light/dark theme support
- **Dynamic University Pages** - Detailed pages for each university with programs
- **Contact Forms** - Lead capture and inquiry forms
- **SEO Optimized** - Next.js built-in SEO features

## Study Categories

1. **Medicine & Nursing** - Medical degree programs and nursing specializations
2. **Veterinary Science** - Advanced animal healthcare and veterinary training
3. **Culinary Arts** - Professional chef and pastry training
4. **Management** - Business administration and management programs
5. **Technical Engineering** - Civil, mechanical, electrical, and computer engineering
6. **Maritime Studies** - Naval architecture, marine engineering, and port management
7. **Specialized Programs** - Food technology, hospitality management, and more

## Universities Featured

- Medical University of Sofia
- Agricultural University of Plovdiv
- National University of Food Technologies
- Technical University of Sofia
- Technical University of Varna
- Sofia University 'St. Kliment Ohridski'
- North-Eastern Bulgaria University
- Plovdiv University 'Paisii Hilendarski'

## Tech Stack

- **Framework**: Next.js 14.2
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Custom React components

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
projects/bulgarian-education-hub/
├── app/
│   ├── layout.tsx           # Root layout with header/footer
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   └── universities/
│       └── [id]/
│           └── page.tsx     # Dynamic university detail pages
├── components/
│   ├── HeroSection.tsx      # Hero banner section
│   ├── UniversityCard.tsx   # University listing card
│   ├── CategoryFilter.tsx   # Program category filter
│   ├── ProgramShowcase.tsx  # Program showcase cards
│   └── ContactForm.tsx      # Inquiry form
├── data/
│   └── universities.ts      # University and program data
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── next.config.js           # Next.js configuration
```

## Customization

### Add More Universities

Edit `data/universities.ts` to add new universities and programs:

```typescript
{
  id: "new-uni",
  name: "University Name",
  location: "City",
  founded: 2000,
  website: "https://...",
  image: "/path/to/image.jpg",
  description: "Description...",
  categories: ["Medicine", "Management"],
  tuitionEstimate: "$X,XXX/year",
  programs: [...]
}
```

### Customize Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
extend: {
  colors: {
    primary: { /* your colors */ }
  }
}
```

### Update Contact Information

Edit `app/layout.tsx` footer section to update:
- Email address
- Phone number
- Physical address

## Features to Implement

- [ ] University search functionality
- [ ] Program filtering
- [ ] Student testimonials section
- [ ] Scholarship information
- [ ] Application tracker
- [ ] Blog/News section
- [ ] Virtual campus tours
- [ ] Student visa information
- [ ] Email notification system
- [ ] Admin dashboard for consultants

## Deployment

### Deploy to Vercel (Recommended)

```bash
vercel deploy
```

### Deploy to Other Platforms

The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- DigitalOcean
- Heroku
- Self-hosted servers

## Performance Optimization

- Static site generation (SSG) for university pages
- Image optimization
- CSS purging with Tailwind
- Code splitting
- Font optimization

## SEO

The site includes:
- Meta descriptions
- Open Graph tags
- Structured data (Schema.org)
- XML sitemap (auto-generated)
- Robots.txt

## License

MIT License - Feel free to use this template for your education consultancy.

## Support

For questions or issues:
- 📧 info@bulgeduhub.com
- 📞 +359 2 XXX XXXX
- 🌐 www.bulgeduhub.com

---

Built with ❤️ for education consultants worldwide.
