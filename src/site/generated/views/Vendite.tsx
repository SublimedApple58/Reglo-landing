// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
import { interp } from '../../dcx';

export default function Vendite(v: any) {
  return (
    <>
    <div id={"vendite"} data-align-block={"1"} data-screen-label={"Contatta le vendite"} style={{maxWidth: "1269px", margin: "0 auto", padding: "150px 20px 130px"}}>
      {"\n  "}
      <div style={{display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.12fr)", gap: "80px", alignItems: "start"}}>
        {"\n\n    "}
        <div style={{paddingTop: "6px"}}>
          {"\n      "}
          <h1 style={{margin: "0", fontSize: "clamp(30px, 3.3vw, 52px)", fontWeight: "700", letterSpacing: "-2.2px", lineHeight: "1.02", color: "#000000", whiteSpace: "nowrap"}}>
            {"Contatta le vendite"}
          </h1>
          {"\n      "}
          <p style={{margin: "22px 0 0", maxWidth: "430px", fontSize: "17.5px", fontWeight: "500", lineHeight: "1.6", color: "#6f6f7c", textWrap: "pretty"}}>
            {"Ti aiutiamo a scegliere il piano, a vedere Reglo sulla tua autoscuola e a passare dal gestionale che usi oggi."}
          </p>
          {"\n      "}
          <div style={{display: "flex", flexDirection: "column", gap: "16px", margin: "36px 0 30px"}}>
            {"\n        "}
            <span style={{display: "flex", alignItems: "center", gap: "13px", fontSize: "17px", fontWeight: "500", color: "#000000"}}>
              {"\n          "}
              <svg width={"19"} height={"19"} viewBox={"0 0 20 20"} fill={"none"} style={{flexShrink: "0"}}>
                <circle cx={"10"} cy={"10"} r={"10"} fill={"#000000"} />
                <path d={"M6 10.3l2.6 2.5L14 7.5"} stroke={"#ffffff"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} />
              </svg>
              {"\n          Capire quale piano è giusto per te\n        "}
            </span>
            {"\n        "}
            <span style={{display: "flex", alignItems: "center", gap: "13px", fontSize: "17px", fontWeight: "500", color: "#000000"}}>
              {"\n          "}
              <svg width={"19"} height={"19"} viewBox={"0 0 20 20"} fill={"none"} style={{flexShrink: "0"}}>
                <circle cx={"10"} cy={"10"} r={"10"} fill={"#000000"} />
                <path d={"M6 10.3l2.6 2.5L14 7.5"} stroke={"#ffffff"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} />
              </svg>
              {"\n          Vedere Reglo sulla tua autoscuola\n        "}
            </span>
            {"\n        "}
            <span style={{display: "flex", alignItems: "center", gap: "13px", fontSize: "17px", fontWeight: "500", color: "#000000"}}>
              {"\n          "}
              <svg width={"19"} height={"19"} viewBox={"0 0 20 20"} fill={"none"} style={{flexShrink: "0"}}>
                <circle cx={"10"} cy={"10"} r={"10"} fill={"#000000"} />
                <path d={"M6 10.3l2.6 2.5L14 7.5"} stroke={"#ffffff"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} />
              </svg>
              {"\n          Farti seguire nella migrazione\n        "}
            </span>
            {"\n      "}
          </div>
          {"\n      "}
          <p style={{margin: "0", fontSize: "15.5px", fontWeight: "500", color: "#6f6f7c"}}>
            {"Problemi tecnici o domande sul prodotto? "}
            <span className={"scp7"} onClick={v.goAssistenza} style={{color: "#222222", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "2px"}}>
              {"Contatta l'assistenza"}
            </span>
          </p>
          {"\n    "}
        </div>
        {"\n\n    "}
        <div style={{borderLeft: "1px solid #ececf0", paddingLeft: "60px"}}>
          {"\n      "}
          {v.venditeNotSent ? <>
              {"\n        "}
              <div>
              {"\n          "}
              <div style={{fontSize: "19px", fontWeight: "600", letterSpacing: "-0.4px", color: "#000000", marginBottom: "26px"}}>
                {"Dicci come possiamo aiutarti"}
              </div>
              {"\n\n          "}
              <label style={{display: "block", fontSize: "14.5px", fontWeight: "500", color: "#6f6f7c", marginBottom: "8px"}}>
                {"Nome e cognome"}
              </label>
              {"\n          "}
              <input type={"text"} value={v.vendNome} onChange={v.onVendNome} placeholder={"Mario Rossi"} style={{width: "100%", boxSizing: "border-box", background: "#f7f7f9", border: "1px solid #ececf0", borderRadius: "8px", padding: "14px 16px", fontFamily: "inherit", fontSize: "16px", fontWeight: "500", color: "#000000", outline: "none", marginBottom: "20px"}} />
              {"\n\n          "}
              <label style={{display: "block", fontSize: "14.5px", fontWeight: "500", color: "#6f6f7c", marginBottom: "8px"}}>
                {"Email"}
              </label>
              {"\n          "}
              <input type={"email"} value={v.vendEmail} onChange={v.onVendEmail} placeholder={"nome@autoscuola.it"} style={{width: "100%", boxSizing: "border-box", background: "#f7f7f9", border: "1px solid #ececf0", borderRadius: "8px", padding: "14px 16px", fontFamily: "inherit", fontSize: "16px", fontWeight: "500", color: "#000000", outline: "none", marginBottom: "20px"}} />
              {"\n\n          "}
              <label style={{display: "block", fontSize: "14.5px", fontWeight: "500", color: "#6f6f7c", marginBottom: "8px"}}>
                {"Quanti istruttori siete"}
              </label>
              {"\n          "}
              <input type={"number"} min={"1"} value={v.vendIstruttori} onChange={v.onVendIstruttori} placeholder={"Es. 4"} style={{width: "100%", boxSizing: "border-box", background: "#f7f7f9", border: "1px solid #ececf0", borderRadius: "8px", padding: "14px 16px", fontFamily: "inherit", fontSize: "16px", fontWeight: "500", color: "#000000", outline: "none", marginBottom: "20px"}} />
              {"\n\n          "}
              <label style={{display: "block", fontSize: "14.5px", fontWeight: "500", color: "#6f6f7c", marginBottom: "8px"}}>
                {"Raccontaci cosa ti serve"}
              </label>
              {"\n          "}
              <textarea value={v.vendMsg} onChange={v.onVendMsg} placeholder={"Oggi usiamo un altro gestionale e vorremmo capire come funziona il passaggio..."} style={{width: "100%", boxSizing: "border-box", minHeight: "140px", resize: "vertical", background: "#f7f7f9", border: "1px solid #ececf0", borderRadius: "8px", padding: "14px 16px", fontFamily: "inherit", fontSize: "16px", fontWeight: "500", lineHeight: "1.5", color: "#000000", outline: "none"}} />
              {"\n\n          "}
              {v.vendHasError ? <>
                  {"\n            "}
                  <div style={{marginTop: "12px", fontSize: "14.5px", fontWeight: "600", color: "#be1250"}}>
                  <>{interp(v.vendError)}</>
                </div>
                  {"\n          "}
                </> : null}
              {"\n\n          "}
              <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", marginTop: "24px"}}>
                {"\n            "}
                <span style={{flex: "1 1 auto", minWidth: "0", overflowWrap: "anywhere", fontSize: "15px", fontWeight: "500", color: "#6f6f7c"}}>
                  {"Oppure scrivi a "}
                  <span className={"scp7"} onClick={v.mailCommerciale} style={{color: "#222222", fontWeight: "600", cursor: "pointer", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "2px"}}>
                    {"gabriele.torta@reglo.it"}
                  </span>
                </span>
                {"\n            "}
                <span className={"scp9"} onClick={v.sendVendite} style={{display: "inline-flex", alignItems: "center", flexShrink: "0", padding: "15px 28px", background: "#000000", color: "#ffffff", fontSize: "15.5px", fontWeight: "600", borderRadius: "8px", cursor: "pointer", userSelect: "none"}}>
                  {"Invia messaggio"}
                </span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
              {"\n      "}
            </> : null}
          {"\n      "}
          {v.venditeSent ? <>
              {"\n        "}
              <div style={{padding: "40px 0"}}>
              {"\n          "}
              <img src={"uploads/busta-nobg.png"} alt={""} style={{width: "96px", height: "96px", objectFit: "contain", display: "block", margin: "0 0 16px -8px"}} />
              {"\n          "}
              <div style={{fontSize: "26px", fontWeight: "700", letterSpacing: "-1px", color: "#000000", marginBottom: "10px"}}>
                {"Manca un ultimo passo"}
              </div>
              {"\n          "}
              <p style={{margin: "0", maxWidth: "380px", fontSize: "16px", fontWeight: "500", lineHeight: "1.6", color: "#6f6f7c"}}>
                {"Ti abbiamo aperto una mail già pronta per support@reglo.it: premi invia e ti scriviamo a "}
                <b style={{color: "#000000", fontWeight: "700"}}>
                  <>{interp(v.vendEmailSent)}</>
                </b>
                {" entro un giorno lavorativo, per fissare la demo."}
              </p>
              {"\n        "}
            </div>
              {"\n      "}
            </> : null}
          {"\n    "}
        </div>
        {"\n\n  "}
      </div>
    </div>
    </>
  );
}
