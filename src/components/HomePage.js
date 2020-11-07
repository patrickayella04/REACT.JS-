import React, {useState} from 'react';



function HomePage() {
    const[open, setOpen] = useState(false)


    return (
        <div>
            <nav>
                <div className="logo">See it believe it</div> 
                <ul className="nav-links"
                    style={{ transform: open ? "translateX(0px)" : "" }}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Contact</a></li>
                    
                </ul> 
                <i onClick={()=>setOpen(!open)} className="fas fa-bars burger"></i>
            </nav>

            <section class="showcase">
            <div class="container">
                
                <div class="big-show">
                <h1>Invent <br/>Onwards &amp; Upwards Inovation</h1>
                    

                    </div>

                    </div>
                    <p class="text">
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent nec augue nunc. Ut congue laoreet diam sed consectetur. Donec rutrum, velit ut pharetra vestibulum, purus lacus molestie arcu, sit amet viverra lorem neque at arcu. Integer risus mi, cursus in ornare sed, faucibus sit amet risus. Morbi ultricies lorem ligula. Nullam a leo et urna convallis pretium. Vivamus efficitur euismod malesuada. Donec sit amet augue tincidunt, gravida nisl in, dictum tellus. Nunc venenatis mi quis diam faucibus ullamcorper.
                    </p>
                    
                <div>
                    <div>
                        <footer>

                            <p class="footer-text">
                        &copy; 2019 <b>IOUI</b>. All rights reserved.</p>
                
                        </footer>
                    </div>
        
            </div>
        </section>
        </div> 
        
    )
}

export default HomePage
