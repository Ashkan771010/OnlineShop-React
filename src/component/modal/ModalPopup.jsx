import Box from "@mui/material/Box";
import CheckCircleTwoToneIcon from "@mui/icons-material/CheckCircleTwoTone";
import { StyledModal } from "./modal-popup.style";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Backdrop from "@mui/material/Backdrop";
import { removeAllProduct } from "../../redux/actions";

const ModalPopup = (props) => {
  const { open, handleCloseModal } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const randomNumber = (min, max) => {
    return Math.random() * (max - min) + min;
  };

  const handleClosePop = (e) => {
    navigate("/");
    dispatch(removeAllProduct());
  };

  const trackingCode = randomNumber(260, 55555);
  return (
    <>
      <Backdrop
        sx={{ color: "#FFF", zIndex: "99" }}
        open={open}
        onClick={handleClosePop}
      />
      <StyledModal hideBackdrop open={open} onClose={handleCloseModal}>
        <Box className="lol">
          <CheckCircleTwoToneIcon className="success-icon" />
          <p>
            با تشکر از خرید شما
            <br /> سفارش شما با شماره پیگیری{" "}
            <span style={{ color: "red" }}>{Math.round(trackingCode)}</span> ثبت
            شد و در تاریخ انتخابی برای شما ارسال میشود.
          </p>
          <button onClick={handleClosePop}>رفتن به صفحه اصلی</button>
        </Box>
      </StyledModal>
    </>
  );
};

export default ModalPopup;
