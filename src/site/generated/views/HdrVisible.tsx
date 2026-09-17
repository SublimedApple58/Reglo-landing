// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
import { sty } from '../../dcx';

export default function HdrVisible(v: any) {
  return (
    <>
    <div data-header={"1"} style={{position: "fixed", top: "0", left: "0", right: "0", zIndex: "100", padding: "0", background: "#ffffff", boxShadow: "none"}}>
      {"\n  "}
      <div data-header-inner={"1"} style={{position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px", margin: "0 auto", padding: "11px 20px"}}>
        {"\n    "}
        <span onClick={v.goHome} style={{flex: "1 1 0", minWidth: "0", display: "flex", alignItems: "center", justifyContent: "flex-start", cursor: "pointer"}}>
          {"\n      "}
          {v.hdrDark ? <>
              {"\n        "}
              <img src={"images/logo-reglo-white.png"} alt={"Reglo"} style={{width: "34px", height: "34px", objectFit: "contain", display: "block"}} />
              {"\n      "}
            </> : null}
          {"\n      "}
          {v.hdrLight ? <>
              {"\n        "}
              <img src={"images/logo-reglo-dark.png"} alt={"Reglo"} style={{width: "34px", height: "34px", objectFit: "contain", display: "block"}} />
              {"\n      "}
            </> : null}
          {"\n    "}
        </span>
        {"\n    "}
        <div data-nav-pill={"1"} style={{flex: "0 1 auto", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", padding: "6px", background: "#ffffff", border: "1px solid #ececef", borderRadius: "16px", whiteSpace: "nowrap"}}>
          {"\n      "}
          <span onMouseEnter={v.openMenu} onMouseOver={v.openMenu} onMouseLeave={v.closeMenu} style={{position: "relative", display: "inline-flex"}}>
            {"\n        "}
            <span onClick={v.toggleMenu} onFocus={v.openMenu} tabIndex={0} style={sty(v.funzioniStyle)}>
              {"Funzioni"}
            </span>
            {"\n        "}
            {v.menuOpen ? <>
                {"\n          "}
                <div data-fx-menu={"1"} style={{position: "absolute", top: "100%", left: "-6px", paddingTop: "14px", zIndex: "120"}}>
                {"\n            "}
                <div style={{display: "flex", flexDirection: "column", width: "300px", background: "#ffffff", borderRadius: "22px", padding: "16px 12px", boxShadow: "0 24px 60px rgba(20,20,30,0.18)", border: "1px solid #f0f0f4"}}>
                  {"\n              "}
                  <a className={"scp0"} onClick={v.goCore} style={{display: "block", padding: "12px 14px", borderRadius: "12px", fontSize: "17px", fontWeight: "700", letterSpacing: "-0.2px", color: "#000000", cursor: "pointer", transition: "background 0.18s ease"}}>
                    {"Prenotazioni intelligenti"}
                  </a>
                  {"\n              "}
                  <a className={"scp0"} onClick={v.goSegretaria} style={{display: "block", padding: "12px 14px", borderRadius: "12px", fontSize: "17px", fontWeight: "700", letterSpacing: "-0.2px", color: "#000000", cursor: "pointer", transition: "background 0.18s ease"}}>
                    {"Segretaria Virtuale"}
                  </a>
                  {"\n              "}
                  <a className={"scp0"} onClick={v.goRinnovi} style={{display: "block", padding: "12px 14px", borderRadius: "12px", fontSize: "17px", fontWeight: "700", letterSpacing: "-0.2px", color: "#000000", cursor: "pointer", transition: "background 0.18s ease"}}>
                    {"Rinnovi automatici"}
                  </a>
                  {"\n              "}
                  <a className={"scp0"} onClick={v.goSoon} style={{display: "block", padding: "12px 14px", borderRadius: "12px", fontSize: "17px", fontWeight: "700", letterSpacing: "-0.2px", color: "#000000", cursor: "pointer", transition: "background 0.18s ease"}}>
                    {"Reglo Road"}
                  </a>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
                {"\n        "}
              </> : null}
            {"\n      "}
          </span>
          {"\n      "}
          <span className={"scp1"} onClick={v.goPrezzi} style={sty(v.prezziLinkStyle)}>
            {"Prezzi"}
          </span>
          {"\n      "}
          <span className={"scp1"} onClick={v.goNovita} style={sty(v.novitaLinkStyle)}>
            {"Novità"}
          </span>
          {"\n    "}
        </div>
        {"\n    "}
        <div style={{flex: "1 1 0", minWidth: "0", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "clamp(0px, 0.35vw, 5px)", whiteSpace: "nowrap"}}>
          {"\n      "}
          <span className={"scp1"} onClick={v.goLogin} style={sty(v.hdrAccediStyle)}>
            {"Accedi"}
          </span>
          {"\n      "}
          <a data-cta={"1"} href={"https://cal.com/reglo/analisi-strategica-autoscuola"} target={"_blank"} rel={"noopener"} style={sty(v.hdrCtaStyle)}>
            {"Prenota"}
          </a>
          {"\n    "}
        </div>
        {"\n  "}
      </div>
    </div>
    </>
  );
}
