// GENERATO da tools/dc-to-react.mjs — non modificare a mano.


export default function Soon(v: any) {
  return (
    <>
    <div data-screen-label={"Coming soon"} style={{minHeight: "100vh", boxSizing: "border-box", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", padding: "170px 20px 130px"}}>
      {"\n  "}
      <div style={{width: "100%", maxWidth: "640px", textAlign: "center"}}>
        {"\n\n    "}
        <div style={{position: "relative", width: "min(420px, 78%)", margin: "0 auto 6px", transform: "rotate(-2.2deg)", filter: "drop-shadow(0 16px 28px rgba(20,20,30,0.18))"}}>
          {"\n      "}
          <img src={"images/site/targa-lavori.png"} alt={"Attenzione lavori in corso"} style={{display: "block", width: "100%", height: "auto", borderRadius: "6px"}} />
          {"\n      "}
          <span style={{position: "absolute", top: "-20px", left: "-26px", width: "104px", height: "34px", background: "linear-gradient(105deg, rgba(240,238,226,0.72), rgba(224,222,210,0.62))", borderLeft: "1px dashed rgba(255,255,255,0.7)", borderRight: "1px dashed rgba(255,255,255,0.7)", boxShadow: "0 2px 6px rgba(20,20,30,0.12)", transform: "rotate(-26deg)", pointerEvents: "none"}} />
          {"\n      "}
          <span style={{position: "absolute", bottom: "-18px", right: "-24px", width: "96px", height: "32px", background: "linear-gradient(105deg, rgba(240,238,226,0.72), rgba(224,222,210,0.62))", borderLeft: "1px dashed rgba(255,255,255,0.7)", borderRight: "1px dashed rgba(255,255,255,0.7)", boxShadow: "0 2px 6px rgba(20,20,30,0.12)", transform: "rotate(-22deg)", pointerEvents: "none"}} />
          {"\n    "}
        </div>
        {"\n\n    "}
        <h1 style={{margin: "26px 0 0", fontSize: "clamp(38px, 6vw, 76px)", fontWeight: "800", letterSpacing: "-3px", lineHeight: "1.02", color: "#000000", textWrap: "balance"}}>
          {"Lavori in corso!"}
        </h1>
        {"\n    "}
        <p style={{margin: "20px auto 0", maxWidth: "460px", fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#6a6a74", textWrap: "pretty"}}>
          {"Questa pagina sta arrivando. Intanto puoi vedere Reglo dal vivo o scriverci."}
        </p>
        {"\n\n    "}
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginTop: "36px"}}>
          {"\n      "}
          <span className={"scp2"} onClick={v.bookCal} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 30px", borderRadius: "12px", background: "#000000", color: "#ffffff", fontSize: "16px", fontWeight: "700", userSelect: "none"}}>
            {"Prenota una demo"}
          </span>
          {"\n      "}
          <span className={"scp3"} onClick={v.goHome} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 30px", borderRadius: "12px", background: "#f2f2f5", color: "#000000", fontSize: "16px", fontWeight: "700", userSelect: "none"}}>
            {"Torna alla home"}
          </span>
          {"\n    "}
        </div>
        {"\n\n    "}
        <div style={{marginTop: "26px", fontSize: "14.5px", fontWeight: "500", color: "#8a8a98"}}>
          {"oppure scrivi a "}
          <span className={"scpg"} onClick={v.mailSupport} style={{fontWeight: "700", color: "#000000", textDecoration: "underline", textUnderlineOffset: "3px", cursor: "pointer"}}>
            {"support@reglo.it"}
          </span>
        </div>
        {"\n\n  "}
      </div>
    </div>
    </>
  );
}
