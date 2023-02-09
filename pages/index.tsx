import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import CounterApp from "../components/counterApp"
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>
    <CounterApp/>
  </div>;
}
