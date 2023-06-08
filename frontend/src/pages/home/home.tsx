import React, { useState, useEffect } from "react";
import Footer from "@/components/footers/footer";
import Header from "@/components/headers/headers";
import Slider from "@/components/home/slider";

export default function Home() {
    return (
        <div>
            <Header />
            <Slider />
            <Footer />
        </div>
    )
}