import { PropertyProps } from "@/interfaces";
import React from "react";

type PropertyDetailProps = {
  property: PropertyProps;
};

const PropertyDetail = ({ property }: PropertyDetailProps) => {
  console.log(property);

  return (
    <div>
      <h1>Thanks</h1>
    </div>
  );
};

export default PropertyDetail;
