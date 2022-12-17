import { Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Banner from "../../components/membership_components/Banner";
import Features from "../../components/membership_components/Features";
import MembershipJoin from "../../components/membership_components/memberShipJoin/MembershipJoin";
import Passes from "../../components/membership_components/Passes";

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
