import { apple, bill, google } from "../assets";
import { products } from "../constants";
import styles, { layout } from "../style";
import ImageSlider from "./ImageSlider";

const containerStyles = {
  width: "500px",
  height: "280px",
  margin: "0 auto",
};
const slides = products;

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      {/* <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        We believe <br className="sm:block hidden" /> our stepwise process 
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        <ol>
          <li>Meeting & Consultation</li>
          <li>Solution Ideas</li>
          <li>Designing & Proposing</li>
          <li>Installing & Supporting</li>
        </ol>
      </p>

      <div className={`flex justify-centre sm:mt-10 mt-6`}>
        {/* <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" /> */}
        <button className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}><a href="tel:+91 94051 42456">Call</a></button>
        <button className={`py-4 px-6 ml-5 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none`}><a href="mailto:eversafeelevator@gmail.com">Email</a></button>
      </div>
    </div>
  </section>
);

export default Billing;
