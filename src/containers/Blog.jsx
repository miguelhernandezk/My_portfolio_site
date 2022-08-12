import React from 'react';
import Card from "../components/Card";
import { gql, useQuery } from '@apollo/client'
import "../styles/containers/Blog.css";

const LAUNCHES_INFO = gql`
    query getArticles {
        user(username: "miguelhmx"){
          publication{
            posts(page: 0){
              title
              coverImage
              brief
              slug
            }
          }
        }
      }
`
const Blog = () => {
    const { data, loading, error } = useQuery(LAUNCHES_INFO);
    console.log(data);
    if(loading) return <p>Loading... </p>
    if(error) return <h2>Error</h2>
    return (
        <div className="Blog">
            <h1>Code Blog</h1>
            <div className="Blog-container">
                {data.user.publication.posts.map((item) => (
                    <Card 
                        title={item.title}
                        coverImage={item.coverImage}
                        brief={item.brief}
                        slug={item.slug}
                    />
                ))}
            </div>
        </div>
    );
}

export default Blog;