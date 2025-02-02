const openApiSpec = {
  openapi: "3.0.0",
  info: {
    title: "Pickmart API",
    description: "E-Commerce store API",
    version: "1.1.0",
    contact: {
      name: "Mir Uzair Bashir",
      email: "meer.uxair007@gmail.com",
    },
  },
  servers: [
    {
      url: "https://pickmart-g9tr.onrender.com/api/v1",
      description: "Live server",
    },
    // {
    //   "url": "http://localhost:3000/api/v1",
    //   "description": "Local development server"
    // }
  ],
  paths: {
    "/auth/register": {
      post: {
        summary: "Register a new user",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string", example: "John Doe" },
                  email: {
                    type: "string",
                    format: "email",
                    example: "john.doe@example.com",
                  },
                  password: { type: "string", example: "strongPassword123" },
                },
                required: ["name", "email", "password"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "User registered successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    msg: { type: "string", example: "User registered!" },
                  },
                },
              },
            },
          },
          400: { description: "Invalid input" },
          500: { description: "Server Error" },
        },
      },
    },
    "/auth/login": {
      post: {
        summary: "Log in an existing user",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    format: "email",
                    example: "john.doe@example.com",
                  },
                  password: { type: "string", example: "strongPassword123" },
                },
                required: ["email", "password"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successfully logged in",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        name: { type: "string", example: "John Doe" },
                        email: {
                          type: "string",
                          example: "john.doe@example.com",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { description: "Invalid credentials" },
          500: { description: "Server Error" },
        },
      },
    },
    "/auth/logout": {
      get: {
        summary: "Log out a user",
        tags: ["Auth"],
        security: [{ bearerAuth: [] }],
        responses: {
          200: {
            description: "Successfully logged out",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    msg: { type: "string", example: "User logged out!" },
                  },
                },
              },
            },
          },
          500: { description: "Server Error" },
        },
      },
    },

    "/products": {
      get: {
        summary: "Get all products",
        tags: ["Product"],
        responses: {
          200: {
            description: "Successfully fetched products",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "60a6f9b5b6e4a928dcb34b5a",
                      },
                      name: { type: "string", example: "Sample Product" },
                      price: { type: "number", example: 29.99 },
                      description: {
                        type: "string",
                        example: "Description of the product.",
                      },
                      stock: { type: "integer", example: 100 },
                      createdAt: { type: "string", format: "date-time" },
                    },
                  },
                },
              },
            },
          },
          500: { description: "Server Error" },
        },
      },
    },
    "/products/{id}": {
      get: {
        summary: "Get a product by ID",
        tags: ["Product"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string" },
            description: "The ID of the product",
          },
        ],
        responses: {
          200: {
            description: "Successfully fetched product",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    product: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "60a6f9b5b6e4a928dcb34b5a",
                        },
                        name: { type: "string", example: "Sample Product" },
                        price: { type: "number", example: 29.99 },
                        description: {
                          type: "string",
                          example: "Description of the product.",
                        },
                        stock: { type: "integer", example: 100 },
                        createdAt: { type: "string", format: "date-time" },
                      },
                    },
                  },
                },
              },
            },
          },
          404: { description: "Product not found" },
          500: { description: "Server Error" },
        },
      },
    },
    "/reviews": {
      post: {
        summary: "Create a review",
        tags: ["Review"],
        security: [{ bearerAuth: [] }],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  product: {
                    type: "string",
                    example: "654a45066d20553f12d8146b",
                  },
                  rating: { type: "integer", example: 5 },
                  title: { type: "string", example: "Happy!" },
                  comment: { type: "string", example: "Excellent product!" },
                },
                required: ["product", "rating", "comment"],
              },
            },
          },
        },
        responses: {
          201: {
            description: "Review created successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    review: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "60a6f9b5b6e4a928dcb34b5a",
                        },
                        productId: {
                          type: "string",
                          example: "60a6f9b5b6e4a928dcb34b5a",
                        },
                        rating: { type: "integer", example: 5 },
                        comment: {
                          type: "string",
                          example: "Excellent product!",
                        },
                        createdAt: { type: "string", format: "date-time" },
                      },
                    },
                  },
                },
              },
            },
          },
          500: { description: "Server Error" },
        },
      },
      get: {
        summary: "Get all reviews",
        tags: ["Review"],
        responses: {
          200: {
            description: "Successfully fetched reviews",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "60a6f9b5b6e4a928dcb34b5a",
                      },
                      productId: {
                        type: "string",
                        example: "60a6f9b5b6e4a928dcb34b5a",
                      },
                      rating: { type: "integer", example: 5 },
                      comment: {
                        type: "string",
                        example: "Excellent product!",
                      },
                      createdAt: { type: "string", format: "date-time" },
                    },
                  },
                },
              },
            },
          },
          500: { description: "Server Error" },
        },
      },
    },
    "/reviews/{id}": {
      get: {
        summary: "Get a review by ID",
        tags: ["Review"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string" },
            description: "The ID of the review",
          },
        ],
        responses: {
          200: {
            description: "Successfully fetched review",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    review: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "60a6f9b5b6e4a928dcb34b5a",
                        },
                        productId: {
                          type: "string",
                          example: "60a6f9b5b6e4a928dcb34b5a",
                        },
                        rating: { type: "integer", example: 5 },
                        comment: {
                          type: "string",
                          example: "Excellent product!",
                        },
                        createdAt: { type: "string", format: "date-time" },
                      },
                    },
                  },
                },
              },
            },
          },
          404: { description: "Review not found" },
          500: { description: "Server Error" },
        },
      },
      delete: {
        summary: "Delete a review by ID",
        tags: ["Review"],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string" },
            description: "The ID of the review",
          },
        ],
        responses: {
          200: {
            description: "Review deleted successfully",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    msg: {
                      type: "string",
                      example: "Review deleted successfully",
                    },
                  },
                },
              },
            },
          },
          404: { description: "Review not found" },
          500: { description: "Server Error" },
        },
      },
    },
    "/users/showMe": {
      get: {
        summary: "Shows current logged in user",
        tags: ["User"],
        security: [{ bearerAuth: [] }],
        responses: {
          200: {
            description: "Success!",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        name: { type: "string", example: "John Doe" },
                        email: {
                          type: "string",
                          example: "john.doe@example.com",
                        },
                        role: { type: "string", example: "user" },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { description: "Invalid credentials" },
          500: { description: "Server Error" },
        },
      },
    },
    "/users/{id}": {
      get: {
        summary: "Get a user by ID",
        tags: ["User"],
        security: [{ bearerAuth: [] }],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: { type: "string" },
            description: "The ID of the user",
          },
        ],
        responses: {
          200: {
            description: "Successfully fetched user",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        _id: {
                          type: "string",
                          example: "60a6f9b5b6e4a928dcb34b5a",
                        },
                        name: { type: "string", example: "John Doe" },
                        email: {
                          type: "string",
                          example: "john.doe@example.com",
                        },
                        createdAt: { type: "string", format: "date-time" },
                      },
                    },
                  },
                },
              },
            },
          },
          404: { description: "User not found" },
          500: { description: "Server Error" },
        },
      },
    },
    "/users/updateUser": {
      patch: {
        summary: "Update User Info",
        tags: ["User"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: { type: "string", example: "john.doe.new" },
                  email: {
                    type: "string",
                    format: "email",
                    example: "john.doe.new@example.com",
                  },
                },
                required: ["email", "password"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successfully updated user info",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        name: { type: "string", example: "john.doe.new" },
                        email: {
                          type: "string",
                          format: "email",
                          example: "john.doe.new@example.com",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { description: "Invalid credentials" },
          500: { description: "Server Error" },
        },
      },
    },
    "/users/updateUserPassword": {
      patch: {
        summary: "Update user password",
        tags: ["User"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  oldPassword: { type: "string", example: "strongPassword123" },
                  newPassword: {
                    type: "string",
                    example: "123123123123123123",
                  },
                },
                required: ["oldPassword", "newPassword"],
              },
            },
          },
        },
        responses: {
          200: {
            description: "Successfully updated the password",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        oldPassword: {
                          type: "string",
                          example: "strongPassword123",
                        },
                        newPassword: {
                          type: "string",
                          example: "123123123123123123",
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          401: { description: "Invalid credentials" },
          500: { description: "Server Error" },
        },
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
};

module.exports = { openApiSpec };
