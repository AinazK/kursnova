import type { FC } from "react";
import clsx from "clsx";

const FreeMobileRect =
  "/wp-content/themes/kursnova-wp-theme/assets/students/plans/free-mobile-rect.svg";
const PremiumMobileRect =
  "/wp-content/themes/kursnova-wp-theme/assets/students/plans/premium-mobile-rect.svg";
const CheckIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/common/icons/checked.svg";
const CloseIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/common/icons/close-round.svg";

import { MOBILE_PLAN_DATA } from "../../constants";

import styles from "./MobilePlans.module.sass";

interface MobilePlansProps {
  className?: string;
}

export const MobilePlans: FC<MobilePlansProps> = ({ className }) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <div className={styles.types}>
        <div />
        <div className={styles.type}>
          <img src={FreeMobileRect} alt="Free Plan" className={styles.rect} />
          <div className={styles.typeTitle}>Free</div>
          <div className={styles.typePrice}>0 ₽</div>
        </div>
        <div className={styles.type}>
          <img
            src={PremiumMobileRect}
            alt="Premium Plan"
            className={styles.rect}
          />
          <div className={styles.typeTitle}>Premium</div>
          <div className={styles.typePrice}>от 3 600 ₽/мес.</div>
        </div>
      </div>

      <ul className={styles.list}>
        {MOBILE_PLAN_DATA.map((item, index) => (
          <li className={styles.item} key={index}>
            <div className={styles.title}>{item.title}</div>
            <div className={styles.icon}>
              {item.freeChecked ? (
                <img src={CheckIcon} alt="Отметка" />
              ) : (
                <img src={CloseIcon} alt="Закрыто" />
              )}
            </div>
            <div className={styles.icon}>
              {item.premiumChecked ? (
                <img src={CheckIcon} alt="Отметка" />
              ) : (
                <img src={CloseIcon} alt="Закрыто" />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
