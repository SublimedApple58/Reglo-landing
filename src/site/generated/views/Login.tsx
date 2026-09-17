// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
import React from 'react';
import { interp, sty } from '../../dcx';

export default function Login(v: any) {
  return (
    <>
    <div data-screen-label={"Login"} style={{minHeight: "100vh", width: "100%", display: "flex", background: "#ffffff"}}>
      {"\n\n  "}
      <div style={{flex: "1", minWidth: "0", background: "#ffffff", display: "flex", flexDirection: "column", padding: "28px 40px", position: "relative"}}>
        {"\n    "}
        <img src={"images/logo-reglo-dark.png"} alt={"Reglo"} onClick={v.goHome} style={{height: "28px", objectFit: "contain", alignSelf: "flex-start", userSelect: "none", cursor: "pointer"}} />
        {"\n\n    "}
        <div style={{flex: "1", display: "flex", alignItems: "center", justifyContent: "center"}}>
          {"\n      "}
          <div style={{width: "100%", maxWidth: "460px", display: "flex", flexDirection: "column", alignItems: "flex-start", textAlign: "left"}}>
            {"\n        "}
            <div style={{fontSize: "34px", fontWeight: "700", color: "#1c1c1c", letterSpacing: "-0.6px", marginBottom: "12px"}}>
              {"Bentornato su Reglo"}
            </div>
            {"\n        "}
            <div style={{fontSize: "15px", fontWeight: "500", color: "#6a6a6a", marginBottom: "36px"}}>
              {"Accedi per gestire la tua autoscuola."}
            </div>
            {"\n\n        "}
            <div style={{width: "100%"}}>
              {"\n          "}
              <div style={{fontSize: "13.5px", fontWeight: "600", color: "#444444", marginBottom: "7px"}}>
                {"Email"}
              </div>
              {"\n          "}
              <div style={{marginBottom: "18px"}}>
                {"\n            "}
                <input className={"scpj"} type={"email"} value={v.emailValue} onInput={v.onEmailInput} style={{width: "100%", padding: "14px 16px", border: "1.5px solid #dddddd", borderRadius: "12px", fontSize: "15px", fontWeight: "500", fontFamily: "inherit", color: "#222222", background: "#ffffff"}} />
                {"\n          "}
              </div>
              {"\n          "}
              <div style={{fontSize: "13.5px", fontWeight: "600", color: "#444444", marginBottom: "7px"}}>
                {"Password"}
              </div>
              {"\n          "}
              <div style={{position: "relative", marginBottom: "10px"}}>
                {"\n            "}
                <input className={"scpj"} type={v.pwType} value={v.pwValue} onInput={v.onPwInput} style={{width: "100%", padding: "14px 46px 14px 16px", border: "1.5px solid #dddddd", borderRadius: "12px", fontSize: "15px", fontWeight: "500", fontFamily: "inherit", color: "#222222", background: "#ffffff", letterSpacing: "2px"}} />
                {"\n            "}
                <div className={"scpk"} onClick={v.togglePw} style={{position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#b0b0b0", display: "flex", alignItems: "center"}}>
                  {"\n              "}
                  {v.pwHidden ? <>
                      {"\n                "}
                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"}>
                      <path d={"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"} stroke={"currentColor"} stroke-width={"1.6"} />
                      <circle cx={"12"} cy={"12"} r={"3"} stroke={"currentColor"} stroke-width={"1.6"} />
                    </svg>
                      {"\n              "}
                    </> : null}
                  {"\n              "}
                  {v.pwShown ? <>
                      {"\n                "}
                      <svg width={"18"} height={"18"} viewBox={"0 0 24 24"} fill={"none"}>
                      <path d={"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"} stroke={"currentColor"} stroke-width={"1.6"} />
                      <circle cx={"12"} cy={"12"} r={"3"} stroke={"currentColor"} stroke-width={"1.6"} />
                      <path d={"M4 4l16 16"} stroke={"currentColor"} stroke-width={"1.6"} stroke-linecap={"round"} />
                    </svg>
                      {"\n              "}
                    </> : null}
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div style={{marginBottom: "26px"}}>
                {"\n            "}
                <span className={"scp7"} style={{fontSize: "14px", fontWeight: "600", color: "#222222", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "2px", textDecorationThickness: "1px"}}>
                  {"Recupera la password"}
                </span>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n\n        "}
            <div className={"scpl"} onClick={v.doLogin} style={{width: "100%", padding: "15px", background: "#000000", borderRadius: "12px", fontSize: "15.5px", fontWeight: "600", color: "#ffffff", textAlign: "center", cursor: "pointer", userSelect: "none", transition: "background 0.2s ease"}}>
              <>{interp(v.loginLabel)}</>
            </div>
            {"\n\n        "}
            <div style={{alignSelf: "center", marginTop: "22px", fontSize: "14px", fontWeight: "500", color: "#555555"}}>
              {"Non hai ancora un account? "}
              <span className={"scp7"} style={{fontSize: "14px", fontWeight: "600", color: "#222222", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "2px", textDecorationThickness: "1px"}}>
                {"Registrati"}
              </span>
            </div>
            {"\n\n        "}
            <div style={{alignSelf: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px", marginTop: "44px"}}>
              {"\n          "}
              <div style={{fontSize: "13px", fontWeight: "500", color: "#9a9a9a"}}>
                {"Non sei ancora cliente? "}
                <span className={"scp7"} onClick={v.goHome} style={{fontSize: "14px", fontWeight: "600", color: "#222222", cursor: "pointer", textDecoration: "underline", textUnderlineOffset: "2px", textDecorationThickness: "1px"}}>
                  {"Scopri Reglo"}
                </span>
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n  "}
      </div>
      {"\n\n  "}
      <div style={{flex: "1.05", minWidth: "0", padding: "14px 14px 14px 0", background: "#ffffff", display: "flex"}}>
        {"\n    "}
        <div style={{position: "relative", flex: "1", borderRadius: "30px", overflow: "hidden", background: "#14142b"}}>
          {"\n      "}
          <img src={"uploads/Gemini_Generated_Image_jpy0v5jpy0v5jpy0.jpeg"} alt={"Allieva in auto"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} />
          {"\n      "}
          <div style={{position: "absolute", inset: "0", background: "linear-gradient(to bottom, rgba(10,10,25,0.32) 0%, rgba(10,10,25,0) 24%, rgba(10,10,25,0) 55%, rgba(10,10,25,0.4) 100%)", pointerEvents: "none"}} />
          {"\n\n      "}
          <div onMouseEnter={v.revPause} onMouseLeave={v.revResume} onClick={v.nextReview} style={{position: "absolute", left: "50%", transform: "translateX(-50%)", bottom: "30px", width: "460px", maxWidth: "calc(100% - 60px)", borderRadius: "30px", background: "rgba(110,110,120,0.45)", backdropFilter: "blur(6px)", padding: "9px", display: "flex", flexDirection: "column", gap: "8px", boxShadow: "0 18px 50px rgba(0,0,0,0.35)", cursor: "pointer"}}>
            {"\n        "}
            <div style={{display: "flex", alignItems: "center", gap: "14px", background: "rgba(10,10,15,0.88)", backdropFilter: "blur(8px)", borderRadius: "22px", padding: "14px 18px", marginBottom: "8px"}}>
              {"\n          "}
              <div style={sty(v.revPhotoStyle)} />
              {"\n          "}
              <div style={sty(v.revNameFadeStyle)}>
                {"\n            "}
                <div style={{fontSize: "19px", fontWeight: "600", color: "#ffffff", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
                  <>{interp(v.revName)}</>
                </div>
                {"\n            "}
                <div style={{fontSize: "13px", fontWeight: "500", color: "#b8b8c2", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: "2px"}}>
                  <>{interp(v.revRole)}</>
                </div>
                {"\n          "}
              </div>
              {"\n          "}
              <div style={{display: "flex", gap: "3px", flexShrink: "0", alignSelf: "flex-start", marginTop: "4px"}}>
                {"\n            "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"#f5a623"}>
                  <path d={"M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8-6.1-3.6-6.1 3.6 1.5-6.8L2.2 9l6.9-.7L12 2z"} />
                </svg>
                {"\n            "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"#f5a623"}>
                  <path d={"M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8-6.1-3.6-6.1 3.6 1.5-6.8L2.2 9l6.9-.7L12 2z"} />
                </svg>
                {"\n            "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"#f5a623"}>
                  <path d={"M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8-6.1-3.6-6.1 3.6 1.5-6.8L2.2 9l6.9-.7L12 2z"} />
                </svg>
                {"\n            "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"#f5a623"}>
                  <path d={"M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8-6.1-3.6-6.1 3.6 1.5-6.8L2.2 9l6.9-.7L12 2z"} />
                </svg>
                {"\n            "}
                <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"#f5a623"}>
                  <path d={"M12 2l2.9 6.3 6.9.7-5.2 4.6 1.5 6.8-6.1-3.6-6.1 3.6 1.5-6.8L2.2 9l6.9-.7L12 2z"} />
                </svg>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        "}
            <div style={{background: "#ffffff", borderRadius: "22px", padding: "22px 24px 20px", minHeight: "190px", display: "flex", flexDirection: "column"}}>
              {"\n          "}
              <svg width={"30"} height={"22"} viewBox={"0 0 30 22"} fill={"#c9c9d4"} style={{marginBottom: "12px"}}>
                <path d={"M0 22V13.6C0 5.9 4.4 1.1 12 0l1.3 3.2C8.5 4.6 6.2 7 6 10h6v12H0zM17 22V13.6C17 5.9 21.4 1.1 29 0l1 3.2c-4.8 1.4-7.1 3.8-7.3 6.8H29v12H17z"} transform={"scale(-1,1) translate(-30,0)"} />
              </svg>
              {"\n          "}
              <div style={sty(v.revTextFadeStyle)}>
                <>{interp(v.revText)}</>
              </div>
              {"\n          "}
              <div style={{display: "flex", gap: "6px", justifyContent: "center", marginTop: "16px"}}>
                {"\n            "}
                {(v.revDots ?? []).map((dot: any, __i11: number) => (
                    <React.Fragment key={__i11}>
                      {"\n              "}
                      <div onClick={dot?.go} style={sty(dot?.style)} />
                      {"\n            "}
                    </React.Fragment>
                  ))}
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n  "}
      </div>
    </div>
    </>
  );
}
