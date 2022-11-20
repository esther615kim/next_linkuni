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
      }
    };
    fetchAllCategoryData();
  }, [loading]);

  console.log("loaded", allUrls, categories);

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
      {/* URL CARDS */}
      <div className="bg-red-200 w-full h-screen">
        {loading ? <p>...loading</p> : <div>{categories?.[0]}</div>}
      </div>
    </Layout>
  );
};

export default Home;
