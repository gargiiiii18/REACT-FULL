function Button() {
    // const handleClick = () => alert("OUCH🤣");
    const handleClick2 = () => alert(`${name} stop clicking me`)
return(
    <>
    {/* <button onClick={handleClick} className="button">Dabao👩‍💻!!!</button> */}
    <button onClick={() => handleClick2(prompt("Enter your name", name))}className="button" >Dabao👩‍💻!!!</button>
    </>

);
}

export default Button;