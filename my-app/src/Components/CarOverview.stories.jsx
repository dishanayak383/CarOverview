import React from "react";
import CarOverview from "./CarOverview";

export default {
  title: "Components/CarOverview",
  component: CarOverview,
};

const Template = (args) => <CarOverview {...args} />;

export const Default = Template.bind({});
Default.args = {};
