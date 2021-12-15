import {  Jumbotron, Button } from "react-bootstrap"

let sectionStyle = {
    backgroundImage: `url(${"https://images.unsplash.com/photo-1518373714866-3f1478910cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxOTEwMTR8MHwxfHNlYXJjaHw0fHxib29rJTIwc3RvcmV8ZW58MHx8fHwxNjMzMjU2ODYz&ixlib=rb-1.2.1&q=80&w=1080&utm_source=eduflow&utm_medium=referral"})`,
    objectFit:`center`,
    backgroundRepeat:`none`
}



const MyJumbotron = () => {
   return(
    
<Jumbotron style={sectionStyle} className=" text-white">

<span className="h1  w-100   p-1 m-5" >Hello</span>
  <br/>
  <span className="h3  w-100  p-1 m-5" >
    Welcome to the Strive Book Store
  </span>

  <p>
    <Button variant="primary">Learn more</Button>
  </p>
  <img src="" alt=""/>
</Jumbotron>

   )

}

export default MyJumbotron