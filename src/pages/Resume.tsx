import React from "react";
import { useTranslation } from "react-i18next";

const Resume: React.FC = () => {
  const { t } = useTranslation("resume");
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-800">
      <header className="text-center">
        <h1 className="text-3xl font-bold">{t("header.name")}</h1>
        <p className="text-xl">{t("header.title")}</p>
        <p className="text-sm">
          {t("header.location")} | {t("header.contact.phone")} | {t("header.contact.email")}
        </p>
        <p className="text-sm">
          <a href={t("header.links.website")} target="_blank" className="text-blue-600 underline">
            {t("header.contact.website")}
          </a>{" "}
          |{" "}
          <a href={t("header.links.linkedin")} target="_blank" className="text-blue-600 underline">
            {t("header.contact.linkedin")}
          </a>{" "}
          |{" "}
          <a href={t("header.links.github")} target="_blank" className="text-blue-600 underline">
            {t("header.contact.github")}
          </a>
        </p>
      </header>

      <section>
        <h2 className="text-xl font-semibold border-b pb-1">{t("skills.title")}</h2>
        <ul className="list-disc list-inside text-sm space-y-1 mt-2">
          <li>
            <strong>{t("skills.items.backend")}</strong> {t("skills.itemsList.backend")}
          </li>
          <li>
            <strong>{t("skills.items.devops")}</strong> {t("skills.itemsList.devops")}
          </li>
          <li>
            <strong>{t("skills.items.frontend")}</strong> {t("skills.itemsList.frontend")}
          </li>
          <li>
            <strong>{t("skills.items.databases")}</strong> {t("skills.itemsList.databases")}
          </li>
          <li>
            <strong>{t("skills.items.other")}</strong> {t("skills.itemsList.other")}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b pb-1">Work Experience</h2>
        <div className="mt-2">
          <h3 className="font-bold">Trend Micro — Software Application Engineer</h3>
          <p className="text-sm text-gray-600">Sep 2021 – Feb 2024 | Taipei City, Taiwan</p>
          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
            <li>Built pre-commit script to enforce code style and prevent sensitive info commits.</li>
            <li>Refactored Microsoft Teams game feature, doubling performance and reducing errors by ~90%.</li>
            <li>Designed backend architecture and integrated message queue for internal ticketing system.</li>
            <li>Scripted Azure AI Search document storage for internal chatbot development.</li>
            <li>Developed game-based onboarding app with HR for Microsoft Teams.</li>
          </ul>
        </div>

        <div className="mt-4">
          <h3 className="font-bold">Taiwan Good Fortune Cloud Co., Ltd. — Python Developer</h3>
          <p className="text-sm text-gray-600">Apr 2020 – Sep 2021 | Taichung City, Taiwan</p>
          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
            <li>Built and maintained operations and maintenance system, including RESTful APIs.</li>
            <li>Implemented frontend/backend features and async scraping scripts.</li>
            <li>Led system architecture restructuring, reducing server load by 50%.</li>
            <li>Contributed to internal ticketing system development.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b pb-1">Education</h2>
        <ul className="list-inside text-sm mt-1 space-y-1">
          <li>
            <strong>Seneca Polytechnic</strong> — Advanced Diploma, Computer Programming & Analysis (Jan 2025 – Sep 2027)
          </li>
          <li>
            <strong>Lunghwa University of Science and Technology</strong> — B.S., Electrical Engineering (Sep 2015 – Jun 2019)
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold border-b pb-1">Projects</h2>
        <div className="text-sm mt-2">
          <p>
            <strong>The Hope Conference App</strong> (Aug 2024 – Present)
          </p>
          <p>
            Backend Engineer |{" "}
            <a className="text-blue-600 underline" href="https://github.com/TheHopeTechTeam/conf-webapi">
              Repository
            </a>
          </p>
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Built backend system with FastAPI and Firebase Auth for user login.</li>
            <li>Designed RESTful APIs for frontend and admin CMS with Django/Wagtail.</li>
            <li>Used PostgreSQL, Redis, AWS RDS/S3, Docker, and CI/CD for deployment.</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
