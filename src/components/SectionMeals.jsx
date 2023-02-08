import one from "../images/1.jpg"
import two from "../images/2.jpg"
import three from "../images/3.jpg"
import four from "../images/4.jpg"
import five from "../images/5.jpg"
import six from "../images/6.jpg"
import seven from "../images/7.jpg"
import eight from "../images/8.jpg"
function SectionMeals(){
    return <section className="section-meals">
    <ul className="meals-showcase clearfix">
        <li>
            <figure className="meals-photo">
                <img src={one} alt="	Korean bibimbap with egg and vegetables" />
            </figure>    
        </li>
        <li>
            <figure className="meals-photo">
                <img src={two} alt="	Simple italian pizza with cherry tomatoes" />
            </figure>    
        </li>
        <li>
            <figure className="meals-photo">
                <img src={three} alt="Chicken breast steak with vegetables" />
            </figure>    
        </li>
        <li>
            <figure className="meals-photo">
                <img src={four} alt="Autumn pumpkin soup" />
            </figure>    
        </li>
    </ul>
    <ul className="meals-showcase clearfix">
        <li>
            <figure className="meals-photo">
                <img src={five} alt="	Paleo beef steak with vegetables" />
            </figure>    
        </li>
        <li>
            <figure className="meals-photo">
                <img src={six} alt="	Healthy baguette with egg and vegetables" />
            </figure>    
        </li>
        <li>
            <figure className="meals-photo">
                <img src={seven} alt="Burger with cheddar and bacon" />
            </figure>    
        </li>
        <li>
            <figure className="meals-photo">
                <img src={eight} alt="Granola with cherries and strawberries" />
            </figure>    
        </li>
    </ul>
</section> 
}
export default SectionMeals;