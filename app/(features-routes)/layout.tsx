import RenderPathName from "@/components/global/render-path-name";
import FeaturesSidebar from "@/components/modules/sidebar/features-sidebar";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function FeaturesLayout({ children }: Props) {
  return (
    <>
      <div className=" min-h-screen flex">
        <FeaturesSidebar />
        <div className="lg:min-w-[80%] p-10 border">
          <div>
            <h2 className="text-2xl font-bold">
              <RenderPathName />
            </h2>
            {/* <Separator /> */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
