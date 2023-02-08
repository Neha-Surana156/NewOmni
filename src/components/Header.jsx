import logo from "../images/logo.png";
import logowhite from "../images/logo-white.png";
function Header(){
    return <header>
            <nav>
                <div className="row">
                    <img src={logowhite} alt="logo" className="logo" />
                    <img src={logo} alt="logo" className="logo-black" />
                    <ul className="main-nav">
                        <li><a rel="noopener noreferrer" href="#features">Food delivery</a></li>      
                        <li><a rel="noopener noreferrer" href="#works">How it works</a></li>      
                        <li><a rel="noopener noreferrer" href="#cities">Our cities</a></li>      
                        <li><a rel="noopener noreferrer" href="#plans">Sign up</a></li>      
                  </ul>
                </div>    
            </nav>            
            <div className="header-text">
                <h1>Goodbye junk food.<br /> Hello super healthy meals.</h1>
                <a rel="noopener noreferrer" href="/" className="btn btn-full js--plans">I’m hungry</a>
                <a rel="noopener noreferrer" href="/" className="btn btn-border js--features">Show me more</a>
            </div>
        </header>
}
export default Header;