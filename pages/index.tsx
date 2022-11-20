import { AddUrlBox } from "../src/components/AddUrlBox";
import { Layout } from "../src/components/Layout";
import { SideBar } from "../src/components/SideBar";
import { UrlCards } from "../src/components/UrlCards";
import {
  getAllCategoryData,
  getCategories,
} from "../src/firebase/firebase.admin";
// add it to firebase & apis
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

type AllUrls = any; // FIX TYPE

const Home: NextPage = () => {
  const [categories, setCategories] = useState<string[] | null>(null);
  const [allUrls, setAllUrls] = useState<AllUrls>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllCategoryData = async () => {
      try {
        const result = await getCategories();
        setCategories(result);
        const result2 = await getAllCategoryData(result);
        setAllUrls(result2);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        console.log(
          "loaded",
          loading,
          allUrls?.length,
          allUrls?.[0][0],
          "finally"
        );
      }
    };
    fetchAllCategoryData();
  }, [loading]);

  return (
    <Layout>
      {/* SEARCH BOX */}
      <div className="w-4/5 p-10 m-5 text-center rounded-md text-slate-900">
        Search box
      </div>
      {/* CATEGORY */}
      <SideBar categories={categories} />
      {/* ADD BUTTON */}
      <AddUrlBox />
      {/* URL CARDS - 사.라.짐.*/}
      <div className="w-full h-screen bg-gray-200">
        {allUrls ? (
          allUrls?.map((categoryData, index) => (
            <UrlCards key={index} cardsdata={categoryData} />
          ))
        ) : (
          <p>...loading</p>
        )}
      </div>
    </Layout>
  );
};

export default Home;
