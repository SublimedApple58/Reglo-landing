// GENERATO da tools/dc-to-react.mjs — non modificare a mano.
import React from 'react';
import { interp, sty } from '../../dcx';

export default function Home(v: any) {
  return (
    <>
    <div data-screen-label={"Hero"} data-stage={"1"} style={{position: "relative", height: "340vh", background: "#ffffff"}}>
      {"\n  "}
      <div data-stage-sticky={"1"} style={{position: "sticky", top: "0", height: "100vh", overflow: "hidden", background: "#ffffff"}}>
        {"\n\n    "}
        {"\n    "}
        <div data-hero-copy={"1"} style={{position: "absolute", zIndex: "6", left: "0", right: "0", top: "0", bottom: "0", padding: "72px 40px 30vh", pointerEvents: "none", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", willChange: "transform, opacity"}}>
          {"\n      "}
          <h1 style={{margin: "0", fontSize: "clamp(36px, 5.9vw, 92px)", fontWeight: "800", letterSpacing: "-0.04em", lineHeight: "1.02", color: "#000000", whiteSpace: "nowrap"}}>
            {"Un'app unica per la"}
            <br />
            {"gestione della tua "}
            <span style={{position: "relative", display: "inline-block"}}>
              {"autoscuola"}
              <span style={{position: "absolute", left: "50%", top: "100%", transform: "translateX(-50%) rotate(-3deg)", marginTop: "2px", whiteSpace: "nowrap", fontFamily: "Caveat, cursive", fontWeight: "700", fontSize: "0.42em", letterSpacing: "0", lineHeight: "1", color: "#6a6a74"}}>
                {"(finalmente digitale)"}
              </span>
            </span>
          </h1>
          {"\n      "}
          <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "10px", marginTop: "56px", pointerEvents: "auto"}}>
            {"\n        "}
            <a className={"scp2"} onClick={v.bookCal} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 30px", borderRadius: "12px", background: "#000000", color: "#ffffff", fontSize: "16px", fontWeight: "700"}}>
              {"Prenota una demo"}
            </a>
            {"\n        "}
            <a className={"scp3"} onClick={v.goCore} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 30px", borderRadius: "12px", background: "#f2f2f5", color: "#000000", fontSize: "16px", fontWeight: "700"}}>
              {"Scopri le funzioni"}
            </a>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n\n    "}
        {"\n    "}
        <div data-steps={"1"} style={{position: "absolute", zIndex: "3", left: "0", right: "0", top: "0", bottom: "0", padding: "0 clamp(20px, 4vw, 64px)"}}>
          {"\n          "}
          <div data-step={"0"} style={{position: "absolute", inset: "0", willChange: "opacity", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)", alignItems: "center", gap: "clamp(20px, 3vw, 56px)"}}>
            {"\n            "}
            <div data-step-left={"0"} style={{justifySelf: "end", width: "clamp(260px, 26vw, 390px)", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px", textAlign: "right", willChange: "transform"}}>
              {"\n              "}
              <div style={{flex: "0 0 auto", display: "flex", color: "#ffffff"}} data-step-ico={"1"}>
                <svg width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#ffffff"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} style={{display: "inline-block"}}>
                  <rect x={"3.5"} y={"5"} width={"17"} height={"15"} rx={"3"} />
                  <path d={"M3.5 9.5h17M8.5 3v3M15.5 3v3"} />
                  <circle cx={"12"} cy={"15"} r={"1.4"} fill={"currentColor"} stroke={"none"} />
                </svg>
              </div>
              {"\n              "}
              <div style={{flex: "1 1 auto", fontSize: "clamp(28px, 3vw, 46px)", fontWeight: "800", letterSpacing: "-2px", lineHeight: "1.06", color: "#ffffff"}}>
                <span style={{display: "block"}}>
                  {"Decidi le"}
                </span>
                <span style={{display: "block"}}>
                  {"tue regole"}
                </span>
              </div>
              {"\n            "}
            </div>
            {"\n            "}
            <div style={{width: "var(--phone-gap, 420px)"}} />
            {"\n            "}
            <div data-step-right={"0"} style={{justifySelf: "start", width: "clamp(240px, 23vw, 340px)", willChange: "transform"}}>
              {"\n              "}
              <div style={{fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#b6b6c2", textWrap: "pretty"}}>
                {"Orari settimanali, chiusure, ferie e cambi dell'ultimo minuto: le regole le scrivi tu una volta e l'agenda le rispetta da sola."}
              </div>
              {"\n              "}
              <a className={"scp3"} onClick={v.goCore} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "22px", padding: "14px 26px", borderRadius: "12px", background: "#ffffff", color: "#000000", fontSize: "15.5px", fontWeight: "700"}}>
                {"Scopri di più →"}
              </a>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div data-step={"1"} style={{position: "absolute", inset: "0", willChange: "opacity", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)", alignItems: "center", gap: "clamp(20px, 3vw, 56px)"}}>
            {"\n            "}
            <div data-step-left={"1"} style={{justifySelf: "end", width: "clamp(260px, 26vw, 390px)", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px", textAlign: "right", willChange: "transform"}}>
              {"\n              "}
              <div style={{flex: "0 0 auto", display: "flex", color: "#000000"}} data-step-ico={"1"}>
                <svg width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#000000"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} style={{display: "inline-block"}}>
                  <path d={"M4 20h16"} />
                  <path d={"M7 16v-5M12 16V6M17 16v-8"} />
                </svg>
              </div>
              {"\n              "}
              <div style={{flex: "1 1 auto", fontSize: "clamp(28px, 3vw, 46px)", fontWeight: "800", letterSpacing: "-2px", lineHeight: "1.06", color: "#000000"}}>
                <span style={{display: "block"}}>
                  {"Tutto sotto"}
                </span>
                <span style={{display: "block"}}>
                  {"controllo"}
                </span>
              </div>
              {"\n            "}
            </div>
            {"\n            "}
            <div style={{width: "var(--phone-gap, 420px)"}} />
            {"\n            "}
            <div data-step-right={"1"} style={{justifySelf: "start", width: "clamp(240px, 23vw, 340px)", willChange: "transform"}}>
              {"\n              "}
              <div style={{fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#55555f", textWrap: "pretty"}}>
                {"Ogni istruttore vede le sue disponibilità e quante ore ha guidato: totale della settimana, dentro e fuori orario, giorno per giorno. Tu vedi tutti."}
              </div>
              {"\n              "}
              <a className={"scp2"} onClick={v.goIstruttori} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "22px", padding: "14px 26px", borderRadius: "12px", background: "#000000", color: "#ffffff", fontSize: "15.5px", fontWeight: "700"}}>
                {"Scopri di più →"}
              </a>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n          "}
          <div data-step={"2"} style={{position: "absolute", inset: "0", willChange: "opacity", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto minmax(0,1fr)", alignItems: "center", gap: "clamp(20px, 3vw, 56px)"}}>
            {"\n            "}
            <div data-step-left={"2"} style={{justifySelf: "end", width: "clamp(260px, 26vw, 390px)", display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "16px", textAlign: "right", willChange: "transform"}}>
              {"\n              "}
              <div style={{flex: "0 0 auto", display: "flex", color: "#ffffff"}} data-step-ico={"1"}>
                <svg width={"30"} height={"30"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#ffffff"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} style={{display: "inline-block"}}>
                  <path d={"M22 21V19C22 17.1362 20.7252 15.5701 19 15.126M15.5 3.29076C16.9659 3.88415 18 5.32131 18 7C18 8.67869 16.9659 10.1159 15.5 10.7092M17 21C17 19.1362 17 18.2044 16.6955 17.4693C16.2895 16.4892 15.5108 15.7105 14.5307 15.3045C13.7956 15 12.8638 15 11 15H8C6.13623 15 5.20435 15 4.46927 15.3045C3.48915 15.7105 2.71046 16.4892 2.30448 17.4693C2 18.2044 2 19.1362 2 21M13.5 7C13.5 9.20914 11.7091 11 9.5 11C7.29086 11 5.5 9.20914 5.5 7C5.5 4.79086 7.29086 3 9.5 3C11.7091 3 13.5 4.79086 13.5 7Z"} />
                </svg>
              </div>
              {"\n              "}
              <div style={{flex: "1 1 auto", fontSize: "clamp(28px, 3vw, 46px)", fontWeight: "800", letterSpacing: "-2px", lineHeight: "1.06", color: "#ffffff"}}>
                <span style={{display: "block"}}>
                  {"Sempre in tasca,"}
                </span>
                <span style={{display: "block"}}>
                  {"ovunque sei"}
                </span>
              </div>
              {"\n            "}
            </div>
            {"\n            "}
            <div style={{width: "var(--phone-gap, 420px)"}} />
            {"\n            "}
            <div data-step-right={"2"} style={{justifySelf: "start", width: "clamp(240px, 23vw, 340px)", willChange: "transform"}}>
              {"\n              "}
              <div style={{fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#b6b6c2", textWrap: "pretty"}}>
                {"Vedi tutto il percorso dell'allievo e lo gestisci in automatico: guide fatte, ore d'obbligo, scadenze e contatti sempre a portata di mano, anche fuori dall'autoscuola."}
              </div>
              {"\n              "}
              <a className={"scp3"} onClick={v.goSoon} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "22px", padding: "14px 26px", borderRadius: "12px", background: "#ffffff", color: "#000000", fontSize: "15.5px", fontWeight: "700"}}>
                {"Scopri di più →"}
              </a>
              {"\n            "}
            </div>
            {"\n          "}
          </div>
          {"\n    "}
        </div>
        {"\n\n    "}
        {"\n    "}
        <div data-phone-wrap={"1"} style={{position: "absolute", zIndex: "5", left: "50%", top: "50%", transform: "translate(-50%, -50%)", willChange: "transform"}}>
          {"\n      "}
          <div data-phone-frame={"1"} style={{position: "relative", flex: "0 0 auto", width: "340px", height: "556px"}}>
            {"\n        "}
            <img src={"images/site/phone-frame.png"} alt={""} style={{position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", zIndex: "2", pointerEvents: "none"}} />
            {"\n        "}
            <div style={{position: "absolute", left: "15.3%", top: "6.5%", width: "68.9%", height: "88.6%", borderRadius: "33px", overflow: "hidden", background: "#000000", zIndex: "1"}}>
              {"\n          \n          "}
              <div data-phone-screen={"0"} style={{position: "absolute", inset: "0", padding: "0", borderRadius: "33px 33px 0 0", overflow: "hidden", willChange: "transform, opacity"}}>
                {"\n              "}
                <div style={{width: "100%", height: "100%", background: "#ffffff", display: "flex", flexDirection: "column", fontFamily: "Figtree, system-ui, sans-serif", overflow: "hidden"}}>
                  {"\n                "}
                  <div style={{flex: "1 1 auto", minHeight: "0", padding: "20px 16px 0", display: "flex", flexDirection: "column"}}>
                    {"\n                  "}
                    <div style={{display: "flex", padding: "3px", borderRadius: "99px", background: "#f2f2f5"}}>
                      {"\n                    "}
                      <div style={{flex: "1 1 0", textAlign: "center", padding: "6px 0", borderRadius: "99px", background: "#ffffff", fontSize: "11px", fontWeight: "800", color: "#12121a"}}>
                        {"Una volta"}
                      </div>
                      {"\n                    "}
                      <div style={{flex: "1 1 0", textAlign: "center", padding: "6px 0", fontSize: "11px", fontWeight: "700", color: "#9a9aa6"}}>
                        {"Ricorrente"}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{marginTop: "20px", fontSize: "26px", fontWeight: "800", letterSpacing: "-1.3px", lineHeight: "1", color: "#12121a"}}>
                      {"Settembre"}
                    </div>
                    {"\n                  "}
                    <div style={{marginTop: "4px", fontSize: "11px", fontWeight: "600", color: "#9a9aa6"}}>
                      {"Nuova disponibilità · sett. 3"}
                    </div>
                    {"\n                  "}
                    <div style={{height: "1px", background: "#ededf1", margin: "14px 0 10px"}} />
                    {"\n                  "}
                    <div style={{display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))"}}>
                      {"\n                    "}
                      <div style={{textAlign: "center", fontSize: "8.5px", fontWeight: "800", color: "#b6b6c2"}}>
                        {"L"}
                      </div>
                      {"\n                    "}
                      <div style={{textAlign: "center", fontSize: "8.5px", fontWeight: "800", color: "#b6b6c2"}}>
                        {"M"}
                      </div>
                      {"\n                    "}
                      <div style={{textAlign: "center", fontSize: "8.5px", fontWeight: "800", color: "#b6b6c2"}}>
                        {"M"}
                      </div>
                      {"\n                    "}
                      <div style={{textAlign: "center", fontSize: "8.5px", fontWeight: "800", color: "#b6b6c2"}}>
                        {"G"}
                      </div>
                      {"\n                    "}
                      <div style={{textAlign: "center", fontSize: "8.5px", fontWeight: "800", color: "#b6b6c2"}}>
                        {"V"}
                      </div>
                      {"\n                    "}
                      <div style={{textAlign: "center", fontSize: "8.5px", fontWeight: "800", color: "#b6b6c2"}}>
                        {"S"}
                      </div>
                      {"\n                    "}
                      <div style={{textAlign: "center", fontSize: "8.5px", fontWeight: "800", color: "#b6b6c2"}}>
                        {"D"}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", rowGap: "2px", marginTop: "6px"}}>
                      {"\n                    "}
                      <div />
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"1"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"2"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "#e0e0e6"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"3"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "#e0e0e6"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"4"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "#e0e0e6"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"5"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "#e0e0e6"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"6"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"7"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"8"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"9"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"10"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"11"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"12"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#d4d4dc"}}>
                          {"13"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"14"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"15"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "800", background: "#12121a", color: "#ffffff"}}>
                          {"16"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"17"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"18"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "#9a9aa6"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"19"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"20"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"21"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"22"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"23"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"24"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "#9a9aa6"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"25"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"26"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"27"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"28"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"29"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{height: "28px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px"}}>
                        {"\n                      "}
                        <span style={{width: "22px", height: "22px", borderRadius: "99px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "11px", fontWeight: "600", color: "#12121a"}}>
                          {"30"}
                        </span>
                        {"\n                      "}
                        <span style={{width: "3px", height: "3px", borderRadius: "99px", background: "transparent"}} />
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{height: "1px", background: "#ededf1", margin: "16px 0 12px"}} />
                    {"\n                  "}
                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px"}}>
                      {"\n                    "}
                      <span style={{fontSize: "11.5px", fontWeight: "600", color: "#55555f"}}>
                        {"Disponibilità"}
                      </span>
                      {"\n                    "}
                      <span style={{fontSize: "11.5px", fontWeight: "800", color: "#12121a"}}>
                        {"09:00–18:00"}
                      </span>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px", marginTop: "11px"}}>
                      {"\n                    "}
                      <span style={{fontSize: "11.5px", fontWeight: "600", color: "#55555f"}}>
                        {"Istruttore"}
                      </span>
                      {"\n                    "}
                      <span style={{fontSize: "11.5px", fontWeight: "800", color: "#12121a"}}>
                        {"Marco Ronci"}
                      </span>
                      {"\n                  "}
                    </div>
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <div style={{flex: "0 0 auto", padding: "14px 16px 18px"}}>
                    {"\n                  "}
                    <div style={{background: "#12121a", color: "#ffffff", borderRadius: "12px", padding: "10px 0", textAlign: "center", fontSize: "12px", fontWeight: "800"}}>
                      {"Salva disponibilità"}
                    </div>
                    {"\n                "}
                  </div>
                  {"\n              "}
                </div>
                {"\n            "}
              </div>
              {"\n            "}
              <div data-phone-screen={"1"} style={{position: "absolute", inset: "0", padding: "0", borderRadius: "33px 33px 0 0", overflow: "hidden", willChange: "transform, opacity"}}>
                {"\n              "}
                <div style={{width: "100%", height: "100%", background: "#0d0d0d", display: "flex", flexDirection: "column", fontFamily: "Figtree, system-ui, sans-serif"}}>
                  {"\n                "}
                  <div style={{flex: "1 1 auto", minHeight: "0", padding: "20px 16px 16px", display: "flex", flexDirection: "column"}}>
                    {"\n                  "}
                    <div style={{display: "flex", justifyContent: "center"}}>
                      {"\n                    "}
                      <div style={{display: "inline-flex", alignItems: "center", gap: "6px", padding: "6px 13px", border: "1.5px solid #3a3a42", borderRadius: "99px"}}>
                        {"\n                      "}
                        <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#ffffff"} stroke-width={"2"}>
                          <rect x={"3.5"} y={"5"} width={"17"} height={"15"} rx={"3"} />
                          <path d={"M3.5 9.5h17M8.5 3v3M15.5 3v3"} />
                        </svg>
                        {"\n                      "}
                        <span style={{fontSize: "11px", fontWeight: "800", color: "#ffffff"}}>
                          {"Questa settimana"}
                        </span>
                        {"\n                      "}
                        <svg width={"9"} height={"9"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#6a6a74"} stroke-width={"2.6"} stroke-linecap={"round"}>
                          <path d={"M5 8.5l7 7 7-7"} />
                        </svg>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{marginTop: "16px", fontSize: "32px", fontWeight: "800", letterSpacing: "-1.6px", lineHeight: "1", color: "#ffffff"}}>
                      {"9h 30m"}
                    </div>
                    {"\n                  "}
                    <div style={{marginTop: "5px", fontSize: "11px", fontWeight: "600", color: "#8a8a95"}}>
                      {"8 guide · questa settimana"}
                    </div>
                    {"\n                  "}
                    <div style={{height: "1px", background: "#26262c", margin: "14px 0"}} />
                    {"\n                  "}
                    <div style={{display: "grid", gridTemplateColumns: "1fr 1px 1fr", gap: "12px", alignItems: "center"}}>
                      {"\n                    "}
                      <div>
                        {"\n                      "}
                        <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
                          <span style={{width: "6px", height: "6px", borderRadius: "99px", background: "#ffffff"}} />
                          <span style={{fontSize: "10px", fontWeight: "700", color: "#b6b6c2"}}>
                            {"In orario"}
                          </span>
                        </div>
                        {"\n                      "}
                        <div style={{marginTop: "4px", fontSize: "16px", fontWeight: "800", color: "#ffffff"}}>
                          {"8h"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{background: "#26262c", height: "28px"}} />
                      {"\n                    "}
                      <div>
                        {"\n                      "}
                        <div style={{display: "flex", alignItems: "center", gap: "6px"}}>
                          <span style={{width: "6px", height: "6px", borderRadius: "99px", background: "#6f6f7a"}} />
                          <span style={{fontSize: "10px", fontWeight: "700", color: "#8a8a95"}}>
                            {"Fuori orario"}
                          </span>
                        </div>
                        {"\n                      "}
                        <div style={{marginTop: "4px", fontSize: "16px", fontWeight: "800", color: "#ffffff"}}>
                          {"1h 30m"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{display: "grid", gridTemplateColumns: "repeat(7, minmax(0, 1fr))", gap: "5px", alignItems: "end", marginTop: "26px", height: "104px"}}>
                      {"\n                    "}
                      <div style={{display: "grid", gridTemplateRows: "1fr 12px", justifyItems: "center", alignItems: "end", height: "100%", rowGap: "4px"}}>
                        {"\n                      "}
                        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "4px"}}>
                          <div data-bar-val={"0"} style={{fontSize: "8.5px", fontWeight: "800", color: "#8a8a95", opacity: "0"}}>
                            {"2h"}
                          </div>
                          <div data-bar={"0"} data-h={"58"} style={{width: "100%", height: "3px", borderRadius: "3px", background: "#ffffff"}} />
                        </div>
                        {"\n                      "}
                        <div style={{fontSize: "8.5px", fontWeight: "700", color: "#8a8a95"}}>
                          {"Lun"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{display: "grid", gridTemplateRows: "1fr 12px", justifyItems: "center", alignItems: "end", height: "100%", rowGap: "4px"}}>
                        {"\n                      "}
                        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "4px"}}>
                          <div data-bar-val={"1"} style={{fontSize: "8.5px", fontWeight: "800", color: "#8a8a95", opacity: "0"}}>
                            {"1h"}
                          </div>
                          <div data-bar={"1"} data-h={"30"} style={{width: "100%", height: "3px", borderRadius: "3px", background: "#ffffff"}} />
                        </div>
                        {"\n                      "}
                        <div style={{fontSize: "8.5px", fontWeight: "700", color: "#8a8a95"}}>
                          {"Mar"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{display: "grid", gridTemplateRows: "1fr 12px", justifyItems: "center", alignItems: "end", height: "100%", rowGap: "4px"}}>
                        {"\n                      "}
                        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "4px"}}>
                          <div data-bar-val={"2"} style={{fontSize: "8.5px", fontWeight: "800", color: "#8a8a95", opacity: "0"}}>
                            {"3h"}
                          </div>
                          <div data-bar={"2"} data-h={"84"} style={{width: "100%", height: "3px", borderRadius: "3px", background: "#ffffff"}} />
                        </div>
                        {"\n                      "}
                        <div style={{fontSize: "8.5px", fontWeight: "800", color: "#ffffff"}}>
                          {"Mer"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{display: "grid", gridTemplateRows: "1fr 12px", justifyItems: "center", alignItems: "end", height: "100%", rowGap: "4px"}}>
                        {"\n                      "}
                        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "4px"}}>
                          <div data-bar-val={"3"} style={{fontSize: "8.5px", fontWeight: "800", color: "#8a8a95", opacity: "0"}}>
                            {"—"}
                          </div>
                          <div data-bar={"3"} data-h={"0"} style={{width: "100%", height: "3px", borderRadius: "3px", background: "#2e2e36"}} />
                        </div>
                        {"\n                      "}
                        <div style={{fontSize: "8.5px", fontWeight: "700", color: "#8a8a95"}}>
                          {"Gio"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{display: "grid", gridTemplateRows: "1fr 12px", justifyItems: "center", alignItems: "end", height: "100%", rowGap: "4px"}}>
                        {"\n                      "}
                        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "4px"}}>
                          <div data-bar-val={"4"} style={{fontSize: "8.5px", fontWeight: "800", color: "#8a8a95", opacity: "0"}}>
                            {"2h"}
                          </div>
                          <div data-bar={"4"} data-h={"58"} style={{width: "100%", height: "3px", borderRadius: "3px", background: "#ffffff"}} />
                        </div>
                        {"\n                      "}
                        <div style={{fontSize: "8.5px", fontWeight: "700", color: "#8a8a95"}}>
                          {"Ven"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{display: "grid", gridTemplateRows: "1fr 12px", justifyItems: "center", alignItems: "end", height: "100%", rowGap: "4px"}}>
                        {"\n                      "}
                        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "4px"}}>
                          <div data-bar-val={"5"} style={{fontSize: "8.5px", fontWeight: "800", color: "#8a8a95", opacity: "0"}}>
                            {"1h 30m"}
                          </div>
                          <div data-bar={"5"} data-h={"44"} style={{width: "100%", height: "3px", borderRadius: "3px", background: "#6f6f7a"}} />
                        </div>
                        {"\n                      "}
                        <div style={{fontSize: "8.5px", fontWeight: "700", color: "#8a8a95"}}>
                          {"Sab"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div style={{display: "grid", gridTemplateRows: "1fr 12px", justifyItems: "center", alignItems: "end", height: "100%", rowGap: "4px"}}>
                        {"\n                      "}
                        <div style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: "4px"}}>
                          <div data-bar-val={"6"} style={{fontSize: "8.5px", fontWeight: "800", color: "#8a8a95", opacity: "0"}}>
                            {"—"}
                          </div>
                          <div data-bar={"6"} data-h={"0"} style={{width: "100%", height: "3px", borderRadius: "3px", background: "#2e2e36"}} />
                        </div>
                        {"\n                      "}
                        <div style={{fontSize: "8.5px", fontWeight: "700", color: "#8a8a95"}}>
                          {"Dom"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{display: "flex", alignItems: "center", gap: "6px", marginTop: "22px"}}>
                      {"\n                    "}
                      <svg width={"11"} height={"11"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#8a8a95"} stroke-width={"2"}>
                        <circle cx={"12"} cy={"12"} r={"8.4"} />
                        <path d={"M12 7.6V12l3 1.8"} />
                      </svg>
                      {"\n                    "}
                      <span style={{fontSize: "10px", fontWeight: "600", color: "#8a8a95"}}>
                        {"Orario di lavoro 09:00–15:00"}
                      </span>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{height: "1px", background: "#26262c", margin: "20px 0 14px"}} />
                    {"\n                  "}
                    <div style={{display: "flex", flexDirection: "column", gap: "13px"}}>
                      {"\n                    "}
                      <div data-row={"0"} style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px"}}>
                        {"\n                      "}
                        <span style={{fontSize: "11.5px", fontWeight: "600", color: "#b6b6c2"}}>
                          {"Marco Ronci"}
                        </span>
                        {"\n                      "}
                        <span style={{fontSize: "11.5px", fontWeight: "800", color: "#ffffff"}}>
                          {"4h 30m"}
                        </span>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div data-row={"1"} style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px"}}>
                        {"\n                      "}
                        <span style={{fontSize: "11.5px", fontWeight: "600", color: "#b6b6c2"}}>
                          {"Luca Bianco"}
                        </span>
                        {"\n                      "}
                        <span style={{fontSize: "11.5px", fontWeight: "800", color: "#ffffff"}}>
                          {"3h"}
                        </span>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div data-row={"2"} style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px"}}>
                        {"\n                      "}
                        <span style={{fontSize: "11.5px", fontWeight: "600", color: "#b6b6c2"}}>
                          {"Sara De Luca"}
                        </span>
                        {"\n                      "}
                        <span style={{fontSize: "11.5px", fontWeight: "800", color: "#ffffff"}}>
                          {"2h"}
                        </span>
                        {"\n                    "}
                      </div>
                      {"\n                    "}
                      <div data-row={"3"} style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "10px"}}>
                        {"\n                      "}
                        <span style={{fontSize: "11.5px", fontWeight: "600", color: "#b6b6c2"}}>
                          {"Andrea Pieri"}
                        </span>
                        {"\n                      "}
                        <span style={{fontSize: "11.5px", fontWeight: "800", color: "#8a8a95"}}>
                          {"—"}
                        </span>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                "}
                  </div>
                  {"\n              "}
                </div>
                {"\n            "}
              </div>
              {"\n            "}
              <div data-phone-screen={"2"} style={{position: "absolute", inset: "0", padding: "0", borderRadius: "33px 33px 0 0", overflow: "hidden", willChange: "transform, opacity"}}>
                {"\n              "}
                <div style={{width: "100%", height: "100%", background: "#ffffff", padding: "18px 16px 0", fontFamily: "Figtree, system-ui, sans-serif", overflow: "hidden"}}>
                  {"\n                "}
                  <div style={{display: "flex", justifyContent: "flex-end", gap: "7px"}}>
                    {"\n                  "}
                    <div style={{width: "28px", height: "28px", borderRadius: "99px", background: "#f2f2f5", display: "flex", alignItems: "center", justifyContent: "center"}}>
                      {"\n                    "}
                      <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#12121a"} stroke-width={"2.2"} stroke-linecap={"round"}>
                        <circle cx={"11"} cy={"11"} r={"7"} />
                        <path d={"M20 20l-3.5-3.5"} />
                      </svg>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{width: "28px", height: "28px", borderRadius: "99px", background: "#f2f2f5", display: "flex", alignItems: "center", justifyContent: "center"}}>
                      {"\n                    "}
                      <svg width={"13"} height={"13"} viewBox={"0 0 24 24"} fill={"none"} stroke={"#12121a"} stroke-width={"2"} stroke-linecap={"round"} stroke-linejoin={"round"}>
                        <circle cx={"12"} cy={"12"} r={"3"} />
                        <path d={"M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"} />
                      </svg>
                      {"\n                  "}
                    </div>
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <div style={{marginTop: "22px", fontSize: "26px", fontWeight: "800", letterSpacing: "-1.3px", lineHeight: "1", color: "#12121a"}}>
                    {"Allievi"}
                  </div>
                  {"\n                "}
                  <div style={{display: "flex", gap: "7px", marginTop: "14px"}}>
                    {"\n                  "}
                    <div style={{padding: "7px 16px", borderRadius: "99px", background: "#000000", color: "#ffffff", fontSize: "11.5px", fontWeight: "800"}}>
                      {"I miei"}
                    </div>
                    {"\n                  "}
                    <div style={{padding: "7px 16px", borderRadius: "99px", background: "#f2f2f5", color: "#6a6a74", fontSize: "11.5px", fontWeight: "700"}}>
                      {"Tutti"}
                    </div>
                    {"\n                "}
                  </div>
                  {"\n                "}
                  <div style={{display: "flex", flexDirection: "column", gap: "18px", marginTop: "26px"}}>
                    {"\n                  "}
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      {"\n                    "}
                      <div style={{width: "38px", height: "38px", flex: "0 0 auto", borderRadius: "99px", background: "#12121a", color: "#ffffff", fontSize: "12px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        {"MM"}
                      </div>
                      {"\n                    "}
                      <div style={{minWidth: "0"}}>
                        {"\n                      "}
                        <div style={{fontSize: "13px", fontWeight: "800", color: "#12121a"}}>
                          {"Mario Moto"}
                        </div>
                        {"\n                      "}
                        <div style={{marginTop: "2px", fontSize: "10.5px", fontWeight: "600", color: "#9a9aa6"}}>
                          {"7 guide · obbligo 4/6"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      {"\n                    "}
                      <div style={{width: "38px", height: "38px", flex: "0 0 auto", borderRadius: "99px", background: "#f2f2f5", color: "#12121a", fontSize: "12px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        {"AC"}
                      </div>
                      {"\n                    "}
                      <div style={{minWidth: "0"}}>
                        {"\n                      "}
                        <div style={{fontSize: "13px", fontWeight: "800", color: "#12121a"}}>
                          {"Andrea Cera"}
                        </div>
                        {"\n                      "}
                        <div style={{marginTop: "2px", fontSize: "10.5px", fontWeight: "600", color: "#9a9aa6"}}>
                          {"7 guide · obbligo 3/6"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      {"\n                    "}
                      <div style={{width: "38px", height: "38px", flex: "0 0 auto", borderRadius: "99px", background: "#e6e6ea", color: "#12121a", fontSize: "12px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        {"SD"}
                      </div>
                      {"\n                    "}
                      <div style={{minWidth: "0"}}>
                        {"\n                      "}
                        <div style={{fontSize: "13px", fontWeight: "800", color: "#12121a"}}>
                          {"Simone D'Intino"}
                        </div>
                        {"\n                      "}
                        <div style={{marginTop: "2px", fontSize: "10.5px", fontWeight: "600", color: "#9a9aa6"}}>
                          {"18 guide · obbligo 6/6"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      {"\n                    "}
                      <div style={{width: "38px", height: "38px", flex: "0 0 auto", borderRadius: "99px", background: "#f2f2f5", color: "#12121a", fontSize: "12px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        {"FD"}
                      </div>
                      {"\n                    "}
                      <div style={{minWidth: "0"}}>
                        {"\n                      "}
                        <div style={{fontSize: "13px", fontWeight: "800", color: "#12121a"}}>
                          {"Filipp Deriabin"}
                        </div>
                        {"\n                      "}
                        <div style={{marginTop: "2px", fontSize: "10.5px", fontWeight: "600", color: "#9a9aa6"}}>
                          {"0 guide · obbligo 0/6"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                  "}
                    <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                      {"\n                    "}
                      <div style={{width: "38px", height: "38px", flex: "0 0 auto", borderRadius: "99px", background: "#e6e6ea", color: "#12121a", fontSize: "12px", fontWeight: "800", display: "flex", alignItems: "center", justifyContent: "center"}}>
                        {"SR"}
                      </div>
                      {"\n                    "}
                      <div style={{minWidth: "0"}}>
                        {"\n                      "}
                        <div style={{fontSize: "13px", fontWeight: "800", color: "#12121a"}}>
                          {"Serena Ruggiero"}
                        </div>
                        {"\n                      "}
                        <div style={{marginTop: "2px", fontSize: "10.5px", fontWeight: "600", color: "#9a9aa6"}}>
                          {"24 guide · obbligo 6/6"}
                        </div>
                        {"\n                    "}
                      </div>
                      {"\n                  "}
                    </div>
                    {"\n                "}
                  </div>
                  {"\n              "}
                </div>
                {"\n            "}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n\n    "}
        {"\n    "}
        <div data-dots={"1"} style={{position: "absolute", zIndex: "6", left: "50%", transform: "translateX(-50%)", bottom: "30px", display: "flex", alignItems: "center", gap: "8px", willChange: "opacity"}}>
          {"\n      "}
          <span data-phone-dot={"0"} style={{height: "7px", width: "26px", borderRadius: "99px", background: "#ffffff", transition: "width .3s ease, background .3s ease"}} />
          {"\n      "}
          <span data-phone-dot={"1"} style={{height: "7px", width: "9px", borderRadius: "99px", background: "rgba(255,255,255,0.32)", transition: "width .3s ease, background .3s ease"}} />
          {"\n      "}
          <span data-phone-dot={"2"} style={{height: "7px", width: "9px", borderRadius: "99px", background: "rgba(255,255,255,0.32)", transition: "width .3s ease, background .3s ease"}} />
          {"\n    "}
        </div>
        {"\n\n  "}
      </div>
    </div>
    <div data-screen-label={"Numeri"} style={{background: "#ffffff", padding: "110px 0 120px"}}>
      {"\n  "}
      <div data-align-block={"1"} style={{maxWidth: "1269px", margin: "0 auto", padding: "0 20px"}}>
        {"\n    "}
        <h2 style={{margin: "0 0 12px", fontSize: "clamp(30px, 3.4vw, 52px)", fontWeight: "800", letterSpacing: "-2.2px", lineHeight: "1.08", color: "#000000", textAlign: "center"}}>
          {"Cosa cambia con Reglo"}
        </h2>
        {"\n    "}
        <p style={{margin: "0 auto 54px", fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#6a6a74", maxWidth: "540px", textAlign: "center", textWrap: "pretty"}}>
          <>{"Dati aggregati delle autoscuole sulla piattaforma, aggiornati a "}{interp(v.dataNumeri)}{"."}</>
        </p>
        {"\n\n    "}
        <div style={{display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "20px"}}>
          {"\n      "}
          <div style={{background: "#f5f5f7", borderRadius: "20px", padding: "36px 32px 40px", display: "flex", flexDirection: "column"}}>
            {"\n        "}
            <div style={{fontSize: "clamp(42px, 4.6vw, 66px)", fontWeight: "800", letterSpacing: "-2.8px", lineHeight: "1", color: "#000000"}}>
              {"+23,3"}
              <span style={{fontSize: "0.5em", letterSpacing: "-1px"}}>
                {"%"}
              </span>
            </div>
            {"\n        "}
            <div style={{marginTop: "14px", fontSize: "17px", fontWeight: "700", color: "#000000"}}>
              {"guide prenotate dopo l'app allievo"}
            </div>
            {"\n        "}
            <div style={{marginTop: "16px", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.55", color: "#6a6a74", textWrap: "pretty"}}>
              {"In media un'autoscuola fa circa 110 guide in più all'anno, prese dagli allievi senza passare dalla segreteria: a 45 € l'una sono più di 4.900 € di incasso aggiuntivo."}
            </div>
            {"\n      "}
          </div>
          {"\n      "}
          <div style={{background: "#f5f5f7", borderRadius: "20px", padding: "36px 32px 40px", display: "flex", flexDirection: "column"}}>
            {"\n        "}
            <div style={{fontSize: "clamp(42px, 4.6vw, 66px)", fontWeight: "800", letterSpacing: "-2.8px", lineHeight: "1", color: "#000000"}}>
              {"34"}
              <span style={{fontSize: "0.5em", letterSpacing: "-1px"}}>
                {"%"}
              </span>
            </div>
            {"\n        "}
            <div style={{marginTop: "14px", fontSize: "17px", fontWeight: "700", color: "#000000"}}>
              {"di saturazione dell'agenda"}
            </div>
            {"\n        "}
            <div style={{marginTop: "16px", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.55", color: "#6a6a74", textWrap: "pretty"}}>
              {"Le ore di guida vendute sulle ore disponibili. Senza app allievo la stessa agenda si ferma al 19%."}
            </div>
            {"\n      "}
          </div>
          {"\n      "}
          <div style={{background: "#f5f5f7", borderRadius: "20px", padding: "36px 32px 40px", display: "flex", flexDirection: "column"}}>
            {"\n        "}
            <div style={{fontSize: "clamp(42px, 4.6vw, 66px)", fontWeight: "800", letterSpacing: "-2.8px", lineHeight: "1", color: "#000000"}}>
              {"−27"}
              <span style={{fontSize: "0.5em", letterSpacing: "-1px"}}>
                {"%"}
              </span>
            </div>
            {"\n        "}
            <div style={{marginTop: "14px", fontSize: "17px", fontWeight: "700", color: "#000000"}}>
              {"di annullamenti"}
            </div>
            {"\n        "}
            <div style={{marginTop: "16px", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.55", color: "#6a6a74", textWrap: "pretty"}}>
              {"Promemoria automatici, scambi, disdette entro i tuoi limiti e slot che tornano subito prenotabili: meno buchi in agenda."}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n\n    "}
        <div style={{display: "flex", justifyContent: "center", marginTop: "52px"}}>
          {"\n      "}
          <a className={"scp2"} onClick={v.bookCal} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", height: "46px", padding: "0 28px", borderRadius: "12px", background: "#000000", color: "#ffffff", fontSize: "16px", fontWeight: "700"}}>
            {"Prenota una demo"}
          </a>
          {"\n    "}
        </div>
        {"\n  "}
      </div>
    </div>
    <div data-screen-label={"Per chi lavora"} style={{background: "#ffffff", padding: "0 0 120px"}}>
      {"\n  "}
      <div data-align-block={"1"} style={{maxWidth: "1269px", margin: "0 auto", padding: "0 20px"}}>
        {"\n    "}
        <h2 style={{margin: "0 0 12px", fontSize: "clamp(30px, 3.4vw, 52px)", fontWeight: "800", letterSpacing: "-2.2px", lineHeight: "1.08", color: "#000000", textAlign: "center", textWrap: "balance"}}>
          {"Ognuno con il suo Reglo"}
        </h2>
        {"\n    "}
        <p style={{margin: "0 auto 54px", fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#6a6a74", maxWidth: "560px", textAlign: "center", textWrap: "pretty"}}>
          {"Tre persone, tre giornate diverse. La piattaforma è la stessa, ma ognuno vede solo ciò che gli serve."}
        </p>
        {"\n    "}
        <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px"}}>
          {"\n      "}
          <div style={{display: "flex", flexDirection: "column", background: "#f5f5f7", borderRadius: "22px", overflow: "hidden"}}>
            {"\n        "}
            <div style={{position: "relative", width: "100%", aspectRatio: "4 / 3", background: "#ececef"}}>
              {"\n          "}
              <img src={"images/site/titolare-telefono.png"} alt={"Titolare con Reglo sul telefono"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block"}} />
              {"\n        "}
            </div>
            {"\n        "}
            <div style={{display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "34px 32px 36px"}}>
              {"\n          "}
              <div style={{fontSize: "13px", fontWeight: "700", letterSpacing: "1.4px", textTransform: "uppercase", color: "#6a6a74"}}>
                {"Titolare"}
              </div>
              {"\n          "}
              <div style={{marginTop: "14px", fontSize: "24px", fontWeight: "700", letterSpacing: "-0.9px", lineHeight: "1.2", color: "#000000"}}>
                {"Decide le regole una volta"}
              </div>
              {"\n          "}
              <div style={{marginTop: "14px", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.58", color: "#6a6a74", textWrap: "pretty"}}>
                {"Orari, chiusure, quante guide può prenotare un allievo e con quanto preavviso disdire. Poi guarda i numeri: saturazione dell'agenda, incassi, guide per istruttore."}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n      "}
          <div style={{display: "flex", flexDirection: "column", background: "#f5f5f7", borderRadius: "22px", overflow: "hidden"}}>
            {"\n        "}
            <div style={{position: "relative", width: "100%", aspectRatio: "4 / 3", background: "#ececef"}}>
              {"\n          "}
              <img src={"images/site/seg-reception.png"} alt={"La segreteria non fa più il centralino"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
              {"\n        "}
            </div>
            {"\n        "}
            <div style={{display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "34px 32px 36px"}}>
              {"\n          "}
              <div style={{fontSize: "13px", fontWeight: "700", letterSpacing: "1.4px", textTransform: "uppercase", color: "#6a6a74"}}>
                {"Segreteria"}
              </div>
              {"\n          "}
              <div style={{marginTop: "14px", fontSize: "24px", fontWeight: "700", letterSpacing: "-0.9px", lineHeight: "1.2", color: "#000000"}}>
                {"Smette di fare il centralino"}
              </div>
              {"\n          "}
              <div style={{marginTop: "14px", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.58", color: "#6a6a74", textWrap: "pretty"}}>
                {"Le prenotazioni arrivano dall'app, i promemoria partono da soli e i crediti si scalano senza quaderno. Al telefono restano solo le cose che contano davvero."}
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n      "}
          <div style={{display: "flex", flexDirection: "column", background: "#f5f5f7", borderRadius: "22px", overflow: "hidden"}}>
            {"\n        "}
            <div style={{position: "relative", width: "100%", aspectRatio: "4 / 3", background: "#ececef"}}>
              {"\n          "}
              <img src={"images/site/istruttore-guida.png"} alt={"Istruttore in guida con l'allieva"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
              {"\n        "}
            </div>
            {"\n        "}
            <div style={{display: "flex", flexDirection: "column", flex: "1 1 auto", padding: "34px 32px 36px"}}>
              {"\n          "}
              <div style={{fontSize: "13px", fontWeight: "700", letterSpacing: "1.4px", textTransform: "uppercase", color: "#6a6a74"}}>
                {"Istruttore"}
              </div>
              {"\n          "}
              <div style={{marginTop: "14px", fontSize: "24px", fontWeight: "700", letterSpacing: "-0.9px", lineHeight: "1.2", color: "#000000"}}>
                {"Ha la giornata in tasca"}
              </div>
              {"\n          "}
              <div style={{marginTop: "14px", fontSize: "15.5px", fontWeight: "500", lineHeight: "1.58", color: "#6a6a74", textWrap: "pretty"}}>
                {"Guide del giorno, allievi e ore guidate dal telefono. Apre le sue disponibilità, segnala un'assenza e le guide si ricollocano senza passare dalla segreteria."}
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
    <div data-screen-label={"Dispositivi"} style={{background: "#ffffff", padding: "0 0 90px"}}>
      {"\n  "}
      <div data-align-block={"1"} style={{maxWidth: "1269px", margin: "0 auto", padding: "0 20px"}}>
        {"\n    "}
        <h2 style={{margin: "0 0 12px", fontSize: "clamp(30px, 3.4vw, 52px)", fontWeight: "800", letterSpacing: "-2.2px", lineHeight: "1.08", color: "#000000", textAlign: "center", textWrap: "balance"}}>
          {"Disponibile su tutti i dispositivi"}
        </h2>
        {"\n    "}
        <p style={{margin: "0 auto 36px", fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#6a6a74", maxWidth: "560px", textAlign: "center", textWrap: "pretty"}}>
          {"In segreteria dal computer, in auto dal tablet, in guida dal telefono: è sempre la stessa agenda, aggiornata nello stesso istante."}
        </p>
        {"\n\n    "}
        <div style={{position: "relative", width: "100%", maxWidth: "1000px", margin: "0 auto", aspectRatio: "1400 / 760"}}>
          {"\n\n      "}
          <div style={{position: "absolute", left: "13%", top: "0", width: "76%", aspectRatio: "1536 / 1024", zIndex: "1"}}>
            {"\n        "}
            <div style={{position: "absolute", left: "14.26%", top: "18.46%", width: "71.55%", height: "64.65%", overflow: "hidden", background: "#ffffff"}}>
              {"\n          "}
              <img src={"images/site/laptop-screen.png"} alt={""} style={{display: "block", width: "100%", height: "auto"}} />
              {"\n        "}
            </div>
            {"\n        "}
            <img src={"images/site/laptop-frame2.png"} alt={""} style={{position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", objectFit: "contain", pointerEvents: "none"}} />
            {"\n      "}
          </div>
          {"\n\n      "}
          <div style={{position: "absolute", left: "3%", bottom: "0", width: "44%", aspectRatio: "1536 / 1024", zIndex: "2", filter: "drop-shadow(0 26px 44px rgba(0,0,0,0.22))"}}>
            {"\n        "}
            <div style={{position: "absolute", left: "13.9%", top: "14.7%", width: "72.4%", height: "72%", overflow: "hidden", background: "#f4f4f6"}}>
              {"\n          "}
              <img src={"images/site/road-ipad.png"} alt={""} style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block"}} />
              {"\n        "}
            </div>
            {"\n        "}
            <img src={"images/site/tablet-frame.png"} alt={""} style={{position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", objectFit: "contain", pointerEvents: "none"}} />
            {"\n      "}
          </div>
          {"\n\n      "}
          <div style={{position: "absolute", right: "17%", bottom: "0", width: "13.5%", aspectRatio: "400 / 654", zIndex: "3", filter: "drop-shadow(0 22px 38px rgba(0,0,0,0.26))"}}>
            {"\n        "}
            <div style={{position: "absolute", left: "15.3%", top: "6.5%", width: "68.9%", height: "88.6%", borderRadius: "14px", overflow: "hidden", background: "#eef0ec"}}>
              {"\n          "}
              <div style={{position: "absolute", top: "0", left: "0", width: "294.1%", height: "294.1%", transform: "scale(0.34)", transformOrigin: "top left"}}>
                {"\n            "}
                <img src={"images/site/rin-mappa.png"} alt={""} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
                {"\n            "}
                <div style={{position: "absolute", top: "30%", left: "34%", transform: "translate(-50%, -100%)", display: "flex", flexDirection: "column", alignItems: "center"}}>
                  {"\n              "}
                  <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "99px", background: "#ffffff", border: "1.5px solid #e2e2e8", boxShadow: "0 8px 18px rgba(0,0,0,0.18)"}}>
                    <img src={"images/site/icon-stetoscopio.png"} alt={""} style={{width: "17px", height: "17px", objectFit: "contain"}} />
                  </span>
                  {"\n              "}
                  <span style={{width: "2px", height: "8px", background: "#c7c7d0"}} />
                  {"\n            "}
                </div>
                {"\n            "}
                <div style={{position: "absolute", top: "47%", left: "68%", transform: "translate(-50%, -100%)", display: "flex", flexDirection: "column", alignItems: "center"}}>
                  {"\n              "}
                  <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "34px", height: "34px", borderRadius: "99px", background: "#ffffff", border: "1.5px solid #e2e2e8", boxShadow: "0 8px 18px rgba(0,0,0,0.18)"}}>
                    <img src={"images/site/icon-stetoscopio.png"} alt={""} style={{width: "17px", height: "17px", objectFit: "contain"}} />
                  </span>
                  {"\n              "}
                  <span style={{width: "2px", height: "8px", background: "#c7c7d0"}} />
                  {"\n            "}
                </div>
                {"\n            "}
                <div style={{position: "absolute", top: "58%", left: "40%", transform: "translate(-50%, -100%)", display: "flex", flexDirection: "column", alignItems: "center"}}>
                  {"\n              "}
                  <span style={{display: "flex", alignItems: "center", justifyContent: "center", width: "46px", height: "46px", borderRadius: "99px", background: "#111111", border: "1.5px solid #111111", boxShadow: "0 8px 18px rgba(0,0,0,0.18)"}}>
                    <img src={"images/site/icon-stetoscopio.png"} alt={""} style={{width: "23px", height: "23px", objectFit: "contain", filter: "invert(1)"}} />
                  </span>
                  {"\n              "}
                  <span style={{width: "2px", height: "8px", background: "#111111"}} />
                  {"\n            "}
                </div>
                {"\n            "}
                <div style={{position: "absolute", left: "14px", right: "14px", top: "58px", display: "flex", alignItems: "center", gap: "10px", padding: "12px 14px", background: "#ffffff", borderRadius: "14px", boxShadow: "0 10px 26px rgba(0,0,0,0.12)"}}>
                  {"\n              "}
                  <svg width={"16"} height={"16"} viewBox={"0 0 24 24"} fill={"none"}>
                    <circle cx={"11"} cy={"11"} r={"7"} stroke={"#9a9aa4"} stroke-width={"2"} />
                    <path d={"M16.5 16.5L21 21"} stroke={"#9a9aa4"} stroke-width={"2"} stroke-linecap={"round"} />
                  </svg>
                  {"\n              "}
                  <span style={{fontSize: "13.5px", fontWeight: "600", color: "#6a6a74"}}>
                    {"Medici certificati vicino a te"}
                  </span>
                  {"\n            "}
                </div>
                {"\n            "}
                <div style={{position: "absolute", left: "12px", right: "12px", bottom: "12px", background: "#ffffff", borderRadius: "20px", padding: "16px 16px 18px", boxShadow: "0 -8px 30px rgba(0,0,0,0.12)"}}>
                  {"\n              "}
                  <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
                    {"\n                "}
                    <span style={{flex: "0 0 auto", width: "42px", height: "42px", borderRadius: "99px", overflow: "hidden", background: "#f3f3f6"}}>
                      <img src={"images/site/rin-dott-serra.png"} alt={"Dott. Serra"} style={{width: "100%", height: "100%", objectFit: "cover", display: "block"}} />
                    </span>
                    {"\n                "}
                    <div style={{flex: "1 1 auto", minWidth: "0"}}>
                      {"\n                  "}
                      <div style={{fontSize: "15px", fontWeight: "700", letterSpacing: "-0.3px", color: "#1c1c1c"}}>
                        {"Dott. Serra"}
                      </div>
                      {"\n                  "}
                      <div style={{fontSize: "12.5px", fontWeight: "500", color: "#9a9aa4"}}>
                        {"Via Favonio 63a · 1,2 km"}
                      </div>
                      {"\n                "}
                    </div>
                    {"\n                "}
                    <span style={{flex: "0 0 auto", fontSize: "12.5px", fontWeight: "700", color: "#1c1c1c"}}>
                      {"mar 17:00"}
                    </span>
                    {"\n              "}
                  </div>
                  {"\n              "}
                  <div style={{marginTop: "14px", padding: "12px 0", borderRadius: "12px", background: "#111111", textAlign: "center", fontSize: "14px", fontWeight: "700", color: "#ffffff"}}>
                    {"Prenota la visita"}
                  </div>
                  {"\n            "}
                </div>
                {"\n          "}
              </div>
              {"\n        "}
            </div>
            {"\n        "}
            <img src={"images/site/phone-frame.png"} alt={""} style={{position: "absolute", inset: "0", width: "100%", height: "100%", display: "block", pointerEvents: "none"}} />
            {"\n      "}
          </div>
          {"\n\n    "}
        </div>
        {"\n\n    "}
        <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "14px", marginTop: "44px"}}>
          {"\n      "}
          <div style={{display: "flex", alignItems: "center", gap: "12px", padding: "14px 26px", borderRadius: "14px", background: "#111111", cursor: "default"}}>
            {"\n        "}
            <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#ffffff"} aria-hidden={"true"}>
              <path d={"M16.6 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.7.8-3.4.8-.7 0-1.8-.8-3-.8-1.5 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.3 2.9 2.3 1.2 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.2.9-1.3 1.3-2.5 1.3-2.6-.1 0-2.6-1-2.6-3.8zM14.4 5.6c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.7-1 2.7 1 .1 2.1-.5 2.7-1.2z"} />
            </svg>
            {"\n        "}
            <span style={{display: "flex", flexDirection: "column", lineHeight: "1.15"}}>
              {"\n          "}
              <span style={{fontSize: "11px", fontWeight: "600", letterSpacing: "0.2px", color: "#a7a7b0"}}>
                {"Scarica su"}
              </span>
              {"\n          "}
              <span style={{fontSize: "16px", fontWeight: "700", letterSpacing: "-0.3px", color: "#ffffff"}}>
                {"App Store"}
              </span>
              {"\n        "}
            </span>
            {"\n      "}
          </div>
          {"\n      "}
          <div style={{display: "flex", alignItems: "center", gap: "12px", padding: "14px 26px", borderRadius: "14px", background: "#111111", cursor: "default"}}>
            {"\n        "}
            <svg width={"22"} height={"22"} viewBox={"0 0 24 24"} fill={"#ffffff"} aria-hidden={"true"}>
              <path d={"M3.6 2.2c-.2.3-.3.7-.3 1.2v17.2c0 .5.1.9.3 1.2l9.1-9.8L3.6 2.2zm10.4 8.5l2.9-3.1L6.4 1.7c-.5-.3-1-.3-1.4-.1l9 9.1zm0 2.6l-9 9.1c.4.2.9.2 1.4-.1l10.5-5.9-2.9-3.1zm6.3-4.1l-2.3-1.3-3.1 3.4 3.1 3.4 2.3-1.3c1-.6 1-2.6 0-3.2z"} />
            </svg>
            {"\n        "}
            <span style={{display: "flex", flexDirection: "column", lineHeight: "1.15"}}>
              {"\n          "}
              <span style={{fontSize: "11px", fontWeight: "600", letterSpacing: "0.2px", color: "#a7a7b0"}}>
                {"Scarica su"}
              </span>
              {"\n          "}
              <span style={{fontSize: "16px", fontWeight: "700", letterSpacing: "-0.3px", color: "#ffffff"}}>
                {"Google Play"}
              </span>
              {"\n        "}
            </span>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n  "}
      </div>
    </div>
    <div data-screen-label={"Loghi clienti"} style={{position: "relative", background: "#000000", padding: "110px 0 110px", overflow: "hidden"}}>
      {"\n  "}
      <div style={{position: "relative", zIndex: "1", textAlign: "center", maxWidth: "1120px", margin: "0 auto 56px", padding: "0 20px"}}>
        {"\n    "}
        <h2 style={{margin: "0", fontSize: "clamp(30px, 3.6vw, 56px)", fontWeight: "800", letterSpacing: "-2.4px", lineHeight: "1.06", color: "#ffffff", textWrap: "balance"}}>
          {"Scelto dalle autoscuole"}
          <br />
          {"che hanno smesso di lavorare a "}
          <span style={{position: "relative", display: "inline-block"}}>
            {"mano"}
            <img src={"images/site/mano.png"} alt={""} style={{position: "absolute", left: "50%", top: "50%", width: "min(520px, 34vw)", maxWidth: "none", opacity: "0.18", transformOrigin: "22% 18%", transform: "translate(-22%, -18%) rotate(-12deg)", filter: "grayscale(1) contrast(1.05)", pointerEvents: "none", zIndex: "-1"}} />
          </span>
        </h2>
        {"\n  "}
      </div>
      {"\n  "}
      <div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
        {"\n    "}
        <div style={{overflow: "hidden", WebkitMaskImage: "linear-gradient(to right, transparent, #000 90px, #000 calc(100% - 90px), transparent)", maskImage: "linear-gradient(to right, transparent, #000 90px, #000 calc(100% - 90px), transparent)"}}>
          {"\n      "}
          <div style={{display: "flex", width: "max-content", animation: "marquee-x 78s linear infinite", animationDelay: "-6s"}}>
            {"\n        "}
            <div style={{display: "flex", alignItems: "center", gap: "18px", paddingRight: "18px"}}>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433433922-0.png"} alt={"Scuola Guida Solferino"} style={{width: "30px", height: "30px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Solferino"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433486809-0.png"} alt={"Consorzio CAR"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Consorzio CAR"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433617678-0.png"} alt={"Autoscuola Ricca"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Ricca"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900758164-0.png"} alt={"Scuola Guida Montreal"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Montreal"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-robatto-scuro.png"} alt={"Autoscuola Robatto"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Robatto"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-alberti-trasparente.png"} alt={"Autoscuola Alberti"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Alberti"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900765822-0.png"} alt={"Gruppo Andrea"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Gruppo Andrea"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900886951-0.png"} alt={"Macchiavello"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Macchiavello"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900743049-0.png"} alt={"Riunite Vicenza"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Riunite Vicenza"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-desensi-trasparente2.png"} alt={"Autoscuola De Sensi"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola De Sensi"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900805082-0.png"} alt={"New Drive"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"New Drive"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900781978-0.png"} alt={"Autoscuola Azzurra"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Azzurra"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900901642-0.png"} alt={"Autoscuola Mameli"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Mameli"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900842591-0.png"} alt={"Easy Driver"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Easy Driver"}
                </span>
                {"\n        "}
              </div>
            </div>
            {"\n        "}
            <div style={{display: "flex", alignItems: "center", gap: "18px", paddingRight: "18px"}}>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433433922-0.png"} alt={"Scuola Guida Solferino"} style={{width: "30px", height: "30px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Solferino"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433486809-0.png"} alt={"Consorzio CAR"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Consorzio CAR"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433617678-0.png"} alt={"Autoscuola Ricca"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Ricca"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900758164-0.png"} alt={"Scuola Guida Montreal"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Montreal"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-robatto-scuro.png"} alt={"Autoscuola Robatto"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Robatto"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-alberti-trasparente.png"} alt={"Autoscuola Alberti"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Alberti"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900765822-0.png"} alt={"Gruppo Andrea"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Gruppo Andrea"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900886951-0.png"} alt={"Macchiavello"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Macchiavello"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900743049-0.png"} alt={"Riunite Vicenza"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Riunite Vicenza"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-desensi-trasparente2.png"} alt={"Autoscuola De Sensi"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola De Sensi"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900805082-0.png"} alt={"New Drive"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"New Drive"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900781978-0.png"} alt={"Autoscuola Azzurra"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Azzurra"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900901642-0.png"} alt={"Autoscuola Mameli"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Mameli"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900842591-0.png"} alt={"Easy Driver"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Easy Driver"}
                </span>
                {"\n        "}
              </div>
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n    "}
        <div style={{overflow: "hidden", WebkitMaskImage: "linear-gradient(to right, transparent, #000 90px, #000 calc(100% - 90px), transparent)", maskImage: "linear-gradient(to right, transparent, #000 90px, #000 calc(100% - 90px), transparent)"}}>
          {"\n      "}
          <div style={{display: "flex", width: "max-content", animation: "marquee-x-rev 92s linear infinite", animationDelay: "-38s"}}>
            {"\n        "}
            <div style={{display: "flex", alignItems: "center", gap: "18px", paddingRight: "18px"}}>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433486809-0.png"} alt={"Consorzio CAR"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Consorzio CAR"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433617678-0.png"} alt={"Autoscuola Ricca"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Ricca"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433433922-0.png"} alt={"Scuola Guida Solferino"} style={{width: "30px", height: "30px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Solferino"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900886951-0.png"} alt={"Macchiavello"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Macchiavello"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900743049-0.png"} alt={"Riunite Vicenza"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Riunite Vicenza"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-desensi-trasparente2.png"} alt={"Autoscuola De Sensi"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola De Sensi"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900805082-0.png"} alt={"New Drive"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"New Drive"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900781978-0.png"} alt={"Autoscuola Azzurra"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Azzurra"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900901642-0.png"} alt={"Autoscuola Mameli"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Mameli"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900842591-0.png"} alt={"Easy Driver"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Easy Driver"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900758164-0.png"} alt={"Scuola Guida Montreal"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Montreal"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-robatto-scuro.png"} alt={"Autoscuola Robatto"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Robatto"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-alberti-trasparente.png"} alt={"Autoscuola Alberti"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Alberti"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900765822-0.png"} alt={"Gruppo Andrea"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Gruppo Andrea"}
                </span>
                {"\n        "}
              </div>
            </div>
            {"\n        "}
            <div style={{display: "flex", alignItems: "center", gap: "18px", paddingRight: "18px"}}>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433486809-0.png"} alt={"Consorzio CAR"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Consorzio CAR"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433617678-0.png"} alt={"Autoscuola Ricca"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Ricca"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433433922-0.png"} alt={"Scuola Guida Solferino"} style={{width: "30px", height: "30px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Solferino"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900886951-0.png"} alt={"Macchiavello"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Macchiavello"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900743049-0.png"} alt={"Riunite Vicenza"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Riunite Vicenza"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-desensi-trasparente2.png"} alt={"Autoscuola De Sensi"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola De Sensi"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900805082-0.png"} alt={"New Drive"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"New Drive"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900781978-0.png"} alt={"Autoscuola Azzurra"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Azzurra"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900901642-0.png"} alt={"Autoscuola Mameli"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Mameli"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900842591-0.png"} alt={"Easy Driver"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Easy Driver"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900758164-0.png"} alt={"Scuola Guida Montreal"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Montreal"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-robatto-scuro.png"} alt={"Autoscuola Robatto"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Robatto"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-alberti-trasparente.png"} alt={"Autoscuola Alberti"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Alberti"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900765822-0.png"} alt={"Gruppo Andrea"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Gruppo Andrea"}
                </span>
                {"\n        "}
              </div>
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n    "}
        <div style={{overflow: "hidden", WebkitMaskImage: "linear-gradient(to right, transparent, #000 90px, #000 calc(100% - 90px), transparent)", maskImage: "linear-gradient(to right, transparent, #000 90px, #000 calc(100% - 90px), transparent)"}}>
          {"\n      "}
          <div style={{display: "flex", width: "max-content", animation: "marquee-x 86s linear infinite", animationDelay: "-22s"}}>
            {"\n        "}
            <div style={{display: "flex", alignItems: "center", gap: "18px", paddingRight: "18px"}}>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900886951-0.png"} alt={"Macchiavello"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Macchiavello"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433433922-0.png"} alt={"Scuola Guida Solferino"} style={{width: "30px", height: "30px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Solferino"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433617678-0.png"} alt={"Autoscuola Ricca"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Ricca"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433486809-0.png"} alt={"Consorzio CAR"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Consorzio CAR"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900765822-0.png"} alt={"Gruppo Andrea"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Gruppo Andrea"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-alberti-trasparente.png"} alt={"Autoscuola Alberti"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Alberti"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-robatto-scuro.png"} alt={"Autoscuola Robatto"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Robatto"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900758164-0.png"} alt={"Scuola Guida Montreal"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Montreal"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900842591-0.png"} alt={"Easy Driver"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Easy Driver"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900901642-0.png"} alt={"Autoscuola Mameli"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Mameli"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900781978-0.png"} alt={"Autoscuola Azzurra"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Azzurra"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900805082-0.png"} alt={"New Drive"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"New Drive"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-desensi-trasparente2.png"} alt={"Autoscuola De Sensi"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola De Sensi"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900743049-0.png"} alt={"Riunite Vicenza"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Riunite Vicenza"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "18px", paddingRight: "18px"}}>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900886951-0.png"} alt={"Macchiavello"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Macchiavello"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433433922-0.png"} alt={"Scuola Guida Solferino"} style={{width: "30px", height: "30px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Solferino"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433617678-0.png"} alt={"Autoscuola Ricca"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Ricca"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1789433486809-0.png"} alt={"Consorzio CAR"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Consorzio CAR"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900765822-0.png"} alt={"Gruppo Andrea"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Gruppo Andrea"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-alberti-trasparente.png"} alt={"Autoscuola Alberti"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Alberti"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-robatto-scuro.png"} alt={"Autoscuola Robatto"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Robatto"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900758164-0.png"} alt={"Scuola Guida Montreal"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Scuola Guida Montreal"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900842591-0.png"} alt={"Easy Driver"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Easy Driver"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900901642-0.png"} alt={"Autoscuola Mameli"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Mameli"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900781978-0.png"} alt={"Autoscuola Azzurra"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola Azzurra"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900805082-0.png"} alt={"New Drive"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"New Drive"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/logo-desensi-trasparente2.png"} alt={"Autoscuola De Sensi"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Autoscuola De Sensi"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
              <div style={{display: "flex", alignItems: "center", gap: "16px", flexShrink: "0", padding: "14px 28px 14px 14px", background: "#1b1b1f", borderRadius: "12px"}}>
                {"\n          "}
                <span style={{width: "52px", height: "52px", borderRadius: "50%", background: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: "0", overflow: "hidden"}}>
                  <img src={"uploads/pasted-1783900743049-0.png"} alt={"Riunite Vicenza"} style={{width: "40px", height: "40px", objectFit: "contain"}} />
                </span>
                {"\n          "}
                <span style={{fontSize: "20px", fontWeight: "700", letterSpacing: "-0.4px", color: "#ffffff", whiteSpace: "nowrap"}}>
                  {"Riunite Vicenza"}
                </span>
                {"\n        "}
              </div>
              {"\n        "}
            </div>
          </div>
          {"\n    "}
        </div>
        {"\n    \n  "}
      </div>
    </div>
    <div data-screen-label={"Recensioni"} style={{background: "#ffffff", padding: "110px 0 120px"}}>
      {"\n  "}
      <div data-align-block={"1"} style={{maxWidth: "1269px", margin: "0 auto", padding: "0 20px"}}>
        {"\n  "}
        <div style={{textAlign: "center", maxWidth: "720px", margin: "0 auto 54px"}}>
          {"\n    "}
          <h2 style={{margin: "0 0 14px", fontSize: "clamp(30px, 3.4vw, 52px)", fontWeight: "800", letterSpacing: "-2.2px", lineHeight: "1.08", color: "#000000", textWrap: "balance"}}>
            {"Chi lo usa, lo dice meglio di noi"}
          </h2>
          {"\n    "}
          <p style={{margin: "0 0 26px", fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#6a6a74", textWrap: "pretty"}}>
            {"Titolari, segreterie e istruttori che hanno smesso di rincorrere telefonate."}
          </p>
          {"\n    "}
          <div style={{display: "inline-flex", alignItems: "center", gap: "12px"}}>
            {"\n      "}
            <span style={{display: "inline-flex", alignItems: "center", gap: "9px", padding: "9px 16px", background: "#ffffff", border: "1px solid #ececf0", borderRadius: "12px", boxShadow: "0 4px 14px rgba(0,0,0,0.06)"}}>
              {"\n        "}
              <img src={"uploads/pasted-1785106260862-0.png"} alt={"App Store"} style={{width: "22px", height: "22px", objectFit: "contain", borderRadius: "5px"}} />
              {"\n        "}
              <span style={{fontSize: "16px", fontWeight: "700", color: "#000000"}}>
                {"4,9"}
              </span>
              {"\n        "}
              <span style={{display: "inline-flex", gap: "2px"}}>
                {"\n          "}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                  <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                </svg>
                {"\n          "}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                  <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                </svg>
                {"\n          "}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                  <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                </svg>
                {"\n          "}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                  <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                </svg>
                {"\n          "}
                <svg width={"15"} height={"15"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                  <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                </svg>
                {"\n        "}
              </span>
              {"\n      "}
            </span>
            {"\n      "}
            <span style={{fontSize: "15px", fontWeight: "500", color: "#6f6f7c"}}>
              {"· recensioni su App Store"}
            </span>
            {"\n    "}
          </div>
          {"\n  "}
        </div>
        {"\n\n  "}
        <div style={sty(v.wallStyle)}>
          {"\n    "}
          <div style={{columnCount: "3", columnGap: "20px"}}>
            {"\n      "}
            {(v.reviews ?? []).map((rv: any, __i0: number) => (
                <React.Fragment key={__i0}>
                  {"\n      "}
                  <div style={{breakInside: "avoid", width: "100%", display: "inline-flex", flexDirection: "column", gap: "12px", background: "#f5f5f7", borderRadius: "20px", padding: "28px 28px 24px", marginBottom: "20px"}}>
                  {"\n        "}
                  <div style={{fontSize: "16.5px", fontWeight: "700", letterSpacing: "-0.3px", color: "#000000", lineHeight: "1.3"}}>
                    <>{interp(rv?.title)}</>
                  </div>
                  {"\n        "}
                  <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    {"\n          "}
                    <span style={{display: "inline-flex", gap: "2px"}}>
                      {"\n            "}
                      <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                        <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                      </svg>
                      {"\n            "}
                      <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                        <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                      </svg>
                      {"\n            "}
                      <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                        <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                      </svg>
                      {"\n            "}
                      <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                        <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                      </svg>
                      {"\n            "}
                      <svg width={"14"} height={"14"} viewBox={"0 0 24 24"} fill={"#e8c76a"}>
                        <path d={"M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2l-6.1 3.4 1.4-6.8L2.2 9.1l6.9-.8z"} />
                      </svg>
                      {"\n          "}
                    </span>
                    {"\n          "}
                    <span style={{fontSize: "12.5px", fontWeight: "500", color: "#6f6f7c"}}>
                      <>{interp(rv?.date)}</>
                    </span>
                    {"\n        "}
                  </div>
                  {"\n        "}
                  <p style={{margin: "0", fontSize: "14.5px", fontWeight: "500", lineHeight: "1.6", color: "#5a5a66"}}>
                    <>{interp(rv?.text)}</>
                  </p>
                  {"\n        "}
                  {rv?.img ? <>
                      {"\n          "}
                      <div style={{borderRadius: "14px", overflow: "hidden", background: "#e9e9ee"}}>
                      {"\n            "}
                      <img src={"images/site/cartaceo-agenda.jpg"} alt={"L'agenda cartacea prima di Reglo"} style={{width: "100%", display: "block", aspectRatio: "4 / 3", objectFit: "cover"}} />
                      {"\n          "}
                    </div>
                      {"\n        "}
                    </> : null}
                  {"\n        "}
                  <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                    {"\n          "}
                    <span style={sty(rv?.avatarStyle)}>
                      <>{interp(rv?.initials)}</>
                    </span>
                    {"\n          "}
                    <span style={{minWidth: "0"}}>
                      <span style={{display: "block", fontSize: "13.5px", fontWeight: "700", color: "#000000"}}>
                        <>{interp(rv?.name)}</>
                      </span>
                      <span style={{display: "block", fontSize: "12px", fontWeight: "500", color: "#6f6f7c"}}>
                        <>{interp(rv?.role)}</>
                      </span>
                    </span>
                    {"\n        "}
                  </div>
                  {"\n      "}
                </div>
                  {"\n      "}
                </React.Fragment>
              ))}
            {"\n    "}
          </div>
          {"\n    "}
          {v.reviewsClosed ? <>
              {"\n      "}
              <div style={{position: "absolute", left: "0", right: "0", bottom: "0", height: "200px", background: "linear-gradient(to bottom, rgba(255,255,255,0), #ffffff 80%)", pointerEvents: "none"}} />
              {"\n    "}
            </> : null}
          {"\n  "}
        </div>
        {"\n  "}
        <div style={{display: "flex", justifyContent: "center", position: "relative", zIndex: "5", marginTop: v.reviewsOpen ? '20px' : '-18px'}}>
          {"\n    "}
          <span className={"scp2"} onClick={v.toggleReviews} style={{display: "inline-flex", alignItems: "center", height: "46px", padding: "0 28px", background: "#000000", borderRadius: "12px", fontSize: "16px", fontWeight: "700", color: "#ffffff", cursor: "pointer", userSelect: "none"}}>
            <>{interp(v.reviewsBtnLabel)}</>
          </span>
          {"\n  "}
        </div>
        {"\n  "}
      </div>
    </div>
    <div data-screen-label={"Storie"} data-align-block={"1"} style={{maxWidth: "1269px", margin: "0 auto", padding: "110px 20px 120px"}}>
      {"\n  "}
      <div style={{textAlign: "center", maxWidth: "720px", margin: "0 auto 54px", padding: "0 20px"}}>
        {"\n    "}
        <h2 style={{margin: "0 0 14px", fontSize: "clamp(30px, 3.4vw, 52px)", fontWeight: "800", letterSpacing: "-2.2px", lineHeight: "1.08", color: "#000000", textWrap: "balance"}}>
          {"Come sono passate a Reglo"}
        </h2>
        {"\n    "}
        <p style={{margin: "0", fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#6a6a74", textWrap: "pretty"}}>
          {"Il 98% preferisce Reglo alla soluzione precedente. La migrazione completa dura circa una settimana e la guida il nostro Team."}
        </p>
        {"\n  "}
      </div>
      {"\n  "}
      <div ref={v.passaRef} style={{display: "flex", gap: "20px", overflowX: "auto", scrollbarWidth: "none", scrollSnapType: "x mandatory"}}>
        {"\n\n    "}
        <div style={{position: "relative", flex: "0 0 calc((100% - 40px) / 3)", height: "620px", scrollSnapAlign: "start", borderRadius: "22px", overflow: "hidden", background: "#23233c"}}>
          {"\n      "}
          <img src={"uploads/Screenshot 2026-07-13 alle 02.22.09.png"} alt={"Scuola Guida Montreal"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} />
          {"\n      "}
          <div style={{position: "absolute", inset: "0", background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.62) 100%)", pointerEvents: "none"}} />
          {"\n      "}
          <img src={"uploads/logo-montreal-bianco.png"} alt={"Scuola Guida Montreal"} style={{position: "absolute", top: "22px", left: "24px", height: "62px", width: "auto", objectFit: "contain", pointerEvents: "none", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.25))"}} />
          {"\n      "}
          <div style={{position: "absolute", left: "24px", right: "24px", bottom: "24px", pointerEvents: "none"}}>
            {"\n        "}
            <div style={{fontSize: "23px", fontWeight: "700", letterSpacing: "-0.4px", lineHeight: "1.25", color: "#ffffff", marginBottom: "20px"}}>
              {"“Ho smesso di essere la segretaria di turno”"}
            </div>
            {"\n        "}
            <div style={{display: "flex", gap: "28px"}}>
              {"\n          "}
              <div>
                <div style={{fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginBottom: "8px"}}>
                  {"Allievi"}
                </div>
                <span style={{display: "inline-flex", padding: "6px 15px", background: "#ffffff", borderRadius: "12px", fontSize: "13.5px", fontWeight: "700", color: "#000000"}}>
                  {"150-200"}
                </span>
              </div>
              {"\n          "}
              <div>
                <div style={{fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginBottom: "8px"}}>
                  {"Provincia"}
                </div>
                <span style={{display: "inline-flex", padding: "6px 15px", background: "rgba(20,20,20,0.55)", border: "1px solid rgba(255,255,255,0.35)", borderRadius: "12px", fontSize: "13.5px", fontWeight: "700", color: "#ffffff"}}>
                  {"Verona"}
                </span>
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n\n    "}
        <div style={{position: "relative", flex: "0 0 calc((100% - 40px) / 3)", height: "620px", scrollSnapAlign: "start", borderRadius: "22px", overflow: "hidden", background: "#23233c"}}>
          {"\n      "}
          <img src={"uploads/Screenshot 2026-07-13 alle 02.37.35.png"} alt={"Autoscuola Macchiavello Carasco"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} />
          {"\n      "}
          <div style={{position: "absolute", inset: "0", background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.62) 100%)", pointerEvents: "none"}} />
          {"\n      "}
          <img src={"uploads/logo-macchiavello-bianco.png"} alt={"Autoscuola Macchiavello Carasco"} style={{position: "absolute", top: "22px", left: "24px", height: "68px", width: "auto", objectFit: "contain", pointerEvents: "none", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.25))"}} />
          {"\n      "}
          <div style={{position: "absolute", left: "24px", right: "24px", bottom: "24px", pointerEvents: "none"}}>
            {"\n        "}
            <div style={{fontSize: "23px", fontWeight: "700", letterSpacing: "-0.4px", lineHeight: "1.25", color: "#ffffff", marginBottom: "20px"}}>
              {"“Sono tornata ad avere fiducia negli allievi”"}
            </div>
            {"\n        "}
            <div style={{display: "flex", gap: "28px"}}>
              {"\n          "}
              <div>
                <div style={{fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginBottom: "8px"}}>
                  {"Allievi"}
                </div>
                <span style={{display: "inline-flex", padding: "6px 15px", background: "#ffffff", borderRadius: "12px", fontSize: "13.5px", fontWeight: "700", color: "#000000"}}>
                  {"500+"}
                </span>
              </div>
              {"\n          "}
              <div>
                <div style={{fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginBottom: "8px"}}>
                  {"Provincia"}
                </div>
                <span style={{display: "inline-flex", padding: "6px 15px", background: "rgba(20,20,20,0.55)", border: "1px solid rgba(255,255,255,0.35)", borderRadius: "12px", fontSize: "13.5px", fontWeight: "700", color: "#ffffff"}}>
                  {"Genova"}
                </span>
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n\n    "}
        <div style={{position: "relative", flex: "0 0 calc((100% - 40px) / 3)", height: "620px", scrollSnapAlign: "start", borderRadius: "22px", overflow: "hidden", background: "#23233c"}}>
          {"\n      "}
          <img src={"images/site/storia-newdrive.png"} alt={"Autoscuola New Drive"} style={{position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover"}} />
          {"\n      "}
          <div style={{position: "absolute", inset: "0", background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.62) 100%)", pointerEvents: "none"}} />
          {"\n      "}
          <img src={"images/site/logo-newdrive-bianco.png"} alt={"Autoscuola New Drive"} style={{position: "absolute", top: "22px", left: "24px", height: "44px", width: "auto", objectFit: "contain", pointerEvents: "none", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.25))"}} />
          {"\n      "}
          <div style={{position: "absolute", left: "24px", right: "24px", bottom: "24px", pointerEvents: "none"}}>
            {"\n        "}
            <div style={{fontSize: "23px", fontWeight: "700", letterSpacing: "-0.4px", lineHeight: "1.25", color: "#ffffff", marginBottom: "20px"}}>
              {"“Prenotano da soli, anche la domenica sera”"}
            </div>
            {"\n        "}
            <div style={{display: "flex", gap: "28px"}}>
              {"\n          "}
              <div>
                <div style={{fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginBottom: "8px"}}>
                  {"Allievi"}
                </div>
                <span style={{display: "inline-flex", padding: "6px 15px", background: "#ffffff", borderRadius: "12px", fontSize: "13.5px", fontWeight: "700", color: "#000000"}}>
                  {"200-250"}
                </span>
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n\n    "}
        <div style={{position: "relative", flex: "0 0 calc((100% - 40px) / 3)", height: "620px", scrollSnapAlign: "start", borderRadius: "22px", overflow: "hidden", background: "#23233c"}}>
          {"\n      "}
          <img src={"images/site/storia-robatto.png"} alt={"Autoscuola Robatto"} style={{position: "absolute", inset: "0", width: "100%", height: "660px", objectFit: "cover", objectPosition: "center 30%", left: "0px", top: "-12px"}} />
          {"\n      "}
          <div style={{position: "absolute", inset: "0", background: "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 30%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.62) 100%)", pointerEvents: "none", width: "100%", height: "100%"}} />
          {"\n      "}
          <img src={"uploads/logo-robatto-bianco-v2.png"} alt={"Autoscuola Robatto"} style={{position: "absolute", top: "22px", left: "24px", height: "58px", width: "auto", objectFit: "contain", pointerEvents: "none", filter: "drop-shadow(0 1px 6px rgba(0,0,0,0.25))"}} />
          {"\n      "}
          <div style={{position: "absolute", left: "24px", right: "24px", bottom: "24px", pointerEvents: "none"}}>
            {"\n        "}
            <div style={{fontSize: "23px", fontWeight: "700", letterSpacing: "-0.4px", lineHeight: "1.25", color: "#ffffff", marginBottom: "20px"}}>
              {"“Le guide di gruppo sono nate da una nostra richiesta”"}
            </div>
            {"\n        "}
            <div style={{display: "flex", gap: "28px"}}>
              {"\n          "}
              <div>
                <div style={{fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginBottom: "8px"}}>
                  {"Allievi"}
                </div>
                <span style={{display: "inline-flex", padding: "6px 15px", background: "#ffffff", borderRadius: "12px", fontSize: "13.5px", fontWeight: "700", color: "#000000"}}>
                  {"350-400"}
                </span>
              </div>
              {"\n          "}
              <div>
                <div style={{fontSize: "11px", fontWeight: "700", letterSpacing: "1px", color: "rgba(255,255,255,0.75)", textTransform: "uppercase", marginBottom: "8px"}}>
                  {"Provincia"}
                </div>
                <span style={{display: "inline-flex", padding: "6px 15px", background: "rgba(20,20,20,0.55)", border: "1px solid rgba(255,255,255,0.35)", borderRadius: "12px", fontSize: "13.5px", fontWeight: "700", color: "#ffffff"}}>
                  {"Savona"}
                </span>
              </div>
              {"\n        "}
            </div>
            {"\n      "}
          </div>
          {"\n    "}
        </div>
        {"\n\n  "}
      </div>
      {"\n  "}
      <div style={{display: "flex", justifyContent: "center", gap: "12px", padding: "34px 44px 0"}}>
        {"\n    "}
        <span className={"scp4"} onClick={v.passaPrev} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", width: "74px", height: "46px", border: "1.5px solid #ececf0", borderRadius: "12px", cursor: "pointer", userSelect: "none", background: "#ffffff", color: "#000000"}}>
          <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"}>
            <path d={"M16 10H4M9 5l-5 5 5 5"} stroke={"currentColor"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} />
          </svg>
        </span>
        {"\n    "}
        <span className={"scp4"} onClick={v.passaNext} style={{display: "inline-flex", alignItems: "center", justifyContent: "center", width: "74px", height: "46px", border: "1.5px solid #ececf0", borderRadius: "12px", cursor: "pointer", userSelect: "none", background: "#ffffff", color: "#000000"}}>
          <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"}>
            <path d={"M4 10h12M11 5l5 5-5 5"} stroke={"currentColor"} stroke-width={"1.8"} stroke-linecap={"round"} stroke-linejoin={"round"} />
          </svg>
        </span>
        {"\n  "}
      </div>
    </div>
    <div data-screen-label={"FAQ"} data-align-block={"1"} style={{maxWidth: "1269px", margin: "0 auto", padding: "110px 20px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(32px, 5vw, 72px)", alignItems: "start"}}>
      {"\n  "}
      <div>
        {"\n    "}
        <h2 style={{margin: "0 0 16px", fontSize: "clamp(30px, 3.4vw, 52px)", fontWeight: "800", letterSpacing: "-2.2px", lineHeight: "1.08", color: "#000000"}}>
          {"Domande frequenti"}
        </h2>
        {"\n    "}
        <p style={{margin: "0", fontSize: "18px", fontWeight: "500", lineHeight: "1.6", color: "#6a6a74", maxWidth: "380px", textWrap: "pretty"}}>
          {"Abbiamo cercato di rispondere alle domande che riceviamo più spesso. Se la tua non c'è, saremo felici di darti la risposta: "}
          <a className={"scp5"} href={"mailto:support@reglo.it"} style={{fontWeight: "700", color: "#000000", textDecoration: "none"}}>
            {"support@reglo.it"}
          </a>
        </p>
        {"\n    \n  "}
      </div>
      {"\n  "}
      <div style={{display: "flex", flexDirection: "column"}}>
        {"\n    "}
        {(v.faqs ?? []).map((fq: any, __i1: number) => (
            <React.Fragment key={__i1}>
              {"\n      "}
              <div style={{borderBottom: "1px solid #ececf0"}}>
              {"\n        "}
              <div className={"scp6"} onClick={fq?.onToggle} style={{display: "flex", alignItems: "center", gap: "20px", padding: "24px 2px", cursor: "pointer", userSelect: "none"}}>
                {"\n          "}
                <span style={{flex: "1", fontSize: "18px", fontWeight: "700", letterSpacing: "-0.3px", color: "#000000", lineHeight: "1.4"}}>
                  <>{interp(fq?.q)}</>
                </span>
                {"\n          "}
                <svg width={"18"} height={"18"} viewBox={"0 0 16 16"} fill={"none"} style={sty(fq?.chevStyle)}>
                  <path d={"M4 6l4 4 4-4"} stroke={"#6f6f7c"} stroke-width={"1.6"} stroke-linecap={"round"} stroke-linejoin={"round"} />
                </svg>
                {"\n        "}
              </div>
              {"\n        "}
              {fq?.open ? <>
                  {"\n          "}
                  <div style={{padding: "0 40px 26px 2px", fontSize: "16.5px", fontWeight: "500", lineHeight: "1.65", color: "#6a6a74"}}>
                  <>{interp(fq?.a)}</>
                </div>
                  {"\n        "}
                </> : null}
              {"\n      "}
            </div>
              {"\n    "}
            </React.Fragment>
          ))}
        {"\n  "}
      </div>
    </div>
    <div data-screen-label={"Consiglia"} style={{background: "#ffffff", padding: "110px 0 130px"}}>
      {"\n  "}
      <div data-align-block={"1"} id={"codice"} style={{maxWidth: "1269px", margin: "0 auto", padding: "0 20px"}}>
        {"\n    "}
        <div style={{textAlign: "center", maxWidth: "720px", margin: "0 auto 54px"}}>
          {"\n      "}
          <h2 style={{margin: "0 0 14px", fontSize: "clamp(30px, 3.4vw, 52px)", fontWeight: "800", letterSpacing: "-2.2px", lineHeight: "1.08", color: "#000000", textWrap: "balance"}}>
            {"Manchi solo tu"}
          </h2>
          {"\n      \n    "}
        </div>
        {"\n\n    "}
        <div style={{display: "flex", justifyContent: "center"}}>
          {"\n      "}
          <a className={"scp2"} onClick={v.bookCal} style={{cursor: "pointer", display: "inline-flex", alignItems: "center", height: "50px", padding: "0 30px", borderRadius: "12px", background: "#000000", color: "#ffffff", fontSize: "16.5px", fontWeight: "700", textDecoration: "none"}}>
            {"Prenota una demo"}
          </a>
          {"\n    "}
        </div>
        {"\n\n  "}
      </div>
    </div>
    </>
  );
}
