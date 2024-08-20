import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import LoadingAnimate, { LoadingAnimateType } from "@/components/loading-animate";
import { LayoutProps } from ".";
export default function LayoutPrimary({
  isLoading,
  children,
}: LayoutProps) {
  return (
    <>
      {isLoading && (<LoadingAnimate type={LoadingAnimateType.DEFAULT} />)}
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
    </>
  );
}
