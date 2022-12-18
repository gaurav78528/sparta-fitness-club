import { Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Banner from "../../components/Membership/Banner";
import Features from "../../components/Membership/Features";
import MembershipJoin from "../../components/Membership/memberShipJoin/MembershipJoin";
import Passes from "../../components/Membership/Passes";

const MemberShip = () => {
  useEffect(() => {
    document.title = "Membership";
  }, []);

  return (
    <Stack>
      <Banner />
      <MembershipJoin />
      <Features />
      <Passes />
    </Stack>
  );
};

export default MemberShip;
