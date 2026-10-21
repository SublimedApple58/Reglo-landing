// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
import { interp, sty } from '../../dcx';

export default function RevOpen(v: any) {
  return (
    <>
    <div data-rev-full={"1"} onClick={v.closeRev} style={{position: "fixed", inset: "0", zIndex: "200", background: "rgba(20,20,30,0.45)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px"}}>
      {"\n  "}
      <div onClick={v.stop} role={"dialog"} aria-modal={"true"} aria-label={v.revFull?.title} style={{position: "relative", width: "100%", maxWidth: "600px", maxHeight: "calc(100vh - 48px)", overflowY: "auto", overscrollBehavior: "contain", background: "#ffffff", borderRadius: "22px", padding: "40px 40px 34px", boxShadow: "0 30px 80px rgba(20,20,30,0.3)"}}>
        {"\n    "}
        <span className={"scpe"} onClick={v.closeRev} role={"button"} aria-label={"Chiudi"} style={{position: "absolute", top: "18px", right: "18px", display: "inline-flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "50%", cursor: "pointer", userSelect: "none", color: "#6f6f7c"}}>
          {"\n      "}
          <svg width={"15"} height={"15"} viewBox={"0 0 14 14"} fill={"none"}>
            <path d={"M2 2l10 10M12 2L2 12"} stroke={"currentColor"} stroke-width={"1.7"} stroke-linecap={"round"} />
          </svg>
          {"\n    "}
        </span>
        {"\n    "}
        <div style={{fontSize: "22px", fontWeight: "700", letterSpacing: "-0.6px", lineHeight: "1.25", color: "#000000", paddingRight: "36px"}}>
          <>{interp(v.revFull?.title)}</>
        </div>
        {"\n    "}
        <div style={{display: "flex", alignItems: "center", gap: "10px", marginTop: "12px"}}>
          {"\n      "}
          <span style={{display: "inline-flex", gap: "2px"}}>
            {"\n        "}
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
              <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
            </svg>
            {"\n        "}
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
              <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
            </svg>
            {"\n        "}
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
              <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
            </svg>
            {"\n        "}
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
              <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
            </svg>
            {"\n        "}
            <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
              <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
            </svg>
            {"\n      "}
          </span>
          {"\n      "}
          <span style={{fontSize: "12.5px", fontWeight: "500", color: "#6f6f7c"}}>
            <>{interp(v.revFull?.date)}</>
          </span>
          {"\n    "}
        </div>
        {"\n    "}
        <p style={{margin: "18px 0 0", fontSize: "16px", fontWeight: "500", lineHeight: "1.7", color: "#4a4a55", whiteSpace: "pre-line"}}>
          <>{interp(v.revFull?.text)}</>
        </p>
        {"\n    "}
        <div style={{display: "flex", alignItems: "center", gap: "12px", marginTop: "26px", paddingTop: "22px", borderTop: "1px solid #ececf0"}}>
          {"\n      "}
          <span style={sty(v.revFull?.avatarStyle)} />
          {"\n      "}
          <span style={{minWidth: "0"}}>
            <span style={{display: "block", fontSize: "15px", fontWeight: "700", color: "#000000"}}>
              <>{interp(v.revFull?.name)}</>
            </span>
            <span style={{display: "block", fontSize: "13px", fontWeight: "500", color: "#6f6f7c"}}>
              <>{interp(v.revFull?.role)}</>
            </span>
          </span>
          {"\n    "}
        </div>
        {"\n  "}
      </div>
    </div>
    </>
  );
}
