import type { FC } from "react";
import type { IPlan } from "../../constants";
import clsx from "clsx";

const CheckedIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/common/icons/checked.svg";
const PremiumEllipse_1 =
  "/wp-content/themes/kursnova-wp-theme/assets/students/plans/premium-ellipse-1.svg";
const PremiumEllipse_2 =
  "/wp-content/themes/kursnova-wp-theme/assets/students/plans/premium-ellipse-2.svg";

import styles from "./PlanCard.module.sass";

interface PlanCardProps {
  className?: string;
  plan: IPlan;
}

export const PlanCard: FC<PlanCardProps> = ({ className, plan }) => {
  return (
    <div
      className={clsx(styles.card, className, {
        [styles.freeCard]: plan.title === "Free-тариф",
        [styles.premiumCard]: plan.title === "Премиум",
      })}
    >
      <h5 className={styles.title}>{plan.title}</h5>
      <div className={styles.price}>{plan.price}</div>

      <ul className={styles.list}>
        {plan.data.map((item, index) => (
          <li className={styles.item} key={index}>
            <div className={styles.iconWrapper}>
              <img src={CheckedIcon} alt="Отметка" className={styles.icon} />
            </div>
            <div className={styles.itemText}>{item}</div>
          </li>
        ))}
      </ul>

      {plan.title === "Free-тариф" && <div className={styles.freeBg} />}
      {plan.title === "Премиум" && (
        <div className={styles.premiumBg}>
          <img
            src={PremiumEllipse_1}
            alt="Эллипс 1"
            className={styles.premiumEllipse_1}
          />
          <img
            src={PremiumEllipse_2}
            alt="Эллипс 2"
            className={styles.premiumEllipse_2}
          />
          <div />
        </div>
      )}
    </div>
  );
};
