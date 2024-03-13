## Queries

```javascript
query getAllUsers {
    users {
        id
        name
        username
    }
}

mutation createUser($user: createUserInput!) {
    createUser(user: $user) {
        id
        name
        username
    }
}

mutation UpdateUser($user: updateUserInput!) {
    updateUser(user: $user) {
        id
        name
        username
    }
}

mutation DeleteUser($deleteUserId: ID!) {
    deleteUser(id: $deleteUserId) {
        id
        name
        username
    }
}

query allPosts {
    posts {
        id
        title
        userId
    }
}

query getSinglePost($postId: ID!) {
    post(id: $postId) {
        id
        title
        userId
    }
}

mutation CreatePost($post: createPostInput!) {
    createPost(post: $post) {
        id
        title
        userId
        body
    }
}

mutation DeletePost($deletePostId: ID!) {
    deletePost(id: $deletePostId) {
        id
        userId
    }
}

query AllCommnets {
  comments {
    id
    name
    email
    postId
  }
}


query getSingleComment($commentId: ID!) {
  comment(id: $commentId) {
    body
    email
    id
    name
    postId
  }
}

mutation createNewComment($comment: createCommentInput!) {
  createComment(comment: $comment) {
    body
    email
    id
    name
    postId
  }
}

mutation updateComment($comment: updateCommentInput!) {
  updateComment(comment: $comment) {
    email
    id
    name
    postId
    body
  }
}

mutation deleteComment($deleteCommentId: ID!){
  deleteComment(id: $deleteCommentId) {
    id
    name
    postId
  }
}
```
