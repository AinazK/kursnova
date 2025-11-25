import type { FC } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

const ArrowIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/icons/arrow-icon.svg";

import styles from "./BackButton.module.sass";

interface BackButtonProps {
  className?: string;
}

export const BackButton: FC<BackButtonProps> = ({ className }) => {
  return (
    <Link to={-1 as any} className={clsx(styles.button, className)}>
      <div className={styles.icon}>
        <img src={ArrowIcon} alt="back" />
      </div>
      Назад
    </Link>
  );
};
