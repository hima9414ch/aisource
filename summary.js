/*
API Endpoints Summary:

1. POST /api/login
   Request body: { username: string, password: string }
   Response: { token: string }

2. GET /api/posts
   Response: Array of posts
   [{ _id: string, title: string, content: string, author: string, createdAt: date }]

3. GET /api/posts/:id
   Parameters: id (post ID)
   Response: { _id: string, title: string, content: string, author: string, createdAt: date }

4. POST /api/posts
   Headers: Authorization: Bearer <token>
   Request body: { title: string, content: string, author: string }
   Response: Created post object

5. PUT /api/posts/:id
   Headers: Authorization: Bearer <token>
   Parameters: id (post ID)
   Request body: { title: string, content: string, author: string }
   Response: Updated post object

6. DELETE /api/posts/:id
   Headers: Authorization: Bearer <token>
   Parameters: id (post ID)
   Response: { message: 'Post deleted successfully' }
*/
