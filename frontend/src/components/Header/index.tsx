import logo from '../../assets/img/logo.svg'
import './styles.css'

function Header() {
    return (
        <header>
            <div className="dsmeta-logo-container">
                <img src={logo} alt="Logo Analytics" />
                <h1>Sell Analytics</h1>
                <p>
                    Developed by 
                    <a href="https://www.instagram.com/kristianmello/"> @kristianmello</a>
                </p>
            </div>
        </header>
    )
}
export default Header