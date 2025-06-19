function ProfileCard({title,handle,image}){
    return <div>
        <h2>Profile Card</h2>
        <img src={image}/>
        <h5>Title is {title}</h5>
        <h5>Social handle is {handle}</h5>
        </div>
}

export default ProfileCard;