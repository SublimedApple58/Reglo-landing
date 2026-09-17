// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
import { interp, sty } from '../../dcx';

export default function AppOpen(v: any) {
  return (
    <>
    <div onClick={v.closeApp} style={{position: "fixed", inset: "0", zIndex: "200", background: "rgba(20,20,30,0.45)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px"}}>
      {"\n  "}
      <div onClick={v.stop} style={{position: "relative", width: "100%", maxWidth: "560px", background: "#ffffff", borderRadius: "22px", padding: "44px 44px 40px", boxShadow: "0 30px 80px rgba(20,20,30,0.3)"}}>
        {"\n    "}
        <span className={"scpd"} onClick={v.closeApp} style={{position: "absolute", top: "20px", right: "20px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", cursor: "pointer", userSelect: "none", color: "#6f6f7c"}}>
          {"\n      "}
          <svg width={"15"} height={"15"} viewBox={"0 0 14 14"} fill={"none"}>
            <path d={"M2 2l10 10M12 2L2 12"} stroke={"currentColor"} stroke-width={"1.7"} stroke-linecap={"round"} />
          </svg>
          {"\n    "}
        </span>
        {"\n    "}
        <div style={{textAlign: "center", marginBottom: "30px"}}>
          {"\n      "}
          <h3 style={{margin: "0 0 10px", fontSize: "30px", fontWeight: "700", letterSpacing: "-1.1px", color: "#000000"}}>
            {"Reglo sul telefono"}
          </h3>
          {"\n      "}
          <p style={{margin: "0", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.5", color: "#6f6f7c"}}>
            <>{interp(v.appSub)}</>
          </p>
          {"\n    "}
        </div>
        {"\n    "}
        <div style={{display: "flex", justifyContent: "center", gap: "14px"}}>
          {"\n      "}
          <span onClick={v.pickIos} style={sty(v.iosBtnStyle)}>
            {"\n        "}
            <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"currentColor"}>
              <path d={"M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.9-3.5.9-.7 0-1.8-.8-3-.8-1.5 0-2.9.9-3.7 2.3-1.6 2.7-.4 6.8 1.1 9 .8 1.1 1.7 2.3 2.9 2.2 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.3-2.6-.1 0-2.5-1-2.5-3.5zM14.2 5.5c.6-.8 1.1-1.9 1-3-1 0-2.1.6-2.8 1.4-.6.7-1.2 1.8-1 2.9 1.1.1 2.2-.6 2.8-1.3z"} />
            </svg>
            {"\n        App Store\n      "}
          </span>
          {"\n      "}
          <span onClick={v.pickAndroid} style={sty(v.androidBtnStyle)}>
            {"\n        "}
            <svg width={"20"} height={"20"} viewBox={"0 0 24 24"} fill={"currentColor"}>
              <path d={"M4.3 3.2c-.2.2-.3.5-.3.9v15.8c0 .4.1.7.3.9l8.4-8.8-8.4-8.8zM15.5 9.2L5.9 3.4l7.9 8.3 1.7-2.5zM18.9 11.1l-2.3-1.4-1.9 2.7 1.9 2.7 2.3-1.4c.7-.4.7-2.2 0-2.6zM5.9 20.6l9.6-5.8-1.7-2.5-7.9 8.3z"} />
            </svg>
            {"\n        Google Play\n      "}
          </span>
          {"\n    "}
        </div>
        {"\n    "}
        {v.qrOpen ? <>
            {"\n      "}
            <div style={{marginTop: "30px", paddingTop: "30px", borderTop: "1px solid #eeeef2", display: "flex", alignItems: "center", gap: "26px"}}>
            {"\n        "}
            <div style={{width: "148px", height: "148px", flexShrink: "0", border: "1px solid #ececf0", borderRadius: "16px", overflow: "hidden", background: "#ffffff", padding: "6px"}}>
              {"\n          "}
              {v.isIos ? <>
                  {"\n            "}
                  <img src={"images/qr-app-store.png"} alt={"QR per scaricare l'app Reglo su App Store"} style={{width: "100%", height: "100%", objectFit: "contain", display: "block"}} />
                  {"\n          "}
                </> : null}
              {"\n          "}
              {v.isAndroid ? <>
                  {"\n            "}
                  <img src={"images/qr-google-play.png"} alt={"QR per scaricare l'app Reglo su Google Play"} style={{width: "100%", height: "100%", objectFit: "contain", display: "block"}} />
                  {"\n          "}
                </> : null}
              {"\n        "}
            </div>
            {"\n        "}
            <div>
              {"\n          "}
              <div style={{fontSize: "17px", fontWeight: "700", letterSpacing: "-0.3px", color: "#000000", marginBottom: "8px"}}>
                <>{interp(v.qrTitle)}</>
              </div>
              {"\n          "}
              <p style={{margin: "0 0 14px", fontSize: "14.5px", fontWeight: "500", lineHeight: "1.55", color: "#6f6f7c"}}>
                {"Inquadra il codice con la fotocamera del telefono per aprire la pagina di download."}
              </p>
              {"\n          "}
              <a href={"#"} style={{display: "inline-flex", alignItems: "center", gap: "7px", fontSize: "14.5px", fontWeight: "600", color: "#000000"}}>
                {"Apri lo store "}
                <svg width={"12"} height={"12"} viewBox={"0 0 14 14"} fill={"none"}>
                  <path d={"M5 3l4 4-4 4"} stroke={"currentColor"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} />
                </svg>
              </a>
              {"\n        "}
            </div>
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
