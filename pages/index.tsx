import { AddUrlBox } from "../src/components/AddUrlBox";
import { Layout } from "../src/components/Layout";
import { UrlCards } from "../src/components/UrlCards";
import {
  db,
  getAllCategoryData,
  getCategories,
  getSingCategoryData,
} from "../src/firebase/firebase.admin";
import { collection } from "firebase/firestore";
// add it to firebase & apis
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";

type AllUrls = any; // FIX TYPE

const Home: NextPage = () => {
  const URLCARDDATA1: string[] = [];

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
  }, []);
  console.log(categories, allUrls, "fetched");

  return (
    <Layout>
      {/* SEARCH BOX */}
      <div className="w-4/5 p-10 m-5 text-center rounded-md text-slate-900">
        Search box
      </div>
      {/* CATEGORY */}
      <div className="absolute left-0 my-5 w-min-50 rounded-r-lg md:w-1/5 h-fit drop-shadow-lg bg-yellow-200 px-2 py-5">
        <ul>
          {categories &&
            categories.map((li, i) => (
              <li className="pl-2" key={i}>
                <a> {li}</a>
              </li>
            ))}
        </ul>
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
