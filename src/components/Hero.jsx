const Hero = () => {

    return (
        <section className="hero">
            <div className="content">
                <h1 >Justo Debarbieri</h1>
                <h2>
                    Fullstack Web Developer <span className="text-accent">|</span> Laravel, API Design <span className="text-accent">|</span> UX-focused
                </h2>
                <p className="abstract text-regular">
                    Fullstack developer specialized in <b>PHP</b> and <b>Laravel</b>, with a strong drive for building scalable, maintainable, and user-centric solutions. Passionate about crafting software that solves real-world problems and contributes to meaningful impact, I’m seeking challenges that allow me to grow while delivering value through clean, robust code.
                </p>
                <div className="contact">
                    <div>📍 Lisbon, Portugal</div>
                    <div>✉️ jedebarbieri@gmail.com</div>
                    <div>📞 +351 911 154 647</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;