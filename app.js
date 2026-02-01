
const STORAGE_KEY = "alphaLeagueState_v1";
const DIV_META = {
  1: { logo: "./assets/div/div1.png", label: "α LEAGUE Division 1" },
  2: { logo: "./assets/div/div2.png", label: "α LEAGUE Division 2" },
  3: { logo: "./assets/div/div3.png", label: "α LEAGUE Division 3" },
  4: { logo: "./assets/div/div4.png", label: "α LEAGUE Division 4" },
};
const DIV_RULES = {
  1: { championRanks:[1], promotionTopN:0, topPlayoffRank:null, bottomPlayoffK:3, relegationBottomN:2, showRelegation:true },
  2: { championRanks:[], promotionTopN:2, topPlayoffRank:3, bottomPlayoffK:3, relegationBottomN:2, showRelegation:true },
  3: { championRanks:[], promotionTopN:2, topPlayoffRank:3, bottomPlayoffK:3, relegationBottomN:2, showRelegation:true },
  4: { championRanks:[], promotionTopN:2, topPlayoffRank:3, bottomPlayoffK:3, relegationBottomN:2, showRelegation:false },
};
const DEFAULT_STATE = {"version": 1, "league": {"name": "ALLIANCE BATTLE α", "emblem": "./assets/league-emblem.jpeg"}, "activeSeasonId": "s1", "activeDiv": 1, "activeRoundByDiv": {"1": null, "2": null, "3": null, "4": null}, "seasons": [{"id": "s1", "name": "Season 1", "divisions": {"1": {"teams": [{"id": "d1t1", "name": "GUROU", "logo": "./assets/teams/div1/GUROU.jpeg"}, {"id": "d1t2", "name": "WIZARD", "logo": "./assets/teams/div1/WIZARD.jpeg"}, {"id": "d1t3", "name": "NAKAYOSHIKOYOSHI", "logo": "./assets/teams/div1/NAKAYOSHIKOYOSHI.jpeg"}, {"id": "d1t4", "name": "TAKI", "logo": "./assets/teams/div1/TAKI.jpeg"}, {"id": "d1t5", "name": "NEXUS", "logo": "./assets/teams/div1/NEXUS.jpeg"}, {"id": "d1t6", "name": "MIRU KING", "logo": "./assets/teams/div1/MIRU_KING.jpeg"}, {"id": "d1t7", "name": "PIMAN TRIBE", "logo": "./assets/teams/div1/PIMAN_TRIBE.jpeg"}, {"id": "d1t8", "name": "FREESIA", "logo": "./assets/teams/div1/FREESIA.jpeg"}, {"id": "d1t9", "name": "KAGURA", "logo": "./assets/teams/div1/KAGURA.jpeg"}, {"id": "d1t10", "name": "LETHAL", "logo": "./assets/teams/div1/LETHAL.jpeg"}], "fixtures": [], "results": [], "settings": {}}, "2": {"teams": [{"id": "d2t1", "name": "MIKAGE", "logo": "./assets/teams/div2/MIKAGE.jpeg"}, {"id": "d2t2", "name": "ZEEBRA", "logo": "./assets/teams/div2/ZEEBRA.jpeg"}, {"id": "d2t3", "name": "REIGETSU", "logo": "./assets/teams/div2/REIGETSU.jpeg"}, {"id": "d2t4", "name": "GHOST BUSTERS", "logo": "./assets/teams/div2/GHOST_BUSTERS.jpeg"}, {"id": "d2t5", "name": "REIROU", "logo": "./assets/teams/div2/REIROU.jpeg"}, {"id": "d2t6", "name": "REIMEI", "logo": "./assets/teams/div2/REIMEI.jpeg"}, {"id": "d2t7", "name": "REVIVE", "logo": "./assets/teams/div2/REVIVE.jpeg"}, {"id": "d2t8", "name": "TWINKLE", "logo": "./assets/teams/div2/TWINKLE.jpeg"}, {"id": "d2t9", "name": "INFINITY", "logo": "./assets/teams/div2/INFINITY.jpeg"}, {"id": "d2t10", "name": "ASCENT", "logo": "./assets/teams/div2/ASCENT.jpeg"}], "fixtures": [], "results": [], "settings": {}}, "3": {"teams": [{"id": "d3t1", "name": "FAMILIA", "logo": "./assets/teams/div3/FAMILIA.jpeg"}, {"id": "d3t2", "name": "IKOMA DSR", "logo": "./assets/teams/div3/IKOMA_DSR.jpeg"}, {"id": "d3t3", "name": "BUDDIES", "logo": "./assets/teams/div3/BUDDIES.jpeg"}, {"id": "d3t4", "name": "LUNA", "logo": "./assets/teams/div3/LUNA.jpeg"}, {"id": "d3t5", "name": "MIYABI", "logo": "./assets/teams/div3/MIYABI.jpeg"}, {"id": "d3t6", "name": "KAKUREGA", "logo": "./assets/teams/div3/KAKUREGA.jpeg"}, {"id": "d3t7", "name": "JINJIN'S", "logo": "./assets/teams/div3/JINJIN_S.jpeg"}, {"id": "d3t8", "name": "NOCTURNE FC", "logo": "./assets/teams/div3/NOCTURNE_FC.jpeg"}, {"id": "d3t9", "name": "AURORA", "logo": "./assets/teams/div3/AURORA.jpeg"}, {"id": "d3t10", "name": "GENERATION", "logo": "./assets/teams/div3/GENERATION.jpeg"}], "fixtures": [], "results": [], "settings": {}}, "4": {"teams": [{"id": "d4t1", "name": "HAYATE", "logo": "./assets/teams/div4/HAYATE.jpeg"}, {"id": "d4t2", "name": "ANFANG", "logo": "./assets/teams/div4/ANFANG.jpeg"}, {"id": "d4t3", "name": "IREMIA", "logo": "./assets/teams/div4/IREMIA.jpeg"}, {"id": "d4t4", "name": "MOGUMOGU", "logo": "./assets/teams/div4/MOGUMOGU.jpeg"}, {"id": "d4t5", "name": "HOUOU", "logo": "./assets/teams/div4/HOUOU.jpeg"}, {"id": "d4t6", "name": "NENJU MUTYU", "logo": "./assets/teams/div4/NENJU_MUTYU.jpeg"}, {"id": "d4t7", "name": "DARK HORSE", "logo": "./assets/teams/div4/DARK_HORSE.jpeg"}, {"id": "d4t8", "name": "AYATAKA", "logo": "./assets/teams/div4/AYATAKA.jpeg"}], "fixtures": [], "results": [], "settings": {}}}}]};

const el = {
  leagueName: document.getElementById("leagueName"),
  leagueEmblem: document.getElementById("leagueEmblem"),
  divTabs: document.getElementById("divTabs"),
  divLogo: document.getElementById("divLogo"),
  divLabel: document.getElementById("divLabel"),
  standingsBody: document.getElementById("standingsBody"),
  roundDivLogo: document.getElementById("roundDivLogo"),
  roundTitle: document.getElementById("roundTitle"),
  roundSelect: document.getElementById("roundSelect"),
  prevRound: document.getElementById("prevRound"),
  nextRound: document.getElementById("nextRound"),
  roundList: document.getElementById("roundList"),
  genScheduleBtn: document.getElementById("genScheduleBtn"),
  seasonBtn: document.getElementById("seasonBtn"),
  seasonLabel: document.getElementById("seasonLabel"),
  seasonMenu: document.getElementById("seasonMenu"),
  adminBtn: document.getElementById("adminBtn"),
  teamModal: document.getElementById("teamModal"),
  teamModalTitle: document.getElementById("teamModalTitle"),
  teamModalClose: document.getElementById("teamModalClose"),
  teamModalBody: document.getElementById("teamModalBody"),
};

let state = loadState();
let prevRankCache = {};

init();

function init(){
  el.leagueName.textContent = state.league?.name ?? "ALLIANCE BATTLE α";
  if(state.league?.emblem) el.leagueEmblem.src = state.league.emblem;

  renderDivTabs();
  renderSeasonMenu();
  el.seasonLabel.textContent = getActiveSeason().name;

  el.prevRound.addEventListener("click", ()=>stepRound(-1));
  el.nextRound.addEventListener("click", ()=>stepRound(1));
  el.roundSelect.addEventListener("change", ()=>setActiveRound(parseInt(el.roundSelect.value,10)));

  el.genScheduleBtn.addEventListener("click", ()=>{
    const div = getActiveDivision();
    if(div.teams.length < 2) return alert("チームが2つ以上必要です。");
    prevRankCache = getRankMap(computeTable(div, state.activeDiv));
    div.fixtures = generateRoundRobin(div.teams.map(t=>t.id));
    saveState();
    refreshAll();
    alert("全日程を生成しました（総当たり1回）。右側の節で予定が見れます。");
  });

  el.seasonBtn.addEventListener("click", ()=>{ el.seasonMenu.hidden = !el.seasonMenu.hidden; });
  document.addEventListener("click", (e)=>{
    const within = el.seasonBtn.contains(e.target) || el.seasonMenu.contains(e.target);
    if(!within) el.seasonMenu.hidden = true;
  });

  el.adminBtn.addEventListener("click", ()=>{
    alert("今は試し版です：\n・Div切替\n・全日程生成\n・順位表(色ライン/矢印)\n・節表示\n・チーム戦績モーダル\n\n次に：結果入力/チーム編集/リーグ名編集/昇降格ワンクリック等を追加します。");
  });

  el.teamModalClose.addEventListener("click", hideTeamModal);
  el.teamModal.addEventListener("click", (e)=>{ if(e.target===el.teamModal) hideTeamModal(); });

  refreshAll();
}

function refreshAll(){
  renderHeader();
  renderStandings();
  renderRoundSelector();
  renderRoundView();
}

function renderHeader(){
  const d = state.activeDiv;
  el.divLogo.src = DIV_META[d].logo;
  el.divLabel.textContent = DIV_META[d].label;
  el.roundDivLogo.src = DIV_META[d].logo;
  el.seasonLabel.textContent = getActiveSeason().name;
  document.title = `${state.league?.name ?? "α LEAGUE"} | ${DIV_META[d].label}`;
}

function renderDivTabs(){
  el.divTabs.innerHTML = "";
  [1,2,3,4].forEach(d=>{
    const btn = document.createElement("button");
    btn.type="button";
    btn.className = "tab" + (state.activeDiv===d ? " active":"");
    btn.innerHTML = `<img src="${DIV_META[d].logo}" alt="Div${d}"/><span>Div.${d}</span>`;
    btn.addEventListener("click", ()=>{
      if(state.activeDiv===d) return;
      prevRankCache = getRankMap(computeTable(getActiveDivision(), state.activeDiv));
      state.activeDiv = d;
      saveState();
      renderDivTabs();
      refreshAll();
    });
    el.divTabs.appendChild(btn);
  });
}

function renderSeasonMenu(){
  el.seasonMenu.innerHTML = "";
  (state.seasons||[]).forEach(s=>{
    const row = document.createElement("div");
    row.style.display="flex"; row.style.justifyContent="space-between"; row.style.gap="10px";
    row.style.padding="10px"; row.style.borderRadius="10px"; row.style.cursor="pointer";
    row.style.border="1px solid rgba(255,255,255,.08)"; row.style.marginBottom="6px";
    row.innerHTML = `<div><div style="font-weight:800">${escapeHtml(s.name)}</div><small style="color:rgba(255,255,255,.55)">${escapeHtml(s.id)}</small></div>
                     <div style="display:flex;gap:8px">
                       <button class="mini" type="button" data-act="rename">✎</button>
                       <button class="mini" type="button" data-act="use">切替</button>
                     </div>`;
    row.querySelector('[data-act="use"]').addEventListener("click", ()=>{
      state.activeSeasonId = s.id; saveState(); el.seasonMenu.hidden=true; refreshAll();
    });
    row.querySelector('[data-act="rename"]').addEventListener("click", ()=>{
      const newName = prompt("シーズン名を入力", s.name);
      if(!newName) return;
      s.name = newName.trim(); saveState(); renderSeasonMenu(); refreshAll();
    });
    el.seasonMenu.appendChild(row);
  });
  const add = document.createElement("div");
  add.style.padding="10px"; add.style.borderRadius="10px"; add.style.border="1px dashed rgba(255,255,255,.18)";
  add.innerHTML = `<div style="font-weight:900">＋ 新しいシーズン（空）</div><small style="color:rgba(255,255,255,.55)">B-start</small>
                   <div style="margin-top:8px"><button class="mini" type="button">作成</button></div>`;
  add.querySelector("button").addEventListener("click", ()=>{
    const id = "s" + (state.seasons.length + 1);
    state.seasons.push({ id, name:`Season ${state.seasons.length+1}`, divisions:{"1":emptyDiv(),"2":emptyDiv(),"3":emptyDiv(),"4":emptyDiv()} });
    state.activeSeasonId = id; saveState(); renderSeasonMenu(); refreshAll();
    alert("新しいシーズンを作成しました（空）。");
  });
  el.seasonMenu.appendChild(add);
}

function emptyDiv(){ return { teams:[], fixtures:[], results:[], settings:{} }; }
function getActiveSeason(){ return (state.seasons||[]).find(s=>s.id===state.activeSeasonId) || state.seasons[0]; }
function getActiveDivision(){ return getActiveSeason().divisions[String(state.activeDiv)]; }

function renderStandings(){
  const divNo = state.activeDiv;
  const div = getActiveDivision();
  const table = computeTable(div);
  table.forEach((row,i)=>row.rank=i+1);

  const prevMap = Object.keys(prevRankCache).length ? prevRankCache : (div._prevRankMap || {});
  const newMap = getRankMap(table);
  div._prevRankMap = newMap;
  saveState();

  el.standingsBody.innerHTML = "";
  table.forEach(r=>{
    const tr = document.createElement("tr");
    const line = getLineClass(divNo, r.rank, table.length);
    if(line) tr.classList.add(line);
    const prev = prevMap[r.team.id];
    const arrow = (prev==null) ? "same" : (r.rank < prev ? "up" : (r.rank > prev ? "down" : "same"));
    tr.innerHTML = `
      <td>${arrowSvg(arrow)}</td>
      <td>${r.rank}</td>
      <td>
        <div class="team" data-team="${r.team.id}">
          <img class="team-logo" src="${r.team.logo}" alt="${escapeHtml(r.team.name)}" />
          <span class="teamname">${escapeHtml(r.team.name)}</span>
        </div>
      </td>
      <td>${r.played}</td><td>${r.w}</td><td>${r.d}</td><td>${r.l}</td>
      <td>${r.gf}</td><td>${r.ga}</td><td>${r.gd}</td><td>${r.pts}</td>
      <td></td>`;
    tr.querySelector(".team").addEventListener("click", ()=>openTeamModal(r.team.id));
    el.standingsBody.appendChild(tr);
  });
}

function computeTable(div){
  const teams = div.teams || [];
  const stats = new Map();
  teams.forEach(t=>stats.set(t.id, {team:t,played:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0}));
  (div.results||[]).forEach(m=>{
    const A = stats.get(m.homeId), B = stats.get(m.awayId);
    if(!A||!B) return;
    A.played++; B.played++;
    A.gf += m.homeGoals; A.ga += m.awayGoals;
    B.gf += m.awayGoals; B.ga += m.homeGoals;
    if(m.homeGoals>m.awayGoals){A.w++;B.l++;A.pts+=3;}
    else if(m.homeGoals<m.awayGoals){B.w++;A.l++;B.pts+=3;}
    else {A.d++;B.d++;A.pts+=1;B.pts+=1;}
  });
  const table = Array.from(stats.values()).map(s=>{ s.gd = s.gf - s.ga; return s; });
  table.sort((a,b)=> b.pts-a.pts || b.gd-a.gd || b.gf-a.gf || a.team.name.localeCompare(b.team.name));
  return table;
}

function getLineClass(divNo, rank, N){
  const r = DIV_RULES[divNo]; if(!r) return "";
  const isBottomK = (k)=> (N>=k && rank === (N-k+1));
  const isBottomN = (n)=> (N>=n && rank >= (N-n+1));
  const isTopN = (n)=> (N>=n && rank <= n);
  if(r.showRelegation && r.relegationBottomN && isBottomN(r.relegationBottomN)) return "line-red";
  if(r.promotionTopN && isTopN(r.promotionTopN)) return "line-green";
  if(r.championRanks && r.championRanks.includes(rank)) return "line-yellow";
  if(r.topPlayoffRank && N>=r.topPlayoffRank && rank===r.topPlayoffRank) return "line-cyan";
  if(r.bottomPlayoffK && isBottomK(r.bottomPlayoffK)) return "line-orange";
  return "";
}

function arrowSvg(kind){
  if(kind==="up") return `<span class="rank-move up"><svg viewBox="0 0 24 24"><path d="M12 4l6 6h-4v10h-4V10H6z"/></svg></span>`;
  if(kind==="down") return `<span class="rank-move down"><svg viewBox="0 0 24 24"><path d="M12 20l-6-6h4V4h4v10h4z"/></svg></span>`;
  return `<span class="rank-move same"><svg viewBox="0 0 24 24"><path d="M9 6l8 6-8 6v-4H4v-4h5z"/></svg></span>`;
}

function getRankMap(table){ const m={}; table.forEach((r,i)=>m[r.team.id]=i+1); return m; }

function renderRoundSelector(){
  const div = getActiveDivision();
  const rounds = getRoundOptions(div);
  el.roundSelect.innerHTML = "";
  rounds.forEach(r=>{
    const o = document.createElement("option");
    o.value = String(r); o.textContent = `第${r}節`; el.roundSelect.appendChild(o);
  });
  let active = getActiveRound();
  if(active==null) active = latestResultRound(div) ?? (rounds[0] ?? 1);
  setActiveRound(active, false);
  el.roundSelect.value = String(active);
}

function renderRoundView(){
  const div = getActiveDivision();
  const round = getActiveRound() ?? 1;
  el.roundTitle.textContent = `Div.${state.activeDiv} 第${round}節`;
  const fixtures = (div.fixtures||[]).filter(m=>m.round===round);
  const results = (div.results||[]).filter(m=>m.round===round);
  const rmap = new Map(results.map(m=>[m.pairKey,m]));
  const list = [];
  if(fixtures.length){
    fixtures.forEach(f=>list.push({fixture:f,result:rmap.get(f.pairKey)||null}));
    results.forEach(r=>{ if(!fixtures.find(f=>f.pairKey===r.pairKey)) list.push({fixture:null,result:r}); });
  } else {
    results.forEach(r=>list.push({fixture:null,result:r}));
  }
  el.roundList.innerHTML = "";
  if(list.length===0){
    el.roundList.innerHTML = `<div style="color:rgba(255,255,255,.55);font-size:12px">この節の試合は未登録です。（全日程生成 or 結果入力）</div>`;
    return;
  }
  list.forEach(item=>{
    const homeId = item.result?.homeId ?? item.fixture?.homeId;
    const awayId = item.result?.awayId ?? item.fixture?.awayId;
    const home = findTeam(homeId), away = findTeam(awayId);
    const row = document.createElement("div");
    row.className = "match";
    if(item.result){
      row.innerHTML = `<div class="home">${escapeHtml(home?.name ?? "—")}</div>
                       <div class="pill-mid score">${item.result.homeGoals} - ${item.result.awayGoals}</div>
                       <div class="away">${escapeHtml(away?.name ?? "—")}</div>`;
    } else {
      row.innerHTML = `<div class="home">${escapeHtml(home?.name ?? "—")}</div>
                       <div class="pill-mid">VS</div>
                       <div class="away">${escapeHtml(away?.name ?? "—")}</div>`;
    }
    el.roundList.appendChild(row);
  });
}

function stepRound(delta){
  const div = getActiveDivision();
  const rounds = getRoundOptions(div);
  if(!rounds.length) return;
  const cur = getActiveRound() ?? rounds[0];
  const idx = rounds.indexOf(cur);
  const next = rounds[Math.max(0, Math.min(rounds.length-1, idx+delta))];
  setActiveRound(next);
  el.roundSelect.value = String(next);
  renderRoundView();
}

function getRoundOptions(div){
  const set = new Set();
  (div.fixtures||[]).forEach(m=>set.add(m.round));
  (div.results||[]).forEach(m=>set.add(m.round));
  return Array.from(set).sort((a,b)=>a-b);
}
function latestResultRound(div){ return (div.results||[]).reduce((m,x)=>Math.max(m,x.round), -Infinity); }
function getActiveRound(){ return state.activeRoundByDiv[String(state.activeDiv)] ?? null; }
function setActiveRound(round, persist=true){ state.activeRoundByDiv[String(state.activeDiv)] = round; if(persist) saveState(); }

function pairKey(a,b){ return (a<b) ? `${a}_${b}` : `${b}_${a}`; }
function generateRoundRobin(teamIds){
  const ids = teamIds.slice();
  const hasBye = (ids.length%2===1);
  if(hasBye) ids.push("__BYE__");
  const N = ids.length, rounds = N-1, half = N/2;
  let arr = ids.slice();
  const list = [];
  for(let r=1;r<=rounds;r++){
    for(let i=0;i<half;i++){
      const a = arr[i], b = arr[N-1-i];
      if(a==="__BYE__"||b==="__BYE__") continue;
      const homeId = (r%2===1) ? a : b;
      const awayId = (r%2===1) ? b : a;
      list.push({round:r,homeId,awayId,pairKey:pairKey(homeId,awayId)});
    }
    arr = [arr[0]].concat([arr[N-1]]).concat(arr.slice(1,N-1));
  }
  return list;
}

function findTeam(teamId){
  const div = getActiveDivision();
  return div.teams.find(t=>t.id===teamId) || null;
}

function openTeamModal(teamId){
  const div = getActiveDivision();
  const team = div.teams.find(t=>t.id===teamId);
  if(!team) return;
  const table = computeTable(div);
  table.forEach((r,i)=>r.rank=i+1);
  const row = table.find(r=>r.team.id===teamId);
  el.teamModalTitle.innerHTML = `<div style="display:flex;align-items:center;gap:10px">
      <img class="team-logo" src="${team.logo}" style="width:34px;height:34px"><div style="font-weight:900">${escapeHtml(team.name)}</div></div>`;
  const s = row || {played:0,w:0,d:0,l:0,gf:0,ga:0,gd:0,pts:0};
  el.teamModalBody.innerHTML = `
    <div>試合: ${s.played} / 勝: ${s.w} / 分: ${s.d} / 負: ${s.l}</div>
    <div>得点: ${s.gf} / 失点: ${s.ga} / 差: ${s.gd} / 勝点: ${s.pts}</div>
    <div style="margin-top:10px;color:rgba(255,255,255,.55)">※ 次ステップで詳細な試合一覧（節ごと）も追加します。</div>`;
  el.teamModal.hidden = false;
}
function hideTeamModal(){ el.teamModal.hidden = true; }

function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return clone(DEFAULT_STATE);
    return deepMerge(clone(DEFAULT_STATE), JSON.parse(raw));
  }catch(e){ return clone(DEFAULT_STATE); }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function deepMerge(a,b){
  if(Array.isArray(a)||Array.isArray(b)) return (b ?? a);
  if(typeof a==="object"&&a&&typeof b==="object"&&b){
    const out = {...a};
    for(const k of Object.keys(b)) out[k] = deepMerge(a[k], b[k]);
    return out;
  }
  return (b ?? a);
}
function clone(o){ return JSON.parse(JSON.stringify(o)); }
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c])); }
