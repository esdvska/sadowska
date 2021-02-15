import React from "react";
import "../styles/Faqs.css";

const Faq = () => {
  return (
    <div>
      <div className="wrapper_faq">
        <h1>Pytania i odpowiedzi</h1>
        <div className="faq1">
          <div className="faq_section">
            <h2>Ile kosztuje reportaż ślubny?</h2>
            <p>
              Mają Państwo do wyboru 3 podstawowe pakiety - ich cenę podaję w
              momencie jak się Państwo ze mną skontaktują. Jeśli interesowałby
              Państwa inny zakres usług - cenę ustalimy indywidualnie. Zawsze
              każdy szczegół oferty dokładnie omawiamy, aby jak najlepiej
              dopasować usługi do Państwa oczekiwań oraz finansów.
            </p>
          </div>

          <div className="faq_section">
            <h2>Kiedy realizowany jest plener?</h2>
            <p>
              Jeśli pogoda w dniu ślubu dopisuje i mamy sprzyjające warunki
              przyrody wykonujemy <strong>mini plener</strong> już w dniu ślubu.
              Na specjalne życzenie <strong>plener ślubny</strong> może zostać
              wykonany innego dnia w dowolnym miejscu. Tu podobnie jak przy
              reportażu nie ma ograniczeń co do miejsca. Mogą je wybrać Państwo
              lub skorzystać z którejś z moich propozycji.
            </p>
          </div>
          <div className="faq_section">
            <h2>Gdzie wykonuje Pani zdjęcia?</h2>
            <p>
              Nie ma ograniczeń co do miejsca, mogę być z Wami wszędzie - nawet
              na drugim końcu świata! <strong>W Białymstoku</strong> i w
              miejscowościach w promieniu 50km od miasta nie są doliczane żadne
              dodatkowe koszta. Dalej <strong>cena reportażu</strong> wzrasta o
              koszta dojazdu - 1zł za kilometr.
            </p>
          </div>
        </div>
        <div className="faq2">
          <div className="faq_section">
            <h2>Czy wykonuje Pani fotoalbumy?</h2>
            <p>
              Tak, oczywiście - z materiałów jak najlepszej jakości, Wasze
              zdjęcia ułożone w piękną historie. Dodatkowo mogą Państwo zamówić:
              <br></br>- <strong>fotoalbum</strong> w twardej oprawie formatu
              30x30cm, 10 rozkładówek (+500zł);
              <br></br>- płócienne, ozdobne pudełko na fotoalbum (+150zł).
            </p>
          </div>
          <div className="faq_section">
            <h2>Jak wygląda rezerwacja terminu i podpisanie umowy?</h2>
            <p>
              Umawiamy się wstępnie telefonicznie lub mailowo co do opcji
              <strong> reportażu,</strong> wybranego pakietu. Następnie na
              spotkaniu osobiście ustalamy wszystkie szczegóły. Podpisujemy
              umowę, Państwo wpłacacie zaliczkę w wysokości ok. 30% całkowitej
              kwoty. Zaliczkę można wpłacić gotówką przy podpisaniu umowy lub
              przelewem do 7 dni od jej podpisania. Od momentu otrzymania przeze
              mnie zaliczki termin jest zarezerwowany.
            </p>
          </div>

          <div className="faq_section">
            <h2>Na co jeszcze możemy liczyć podczas ślubu?</h2>
            <p>
              Przede wszystkim na miłą atmosferę i moje wsparcie w każdym
              momencie. Posiadam <strong>duże doświadczenie,</strong> więc
              zawsze służę radą i pomocą. Ponadto mogą Państwo również liczyć,
              że podczas <strong>zdjęć grupowych</strong> odpowiednio pokieruję
              i ustawię gości, tak aby wszystko przebiegało sprawnie i
              bezproblemowo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Faq;
