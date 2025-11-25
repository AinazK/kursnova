import type { FC } from "react";
import clsx from "clsx";
import { useAppDispatch } from "../../store/hooks";
import { setIsModalOpen, setIsModalSuccess } from "../../store/slices/uiSlice";

const CloseIcon = "/wp-content/themes/kursnova-wp-theme/assets/close.svg";
const SuccessImage = "/wp-content/themes/kursnova-wp-theme/assets/success.png";

const IphoneQrcode =
  "/wp-content/themes/kursnova-wp-theme/assets/footer/iphone-qrcode1.svg";
const AndroidQrcode =
  "/wp-content/themes/kursnova-wp-theme/assets/footer/android-qrcode1.svg";
const AppleLogo =
  "/wp-content/themes/kursnova-wp-theme/assets/icons/apple-logo.svg";
const AndroidLogo =
  "/wp-content/themes/kursnova-wp-theme/assets/icons/android-logo.svg";
const AppleIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/icons/apple-logo.svg";
const GooglePlayIcon =
  "/wp-content/themes/kursnova-wp-theme/assets/icons/googleplay-icon.svg";

import styles from "./SuccessModal.module.sass";

interface SuccessModalProps {
  className?: string;
}

export const SuccessModal: FC<SuccessModalProps> = ({ className }) => {
  const dispatch = useAppDispatch();

  const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);

  return (
    <div className={clsx(styles.wrapper, className)}>
      <img
        src={CloseIcon}
        alt="Закрыть"
        className={styles.close}
        onClick={() => {
          dispatch(setIsModalOpen(false));
          dispatch(setIsModalSuccess(false));
        }}
      />

      <img className={styles.img} src={SuccessImage} alt="Готово" />
      <div className={styles.title}>
        Cпасибо! Осталось только скачать приложение
      </div>
      <div className={styles.text}>До новых знаний всего один шаг!</div>

      <div className={styles.qrcodes}>
        <a href="https://apps.apple.com/ru/app/курснова-уроки-без-скуки/id6751051566">
          <div className={styles.qrcode}>
            <img
              className={styles.qrcodeImg}
              src={IphoneQrcode}
              alt="IphoneQrcode"
            />
            <div className={styles.qrcodeSubtitle}>
              <img src={AppleLogo} alt="AppleLogo" />
              для iPhone
            </div>
          </div>
        </a>
        <a href="https://play.google.com/store/search?q=kursnova&c=apps&hl=ru">
          <div className={styles.qrcode}>
            <img
              className={styles.qrcodeImg}
              src={AndroidQrcode}
              alt="AndroidQrcode"
            />
            <div className={styles.qrcodeSubtitle}>
              <img src={AndroidLogo} alt="AndroidLogo" />
              для android
            </div>
          </div>
        </a>
      </div>

      {/* Download button */}
      <button className={styles.downloadButton}>
        {isIOS ? (
          <img src={AppleIcon} alt="Apple" />
        ) : (
          <img src={GooglePlayIcon} alt="Google Play" />
        )}
        Перейти в {isIOS ? "App Store" : "Google Play"}
      </button>
    </div>
  );
};
