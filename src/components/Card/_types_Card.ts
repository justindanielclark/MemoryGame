import colors from "../../consts/colors";

type PropsType = {
  color: typeof colors[number];
  handleClick: () => void;
};

export default PropsType;
