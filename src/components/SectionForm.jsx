function SectionForm(){
    return <section className="section-form">
    <div className="row">
    <h2>We're happy to hear from you</h2>    
    </div>
    <div className="row">
        <form method="post" action="#" className="contact-form">
            <div className="row">
            <div className="col span-1-of-3">
            <label htmlFor="name">Name</label>
            </div>
            <div className="col span-2-of-3">
            <input type="text" name="name" id="name" placeholder="your name" />
            </div>
            </div>
            <div className="row">
            <div className="col span-1-of-3">
            <label htmlFor="email">Email</label>
            </div>
            <div className="col span-2-of-3">
            <input type="email" name="email" id="email" placeholder="your email" />
            </div>
            </div>
            <div className="row">
            <div className="col span-1-of-3">
            <label>How did you find us?</label>
            </div>
            <div className="col span-2-of-3">
            <select name="findus" id="findus">
               <option value="friends" defaultValue>Friends</option> 
               <option value="se">Search engine</option> 
               <option value="news">News paper</option> 
               <option value="sm">Social media</option> 
            </select>
            </div>
            </div>
             <div className="row">
            <div className="col span-1-of-3">
            <label>Newsletter</label>
            </div>
            <div className="col span-2-of-3">
            <input type="checkbox" checked readOnly /> Yes,please
            </div>
            </div>
            <div className="row">
            <div className="col span-1-of-3">
            <label>Drop us a line</label>
            </div>
            <div className="col span-2-of-3">
            <textarea name="message"></textarea>
            </div>
            </div>
            <div className="row">
            <div className="col span-1-of-3">
            <label></label>
            </div>
            <div className="col span-2-of-3">
            <input type="submit" name="submit" value="Send it" />
            </div>
            </div>
        </form>
    </div>
    </section>
}
export default SectionForm;