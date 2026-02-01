// ALLIANCE BATTLE α - Team CRUD (localStorage)
const STORAGE_KEY = "alpha_league_state_v4";
const DEFAULT_STATE = {"leagueName": "ALLIANCE BATTLE α", "seasonName": "Season 1", "currentDiv": 1, "divisions": {"1": {"logo": "assets/div/div1.png", "teams": [{"id": "1-GUROU", "name": "GUROU", "div": 1, "logo": "assets/teams/GUROU.png", "pts": 0}, {"id": "1-WIZARD", "name": "WIZARD", "div": 1, "logo": "assets/teams/WIZARD.png", "pts": 0}, {"id": "1-NAKAYOSHIKOYOSHI", "name": "NAKAYOSHIKOYOSHI", "div": 1, "logo": "assets/teams/NAKAYOSHIKOYOSHI.png", "pts": 0}, {"id": "1-TAKI", "name": "TAKI", "div": 1, "logo": "assets/teams/TAKI.png", "pts": 0}, {"id": "1-NEXUS", "name": "NEXUS", "div": 1, "logo": "assets/teams/NEXUS.png", "pts": 0}, {"id": "1-MIRU_KING", "name": "MIRU KING", "div": 1, "logo": "assets/teams/MIRU_KING.png", "pts": 0}, {"id": "1-PIMAN_TRIBE", "name": "PIMAN TRIBE", "div": 1, "logo": "assets/teams/PIMAN_TRIBE.png", "pts": 0}, {"id": "1-FREESIA", "name": "FREESIA", "div": 1, "logo": "assets/teams/FREESIA.png", "pts": 0}, {"id": "1-KAGURA", "name": "KAGURA", "div": 1, "logo": "assets/teams/KAGURA.png", "pts": 0}, {"id": "1-LETHAL", "name": "LETHAL", "div": 1, "logo": "assets/teams/LETHAL.png", "pts": 0}]}, "2": {"logo": "assets/div/div2.png", "teams": [{"id": "2-MIKAGE", "name": "MIKAGE", "div": 2, "logo": "assets/teams/MIKAGE.png", "pts": 0}, {"id": "2-ZEEBRA", "name": "ZEEBRA", "div": 2, "logo": "assets/teams/ZEEBRA.png", "pts": 0}, {"id": "2-REIGETSU", "name": "REIGETSU", "div": 2, "logo": "assets/teams/REIGETSU.png", "pts": 0}, {"id": "2-GHOST_BUSTERS", "name": "GHOST BUSTERS", "div": 2, "logo": "assets/teams/GHOST_BUSTERS.png", "pts": 0}, {"id": "2-REIROU", "name": "REIROU", "div": 2, "logo": "assets/teams/REIROU.png", "pts": 0}, {"id": "2-REIMEI", "name": "REIMEI", "div": 2, "logo": "assets/teams/REIMEI.png", "pts": 0}, {"id": "2-REVIVE", "name": "REVIVE", "div": 2, "logo": "assets/teams/REVIVE.png", "pts": 0}, {"id": "2-TWINKLE", "name": "TWINKLE", "div": 2, "logo": "assets/teams/TWINKLE.png", "pts": 0}, {"id": "2-INFINITY", "name": "INFINITY", "div": 2, "logo": "assets/teams/INFINITY.png", "pts": 0}, {"id": "2-ASCENT", "name": "ASCENT", "div": 2, "logo": "assets/teams/ASCENT.png", "pts": 0}]}, "3": {"logo": "assets/div/div3.png", "teams": [{"id": "3-FAMILIA", "name": "FAMILIA", "div": 3, "logo": "assets/teams/FAMILIA.png", "pts": 0}, {"id": "3-IKOMA_DSR", "name": "IKOMA DSR", "div": 3, "logo": "assets/teams/IKOMA_DSR.png", "pts": 0}, {"id": "3-BUDDIES", "name": "BUDDIES", "div": 3, "logo": "assets/teams/BUDDIES.png", "pts": 0}, {"id": "3-LUNA", "name": "LUNA", "div": 3, "logo": "assets/teams/LUNA.png", "pts": 0}, {"id": "3-MIYABI", "name": "MIYABI", "div": 3, "logo": "assets/teams/MIYABI.png", "pts": 0}, {"id": "3-KAKUREGA", "name": "KAKUREGA", "div": 3, "logo": "assets/teams/KAKUREGA.png", "pts": 0}, {"id": "3-JINJINS", "name": "JINJIN'S", "div": 3, "logo": "assets/teams/JINJINS.png", "pts": 0}, {"id": "3-NOCTURNE_FC", "name": "NOCTURNE FC", "div": 3, "logo": "assets/teams/NOCTURNE_FC.png", "pts": 0}, {"id": "3-AURORA", "name": "AURORA", "div": 3, "logo": "assets/teams/AURORA.png", "pts": 0}, {"id": "3-GENERATION", "name": "GENERATION", "div": 3, "logo": "assets/teams/GENERATION.png", "pts": 0}]}, "4": {"logo": "assets/div/div4.png", "teams": [{"id": "4-HAYATE", "name": "HAYATE", "div": 4, "logo": "assets/teams/HAYATE.png", "pts": 0}, {"id": "4-ANFANG", "name": "ANFANG", "div": 4, "logo": "assets/teams/ANFANG.png", "pts": 0}, {"id": "4-IREMIA", "name": "IREMIA", "div": 4, "logo": "assets/teams/IREMIA.png", "pts": 0}, {"id": "4-MOGUMOGU", "name": "MOGUMOGU", "div": 4, "logo": "assets/teams/MOGUMOGU.png", "pts": 0}, {"id": "4-HOUOU", "name": "HOUOU", "div": 4, "logo": "assets/teams/HOUOU.png", "pts": 0}, {"id": "4-NENJU_MUTYU", "name": "NENJU MUTYU", "div": 4, "logo": "assets/teams/NENJU_MUTYU.png", "pts": 0}, {"id": "4-DARK_HORSE", "name": "DARK HORSE", "div": 4, "logo": "assets/teams/DARK_HORSE.png", "pts": 0}, {"id": "4-AYATAKA", "name": "AYATAKA", "div": 4, "logo": "assets/teams/AYATAKA.png", "pts": 0}]}}};

let state = loadState();

// Elements
const leagueNameEl = document.getElementById("leagueName");
const seasonNameEl = document.getElementById("seasonName");
const divTabs = document.getElementById("divTabs");
const divLogoEl = document.getElementById("divLogo");
const divTitleEl = document.getElementById("divTitle");
const tableBody = document.getElementById("tableBody");

const editLeagueBtn = document.getElementById("editLeagueBtn");
const editSeasonBtn = document.getElementById("editSeasonBtn");
const openAdminBtn = document.getElementById("openAdmin");
const adminModal = document.getElementById("adminModal");
const closeAdminBtn = document.getElementById("closeAdmin");
const adminDivSelect = document.getElementById("adminDivSelect");
const adminTeamList = document.getElementById("adminTeamList");
const newTeamBtn = document.getElementById("newTeamBtn");

const teamIdInput = document.getElementById("teamIdInput");
const teamNameInput = document.getElementById("teamNameInput");
const teamDivInput = document.getElementById("teamDivInput");
const teamLogoInput = document.getElementById("teamLogoInput");
const logoPreview = document.getElementById("logoPreview");
const deleteTeamBtn = document.getElementById("deleteTeamBtn");
const saveTeamBtn = document.getElementById("saveTeamBtn");

init();

function init(){
  hydrateHeader();
  bindDivTabs();
  bindHeaderEdits();
  bindAdmin();
  renderAll();
}

function hydrateHeader(){
  leagueNameEl.textContent = state.leagueName;
  seasonNameEl.textContent = state.seasonName;
}

function bindHeaderEdits(){
  editLeagueBtn.addEventListener("click", ()=>{
    const v = prompt("リーグ名を入力", state.leagueName);
    if(v==null) return;
    state.leagueName = v.trim() || state.leagueName;
    saveState();
    hydrateHeader();
  });
  editSeasonBtn.addEventListener("click", ()=>{
    const v = prompt("シーズン名を入力", state.seasonName);
    if(v==null) return;
    state.seasonName = v.trim() || state.seasonName;
    saveState();
    hydrateHeader();
  });
}

function bindDivTabs(){
  divTabs.querySelectorAll("button.tab").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      divTabs.querySelectorAll("button.tab").forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");
      state.currentDiv = parseInt(btn.dataset.div, 10);
      saveState();
      renderStandings();
      syncDivHeader();
    });
  });
}

function syncDivHeader(){
  const d = String(state.currentDiv);
  divLogoEl.src = state.divisions[d].logo;
  divTitleEl.textContent = `Division $4`;
}

function renderAll(){
  // set active tab
  divTabs.querySelectorAll("button.tab").forEach(b=>{
    b.classList.toggle("active", parseInt(b.dataset.div,10) === state.currentDiv);
  });
  syncDivHeader();
  renderStandings();
}

function renderStandings(){
  const d = String(state.currentDiv);
  const teams = state.divisions[d].teams.slice();
  // For now: sort by pts desc then name
  teams.sort((a,b)=> (b.pts||0)-(a.pts||0) || a.name.localeCompare(b.name));
  tableBody.innerHTML = "";
  teams.forEach((t,i)=>{
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${i+1}</td>
      <td>
        <div class="teamcell">
          <img class="teamlogo" src="${t.logo}" alt="${escapeHtml(t.name)}" onerror="this.src='${makeFallbackDataUrl(t.name)}'">
          <div>
            <div style="font-weight:900">${escapeHtml(t.name)}</div>
            <div class="small">ID: ${escapeHtml(t.id)}</div>
          </div>
        </div>
      </td>
      <td>${t.pts||0}</td>
    `;
    // click to edit
    tr.addEventListener("click", ()=>openEditTeam(t.id));
    tableBody.appendChild(tr);
  });
}

// ---------- Admin modal & CRUD ----------
function bindAdmin(){
  openAdminBtn.addEventListener("click", ()=>openAdmin());
  closeAdminBtn.addEventListener("click", ()=>closeAdmin());
  adminModal.querySelector(".modal-bg").addEventListener("click", ()=>closeAdmin());

  // iOS friendly: allow Esc on desktop
  document.addEventListener("keydown", (e)=>{ if(e.key==="Escape") closeAdmin(); });

  adminDivSelect.addEventListener("change", ()=>renderAdminList());
  newTeamBtn.addEventListener("click", ()=>startNewTeam());

  teamLogoInput.addEventListener("change", handleLogoPick);
  saveTeamBtn.addEventListener("click", saveTeamFromForm);
  deleteTeamBtn.addEventListener("click", deleteTeamFromForm);
}

function openAdmin(){
  adminDivSelect.value = String(state.currentDiv);
  renderAdminList();
  startNewTeam();
  adminModal.classList.remove("hidden");
  adminModal.setAttribute("aria-hidden","false");
  // lock scroll
  document.body.style.overflow="hidden";
}
function closeAdmin(){
  adminModal.classList.add("hidden");
  adminModal.setAttribute("aria-hidden","true");
  document.body.style.overflow="";
  teamLogoInput.value = "";
}

function renderAdminList(){
  const d = adminDivSelect.value;
  const teams = state.divisions[d].teams.slice().sort((a,b)=>a.name.localeCompare(b.name));
  adminTeamList.innerHTML = "";
  if(teams.length===0){
    adminTeamList.innerHTML = `<div class="hint">このDivにはチームがありません。右のフォームで追加できます。</div>`;
    return;
  }
  teams.forEach(t=>{
    const row = document.createElement("div");
    row.className = "teamrow";
    row.innerHTML = `
      <div class="teamrow-left">
        <img class="teamlogo" src="${t.logo}" alt="${escapeHtml(t.name)}" onerror="this.src='${makeFallbackDataUrl(t.name)}'">
        <div style="min-width:0">
          <div class="teamrow-name">${escapeHtml(t.name)}</div>
          <div class="small">pts: ${t.pts||0}</div>
        </div>
      </div>
      <button class="btn">編集</button>
    `;
    row.querySelector("button").addEventListener("click", (e)=>{
      e.stopPropagation();
      openEditTeam(t.id);
    });
    row.addEventListener("click", ()=>openEditTeam(t.id));
    adminTeamList.appendChild(row);
  });
}

function startNewTeam(){
  teamIdInput.value = "";
  teamNameInput.value = "";
  teamDivInput.value = adminDivSelect.value;
  teamLogoInput.value = "";
  logoPreview.src = makeFallbackDataUrl("NEW");
  deleteTeamBtn.disabled = true;
}

function openEditTeam(teamId){
  const found = findTeamById(teamId);
  if(!found) return;
  const {team} = found;
  teamIdInput.value = team.id;
  teamNameInput.value = team.name;
  teamDivInput.value = String(team.div);
  logoPreview.src = team.logo;
  teamLogoInput.value = "";
  deleteTeamBtn.disabled = false;
  // ensure admin list shows the right division
  adminDivSelect.value = String(team.div);
  renderAdminList();
}

function handleLogoPick(){
  const file = teamLogoInput.files?.[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = ()=>{
    logoPreview.src = reader.result;
  };
  reader.readAsDataURL(file);
}

function saveTeamFromForm(){
  const name = (teamNameInput.value || "").trim();
  const div = parseInt(teamDivInput.value,10);
  if(!name) return alert("チーム名を入力してください");

  const existingId = teamIdInput.value || null;
  let logo = logoPreview.src || makeFallbackDataUrl(name);

  // If user didn't pick a file and logoPreview is blank, fallback
  if(!logo || logo === window.location.href) logo = makeFallbackDataUrl(name);

  if(existingId){
    // update
    const found = findTeamById(existingId);
    if(!found) return alert("チームが見つかりません");
    const {team, divKey} = found;

    // prevent duplicate names in same div (optional)
    if(isDuplicateName(name, div, existingId)) return alert("同じDiv内に同名チームがいます");

    // move if div changed
    if(div !== team.div){
      removeTeamById(existingId);
      team.div = div;
      team.id = `${div}-${slug(name)}`;
      team.name = name;
      team.logo = logo;
      addTeamToDiv(team, div);
      teamIdInput.value = team.id;
    } else {
      team.name = name;
      team.logo = logo;
      // if name changed, refresh id (keep stable-ish)
      const newId = `${div}-${slug(name)}`;
      if(newId !== team.id){
        // avoid collision
        if(findTeamById(newId)) return alert("同じIDが既に存在します（名前が被ってます）");
        team.id = newId;
        teamIdInput.value = newId;
      }
    }
  } else {
    // create
    const id = `${div}-${slug(name)}`;
    if(findTeamById(id)) return alert("同じIDが既に存在します（名前が被ってます）");
    if(isDuplicateName(name, div, null)) return alert("同じDiv内に同名チームがいます");
    const team = {id, name, div, logo, pts:0};
    addTeamToDiv(team, div);
    teamIdInput.value = team.id;
    deleteTeamBtn.disabled = false;
  }

  saveState();
  renderAdminList();
  // If current div changed or we're viewing that div, refresh standings
  renderAll();
  alert("保存しました");
}

function deleteTeamFromForm(){
  const id = teamIdInput.value;
  if(!id) return;
  const found = findTeamById(id);
  if(!found) return;
  if(!confirm("このチームを削除します。よろしいですか？")) return;
  removeTeamById(id);
  saveState();
  renderAdminList();
  renderAll();
  startNewTeam();
}

function addTeamToDiv(team, div){
  state.divisions[String(div)].teams.push(team);
}
function removeTeamById(id){
  for(const d of ["1","2","3","4"]){
    const arr = state.divisions[d].teams;
    const idx = arr.findIndex(t=>t.id===id);
    if(idx>=0){ arr.splice(idx,1); return true; }
  }
  return false;
}
function findTeamById(id){
  for(const d of ["1","2","3","4"]){
    const team = state.divisions[d].teams.find(t=>t.id===id);
    if(team) return {team, divKey:d};
  }
  return null;
}
function isDuplicateName(name, div, exceptId){
  const arr = state.divisions[String(div)].teams;
  return arr.some(t=> t.name.toLowerCase()===name.toLowerCase() && t.id!==exceptId);
}

// ---------- Storage ----------
function loadState(){
  try{
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return deepMerge(structuredClone(DEFAULT_STATE), parsed);
  }catch(e){
    return structuredClone(DEFAULT_STATE);
  }
}
function saveState(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function deepMerge(a,b){
  if(Array.isArray(a) || Array.isArray(b)) return (b ?? a);
  if(typeof a==="object" && a && typeof b==="object" && b){
    const out = {...a};
    for(const k of Object.keys(b)) out[k] = deepMerge(a[k], b[k]);
    return out;
  }
  return (b ?? a);
}

// ---------- Utils ----------
function escapeHtml(s){ 
  return String(s).replace(/[&<>"']/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

function slug(name){
  return String(name).trim().toUpperCase()
    .replace(/\s+/g,"_")
    .replace(/[^A-Z0-9_]/g,"")
    .slice(0,40) || "TEAM";
}

// Create a small fallback logo via canvas and return data URL
function makeFallbackDataUrl(name){
  try{
    const text = String(name||"TEAM").trim().toUpperCase().replace(/\s+/g," ").slice(0,10);
    const canvas = document.createElement("canvas");
    canvas.width = 128; canvas.height = 128;
    const ctx = canvas.getContext("2d");
    // bg
    ctx.fillStyle = "rgba(138,100,255,0.25)";
    ctx.fillRect(0,0,128,128);
    // ring
    ctx.strokeStyle = "rgba(255,255,255,0.15)";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(64,64,56,0,Math.PI*2);
    ctx.stroke();
    // text
    ctx.fillStyle = "rgba(255,255,255,0.92)";
    ctx.font = "bold 22px system-ui, -apple-system, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const shown = text.length>4 ? text.slice(0,4) : text;
    ctx.fillText(shown, 64, 64);
    return canvas.toDataURL("image/png");
  }catch(e){
    return "";
  }
}
