import enTranslation from "./locales/en/translation.json";
import enResume from "./locales/en/resume.json";
import zhTWTranslation from "./locales/zh-tw/translation.json";
import { Resource } from "i18next";

export const resources: Resource = {
  en: {
    translation: enTranslation,
    resume: enResume
  },
  'zh-tw': {
    translation: zhTWTranslation,
    resume: enResume // TODO: Add zh-tw resume translation
  }
}