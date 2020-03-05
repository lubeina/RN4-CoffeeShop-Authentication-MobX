import React from "react";
import { Button, Text } from "native-base";
import { observer } from "mobx-react";

// Stores
import authStore from "../../Stores/authStore";

const LogoutButton = () => {
  return (
    <Button onPress={authStore.logout} danger>
      <Text>Logout</Text>
    </Button>
  );
};

export default observer(LogoutButton);
