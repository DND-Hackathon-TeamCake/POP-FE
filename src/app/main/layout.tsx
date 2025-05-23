import Title from "@/components/Title/Title";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Title title="TODAY's Pieces" />
      </div>
      {children}
    </div>
  );
};

export default layout;
