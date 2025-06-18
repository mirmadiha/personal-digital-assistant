import ProfileCard from './ProfileCard'

function App(){
    return(
        <div>
            <div><h1>Personal Digital Assistance</h1></div>

            <ProfileCard title="Alexa" handle="@alexa2025" />
            <ProfileCard title="Cortana" handle="@cortana2025"/>
            <ProfileCard title="Siri" handle="@siri2025"/>
        </div>
    );
}

export default App;