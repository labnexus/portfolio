


function Footer() {
    
    return(
        <footer>
            <hr/> 
            <p id="Clock">{setInterval(() => {document.getElementById("Clock").innerHTML = new Date().toLocaleTimeString()}, 1000)}</p>
        </footer>
        
    );

}

export default Footer