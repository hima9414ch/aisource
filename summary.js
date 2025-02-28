/*
API Endpoints Summary:

1. User Authentication:
   POST /api/users/register
   - Request: { username: string, email: string, password: string }
   - Response: { user: UserObject, token: string }

   POST /api/users/login
   - Request: { username: string, password: string }
   - Response: { user: UserObject, token: string }

2. Blog Posts:
   GET /api/posts
   - Query Parameters: { category?: string }
   - Response: Array<PostObject>

   GET /api/posts/:userId
   - Response: Array<PostObject>

   POST /api/posts
   - Headers: { Authorization: 'Bearer <token>' }
   - Request: { title: string, content: string, category: string }
   - Response: PostObject

   PUT /api/posts/:postId
   - Headers: { Authorization: 'Bearer <token>' }
   - Request: { title?: string, content?: string, category?: string }
   - Response: PostObject

   DELETE /api/posts/:postId
   - Headers: { Authorization: 'Bearer <token>' }
   - Response: { message: string }

3. Comments:
   POST /api/comments/:postId
   - Headers: { Authorization: 'Bearer <token>' }
   - Request: { content: string }
   - Response: CommentObject

   PUT /api/comments/:commentId
   - Headers: { Authorization: 'Bearer <token>' }
   - Request: { content: string }
   - Response: CommentObject

   DELETE /api/comments/:commentId
   - Headers: { Authorization: 'Bearer <token>' }
   - Response: { message: string }
*/
