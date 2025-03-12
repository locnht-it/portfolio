import { useTranslation } from "react-i18next";

const AppFooter = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center my-3">
      Copyright © {new Date().getFullYear()} {t("appHeader.brand")}
    </div>
  );
};

export default AppFooter;
