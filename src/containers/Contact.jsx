import React, {useRef} from 'react';
import Map from "../assets/Map.png";
import { ImLocation2 } from "react-icons/im";
import "../styles/containers/Contact.css";
import ButtonHover from '../components/ButtonHover';

const Contact = () => {
    const [sent, setSent] = React.useState(false);
    const form = useRef(null);

    const handleSubmit = async () => {
        const formData = new FormData(form.current);
        const user = {
            'name': formData.get('name'),
            'email': formData.get('email'),
            'subject': formData.get('subject'),
            'message': formData.get('message'),
        }
        try{
            let res = await fetch("https://cryptic-ravine-41160.herokuapp.com/message", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                  },
                body: JSON.stringify(user),
            });
            const giveFeedback = (responseError) => {
                if(!responseError){
                    setSent(true);
                }
            }
            let body = await res.json();
            await console.log(body);
            await giveFeedback(body.error);
        }
        catch(e){
            console.log("No sé qué pedo we, soy desde Contact.jsx"); 
        }
    }

    return (
        <div className="Contact">
            <form className="contact-form" ref={form}>
                <h1>Contact me</h1>
                <p>I'm interested in working in companies working in ambitious projects, however
                    I'm open to freelance opportunities. 
                </p>
                <div className="contact-line">
                    <input type="text" placeholder="Name" name="name" required/>
                    <input type="text" placeholder="Email" name="email" required/>
                </div>
                <input type="text" placeholder="Subject" name="subject" required/>
                <textarea type="text" rows="6" placeholder="Message" name="message" required/>
                <div onClick={handleSubmit}><ButtonHover text="Send message" /></div>
                {!!sent && <h2>Successfully sent!</h2>}
            </form>
            <div className="map-container">
                <div>
                    <span>Miguel Hernández,</span>
                    <br/>
                    <span>Puebla, Mexico</span>
                </div>
                <span><ImLocation2 /></span>
                <img src={Map} />
            </div>
        </div>
    );
}

export default Contact;