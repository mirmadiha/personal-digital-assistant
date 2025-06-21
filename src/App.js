import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App(){
    return(
        <div>
        <section class="hero is-primary">
        <div class="hero-body">
            <p class="title">Personal Digital Assistance</p>
        </div>
        </section>
            
            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa2025" 
                            image={AlexaImage}
                            description="Amazon’s virtual assistant, great for smart home control and voice shopping."
                            />
                        </div>

                        <div className="column is-4">
                            <ProfileCard 
                            title="Cortana" 
                            handle="@cortana2025" 
                            image={CortanaImage}
                            description="Microsoft’s assistant, focused on productivity and Windows integration."
                            />

                        </div>

                        <div className="column is-4">
                            <ProfileCard 
                            title="Siri" 
                            handle="@siri2025" 
                            image={SiriImage}
                            description="Apple’s voice assistant, built for iPhone and Apple device users."
                            />
                        </div>
                    </div>
                </section>
            </div>

        
        </div>
    );
}

export default App;