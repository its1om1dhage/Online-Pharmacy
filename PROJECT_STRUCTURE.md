# MediEase - Professional Folder Structure

## 📁 Project Structure

```
src/
├── assets/                  # Static assets (images, fonts, etc.)
├── components/             # React components
│   ├── common/            # Reusable components (Button, Input, Card, etc.)
│   ├── layout/            # Layout components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Layout.jsx
│   └── home/              # Home page specific components
│       ├── Hero.jsx
│       └── Features.jsx
├── pages/                  # Page components
│   ├── Home.jsx
│   ├── Cart.jsx
│   └── Login.jsx
├── hooks/                  # Custom React hooks (future)
├── utils/                  # Utility functions (future)
├── services/               # API services (future)
├── constants/              # Constants and config (future)
├── App.jsx                 # Main App component
├── main.jsx                # Entry point
└── index.css               # Global styles
```

## 📝 Component Organization

### Layout Components (`components/layout/`)
- **Layout.jsx** - Main layout wrapper with Navbar, Outlet, Footer
- **Navbar.jsx** - Navigation bar with logo, search, cart, login
- **Footer.jsx** - Footer with links and social media

### Page-Specific Components (`components/home/`)
- **Hero.jsx** - Hero section for home page
- **Features.jsx** - Features/Services section

### Pages (`pages/`)
- **Home.jsx** - Home page (combines Hero + Features)
- **Cart.jsx** - Shopping cart page
- **Login.jsx** - Login/Authentication page

## 🎯 Best Practices Applied

1. **Separation of Concerns** - Components divided by functionality
2. **Scalability** - Easy to add new pages and components
3. **Maintainability** - Clear structure for team collaboration
4. **Reusability** - Common components in `components/common/`
5. **Industry Standard** - Follows React best practices

## 🚀 Adding New Components

### For new pages:
1. Create component in `src/pages/`
2. Add route in `App.jsx`

### For page-specific components:
1. Create folder in `src/components/` (e.g., `components/cart/`)
2. Import and use in corresponding page

### For reusable components:
1. Create in `src/components/common/`
2. Import wherever needed
