import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* Hero */}
      <section className="py-20 px-4 text-center bg-gray-50 dark:bg-gray-800">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("home.hero.title")}</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">{t("home.hero.subtitle")}</h2>
      </section>

      {/* Features */}
      {/*<section className="py-16 px-4 bg-gray-50 dark:bg-gray-800">*/}
      {/*  <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">*/}
      {/*    <div>*/}
      {/*      <h3 className="text-xl font-semibold mb-2">{t("home.features.immutable.title")}</h3>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <h3 className="text-xl font-semibold mb-2">{t("home.features.ownership.title")}</h3>*/}
      {/*    </div>*/}
      {/*    <div>*/}
      {/*      <h3 className="text-xl font-semibold mb-2">{t("home.features.access.description")}</h3>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}
    </>
  );
};

export default Home;
