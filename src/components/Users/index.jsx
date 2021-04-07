import "./Users.css"

export const User = ({data}) => {
    return ( 
    <div className ="user-card">
         <div className="title">{data.name}</div>
         <img src={data.img} alt="" />
         <div className="age">{data.age}</div>
         <div className="country">{data.country}</div>
    </div>
    )
}