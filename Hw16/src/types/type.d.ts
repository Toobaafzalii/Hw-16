interface Ipost {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: {
      likes: number,
      dislikes: number
    },
    views: number,
    userId: number
  }

  
  interface Iresponse {
    skip: number
    limit: number
    total: number
  }


  interface fetchPostResponse extends Iresponse {
    posts: Ipost[]
  }

  type fetchPostListType = () => Promise<fetchPostResponse>
