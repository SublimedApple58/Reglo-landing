// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
import { interp, sty } from '../../dcx';

export default function IscrivitiOpen(v: any) {
  return (
    <>
    <div onClick={v.closeIscriviti} style={{position: "fixed", inset: "0", zIndex: "200", background: "rgba(20,20,30,0.45)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px"}}>
      {"\n  "}
      <div onClick={v.stop} style={{position: "relative", width: "100%", maxWidth: "460px", background: "#ffffff", borderRadius: "16px", boxShadow: "0 30px 80px rgba(20,20,30,0.3)", overflow: "hidden"}}>
        {"\n    "}
        <div className={"scpb"} onClick={v.closeIscriviti} style={{position: "absolute", top: "16px", right: "16px", zIndex: "2", width: "32px", height: "32px", borderRadius: "50%", background: "#f7f7f7", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", userSelect: "none"}}>
          {"\n      "}
          <svg width={"12"} height={"12"} viewBox={"0 0 12 12"} fill={"none"}>
            <path d={"M2 2l8 8M10 2l-8 8"} stroke={"#222"} stroke-width={"1.5"} stroke-linecap={"round"} />
          </svg>
          {"\n    "}
        </div>
        {"\n    "}
        {v.iscrivitiIdle ? <>
            {"\n      "}
            <div style={{padding: "40px 36px 30px", textAlign: "center"}}>
            {"\n        "}
            <img src={"uploads/busta-nobg.png"} alt={""} style={{width: "62px", height: "62px", objectFit: "contain", display: "block", margin: "0 auto 18px"}} />
            {"\n        "}
            <div style={{fontSize: "23px", fontWeight: "800", letterSpacing: "-0.9px", color: "#000000", marginBottom: "8px"}}>
              {"Ricevi le novità"}
            </div>
            {"\n        "}
            <p style={{margin: "0 auto 24px", maxWidth: "320px", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.5", color: "#6a6a72"}}>
              {"Ti scriviamo solo quando c'è una novità."}
            </p>
            {"\n        "}
            <div style={{display: "flex", gap: "10px"}}>
              {"\n          "}
              <span style={sty(v.iscrivitiFieldStyle)}>
                {"\n            "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6f6f7c"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} style={{flexShrink: "0"}}>
                  <rect x={"2.5"} y={"5"} width={"19"} height={"14"} rx={"2.5"} />
                  <path d={"M3 7l9 6 9-6"} />
                </svg>
                {"\n            "}
                <input type={"email"} value={v.iscrivitiEmail} onChange={v.onIscrivitiEmail} onFocus={v.onIscrivitiFocus} onBlur={v.onIscrivitiBlur} placeholder={"La tua email"} style={{flex: "1", minWidth: "0", height: "100%", background: "transparent", border: "none", outline: "none", fontFamily: "inherit", fontSize: "15px", fontWeight: "500", color: "#000000"}} />
                {"\n          "}
              </span>
              {"\n          "}
              <span onClick={v.submitIscriviti} style={sty(v.iscrivitiBtnStyle)}>
                {"Iscrivimi"}
              </span>
              {"\n        "}
            </div>
            {"\n        "}
            {v.iscrivitiError ? <>
                {"\n          "}
                <div style={{display: "flex", alignItems: "center", justifyContent: "center", gap: "7px", marginTop: "12px"}}>
                {"\n            "}
                <svg width={"14"} height={"14"} viewBox={"0 0 14 14"} fill={"none"} style={{flexShrink: "0"}}>
                  <circle cx={"7"} cy={"7"} r={"6"} stroke={"#c13515"} stroke-width={"1.4"} />
                  <path d={"M7 4.5v3M7 9.5h.01"} stroke={"#c13515"} stroke-width={"1.4"} stroke-linecap={"round"} />
                </svg>
                {"\n            "}
                <span style={{fontSize: "13px", fontWeight: "500", color: "#c13515"}}>
                  <>{interp(v.iscrivitiError)}</>
                </span>
                {"\n          "}
              </div>
                {"\n        "}
              </> : null}
            {"\n        "}
            <p style={{margin: "14px auto 0", maxWidth: "360px", fontSize: "12px", fontWeight: "500", lineHeight: "1.5", color: "#b0b0bb"}}>
              {"Inserendo la tua e-mail acconsenti a ricevere la newsletter secondo la "}
              <a className={"scpc"} href={"#"} style={{fontWeight: "600", color: "#000000", textDecoration: "underline", textUnderlineOffset: "2px", textDecorationThickness: "1px"}}>
                {"privacy policy"}
              </a>
            </p>
            {"\n      "}
          </div>
            {"\n    "}
          </> : null}
        {"\n    "}
        {v.iscrivitiDone ? <>
            {"\n      "}
            <div style={{padding: "44px 34px 40px", textAlign: "center"}}>
            {"\n        "}
            <img src={"uploads/busta-nobg.png"} alt={""} style={{width: "80px", height: "80px", objectFit: "contain", display: "block", margin: "0 auto 16px"}} />
            {"\n        "}
            <div style={{fontSize: "21px", fontWeight: "700", letterSpacing: "-0.6px", color: "#000000", marginBottom: "8px"}}>
              <>{interp(v.iscrivitiDoneTitle)}</>
            </div>
            {"\n        "}
            <p style={{margin: "0 auto", maxWidth: "330px", fontSize: "15px", fontWeight: "500", lineHeight: "1.5", color: "#6a6a72"}}>
              <>{interp(v.iscrivitiDoneText)}{" "}</>
              <b style={{fontWeight: "600", color: "#000000"}}>
                <>{interp(v.iscrivitiEmailShown)}</>
              </b>
              {"."}
            </p>
            {"\n      "}
          </div>
            {"\n    "}
          </> : null}
        {"\n  "}
      </div>
    </div>
    </>
  );
}
