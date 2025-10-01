import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const LegalNotice: React.FC = () => {
  return (
    <div className="min-h-screen bg-white-100 text-gray-800">
      <Header />
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Legal Notice</h1>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-6 md:p-8">
              <pre className="whitespace-pre-wrap leading-7 md:leading-8 text-gray-700 text-sm md:text-base tracking-normal">
{`Information according to § 5 TMG
d3.net internet technologien GmbH

Langenstr. 34

28195 Bremen

Germany

Commercial Register
Commercial Register: HRB 27448

Register Court: District Court Bremen

Represented by
Managing Director: Marco Lutze

Contact
Phone: +49 (0)421 9896 1510

Fax: +49 (0)421 9896 1516

E-Mail: info@d3.net

Postal Address
d3.net Asia Limited

Shop 58, 2/F Beverley Commercial Centre, 87-105

Cahtham Road South, Tsim Sha Tsui

Hong Kong

RegNo: 2961914

VAT ID
VAT identification number according to § 27 a VAT Act: DE284413301

EU Dispute Resolution
The European Commission provides a platform for online dispute resolution (OS): https://ec.europa.eu/consumers/odr/.

Our email address can be found above in the legal notice.

Consumer Dispute Resolution/Universal Dispute Resolution Body
We are not willing or obliged to participate in dispute resolution proceedings before a consumer dispute resolution body.`}
              </pre>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LegalNotice;
