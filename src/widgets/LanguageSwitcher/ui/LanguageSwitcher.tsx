import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";

export const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
  };

  return <Button className={''} onClick={toggleLanguage}>{t("button")}</Button>
};
