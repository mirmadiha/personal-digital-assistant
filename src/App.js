import 'bulma/css/bulma.css';
import ProfileCard from './ProfileCard'
import AlexaImage from './images/alexa.png'
import CortanaImage from './images/cortana.png'
import SiriImage from './images/siri.png'

function App(){
    return(
        <div>
            <div><h1>Personal Digital Assistance</h1></div>

            <ProfileCard tatle="Alexa" handle="@alexa2025" image={AlexaImage}/>
            <ProfileCard title="Cortana" handle="@cortana2025" image={CortanaImage}/>
            <ProfileCard title="Siri" handle="@siri2025" image={SiriImage}/>
        </div>
    );
}

export default App;