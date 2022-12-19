import { Avatar, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";
import { useUserAuth } from "../../context/UserAuthContext";

const UserAvatar = ({size}) => {
  const { user } = useUserAuth();
  return (
    <Wrap>
      <WrapItem>
        <Avatar
          border="4px solid #e7e4e4"
          bgColor={"rgb(66, 150, 203)"}
          size={size}
          h={{ base: "100px", md: "150px", lg: "200px" }}
        w={{ base: "100px", md: "150px", lg: "200px" }}
          m="auto"
          name={user.email.charAt(0)}
        />{" "}
      </WrapItem>
    </Wrap>
  );
};

export default UserAvatar;
