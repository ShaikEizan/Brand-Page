const HeroSection = () => {
    return (
      <main className="hero container">
        <div className="hero-content">
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>
  
          <div className="hero-btn">
           <a href="https://www.nike.com/in/w/mens-shoes-nik1zy7ok"><button>Shop Now </button></a> 
            <button className="secondary-btn">Category</button>
          </div>
  
          <div className="shopping">
            <p>Also Available On</p>
  
            <div className="brand-icons">
              <a href="https://www.amazon.in/s?k=nike+shoes+for+men&crid=110TJ74PAQ8S&sprefix=nike+shoes%2Caps%2C383&ref=nb_sb_ss_ts-doa-p_1_10" target="_blank"><img src="/amazon.png" alt="amazon-logo" /></a>
              <a href="https://www.flipkart.com/search?q=nike%20shoes%20&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off" target="_blank" ><img src="/flipkart.png" alt="flipkart-logo" /></a>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/hero-image.png" alt="hero-image" />
        </div>
      </main>
    );
  };
  
  export default HeroSection;