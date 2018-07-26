// This fetch is proper when using JEST
import fetch from 'isomorphic-fetch';

var getApiData = async () => {
    return (await fetch('https://jsonplaceholder.typicode.com/albums')
        .then(response => response.json())
        .then(albums => {
            return( fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(posts => {
                    return { posts: posts, albums: albums }
                })
            )
        })
    )
}

export default getApiData