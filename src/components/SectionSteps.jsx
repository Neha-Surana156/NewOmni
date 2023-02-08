import appiphone from "../images/app-iPhone.png"
import appstoreimg from "../images/app-store-img.jpg"
import downloadappandroid from "../images/download-app-android.png"
function SectionSteps(){
    return <section className="section-steps" id="works">
    <div className="row">
        <h2>How it works - Simple as 1, 2, 3</h2>
    </div>
    <div className="row">
        <div className="col span-1-of-2 step-box">
            <img src={appiphone} alt="phoneimage" className="phone-image js--wp-2" />
        </div>
        <div className="col span-1-of-2 step-box">
            <div className="work-steps">
                <div>1</div>    
                <p>Choose the subscription plan that best fits your needs and sign up today.</p>
            </div>
            <div className="work-steps">
                <div>2</div>    
                <p>Order your delicious meal using our mobile app or website. Or you can even call us! </p>
            </div>
            <div className="work-steps">
                <div>3</div>    
                <p>Enjoy your meal after less than 20 minutes. See you the next time!</p>
            </div>
              <a rel="noopener noreferrer" href="/" className="app-btn"><img src={appstoreimg} alt="appstoreimg" /></a>  
              <a rel="noopener noreferrer" href="/" className="app-btn"><img src={downloadappandroid} alt="downloadappandroid" /></a>  
        </div>
    </div>
</section>
}
export default SectionSteps;