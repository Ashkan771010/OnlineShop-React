import { ToggleContainer } from "./Toggle.Style";
import Moon from "../../../assets/images/moon.png";
import Sun from "../../../assets/images/sun.png"


const Toggle = (props) => {
  const setTheme = props.setTheme;
  const theme = props.theme;

  const toggleHandler = () => {
      setTheme(!theme);
  }

  return (
    <ToggleContainer onClick={toggleHandler}>
      {theme === true ? (
        <img src={ Sun } alt="" />
      ) : (
        <img src={ Moon } alt="" />
      )}
    </ToggleContainer>
  );
};

export default Toggle;
