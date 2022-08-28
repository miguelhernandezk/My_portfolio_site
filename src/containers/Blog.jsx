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
    const colorClasses = ['', ' CardV2', ' CardV3', ' CardV4', 'CardV5'];
    let counter = 0;
    const { data, loading, error } = useQuery(LAUNCHES_INFO);
    if(loading) return <p>Loading... </p>
    if(error) return <h2>Error</h2>
    return (
        <div className="Blog">
            <h1>Code Blog</h1>
            <div className="Blog-container">
                {data.user.publication.posts.map((item) => {
                  counter > 5 ? counter = 0 : counter++
                  return (
                    <Card
                        key = {item.title}
                        title={item.title}
                        coverImage={item.coverImage}
                        brief={item.brief}
                        slug={item.slug}
                        color = {colorClasses[counter-1]}
                    />
                  )
                })}
            </div>
        </div>
    );
}

export default Blog;