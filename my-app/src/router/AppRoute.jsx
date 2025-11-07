import React from "react";
import Mainlayout from "../layouts/mainlayout/Mainlayout";
import { Routes, Route, Navigate } from "react-router-dom";
import Buttondisplay from "../componentdisplay/buttondisplay/Buttondisplay";
import Accordiondisplay from "../componentdisplay/accordiondisplay/Accordiondisplay";
import Sliderdisplay from "../componentdisplay/sliderdisplay/Sliderdisplay";
import Dropdowndisplay from "../componentdisplay/dropdowndisplay/Dropdowndisplay";
import Tabdisplay from "../componentdisplay/tabdisplay/Tabdisplay";
import ImageSliderdisplay from "../componentdisplay/imagesliderdisplay/Imagesliderdisplay";
import UseLocalStoragedisplay from "../hookdisplay/localstoragedisplay/UseLocalStoragedisplay";
import UseThemedisplay from "../hookdisplay/themedisplay/UseThemedisplay";
import UseToggledisplay from "../hookdisplay/toggledisplay/UseToggledisplay";
import ClickOutsidedisplay from "../hookdisplay/clickoutsidedisplay/Clickoutsidedisplay";
import UseFormValidationdisplay from "../hookdisplay/formvalidationdisplay/UseFormValidationdisplay";

const AppRoute = () => {
  return (
    <Routes>
      <Route element={<Mainlayout />}>
        {/* Default route → Accordion */}
        <Route path="/" element={<Navigate to="/accordion" replace />} />

        {/* Components */}
        <Route path="/accordion" element={<Accordiondisplay />} />
        <Route path="/button" element={<Buttondisplay />} />
        <Route path="/dropdown" element={<Dropdowndisplay />} />
        <Route path="/slider" element={<Sliderdisplay />} />
        <Route path="/tab" element={<Tabdisplay />} />
        <Route path="/imageslider" element={<ImageSliderdisplay />} />

        {/* Hooks */}
        <Route path="/uselocalstorage" element={<UseLocalStoragedisplay />} />
        <Route path="/usetheme" element={<UseThemedisplay />} />
        <Route path="/usetoggle" element={<UseToggledisplay />} />
        <Route path="/useclickoutside" element={<ClickOutsidedisplay />} />
        <Route path="/useformvalidaton" element={<UseFormValidationdisplay />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
