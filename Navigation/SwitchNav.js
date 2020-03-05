import { createSwitchNavigator } from "react-navigation";
import StackNav from "./StackNav";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";

const SwitchNav = createSwitchNavigator({
  Login: Login,
  Signup: Signup,
  StackNav: StackNav
});

export default SwitchNav;
