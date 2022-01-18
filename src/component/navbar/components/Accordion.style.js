import styled from "@emotion/styled";

const AccordionContainer = styled.div`
  background-color: #f8f8f8;
  overflow: hidden;
  /* display: inline-block; */

  .css-o4b71y-MuiAccordionSummary-content {
    margin: 0;
  }

  .css-sh22l5-MuiButtonBase-root-MuiAccordionSummary-root.Mui-expanded {
    min-height: 50px;
  }

  .main-accrodion {
    background-color: #fFFFFF;
    width: 100%px;
    box-shadow: 0 0 0 0;
    font-family: "IRANSansB";
    font-size: 21px;
  }

  .summarty-accordion {
    div {
      align-items: center;
    }

    .accordion-icon {
      transform: rotate(180deg);
      font-size: 17px;
      margin-right: 5px;
    }
  }

  .MuiAccordion-region {
    a {
      font-size: 17px;
      text-decoration: none;
      display: block;
    }

    .css-15v22id-MuiAccordionDetails-root {
      background-color: #f0f0f1;
      width: 100%;
      padding-top: 0;
    }
  }
`;

export { AccordionContainer };
