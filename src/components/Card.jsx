import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import "../assets/css/card.css";
import { Link } from "react-router-dom";

function Card() {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-clip">
      <div className="w-[400px]  h-screen flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}
        >
          <div id="card" className={`${cardClass}`} onClick={toggleCard}>
            <div id="card-inside">
              <div className="wrap">
                <p>Happy Birthday, Alfina Zahra!</p>
                <p>Yayy hari ini kamu ultah yeahh.</p>
                <p>
                  aku harap dengan kamu yang sekarang, kamu bisa jadi versi
                  terbaik dari diri kamu sendiri yea. Semoga semua yang kamu
                  pengenin pelan pelan tercapaiii, semua yang kamu usahain engga
                  sia-sia, juga semua hal baik bakal datang ke kamu(termasuk ak)
                </p>
                <p></p>
                <p>
                  semoga km sehat selalu, dipanjangkan umurnya, urusannya
                  dimudahkann, dikelilingi sm orang orang baikkk yang sayang sm
                  kamu. sekali lagi happy birthday yeaa ma babe luvv u mwah
                </p>
                <p className="signed">el ganteng banget</p>
              </div>
            </div>

            <div id="card-front">
              <div className="wrap">
                <h1>Happy Birthday!</h1>
              </div>
            </div>
          </div>
        </motion.div>

        {/* prone to bugs */}
        {isCardOpened && (
          <motion.div
            className="-mt-[3rem]"
            initial={{ opacity: 0, visibility: "hidden" }}
            animate={{ opacity: 1, visibility: "visible" }}
            transition={{ duration: 1.2 }}
          >
            <Link to="/cake">
              <p className="-mt-[4rem] px-7 py-3 bg-customBlue text-white font-medium text-base rounded-full hover:bg-blue-600">
                Next Page
              </p>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default Card;
