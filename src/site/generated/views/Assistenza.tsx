// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
import { interp } from '../../dcx';

export default function Assistenza(v: any) {
  return (
    <>
    <div id={"assistenza"} data-align-block={"1"} data-screen-label={"Contatta l'assistenza"} style={{maxWidth: "1269px", margin: "0 auto", padding: "150px 20px 130px"}}>
      {"\n  "}
      <div style={{display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1.12fr)", gap: "80px", alignItems: "start"}}>
        {"\n\n    "}
        <div style={{paddingTop: "6px"}}>
          {"\n      "}
          <h1 style={{margin: "0", fontSize: "clamp(30px, 3.3vw, 52px)", fontWeight: "700", letterSpacing: "-2.2px", lineHeight: "1.02", color: "#000000", whiteSpace: "nowrap"}}>
            {"Contatta l'assistenza"}
          </h1>
          {"\n      "}
          <p style={{margin: "22px 0 0", maxWidth: "430px", fontSize: "17.5px", fontWeight: "500", lineHeight: "1.6", color: "#6f6f7c", textWrap: "pretty"}}>
            {"Domande sul gestionale, problemi da segnalare o funzioni da proporre: risponde una persona, non un ticket."}
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
              {"\n          Fare domande sul gestionale\n        "}
            </span>
            {"\n        "}
            <span style={{display: "flex", alignItems: "center", gap: "13px", fontSize: "17px", fontWeight: "500", color: "#000000"}}>
              {"\n          "}
              <svg width={"19"} height={"19"} viewBox={"0 0 20 20"} fill={"none"} style={{flexShrink: "0"}}>
                <circle cx={"10"} cy={"10"} r={"10"} fill={"#000000"} />
                <path d={"M6 10.3l2.6 2.5L14 7.5"} stroke={"#ffffff"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} />
              </svg>
              {"\n          Segnalare un problema\n        "}
            </span>
            {"\n        "}
            <span style={{display: "flex", alignItems: "center", gap: "13px", fontSize: "17px", fontWeight: "500", color: "#000000"}}>
              {"\n          "}
              <svg width={"19"} height={"19"} viewBox={"0 0 20 20"} fill={"none"} style={{flexShrink: "0"}}>
                <circle cx={"10"} cy={"10"} r={"10"} fill={"#000000"} />
                <path d={"M6 10.3l2.6 2.5L14 7.5"} stroke={"#ffffff"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} />
              </svg>
              {"\n          Proporre una nuova funzione\n        "}
            </span>
            {"\n      "}
          </div>
          {"\n      "}
          <p style={{margin: "0", fontSize: "15.5px", fontWeight: "500", color: "#6f6f7c"}}>
            {"Domande su piani, prezzi o demo? "}
            <span className={"scp7"} onClick={v.goVendite} style={{color: "#222222", fontWeight: "600", cursor: "pointer", whiteSpace: "nowrap", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "2px"}}>
              {"Contatta le vendite"}
            </span>
          </p>
          {"\n    "}
        </div>
        {"\n\n    "}
        <div style={{borderLeft: "1px solid #ececf0", paddingLeft: "60px"}}>
          {"\n      "}
          {v.assistNotSent ? <>
              {"\n        "}
              <div>
              {"\n          "}
              <div style={{fontSize: "19px", fontWeight: "600", letterSpacing: "-0.4px", color: "#000000", marginBottom: "12px"}}>
                {"Dicci come possiamo aiutarti"}
              </div>
              {"\n          "}
              <p style={{margin: "0 0 22px", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.55", color: "#6f6f7c"}}>
                {"Scrivici tutto quello che può servirci per risponderti: nome dell'autoscuola e cosa stavi facendo quando è comparso il problema."}
              </p>
              {"\n\n          "}
              <textarea value={v.assistMsg} onChange={v.onAssistMsg} placeholder={"Come faccio a..."} style={{width: "100%", boxSizing: "border-box", minHeight: "190px", resize: "vertical", background: "#f7f7f9", border: "1px solid #ececf0", borderRadius: "8px", padding: "16px", fontFamily: "inherit", fontSize: "16px", fontWeight: "500", lineHeight: "1.5", color: "#000000", outline: "none"}} />
              {"\n\n          "}
              {v.assistHasError ? <>
                  {"\n            "}
                  <div style={{marginTop: "12px", fontSize: "14.5px", fontWeight: "600", color: "#be1250"}}>
                  <>{interp(v.assistError)}</>
                </div>
                  {"\n          "}
                </> : null}
              {"\n\n          "}
              <label style={{display: "block", fontSize: "14.5px", fontWeight: "500", color: "#6f6f7c", margin: "20px 0 8px"}}>
                {"La tua email"}
              </label>
              {"\n          "}
              <input type={"email"} value={v.assistEmail} onChange={v.onAssistEmail} placeholder={"nome@autoscuola.it"} style={{width: "100%", boxSizing: "border-box", background: "#f7f7f9", border: "1px solid #ececf0", borderRadius: "8px", padding: "14px 16px", fontFamily: "inherit", fontSize: "16px", fontWeight: "500", color: "#000000", outline: "none"}} />
              {"\n\n          "}
              <div className={"scp8"} style={{display: "flex", alignItems: "center", gap: "9px", marginTop: "20px", cursor: "pointer", userSelect: "none"}}>
                {"\n            "}
                <svg width={"17"} height={"17"} viewBox={"0 0 20 20"} fill={"none"} stroke={"#6f6f7c"} stroke-width={"1.5"} stroke-linecap={"round"} stroke-linejoin={"round"}>
                  <path d={"M17 9.5l-6.8 6.8a4 4 0 01-5.7-5.7l7-7a2.7 2.7 0 013.8 3.8l-7 7a1.3 1.3 0 01-1.9-1.9l6.4-6.4"} />
                </svg>
                {"\n            "}
                <span style={{fontSize: "15px", fontWeight: "500", color: "#6f6f7c"}}>
                  {"Allega immagini o video"}
                </span>
                {"\n          "}
              </div>
              {"\n\n          "}
              <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "20px", marginTop: "26px"}}>
                {"\n            "}
                <span style={{flex: "1 1 auto", minWidth: "0", overflowWrap: "anywhere", fontSize: "15px", fontWeight: "500", color: "#6f6f7c"}}>
                  {"Oppure scrivi a "}
                  <span className={"scp7"} onClick={v.mailSupport} style={{color: "#222222", fontWeight: "600", cursor: "pointer", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "2px"}}>
                    {"support@reglo.it"}
                  </span>
                </span>
                {"\n            "}
                <span className={"scp9"} onClick={v.sendAssist} style={{display: "inline-flex", alignItems: "center", flexShrink: "0", padding: "15px 28px", background: "#000000", color: "#ffffff", fontSize: "15.5px", fontWeight: "600", borderRadius: "8px", cursor: "pointer", userSelect: "none"}}>
                  {"Invia messaggio"}
                </span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
              {"\n      "}
            </> : null}
          {"\n      "}
          {v.assistSent ? <>
              {"\n        "}
              <div style={{padding: "40px 0"}}>
              {"\n          "}
              <img src={"uploads/busta-nobg.png"} alt={""} style={{width: "96px", height: "96px", objectFit: "contain", display: "block", margin: "0 0 16px -8px"}} />
              {"\n          "}
              <div style={{fontSize: "26px", fontWeight: "700", letterSpacing: "-1px", color: "#000000", marginBottom: "10px"}}>
                {"Messaggio ricevuto"}
              </div>
              {"\n          "}
              <p style={{margin: "0", maxWidth: "380px", fontSize: "16px", fontWeight: "500", lineHeight: "1.6", color: "#6f6f7c"}}>
                {"Ti rispondiamo a "}
                <b style={{color: "#000000", fontWeight: "700"}}>
                  <>{interp(v.assistEmailSent)}</>
                </b>
                {", di solito entro qualche ora nei giorni lavorativi."}
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
