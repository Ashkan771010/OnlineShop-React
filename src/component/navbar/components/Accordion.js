import { useState } from "react";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { AccordionContainer } from "./Accordion.style";
import { Link } from "react-router-dom";

const NavAccordion = (props) => {
  const [isRotate, setIsRotate] = useState(false);

  return (
    <AccordionContainer>
      <MuiAccordion
        className="main-accrodion"
        onClick={() => setIsRotate(!isRotate)}
      >
        <MuiAccordionSummary className="summarty-accordion">
          محصولات
          <ArrowForwardIosSharpIcon
            className="accordion-icon"
            style={{
              transform: isRotate ? "rotate(90deg)" : "rotate(180deg)",
              color: isRotate ? "#ff9000" : "black",
            }}
          />
        </MuiAccordionSummary>
        <MuiAccordionDetails className="detail-accordion">
          <Link to="/Men-cloth">لباس مردانه</Link>
          <Link to="/Women-cloth">لباس زنانه</Link>
          <Link to="/Electronics">لوازم الکترونیکی</Link>
          <Link to="/Jwellery">جواهرات</Link>
        </MuiAccordionDetails>
      </MuiAccordion>
    </AccordionContainer>
  );
};

export default NavAccordion;
