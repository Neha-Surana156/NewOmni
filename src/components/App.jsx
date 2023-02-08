import Footer from "./Footer";
import Header from "./Header";
import SectionCities from "./SectionCities";
import SectionFeatures from "./SectionFeatures";
import SectionForm from "./SectionForm";
import SectionMeals from "./SectionMeals";
import SectionPlans from "./SectionPlans";
import SectionSteps from "./SectionSteps";
import SectionTestimonials from "./SectionTestimonials";
function App(){
    return <div>
        <Header />
        <SectionFeatures />        
        <SectionMeals />
        <SectionSteps />
        <SectionCities />
        <SectionTestimonials />
        <SectionPlans />        
        <SectionForm />
        <Footer />
    </div>
}
export default App;