/*
API Endpoints Summary:

1. User Authentication:
   - POST /api/users/register
     Request: { username: string, password: string }
     Response: { token: string }
   
   - POST /api/users/login
     Request: { username: string, password: string }
     Response: { token: string }

2. Blog Posts:
   - GET /api/posts
     Query Params: { category?: string }
     Response: Array of posts with author details
   
   - GET /api/posts/:userId
     Response: Array of posts by specific user
   
   - POST /api/posts
     Headers: { Authorization: 'Bearer <token>' }
     Request: { title: string, content: string, category?: string }
     Response: Created post object
   
   - PUT /api/posts/:postId
     Headers: { Authorization: 'Bearer <token>' }
     Request: { title?: string, content?: string, category?: string }
     Response: Updated post object
   
   - DELETE /api/posts/:postId
     Headers: { Authorization: 'Bearer <token>' }
     Response: { message: string }

3. Comments:
   - POST /api/comments/:postId
     Headers: { Authorization: 'Bearer <token>' }
     Request: { content: string }
     Response: Created comment object
   
   - PUT /api/comments/:commentId
     Headers: { Authorization: 'Bearer <token>' }
     Request: { content: string }
     Response: Updated comment object
   
   - DELETE /api/comments/:commentId
     Headers: { Authorization: 'Bearer <token>' }
     Response: { message: string }
*/