import { generateClient } from "./client"
import { urls } from "./urls"



export const fetchPostList: fetchPostListType = async () => {

    const client = generateClient()
    const response = await client.get<fetchPostResponse>(urls.posts.list)
    return response.data
}



type fetchPostByIdType = (id:number) => Promise<Ipost>
export const fetchPostById:fetchPostByIdType = async (id:number) => {
    const client = generateClient()
    const response = await client.get<Ipost>(urls.posts.byId(id))
    return response.data
}