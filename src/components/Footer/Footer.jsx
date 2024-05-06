import "./Footer.css";
import launch from "../../assets/Launch.png";
import onboard from "../../assets/Onboard.png";
import trained from "../../assets/Trained.jpg";

const Footer = () => {
   return (
      <div className="footer">
         <div className="card" id="launched">
            <img src={launch} alt="" />
            <h2>2,500</h2>
            <p>Organizations Succefully Launched</p>
         </div>

         <div className="card" id="onboard">
            <img src={onboard} alt="" />
            <h2>45,000</h2>
            <p>Users Onboarded Seamlessly</p>
         </div>

         <div className="card" id="trained">
            <img src={trained} alt="" />
            <h2>200,000+</h2>
            <p>Professionals Trained</p>
         </div>
      </div>
  )
}

export default Footer;
