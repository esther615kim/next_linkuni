import { AddUrlBox } from "../src/components/AddUrlBox";
import { Layout } from "../src/components/Layout";
import { UrlCards } from "../src/components/UrlCards";
import { url_card_data_1, url_card_data_2 } from "../src/data/mockData";
// add it to firebase & apis
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Layout>
      {/* SEARCH BOX */}
      <div className="w-4/5 p-10 m-5 text-center rounded-md text-slate-900">
        Search box
      </div>
      {/* ADD BUTTON */}
      <AddUrlBox />
      {/* URL CARDS */}
      <UrlCards cardsData={url_card_data_1} />
      <UrlCards cardsData={url_card_data_2} />
    </Layout>
  );
};

export default Home;
