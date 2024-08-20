import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LayoutProps } from ".";
import LoadingAnimate, { LoadingAnimateType } from "@/components/loading-animate";
export default function LayoutTersary({
  isLoading,
  children,
}: LayoutProps) {
  return (
    <>
      {isLoading && (<LoadingAnimate type={LoadingAnimateType.DEFAULT} />)}
      <div className="h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex justify-center items-center overflow-y-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
