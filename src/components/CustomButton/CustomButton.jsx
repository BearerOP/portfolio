import "./CustomButton.css";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const CustomButton = ({ text, size, link }) => {
  const handleScroll = () => {
    console.log(
      "You clicked the button and scrolled to the link: ",
    );
    
    const element = document.getElementById(link);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <button className="custom-btn" onClick={handleScroll}>
      {text}
      <ArrowForwardOutlinedIcon className="arrow" fontSize={size} />
    </button>
  );
};

export default CustomButton;
