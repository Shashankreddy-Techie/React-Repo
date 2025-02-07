const HeroSection = ()=>{
    return(
        <main className="hero">
            <div className="hero-left">
                <h1>Fitness needs Fashion & Passion</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deleniti provident ex dicta nulla? Provident eos doloribus 
                    praesentium enim, vero officia eveniet, ea temporibus fugit
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="avail-on">
                    <p>Available on</p>
                    <div className="brand-icons">
                        <img src="/Flipkart-logo.png" alt="flipkart"  />
                        <img src="/amazonlogo.png" alt="amazon" />
                    </div>
                </div>
            </div>
            <div className="hero-right">
                <img src="/img8.jpeg" alt="" />
            </div>
        </main>
    )
}
export default HeroSection;