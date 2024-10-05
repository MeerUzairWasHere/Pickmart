const openApiSpec = {
    "openapi": "3.0.0",
    "info": {
      "title": "E-Commerce API",
      "version": "1.0.0",
      "description": "API for managing users, products, reviews, and orders in an e-commerce application."
    },
    "servers": [
      {
        "url": "https://pickmart.onrender.com/api/v1",
        "description": "Live server"
      },
      {
        "url": "http://localhost:3000",
        "description": "Development server"
      },
    ],
    "paths": {
      "/users": {
        "get": {
          "summary": "Get all users",
          "security": [
            {
              "BearerAuth": []
            }
          ],
          "responses": {
            "200": {
              "description": "List of users",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "users": {
                        "type": "array",
                        "items": {
                          "$ref": "#/components/schemas/User"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Create a new user",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/User"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "User created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      "/users/showMe": {
        "get": {
          "summary": "Show current user",
          "security": [
            {
              "BearerAuth": []
            }
          ],
          "responses": {
            "200": {
              "description": "Current user data",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            }
          }
        }
      },
      "/users/{id}": {
        "get": {
          "summary": "Get a single user by ID",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "ID of the user to retrieve",
              "schema": {
                "type": "string"
              }
            }
          ],
          "security": [
            {
              "BearerAuth": []
            }
          ],
          "responses": {
            "200": {
              "description": "User details",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/User"
                  }
                }
              }
            },
            "404": {
              "description": "User not found"
            }
          }
        },
        "patch": {
          "summary": "Update a user",
          "security": [
            {
              "BearerAuth": []
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string"
                    },
                    "email": {
                      "type": "string",
                      "format": "email"
                    }
                  },
                  "required": ["name", "email"]
                }
              }
            },
            "responses": {
              "200": {
                "description": "User updated successfully"
              }
            }
          }
        }
      },
      "/products": {
        "get": {
          "summary": "Get all products",
          "responses": {
            "200": {
              "description": "List of products",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Product"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Create a new product",
          "security": [
            {
              "BearerAuth": []
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Product"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Product created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Product"
                  }
                }
              }
            }
          }
        }
      },
      "/products/{id}": {
        "get": {
          "summary": "Get a single product by ID",
          "parameters": [
            {
              "name": "id",
              "in": "path",
              "required": true,
              "description": "ID of the product to retrieve",
              "schema": {
                "type": "string"
              }
            }
          ],
          "responses": {
            "200": {
              "description": "Product details",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Product"
                  }
                }
              }
            },
            "404": {
              "description": "Product not found"
            }
          }
        }
      },
      "/orders": {
        "get": {
          "summary": "Get all orders",
          "security": [
            {
              "BearerAuth": []
            }
          ],
          "responses": {
            "200": {
              "description": "List of orders",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "array",
                    "items": {
                      "$ref": "#/components/schemas/Order"
                    }
                  }
                }
              }
            }
          }
        },
        "post": {
          "summary": "Create a new order",
          "security": [
            {
              "BearerAuth": []
            }
          ],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Order"
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Order created successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/Order"
                  }
                }
              }
            }
          }
        }
      }
    },
    "components": {
      "schemas": {
        "User": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "role": {
              "type": "string",
              "enum": ["admin", "user"]
            }
          },
          "required": ["name", "email", "password"]
        },
        "Product": {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "description": {
              "type": "string"
            },
            "image": {
              "type": "string"
            },
            "category": {
              "type": "string"
            },
            "company": {
              "type": "string"
            },
            "colors": {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            "featured": {
              "type": "boolean"
            },
            "freeShipping": {
              "type": "boolean"
            },
            "inventory": {
              "type": "number"
            },
            "averageRating": {
              "type": "number"
            },
            "numOfReviews": {
              "type": "number"
            },
            "user": {
              "type": "string"
            }
          },
          "required": ["name", "price", "description", "category", "company"]
        },
        "Order": {
          "type": "object",
          "properties": {
            "tax": {
              "type": "number"
            },
            "shippingFee": {
              "type": "number"
            },
            "subtotal": {
              "type": "number"
            },
            "total": {
              "type": "number"
            },
            "orderItems": {
              "type": "array",
              "items": {
                "$ref": "#/components/schemas/SingleOrderItem"
              }
            },
            "status": {
              "type": "string",
              "enum": ["pending", "failed", "paid", "delivered", "canceled"]
            },
            "user": {
              "type": "string"
            },
            "clientSecret": {
              "type": "string"
            },
            "paymentIntentId": {
              "type": "string"
            }
          },
          "required": ["tax", "shippingFee", "subtotal", "total", "orderItems", "user", "clientSecret"]
        },
        "SingleOrderItem": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "name": {
              "type": "string"
            },
            "image": {
              "type": "string"
            },
            "price": {
              "type": "number"
            },
            "quantity": {
              "type": "number"
            }
          },
          "required": ["id", "name", "image", "price", "quantity"]
        }
      },
      "securitySchemes": {
        "BearerAuth": {
          "type": "http",
          "scheme": "bearer",
          "bearerFormat": "JWT"
        }
      }
    }
  }
  

  module.exports = { openApiSpec };