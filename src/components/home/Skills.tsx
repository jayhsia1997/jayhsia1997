import React from 'react';
import Card from '@/components/ui/card/Card.tsx';
import { SkillCardItem, SkillCardItems } from "@/libs/const.tsx";
import { useTranslation } from "react-i18next";

const Skills: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home.skills" });
  return (
    <div className="w-full py-24 bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-200">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-4 gap-4 items-center">
        {SkillCardItems.map((skill: SkillCardItem) => (
          <Card
            icon={skill.icon}
            title={skill.title}
            className="h-full"
          >
            {t(skill.description)}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Skills;
