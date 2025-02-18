/**
 * Real Estate API Documentation
 *
 * Base URL: http://localhost:3000
 *
 * Endpoints:
 *
 * 1. Create Property
 *    POST /properties
 *    Headers: Authorization: Bearer <token>
 *    Request Body: {
 *      title: string,
 *      description: string,
 *      price: number,
 *      imageUrl: string,
 *      location: string
 *    }
 *    Response: 201 Created
 *      Returns created property object with ID
 *
 * 2. Get All Properties
 *    GET /properties
 *    Query Parameters:
 *      - minPrice: number (optional)
 *      - maxPrice: number (optional)
 *      - location: string (optional)
 *    Response: 200 OK
 *      Returns array of property objects
 *
 * 3. Get Single Property
 *    GET /properties/:id
 *    Response: 200 OK
 *      Returns single property object
 *
 * 4. Update Property
 *    PUT /properties/:id
 *    Headers: Authorization: Bearer <token>
 *    Request Body: {
 *      title: string,
 *      description: string,
 *      price: number,
 *      imageUrl: string,
 *      location: string
 *    }
 *    Response: 200 OK
 *      Returns updated property object
 *
 * 5. Delete Property
 *    DELETE /properties/:id
 *    Headers: Authorization: Bearer <token>
 *    Response: 204 No Content
 *
 * Error Responses:
 * - 400 Bad Request: Missing required fields
 * - 401 Unauthorized: Missing authentication token
 * - 403 Forbidden: Invalid token
 * - 404 Not Found: Property not found
 */
