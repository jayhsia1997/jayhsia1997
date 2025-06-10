import enTranslation from "./locales/en/translation.json";
import enResume from "./locales/en/resume.json";
import zhTWTranslation from "@/i18n/locales/traditional_chinese/translation.json";
import { Resource } from "i18next";

export const resources: Resource = {
  en: {
    translation: enTranslation,
    resume: enResume
  },
  'zh-tw': {
    translation: zhTWTranslation,
    resume: enResume // TODO: Add traditional_chinese resume translation
  }
}