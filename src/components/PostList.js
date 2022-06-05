import { useState, useEffect } from "react"


export const PostList = () => {
    const [posts,setPosts] = useState([])

    useEffect(() => {
        //The side effect here is the API
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(err => {
                console.log(err)
            })
    },[]) //Dependency array: used to determine when to rerun the effect, since we have an empty array, the effect is only used once

    return (
        <div>
            <ul>
                {
                    posts.map(post => {
                        return <li key={post.id}>Title: {post.title}</li>
                    })
                }
            </ul>
        </div>
    )
}