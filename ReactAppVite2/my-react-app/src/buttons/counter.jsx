function Counter(){
    const styles ={
    border: "2px black",
    padding: "10px 20px",
    bordeRadius: "5px",
    cursor: "pointer",
    }
    return(
        <><h2>Click to add or Subatract</h2>
        <button style = {styles} >+</button>
        <button style ={styles}>-</button>
        </>

    )
} export default Counter