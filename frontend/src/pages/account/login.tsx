
import React, { useState, useEffect } from "react";
import Footer from "@/components/footers/footer";
import Header from "@/components/headers/headers";
import {Login} from '@/components/auth/login';

export default function Home() {
    return (
        <div>
            <Header />
            <Login />
            <Footer />
        </div>
    )
}