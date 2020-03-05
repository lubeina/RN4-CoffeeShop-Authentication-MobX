import React from "react";
import { observer } from "mobx-react";
import { withNavigation } from "react-navigation";
import { Icon, Text, Button } from "native-base";

// Stores
import cartStore from "../../Stores/cartStore";
import authStore from "../../Stores/authStore";

const CartButton = ({ navigation }) => {
  const handlePress = () => navigation.navigate("CartScreen");
  const handleLogin = () => navigation.navigate("Login");
  return authStore.user ? (
    <Button onPress={handlePress} transparent light>
      <Text style={{ color: "white" }}>{cartStore.quantity}</Text>
      <Icon
        name="shoppingcart"
        type="AntDesign"
        style={{ color: "white" }}
        onPress={handlePress}
      />
    </Button>
  ) : (
    <Button onPress={handleLogin} transparent light>
      <Icon
        name="login"
        type="AntDesign"
        style={{ color: "white" }}
        onPress={handleLogin}
      />
    </Button>
  );
};

export default withNavigation(observer(CartButton));
