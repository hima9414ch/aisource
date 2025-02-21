/**
 * API Endpoints Summary: 
 *
 * 1. GET /api/listings
 *    - Description: Retrieve all real estate listings
 *    - Parameters: None
 *    - Response: Array of listing objects
 *
 * 2. GET /api/listings/:id
 *    - Description: Retrieve a specific listing by ID
 *    - Parameters: id (in URL)
 *    - Response: Single listing object or 404 error
 *
 * 3. POST /api/listings
 *    - Description: Create a new listing
 *    - Request Body: {
 *        title: String (required),
 *        address: String (required),
 *        price: Number (required),
 *        bedrooms: Number (required),
 *        bathrooms: Number (required),
 *        squareFootage: Number (required),
 *        description: String (optional),
 *        images: Array of Strings (optional)
 *      }
 *    - Response: Created listing object
 *
 * 4. PUT /api/listings/:id
 *    - Description: Update an existing listing
 *    - Parameters: id (in URL)
 *    - Request Body: Same as POST (all fields optional)
 *    - Response: Updated listing object
 *
 * 5. DELETE /api/listings/:id
 *    - Description: Delete a listing
 *    - Parameters: id (in URL)
 *    - Response: Success message
 */
