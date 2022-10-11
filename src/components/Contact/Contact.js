import React from "react";
import { useTranslation } from "react-i18next";
import contact from "../../assets/images/get-in-touch.png";
import './contact.scss'


const Contact = () => {

    const { t } = useTranslation()

    return (
        <div className="contact-container">
            <div className="container mx-3 py-3">
                <div className="content">
                    <div className="title-container">
                        <h2>{t('contact')}</h2>
                        <p>
                            {t("Just subscribe to us")}
                        </p>
                    </div>
                    <div className="subscribe-container">
                        <input type="email" placeholder="yourname@mail.com" />
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="contact-image">
                    <img src={contact} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Contact;