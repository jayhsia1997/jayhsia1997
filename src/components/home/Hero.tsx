import jay from "@/assets/Jay.png";
import { HeroSocialItem, HeroSocialItems, ItemType } from "@/libs/const.tsx";
import React from "react";
import { useTranslation } from "react-i18next";

const Hero: React.FC = () => {
  const { t } = useTranslation();

  const handleClickCopy = (itemType: ItemType, value: string) => {
    navigator.clipboard.writeText(value).then(() => {
      alert(`${itemType} copied to clipboard`);
    });
  };

  return (
    <div className="w-full py-24 bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200">
      <div className="max-w-6xl mx-auto px-6 flex flex-row items-center gap-8">
        <section className="flex-1">
          <p className="text-6xl font-bold tracking-wider">{t("home.hero.greeting")}</p>
          <p className="mt-4 text-3xl text-stone-700 capitalize tracking-wide">{t("home.hero.position")}</p>
          <p className="mt-2 text-lg text-stone-700 capitalize tracking-wide">{t("home.hero.slogan")}</p>
          <div className="flex gap-x-4 mt-4">
            {HeroSocialItems.map((item: HeroSocialItem) => {
              switch (item.itemType) {
                case ItemType.Text:
                  return (
                    <div
                      key={item.title}
                      onClick={() => handleClickCopy(item.itemType, item.value)}
                    >
                      {item.icon}
                    </div>
                  );
                case ItemType.Email:
                  return (
                    <div
                      key={item.title}
                      onClick={() => handleClickCopy(item.itemType, item.value)}
                    >
                      {item.icon}
                    </div>
                  );
                case ItemType.Link:
                  return (
                    <a
                      key={item.title}
                      href={item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.icon}
                    </a>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </section>
        <section className="flex-1 justify-items-center">
          <img src={jay} className="h-80 lg:h-96 rounded-full shadow-xl"/>
        </section>
      </div>
    </div>
  );
};

export default Hero;
