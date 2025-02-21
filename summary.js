// API Endpoints Summary

/*
1. POST /register
   Request body: { username: string, password: string, email: string }
   Response: { message: string } or { error: string }

2. POST /login
   Request body: { username: string, password: string }
   Response: { token: string } or { error: string }

3. POST /posts
   Headers: Authorization: Bearer <token>
   Request body: { title: string, content: string }
   Response: Created post object or { error: string }

4. GET /posts
   Response: Array of post objects or { error: string }

5. GET /posts/:id
   Response: Single post object or { error: string }

6. PUT /posts/:id
   Headers: Authorization: Bearer <token>
   Request body: { title?: string, content?: string }
   Response: Updated post object or { error: string }

7. DELETE /posts/:id
   Headers: Authorization: Bearer <token>
   Response: { message: string } or { error: string }
*/
