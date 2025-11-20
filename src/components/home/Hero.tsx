import jay from "@/assets/Jay.png";
import Notification from "@/components/ui/notification/Notfication.tsx";
import { HeroSocialItem, HeroSocialItems, ItemType } from "@/libs/const.tsx";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const [ open, setOpen ] = useState(false);

  const handleClickCopy = (item: HeroSocialItem) => {
    if (!item.copyable) {
      return;
    }
    setOpen(true);
    navigator.clipboard.writeText(item.value).then(() => {
      console.log("copied");
    });
  };

  return (
    <>
      <div className="w-full py-16 sm:py-20 md:py-24 bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center md:items-stretch gap-8">
          <section className="flex-1 text-center md:text-left">
            <p className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider leading-tight">
              {t("home.hero.greeting")}
            </p>
            <p className="mt-3 sm:mt-4 text-2xl sm:text-3xl text-primary-700 capitalize tracking-wide">
              {t("home.hero.position")}
            </p>
            <p className="mt-2 text-base sm:text-lg text-primary-700 capitalize tracking-wide">
              {t("home.hero.slogan")}
            </p>
            <div className="flex justify-center md:justify-start gap-x-4 mt-4">
              {HeroSocialItems.map((item: HeroSocialItem) => {
                switch (item.itemType) {
                  case ItemType.Link:
                    return (
                      <Link to={item.value} key={item.title} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                      </Link>
                    );
                  case ItemType.Email:
                    return (
                      <Link to={item.value} key={item.title} target="_blank" rel="noopener noreferrer">
                        {item.icon}
                      </Link>
                    )
                  case ItemType.Phone:
                    return (
                      <>
                        <Notification
                          variant="info"
                          title={t("notification.copySuccess", { text: item.itemType })}
                          open={open}
                          duration={3000}
                          position={{ vertical: "top", horizontal: "center" }}
                          onClose={() => setOpen(false)}
                        />
                        <div key={item.title} onClick={() => handleClickCopy(item)}>
                          {item.icon}
                        </div>
                      </>
                    )
                  case ItemType.Text:
                    return (
                      <>
                        <Notification
                          variant="info"
                          title={t("notification.copySuccess", { text: item.itemType })}
                          open={open}
                          duration={3000}
                          position={{ vertical: "top", horizontal: "center" }}
                          onClose={() => setOpen(false)}
                        />
                        <div key={item.title} onClick={() => handleClickCopy(item)}>
                          {item.icon}
                        </div>
                      </>
                    )
                  default:
                    return null;
                }
              })}
            </div>
          </section>
          <section className="flex-1 grid place-items-center">
            <img src={jay} className="h-56 sm:h-72 md:h-80 lg:h-96 rounded-full shadow-xl" />
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
