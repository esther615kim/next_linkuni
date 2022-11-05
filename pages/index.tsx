import { Layout } from "../src/components/Layout";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout>
      {/* SEARCH BOX */}
      <div className="p2">Search box</div>
      {/* ADD BUTTON */}
      <div>ADD</div>
      {/* URL CARDS */}
      <div>Url Cards 1</div>
      <div>Url Cards 2</div>
    </Layout>
  );
};

export default Home;
