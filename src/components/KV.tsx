import React from "react";
import { useTranslation } from "react-i18next";
import '../assets/KV.scss';
// import Button from "./Button";

const KV: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section id="top" className="top">
            {/* <div className="overlay-dark"></div> */}
            {/* <video src="null" ></video> */}
            <div className="container-section">
                <div className="pair-box">            
                <div className="pair-a">
                    <h2>{t('top.title')}</h2>
                    <p>{t('top.text')}</p>
                    {/* <Button link="#works" text={t('top.button')} /> */}
                </div>
                <div className="pair-b">
                    {/* <img src="null" alt=""/> */}
                </div>
                </div>
            </div>
        </section>
    )

}



export default KV;