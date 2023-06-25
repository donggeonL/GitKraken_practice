import React from "react";
import Clock from "../pages/clock/Clock";
import Select_menu from "../pages/tree/Select_menu";
import Contact from "../pages/contact/Contact";
import "./Main.css";
import Fullpage, {
  FullPageSections,
  FullpageSection
} from "@ap.cx/react-fullpage";

const Main = () => {

  return (
    <Fullpage>
      <FullPageSections>

        <FullpageSection>
          <Clock />
        </FullpageSection>

        <FullpageSection>
          <Select_menu />
        </FullpageSection>

      </FullPageSections>
    </Fullpage>
  );

};

export default Main;
