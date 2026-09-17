// GENERATO da tools/dc-to-react.mjs — non modificare a mano.


export default function Novita(v: any) {
  return (
    <>
    <div id={"novita"} data-screen-label={"Novità"} style={{maxWidth: "1300px", margin: "0 auto", padding: "130px 32px 0"}}>
      {"\n  "}
      <div style={{textAlign: "center", margin: "0 auto 46px"}}>
        {"\n    "}
        <h1 style={{margin: "0 auto", maxWidth: "820px", fontSize: "clamp(38px, 5vw, 68px)", fontWeight: "800", letterSpacing: "-2.8px", lineHeight: "1.03", color: "#000000", textWrap: "balance"}}>
          {"Novità"}
        </h1>
        {"\n    "}
        <p style={{margin: "22px auto 0", maxWidth: "520px", fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#6a6a74", textWrap: "pretty"}}>
          {"Tutto quello che rilasciamo su Reglo, in ordine: nuove funzioni, miglioramenti e idee arrivate dalle autoscuole."}
        </p>
        {"\n  "}
      </div>
      {"\n\n\n  "}
      {v.nvShowChangelog ? <>
          {"\n    "}
          <div style={{position: "relative", borderTop: "1px solid #ececf0", marginTop: "44px"}}>
          {"\n      "}
          <span style={{position: "absolute", left: "4px", top: "96px", bottom: "40px", width: "1px", background: "#ececf0"}} />
          {"\n\n            "}
          <div style={{display: "grid", gridTemplateColumns: "280px minmax(0, 1fr)", paddingTop: "70px"}}>
            {"\n        "}
            <div data-cl-entry={"0"} style={{position: "relative", paddingLeft: "28px"}}>
              {"\n          "}
              <div style={{position: "sticky", top: "84px"}}>
                {"\n            "}
                <span style={{position: "absolute", left: "-28px", top: "7px", width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#000000"}} />
                {"\n            "}
                <div style={{fontSize: "14.5px", fontWeight: "600", color: "#000000"}}>
                  {"13 settembre 2026"}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        "}
            <div style={{maxWidth: "720px"}}>
              {"\n          "}
              <h2 style={{margin: "0 0 32px", fontSize: "clamp(27px, 2.3vw, 34px)", fontWeight: "700", letterSpacing: "-1.2px", lineHeight: "1.12", color: "#000000"}}>
                {"Card QR dell'istruttore"}
              </h2>
              {"\n          "}
              <div style={{position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "12px", overflow: "hidden", background: "#f4f4f5", border: "1px solid #efeff2", marginBottom: "40px"}}>
                {"\n            "}
                <img src={"images/site/news-card-qr.png"} alt={"Card QR dell'istruttore sul cruscotto"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
                {"\n          "}
              </div>
              {"\n          "}
              <p style={{margin: "0 0 18px", fontSize: "16px", fontWeight: "500", lineHeight: "1.62", color: "#4a4a55", textWrap: "pretty"}}>
                {"Ogni istruttore ha ora una "}
                <strong style={{fontWeight: "700"}}>
                  {"card con il proprio QR"}
                </strong>
                {", da stampare e lasciare in macchina. L'allievo la inquadra dall'app e viene "}
                <strong style={{fontWeight: "700"}}>
                  {"associato a quell'istruttore"}
                </strong>
                {" in un tocco — niente codici da dettare, niente passaggi in segreteria."}
              </p>
              {"\n          "}
              <h3 style={{margin: "14px 0 14px", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.5px", color: "#000000"}}>
                {"Come funziona"}
              </h3>
              {"\n          "}
              <div style={{display: "flex", alignItems: "flex-start", gap: "13px", marginBottom: "14px"}}>
                <span style={{flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "#f0f0f4", fontSize: "13px", fontWeight: "700", color: "#000000"}}>
                  {"1"}
                </span>
                <span style={{fontSize: "16px", fontWeight: "500", lineHeight: "1.6", color: "#4a4a55", textWrap: "pretty"}}>
                  {"Apri il profilo dell'istruttore, scheda "}
                  <strong style={{fontWeight: "700"}}>
                    {"Codice"}
                  </strong>
                  {", e premi "}
                  <strong style={{fontWeight: "700"}}>
                    {"Utilizza"}
                  </strong>
                  {"."}
                </span>
              </div>
              {"\n          "}
              <div style={{display: "flex", alignItems: "flex-start", gap: "13px", marginBottom: "14px"}}>
                <span style={{flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "#f0f0f4", fontSize: "13px", fontWeight: "700", color: "#000000"}}>
                  {"2"}
                </span>
                <span style={{fontSize: "16px", fontWeight: "500", lineHeight: "1.6", color: "#4a4a55", textWrap: "pretty"}}>
                  {"Scegli "}
                  <strong style={{fontWeight: "700"}}>
                    {"verticale o orizzontale"}
                  </strong>
                  {" e lo sfondo che preferisci, poi scarica il PNG o stampa: esce già su A4 con le linee di taglio."}
                </span>
              </div>
              {"\n          "}
              <div style={{display: "flex", alignItems: "flex-start", gap: "13px", marginBottom: "14px"}}>
                <span style={{flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "#f0f0f4", fontSize: "13px", fontWeight: "700", color: "#000000"}}>
                  {"3"}
                </span>
                <span style={{fontSize: "16px", fontWeight: "500", lineHeight: "1.6", color: "#4a4a55", textWrap: "pretty"}}>
                  {"L'allievo, con Reglo già installato, inquadra il QR: "}
                  <strong style={{fontWeight: "700"}}>
                    {"conferma e da quel momento le sue guide sono seguite da quell'istruttore"}
                  </strong>
                  {". Se ne aveva già uno, può scegliere se cambiare."}
                </span>
              </div>
              {"\n          "}
              <h3 style={{margin: "14px 0 14px", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.5px", color: "#000000"}}>
                {"Ispirazioni da grande schermo"}
              </h3>
              {"\n          "}
              <p style={{margin: "0 0 18px", fontSize: "16px", fontWeight: "500", lineHeight: "1.62", color: "#4a4a55", textWrap: "pretty"}}>
                {"Per lo sfondo della card abbiamo scelto "}
                <strong style={{fontWeight: "700"}}>
                  {"sei scene di cinema con un'auto protagonista"}
                </strong>
                {": Goldfinger, Ritorno al futuro, Scarface, Fast "}
                {"&"}
                {" Furious, Batman Begins e The Wolf of Wall Street. Ogni istruttore sceglie la sua."}
              </p>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n\n      "}
          <div style={{display: "grid", gridTemplateColumns: "280px minmax(0, 1fr)", paddingTop: "90px"}}>
            {"\n        "}
            <div data-cl-entry={"1"} style={{position: "relative", paddingLeft: "28px", marginTop: "-46px"}}>
              {"\n          "}
              <div style={{position: "sticky", top: "84px"}}>
                {"\n            "}
                <span style={{position: "absolute", left: "-28px", top: "7px", width: "9px", height: "9px", borderRadius: "50%", background: "#d4d4da"}} />
                {"\n            "}
                <div style={{fontSize: "14.5px", fontWeight: "600", color: "#000000"}}>
                  {"13 settembre 2026"}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        "}
            <div style={{maxWidth: "720px"}}>
              {"\n          "}
              <h2 style={{margin: "0 0 32px", fontSize: "clamp(27px, 2.3vw, 34px)", fontWeight: "700", letterSpacing: "-1.2px", lineHeight: "1.12", color: "#000000"}}>
                {"Il pagellino è tuo"}
              </h2>
              {"\n          "}
              <div style={{position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "12px", overflow: "hidden", background: "#f4f4f5", border: "1px solid #efeff2", marginBottom: "40px"}}>
                {"\n            "}
                <img src={"images/site/news-pagellino.png"} alt={"Il pagellino personalizzabile"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
                {"\n          "}
              </div>
              {"\n          "}
              <p style={{margin: "0 0 18px", fontSize: "16px", fontWeight: "500", lineHeight: "1.62", color: "#4a4a55", textWrap: "pretty"}}>
                {"Ogni autoscuola insegna a modo suo: adesso anche il pagellino. Scegli tu "}
                <strong style={{fontWeight: "700"}}>
                  {"quali voci valutare"}
                </strong>
                {" e con quale scala, e l'istruttore assegna un "}
                <strong style={{fontWeight: "700"}}>
                  {"punteggio a ogni guida"}
                </strong>
                {", voce per voce — in pochi secondi, appena scende dall'auto."}
              </p>
              {"\n          "}
              <h3 style={{margin: "14px 0 14px", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.5px", color: "#000000"}}>
                {"Come si configura"}
              </h3>
              {"\n          "}
              <div style={{display: "flex", alignItems: "flex-start", gap: "13px", marginBottom: "14px"}}>
                <span style={{flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "#f0f0f4", fontSize: "13px", fontWeight: "700", color: "#000000"}}>
                  {"1"}
                </span>
                <span style={{fontSize: "16px", fontWeight: "500", lineHeight: "1.6", color: "#4a4a55", textWrap: "pretty"}}>
                  {"Vai in "}
                  <strong style={{fontWeight: "700"}}>
                    {"Configurazione → Pagellino"}
                  </strong>
                  {" e crei le voci di valutazione: partenze, parcheggio, rotonde, sicurezza — quelle che contano per te."}
                </span>
              </div>
              {"\n          "}
              <div style={{display: "flex", alignItems: "flex-start", gap: "13px", marginBottom: "14px"}}>
                <span style={{flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "#f0f0f4", fontSize: "13px", fontWeight: "700", color: "#000000"}}>
                  {"2"}
                </span>
                <span style={{fontSize: "16px", fontWeight: "500", lineHeight: "1.6", color: "#4a4a55", textWrap: "pretty"}}>
                  {"Le "}
                  <strong style={{fontWeight: "700"}}>
                    {"riordini col trascinamento"}
                  </strong>
                  {" e scegli la scala per ciascuna (es. da 1 a 5)."}
                </span>
              </div>
              {"\n          "}
              <div style={{display: "flex", alignItems: "flex-start", gap: "13px", marginBottom: "14px"}}>
                <span style={{flex: "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px", borderRadius: "50%", background: "#f0f0f4", fontSize: "13px", fontWeight: "700", color: "#000000"}}>
                  {"3"}
                </span>
                <span style={{fontSize: "16px", fontWeight: "500", lineHeight: "1.6", color: "#4a4a55", textWrap: "pretty"}}>
                  {"Dal momento in cui salvi, "}
                  <strong style={{fontWeight: "700"}}>
                    {"tutti i tuoi istruttori"}
                  </strong>
                  {" vedono il pagellino aggiornato."}
                </span>
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n\n      "}
          <div style={{display: "grid", gridTemplateColumns: "280px minmax(0, 1fr)", paddingTop: "90px"}}>
            {"\n        "}
            <div data-cl-entry={"2"} style={{position: "relative", paddingLeft: "28px", marginTop: "-46px"}}>
              {"\n          "}
              <div style={{position: "sticky", top: "84px"}}>
                {"\n            "}
                <span style={{position: "absolute", left: "-28px", top: "7px", width: "9px", height: "9px", borderRadius: "50%", background: "#d4d4da"}} />
                {"\n            "}
                <div style={{fontSize: "14.5px", fontWeight: "600", color: "#000000"}}>
                  {"4 agosto 2026"}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        "}
            <div style={{maxWidth: "720px"}}>
              {"\n          "}
              <h2 style={{margin: "0 0 32px", fontSize: "clamp(27px, 2.3vw, 34px)", fontWeight: "700", letterSpacing: "-1.2px", lineHeight: "1.12", color: "#000000"}}>
                {"Foto e firme digitali"}
              </h2>
              {"\n          "}
              <div style={{position: "relative", width: "100%", aspectRatio: "16 / 10", borderRadius: "12px", overflow: "hidden", background: "#f4f4f5", border: "1px solid #efeff2", marginBottom: "40px"}}>
                {"\n            "}
                <img src={"uploads/pasted-1787932418114-0.png"} alt={"Firma digitale sull'app Reglo"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} />
                {"\n          "}
              </div>
              {"\n          "}
              <h3 style={{margin: "0 0 14px", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.5px", color: "#000000"}}>
                {"Firma digitale allievo"}
              </h3>
              {"\n          "}
              <p style={{margin: "0 0 34px", fontSize: "16px", fontWeight: "500", lineHeight: "1.62", color: "#4a4a55", textWrap: "pretty"}}>
                {"Ora raccogli la firma dell'allievo direttamente in app, con un pad touch a schermo intero, semplice e veloce. La trovi nella scheda allievo pronta all'uso, sia in originale che nel formato adatto al portale dell'automobilista."}
              </p>
              {"\n          "}
              <h3 style={{margin: "0 0 14px", fontSize: "20px", fontWeight: "700", letterSpacing: "-0.5px", color: "#000000"}}>
                {"Foto profilo allievo"}
              </h3>
              {"\n          "}
              <p style={{margin: "0 0 32px", fontSize: "16px", fontWeight: "500", lineHeight: "1.62", color: "#4a4a55", textWrap: "pretty"}}>
                {"Ora puoi far caricare all'allievo la propria foto profilo direttamente dall'app Reglo, in pochi secondi dal telefono. La ritrovi subito nella scheda allievo, già pronta anche nel formato richiesto dalla Motorizzazione per le pratiche — niente più scanner o email da gestire."}
              </p>
              {"\n          "}
              <div style={{display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px 22px", background: "#f1f7f1", borderRadius: "12px", maxWidth: "720px"}}>
                {"\n            "}
                <svg width={"19"} height={"19"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#4a7a52"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} style={{flexShrink: "0", marginTop: "2px"}}>
                  <path d={"M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"} />
                </svg>
                {"\n            "}
                <p style={{margin: "0", fontSize: "15px", fontWeight: "500", lineHeight: "1.6", color: "#3f6046", textWrap: "pretty"}}>
                  {"L'idea arriva dall'"}
                  <strong style={{fontWeight: "700"}}>
                    {"Autoscuola Octuma"}
                  </strong>
                  {": raccoglievano foto e firme degli allievi a mano, con passaggi manuali e ripetitivi per ogni pratica. Dalla loro richiesta è nata questa funzione."}
                </p>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n\n    "}
        </div>
          {"\n  "}
        </> : null}
      {"\n\n  "}
      <div style={{height: "130px"}} />
    </div>
    </>
  );
}
