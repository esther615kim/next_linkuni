import { NextPage } from "next";
// TO-DO: how to use getStaticPaths or getStaticProps here

const categoryPage: NextPage = function () {
  return (
    <div className="p-2">
      <h3 className="text-lg font-bold">Category</h3>
      {/* CARDS */}
      <h3 className="pt-2">display cards here...</h3>
    </div>
  );
};

export default categoryPage;
