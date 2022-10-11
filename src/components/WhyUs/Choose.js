import React from "react";
import { useTranslation } from "react-i18next";
import choose from '../../assets/images/choose.png'
import './choose.scss'

const ChooseUs = () => {
  const { t } = useTranslation()

  const data = [
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Lorem Ipsum",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <div className="choose-us-container mx-3 py-3">
      <div className="container">
        <div className="title-container">
          <h2>{t('Why Choose us than others')}</h2>
          <p>
            {t('heroText')}
          </p>
        </div>
        <div className="content">
          <div className="choose-us">
            {data.map(({ title, description }, index) => {
              return (
                <div className="choose" key={index}>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </div>
              );
            })}
          </div>
          <div className="delivery">
            <img src={choose} alt="delivery" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;