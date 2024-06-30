 import '../css/Footer.css'


export const Footer = () => {
    return(
        <footer className="footer">
        <div className="footer-section">
            <h5>Company Info</h5>
            <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h5>Help & Information</h5>
            <ul>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Help</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Track my order</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h5>FAQs</h5>
            <ul>
                <li><a href="#">Faq</a></li>
            </ul>
        </div>
        
        <div className="footer-section">
            <form>
                <input type="email" placeholder="Email address" />
                <button type="submit">Subscribe</button>
            </form>
            <p>Sign up to be the first to know about our new launches, <br />
            discounts and events.</p>
        </div>
    </footer>
    )
}