import logo from "../assets/images/logoImage.png";
import instagram from "../assets/icons/instagram.png"
import facebook from "../assets/icons/facebook.png"
import twitter from "../assets/icons/twitter.png"
import linkedin from "../assets/icons/linkedin.png"


const Contact = () => {
  return (
    <div className="p-16 items-center md:ml-[500px]">
      <div className="flex self-center mb-8 ml-4">
        <img src={logo} alt="" className="w-24 h-24" />
      </div>
      <h1 className="text-left md:mr-[500px]">Follow us</h1>
      <div className="flex flex-row self-center mt-2 gap-4">
        <img src={facebook} alt="" className="w-6 h-6"/>
        <img src={instagram} alt="" className="w-6 h-6"/>
        <img src={linkedin} alt="" className="w-6 h-6"/>
        <img src={twitter} alt="" className="w-6 h-6"/>
      </div>
    </div>
  );
};

export default Contact;
