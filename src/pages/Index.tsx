import React from "react";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Welcome to My Website
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            A clean, professional website with a navbar inspired by CodeBrew Labs.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;