import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white-100 text-gray-800 flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Terms & Conditions</h1>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-6 md:p-8">
              <pre className="whitespace-pre-wrap leading-7 md:leading-8 text-gray-700 text-sm md:text-base tracking-normal">
{`Terms & Conditions – Coming Soon`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
