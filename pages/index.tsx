import { AddUrlBox } from "../src/components/AddUrlBox";
import { Layout } from "../src/components/Layout";
import { UrlCards } from "../src/components/UrlCards";
import { db } from "../src/firebase/firebase.admin";
import { collection } from "firebase/firestore";
// add it to firebase & apis
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Home: NextPage = () => {
  const URLCARDDATA1: string[] = [];
  const colRef = collection(db, "links");
  const [docs, loading, error] = useCollectionData(colRef);
  // categories
  console.log("fetched data!!", docs[0]?.name);

  return (
    <Layout>
      {/* SEARCH BOX */}
      <div className="w-4/5 p-10 m-5 text-center rounded-md text-slate-900">
        Search box
      </div>
      {/* ADD BUTTON */}
      <AddUrlBox />
      {/* URL CARDS */}
      <div className="bg-red-200 w-full h-screen">
        <UrlCards cardsData={URLCARDDATA1} />
      </div>
    </Layout>
  );
};

export default Home;
