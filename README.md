<br/>
<p align="center">
  <h3 align="center">PICKMART API simplifies user registration, product creation, reviews, and product ordering for seamless interaction.</h3>

  <p align="center">
    <a href="https://github.com/MeerUzairWasHere/Pickmart"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://pickmart-g9tr.onrender.com/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/MeerUzairWasHere/Pickmart/issues">Report Bug</a>
    ·
    <a href="https://github.com/MeerUzairWasHere/Pickmart/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/MeerUzairWasHere/Pickmart/total) ![Contributors](https://img.shields.io/github/contributors/MeerUzairWasHere/Pickmart?color=dark-green) ![Forks](https://img.shields.io/github/forks/MeerUzairWasHere/Pickmart?style=social) ![Stargazers](https://img.shields.io/github/stars/MeerUzairWasHere/Pickmart?style=social) ![Issues](https://img.shields.io/github/issues/MeerUzairWasHere/Pickmart) ![License](https://img.shields.io/github/license/MeerUzairWasHere/Pickmart)

## Table Of Contents

- [About the Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [License](#license)
- [Authors](#authors)

## About The Project

**PickMart API** is a robust and versatile E-Commerce solution that empowers developers to create and manage online marketplaces with ease. It simplifies user registration, product creation, reviews, and product ordering, providing a seamless and efficient platform for both administrators and customers.

### Key Features

- **User Registration**: A user-friendly and secure process, allowing new users to sign up and create accounts easily.
- **Product Management**: Administrators can add, update, and delete products effortlessly, keeping listings accurate for customers.

- **Reviews and Ratings**: Customers can leave reviews and ratings, fostering trust and informed purchasing decisions.

- **Product Ordering**: A streamlined ordering process enables customers to add products to carts, review orders, and make secure payments.

## Built With

- [JavaScript]()
- [Node.js]()
- [bcryptjs]()
- [Cloudinary]()
- [cookie-parser]()
- [CORS]()
- [dotenv]()
- [Express.js]()
- [express-async-errors]()
- [express-fileupload]()
- [Helmet]()
- [http-status-codes]()
- [Morgan]()
- [jsonwebtoken]()
- [Validator]()
- [xss-clean]()
- [Nodemon]()

## Getting Started

Welcome to PickMart! This guide will walk you through the essential steps to get started with the PickMart E-Commerce API, from setting up your environment to making your first API requests.

### Prerequisites

- **Node.js**: Download and install Node.js.
- **MongoDB**: Set up a MongoDB database (local or Atlas).
- **npm**: Ensure npm is installed with Node.js.
- **Text Editor/IDE**: Use any code editor like VSCode, Sublime, or WebStorm.
- **API Testing Tool**: Tools like Postman or Insomnia can be used to interact with the API.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/MeerUzairWasHere/Pickmart.git
   ```
2. **Install Dependencies**:

   ```bash
   cd pickmart
   npm install
   ```

3. **Environment Variables**: Create a `.env` file and configure it with your MongoDB connection string and other keys (e.g., Cloudinary API keys).

4. **Database Setup**: Ensure your MongoDB is running and connected.

5. **Start the Server**:

   ```bash
   npm start
   ```

6. **Testing**: Run tests to verify setup:

   ```bash
   npm test
   ```

7. **API Documentation**: Refer to the documentation for available API endpoints.

## Usage

Once PickMart is set up, you can perform tasks such as managing users, products, reviews, and orders.

- **User Registration**  
  POST: `https://pickmart-g9tr.onrender.com/api/v1/auth/register`

- **User Login**  
  POST: `https://pickmart-g9tr.onrender.com/api/v1/auth/login`

- **View All Products**  
  GET: `https://pickmart-g9tr.onrender.com/api/v1/products`

- **Create Product (Admin Only)**  
  POST: `https://pickmart-g9tr.onrender.com/api/v1/products`

Refer to the API documentation for more details on each endpoint.

## Roadmap

### Phase 1: Core Functionality

- Bug Fixes and Testing
- User roles and permissions
- Performance improvements

### Phase 2: Features and UX

- Recommendation system
- Enhanced product search and filtering
- Payment gateway integration

### Phase 3: Community Engagement

- Documentation and tutorials
- Developer community forum

### Phase 4: Security and Compliance

- Regular security audits
- PCI DSS compliance

### Phase 5: Mobile Applications

- Mobile apps for Android and iOS

## Contributing

Contributions are what make the open-source community a great place to learn and create! Any contributions are greatly appreciated.

1. Fork the Project
2. Create a Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Please follow the [Code of Conduct](https://github.com/MeerUzairWasHere/Pickmart/blob/main/CODE_OF_CONDUCT.md).

## License

Distributed under the MIT License. See [LICENSE](https://github.com/MeerUzairWasHere/Pickmart/blob/main/LICENSE.md) for more information.

## Authors

- **Meer Uzair** - [GitHub](https://github.com/MeerUzairWasHere)
