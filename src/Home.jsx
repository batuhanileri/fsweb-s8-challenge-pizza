
import './App.css'
import logo from '../images/iteration-1-images/logo.svg'
import homeBanner from '../images/iteration-1-images/home-banner.png'

function Home() {
    return (
        <div className="app-container">
            <h3 className="logo-container">
                <img src={logo} alt="Site Logosu" className="main-logo" />
            </h3>
            <div>
                <p className='common-text-style text-style-one'>KOD ACIKTIRIR</p>
                <p className='common-text-style text-style-two'>PİZZA, DOYURUR</p>
            </div>
            <button className='button-style'>ACIKTIM</button>
            <img src={homeBanner} alt="Ana Sayfa Banner" className="full-width-banner" />
        </div>
    )
}

export default Home