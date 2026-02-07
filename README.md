# Display Products - Infinite Scroll Table

This is a React application that displays product data from the DummyJSON API in an interactive table with infinite scrolling capability.

**Live Demo**: [Deployed URL](https://display-products-cyan.vercel.app/)


## Features

- **Infinite Scrolling**: This automatically loads more products as you scroll down using Intersection Observer API
- **Editable Titles**: All the titles are editable, you can click on it to edit on the client side
- **Responsive Design**: Clean, readable and responsive table layout to display the products
- **Error Handling**: Proper error messages if API calls fail



## Setup Instructions

### Prerequisites

Make sure you have the following installed on your local machine:
- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation Steps

1. **Clone the repository**
```bash
   git clone https://github.com/yuzikage/display-products.git

   cd display-products
```

2. **Install dependencies**
```bash
   npm install
   # or
   yarn install
```

3. **Create environment file**
   
   Create a `.env` file in the root directory:
```bash
   touch .env
```
   
   Add the following:
```env
   VITE_API_BASE_URL=https://dummyjson.com
```

4. **Start development server**
```bash
   npm run dev
   # or
   yarn dev
```
   
   The application will open at `http://localhost:5173`



## Notes

- The application loads 20 products each time
- Product Title edits are not persisted to the API as the changes are on the client-side only
- The DummyJSON API has total 194 products
- No external UI libraries are used as per the guidelines




