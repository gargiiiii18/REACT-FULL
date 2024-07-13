import Header from "./Header.jsx"
import Food from "./Food.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Button1 from "./Button/Button1.jsx"
import Students from "./Students.jsx"
import UserGreetings from "./UserGreetings.jsx"

function App() {
  return (
    <>
    <Header/>
    <Food/>
    <Footer/>
    <Card/>
    <br></br>
    <Button/>
    <br></br>
    <Button1/>
    <br></br>
    <Students name="Kobbie Mainoo" age={19} position="CDM" isBestYoungPlayer={true}/>
    <Students name="Alejandro Garnacho" age={20} position="RW" isBestYoungPlayer={true}/>
    <Students name="Rasmus Højlund" age={21} position="ST" isBestYoungPlayer={true}/>
    <br></br>
    <UserGreetings isLoggedIn={true} username="Rashy"/>
    

    </>
  );

}

export default App
