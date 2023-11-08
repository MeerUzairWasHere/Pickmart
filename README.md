<br/>
<p align="center">
 

  <h3 align="center">PICKMART API simplifies user registration, product creation, reviews, and product ordering for seamless interaction.</h3>

  <p align="center">
    <a href="https://github.com/MeerUzairWasHere/Pickmart"><strong>Explore the docs »</strong></a>
    <br/>
    <br/>
    <a href="https://github.com/MeerUzairWasHere/Pickmart">View Demo</a>
    .
    <a href="https://github.com/MeerUzairWasHere/Pickmart/issues">Report Bug</a>
    .
    <a href="https://github.com/MeerUzairWasHere/Pickmart/issues">Request Feature</a>
  </p>
</p>

![Downloads](https://img.shields.io/github/downloads/MeerUzairWasHere/Pickmart/total) ![Contributors](https://img.shields.io/github/contributors/MeerUzairWasHere/Pickmart?color=dark-green) ![Forks](https://img.shields.io/github/forks/MeerUzairWasHere/Pickmart?style=social) ![Stargazers](https://img.shields.io/github/stars/MeerUzairWasHere/Pickmart?style=social) ![Issues](https://img.shields.io/github/issues/MeerUzairWasHere/Pickmart) ![License](https://img.shields.io/github/license/MeerUzairWasHere/Pickmart) 

## Table Of Contents

* [About the Project](#about-the-project)
* [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [Roadmap](#roadmap)
* [License](#license)
* [Authors](#authors)


## About The Project

![Screen Shot](images/screenshot.png)

Introduction
PickMart API is a robust and versatile E-Commerce solution that empowers developers to create and manage online marketplaces with ease. It simplifies user registration, product creation, reviews, and product ordering, providing a seamless and efficient platform for both administrators and customers.

Key Features
User Registration
PickMart offers a user-friendly and secure user registration process. New users can easily sign up, providing essential information to create their accounts. This feature ensures a smooth onboarding experience for customers and enables them to access the platform's full functionality.

Product Management
PickMart's product management capabilities allow administrators to effortlessly add, update, and delete products. The system ensures that product listings are up to date and accurate, making it easy for customers to browse and find the products they desire.

Reviews and Ratings
Customers can leave reviews and ratings for products, helping others make informed purchasing decisions. This feature fosters a sense of community and trust within the marketplace.

Product Ordering
The API supports a streamlined ordering process, enabling customers to add products to their carts, review their orders, and make secure payments. Order history is also accessible for customers to track their past purchases.

## Built With

NPM PACKAGES

* [bcryptjs]()
* [cloudinary]()
* [cookie-parser]()
* [cors]()
* [dotenv]()
* [express]()
* [express-async-errors]()
* [express-fileupload]()
* [helmet]()
* [http-status-codes]()
* [morgan]()
* [http-status-codes]()
* [jsonwebtoken]()
* [validator]()
* [xss-clean]()
* [nodemon]()

## Getting Started

Welcome to PickMart, your gateway to building your own E-Commerce platform. This guide will walk you through the essential steps to get started with the PickMart E-Commerce API, from setting up your environment to making your first API requests.

### Prerequisites

Node.js: Ensure that you have Node.js installed on your system. If you don't have it, you can download it from the official Node.js website.

MongoDB: You need a MongoDB database to store your application's data. You can set up a MongoDB cluster on MongoDB Atlas or install it locally.

npm: The Node.js package manager (npm) is used to manage project dependencies. You should have npm installed with Node.js.

Text Editor or IDE: Choose a code editor or integrated development environment (IDE) of your preference. Popular choices include Visual Studio Code, Sublime Text, or JetBrains WebStorm.

API Testing Tool: Pick an API testing tool like Postman, Insomnia, or use a tool of your choice for interacting with the PickMart API.

### Installation

To set up the PickMart E-Commerce API, follow these steps:

1. Clone the Repository: Start by cloning the PickMart repository to your local machine:

```
git clone https://github.com/your-pickmart-repo.git
```

2. Install Dependencies: Navigate to the project directory and install the required npm packages using the following command:
   
```
cd your-pickmart-repo
npm install
```

3. Environment Variables: Create a .env file in the project root and add necessary environment variables, including your MongoDB connection string and any API keys required for external services like Cloudinary.

4. Database Setup: Ensure your MongoDB server is up and running, and the connection details in your .env file are correct.

5. Start the Server: Launch the PickMart API server with the following command:

```
npm start
```

6. Testing: You can run tests to ensure everything is functioning correctly:

```
npm test
```

7. API Documentation: Explore the API documentation to understand the available endpoints and how to use them effectively

## Usage

Once you've set up the PickMart E-Commerce API following the installation steps, you can start using it to manage users, products, reviews, and orders. Here's a brief guide on how to use the API for common tasks:

User Registration and Authentication

User Registration: To create a new user account, make a POST request to the registration endpoint:

Endpoint: POST
URL: https://pickmart.onrender.com/api/v1/auth/register
Request body: Provide the necessary user registration details.
User Login: Use the user credentials to make a POST request to the login endpoint to receive an authentication token:

Endpoint: POST
URL: https://pickmart.onrender.com/api/v1/auth/login
Request body: Enter the user's login credentials.
User Authentication: Include the received authentication token in the headers of your subsequent requests to access protected endpoints.

Product Management
View All Products: To view a list of all products, make a GET request to the products endpoint:

Endpoint: GET
URL: https://pickmart.onrender.com/api/v1/products
View Single Product: Retrieve detailed information about a specific product by making a GET request to the single product endpoint:

Endpoint: GET
URL: https://pickmart.onrender.com/api/v1/products/:id
Create a Product (Admin Only): If you are an admin, you can create a new product by making a POST request to the products endpoint:

Endpoint: POST
URL: https://pickmart.onrender.com/api/v1/products
Request body: Provide product details.
Update a Product (Admin Only): Admins can update an existing product by making a PATCH request to the product's specific endpoint:

Endpoint: PATCH
URL: https://pickmart.onrender.com/api/v1/products/:id
Request body: Provide updated product information.
Delete a Product (Admin Only): Admins can remove a product by making a DELETE request to the product's specific endpoint:

Endpoint: DELETE
URL: https://pickmart.onrender.com/api/v1/products/:id
Reviews and Ratings
Leave a Review: Customers can leave a review and a rating for a product by making a POST request to the reviews endpoint:

Endpoint: POST
URL: https://pickmart.onrender.com/api/v1/reviews
Request body: Provide review and rating details.
View Reviews for a Product: To see reviews for a specific product, make a GET request to the product's reviews endpoint:

Endpoint: GET
URL: https://pickmart.onrender.com/api/v1/products/:id/reviews
Product Ordering
Add Products to Cart: Customers can add products to their shopping cart by making a POST request to the orders endpoint:

Endpoint: POST
URL: https://pickmart.onrender.com/api/v1/orders
Request body: Add product details to the cart.
View Single Order: Retrieve detailed information about a specific order by making a GET request to the single order endpoint:

Endpoint: GET
URL: https://pickmart.onrender.com/api/v1/orders/:id
View All User Orders: To see all orders for the currently authenticated user, make a GET request to the user's orders endpoint:

Endpoint: GET
URL: https://pickmart.onrender.com/api/v1/orders/showAllMyOrders
Update an Order: Make a PATCH request to the specific order's endpoint to update an existing order:

Endpoint: PATCH
URL: https://pickmart.onrender.com/api/v1/orders/:id
Request body: Provide updated order details.

Testing and Documentation
You can use your preferred API testing tool, such as Postman, Insomnia, or any other, to interact with the PickMart API. For more detailed information on how to use each endpoint and its parameters, refer to the API documentation.

That's it! You're now ready to utilize the PickMart E-Commerce API for managing users, products, reviews, and orders. Enjoy building your E-Commerce platform with PickMart!

## Roadmap

PickMart E-Commerce API Roadmap
The PickMart E-Commerce API is an evolving project with plans for continuous improvement and expansion. Below is a roadmap that outlines upcoming features and enhancements that we aim to implement in the near future.

Phase 1: Core Functionality and Stability
In the initial phase, our focus is on establishing a stable and feature-rich foundation for the API. This includes:

Bug Fixes and Testing: Identify and resolve any existing issues and improve the overall quality of the API through comprehensive testing.

Enhanced User Management: Implement user roles, permissions, and access control to provide more advanced user management capabilities.

Optimized Product Management: Fine-tune product management features, including more advanced product attributes and filtering options.

Performance Improvements: Enhance API performance to ensure faster response times and scalability.

Phase 2: User Experience and Features
In this phase, we aim to enhance the user experience and provide additional features:

User-Friendly Interfaces: Develop user-friendly web and mobile interfaces to interact with the API, making it accessible to a broader audience.

Recommendation System: Implement product recommendation algorithms to improve the shopping experience and increase sales.

Product Search and Sorting: Enhance product search and sorting options, including filters, categories, and price ranges.

Shopping Cart and Checkout: Introduce shopping cart management and a smooth checkout process for a seamless buying experience.

Payment Gateway Integration: Incorporate popular payment gateways to allow for secure online transactions.

Phase 3: Community and Engagement
In this phase, we aim to create a vibrant community around the PickMart E-Commerce API:

Documentation and Tutorials: Expand documentation with detailed guides and tutorials for developers and users.

Developer Community: Foster a developer community around PickMart with forums, discussions, and support channels.

User Reviews and Ratings: Enable users to leave reviews and ratings for products, enhancing trust and community engagement.

Feature Requests: Listen to user feedback and implement requested features to meet specific needs.

Phase 4: Security and Compliance
As security and compliance are paramount in E-Commerce, we plan to:

Security Audits: Conduct regular security audits and vulnerability assessments to ensure data protection.

Data Privacy: Comply with data protection regulations, such as GDPR, to safeguard user data.

PCI DSS Compliance: Achieve Payment Card Industry Data Security Standard (PCI DSS) compliance for secure payment processing.

Phase 5: Mobile Applications
To extend the reach of PickMart, we will develop mobile applications for both Android and iOS platforms.

Phase 6: Internationalization and Localization
To cater to a global audience, we will work on internationalization and localization features, allowing users to interact with the API in their preferred language and currency.

Phase 7: Analytics and Reporting
We will introduce analytics and reporting tools for administrators to gain insights into user behavior, sales data, and performance metrics.

Phase 8: Marketing and Promotion
In this phase, we will focus on marketing and promotional features to help businesses succeed:

Discounts and Promotions: Enable businesses to create and manage discounts, promotions, and coupons.

Affiliate Program: Implement an affiliate program to allow partners to promote products and earn commissions.

This roadmap is subject to change based on user feedback and emerging trends in E-Commerce. We're committed to continuously improving the PickMart E-Commerce API to meet the evolving needs of our users and the market.

Your feedback and feature requests are essential in shaping the future of PickMart, and we invite you to actively participate in the project's growth.

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.
* If you have suggestions for adding or removing projects, feel free to [open an issue](https://github.com/MeerUzairWasHere/Pickmart/issues/new) to discuss it, or directly create a pull request after you edit the *README.md* file with necessary changes.
* Please make sure you check your spelling and grammar.
* Create individual PR for each suggestion.
* Please also read through the [Code Of Conduct](https://github.com/MeerUzairWasHere/Pickmart/blob/main/CODE_OF_CONDUCT.md) before posting your first idea as well.

### Creating A Pull Request

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://github.com/MeerUzairWasHere/Pickmart/blob/main/LICENSE.md) for more information.

## Authors

* **Meer Uzair** - ** - [Mir Uzair](https://github.com/MeerUzairWasHere) - **

