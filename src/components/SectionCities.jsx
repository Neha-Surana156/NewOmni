import lisbon3 from "../images/lisbon-3.jpg"
import sanfrancisco from "../images/san-francisco.jpg"
import berlin from "../images/berlin.jpg"
import london from "../images/london.jpg"
function SectionCities(){
    return <section className="section-cities" id="cities">
    <div className="row">
        <h2>We're currently in these cities</h2>
    </div>
   <div className="row js--wp-3">
        <div className="col span-1-of-4 box">
            <img src={lisbon3} alt="lisbon" /> 
            <h3>Lisbon</h3>
            <div className="city-features">
                <i className="ion-star icon-small"></i>
                1600+ happy eaters
            </div>
            <div className="city-features ">
                <i className="ion-person icon-small"></i>
                60+ top chefs
            </div>
            <div className="city-features">
                <i className="ion-social-twitter icon-small"></i>
                <a rel="noopener noreferrer" href="/">@omnifood_lx</a>
            </div>
        </div>
        <div className="col span-1-of-4 box">
            <img src={sanfrancisco} alt="San Francisco" /> 
            <h3>San Francisco</h3>
            <div className="city-features">
                <i className="ion-star icon-small"></i>
                3700+ happy eaters
            </div>
            <div className="city-features ">
                <i className="ion-person icon-small"></i>
                160+ top chefs
            </div>
            <div className="city-features">
                <i className="ion-social-twitter icon-small"></i>
                <a rel="noopener noreferrer" href="/">@omnifood_sf</a>
            </div>
       </div>
        <div className="col span-1-of-4 box">
            <img src={berlin} alt="Berlin" /> 
            <h3>Berlin</h3>
            <div className="city-features">
                <i className="ion-star icon-small"></i>
                2300+ happy eaters
            </div>
            <div className="city-features ">
                <i className="ion-person icon-small"></i>
                110+ top chefs
            </div>
            <div className="city-features">
                <i className="ion-social-twitter icon-small"></i>
                <a rel="noopener noreferrer" href="/">@omnifood_berlin</a>
            </div>
        </div>
       <div className="col span-1-of-4 box">
            <img src={london} alt="London" /> 
            <h3>London</h3>
            <div className="city-features">
                <i className="ion-star icon-small"></i>
                1200+ happy eaters
            </div>
            <div className="city-features ">
                <i className="ion-person icon-small"></i>
                50+ top chefs
            </div>
            <div className="city-features">
                <i className="ion-social-twitter icon-small"></i>
                <a rel="noopener noreferrer" href="/">@omnifood_london</a>
            </div>
               </div>
        </div>
</section>
}
export default SectionCities;