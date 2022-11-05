import { AddUrlBox } from "../src/components/AddUrlBox";
import { Layout } from "../src/components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout>
      {/* SEARCH BOX */}
      <div className="p-5 text-center text-white p2 bg-slate-900">
        Search box
      </div>
      {/* ADD BUTTON */}
      <AddUrlBox />
      {/* URL CARDS */}
      <div>Url Cards 1</div>
      <div>Url Cards 2</div>
    </Layout>
  );
};

export default Home;
