import React from "react";
import type { Property } from "@/types"; // or wherever your type lives

type PropertyDetailProps = {
  property: Property;
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
