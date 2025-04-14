import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from '../../features/posts/postsSlice';

export default function Posts() {

    const { posts, isLoading, isError, error } = useSelector(state => state.posts)
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(fetchPosts())

    }, [dispatch])

    // decide what to render

    let content;

    if (isLoading) {
        content = <h1>Loading Posts...</h1>
    }
    if (!isLoading && isError) {
        content = <h1>{error}</h1>
    }
    if (!isLoading && !isError && posts.length === 0) {
        content = <h1>No Posts Found!</h1>
    }
    if (!isLoading && !isError && posts.length > 0) {
        content = <ul>
            {posts.map((post) => (
                <li key={post.id}>
                    {post.title}
                </li>
            ))}
        </ul>
    }


    return (
        <div className='mt-5'>
            <h1 className='text-xl mb-4'>Posts:</h1>
            {content}
        </div>
    )
}
