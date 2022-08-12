import React, {useRef} from "react";
import { Link } from "react-router-dom";
import "../styles/containers/About.css";
import TagCloud from "TagCloud";

const About = () => {
    const sphereMounted = useRef(false);

    React.useEffect(() => {
        if(sphereMounted.current === false){
            const myTags = [
                'JavaScript', 'CSS', 'HTML',
                'Node.js', 'C++', 'React',
                'Python', 'Jest', 'git',
                'JSON', 'Webpack', 'ES5/ES6',
                'Express', 'MongoDB', 'github',
            ];
            var tagCloud = TagCloud('.content', myTags,{
                
                // radius in px
                radius: 200,
                
                // animation speed
                // slow, normal, fast
                maxSpeed: 'fast',
                initSpeed: 'fast',
                
                // 0 = top
                // 90 = left
                // 135 = right-bottom
                direction: 135,
                
                // interact with cursor move on mouse out
                keep: true,
            });
        }
        return () => sphereMounted.current = true;
    }, []);
  return (
    <div className="About">
      <div className="About-description">
        <h1>My, Myself & I</h1>
        <p>
            I’m a Front-End Developer located in Mexico. I enjoy creating
            different kinds of websites and making it possible for ideas 
            to come true through code. No kidding. 
        </p>
        <p>
            Problem solver and a well-organised person. Passionate about fitness,
            self-improvement, networking activities and astrophysics. Long-live learner
            always exploring new technologies to complement knowledge and achieve amazing results.
        </p>
        <p>
            Interested in front-end applicattions and working on ambitious projects
            with postive people.
        </p>
        <p>  <Link to="/contact">Let’s make something special.</Link></p>
      </div>
        <div className="About-animation">
            <span className="content"></span>
        </div>
    </div>
  );
};

export default About;
