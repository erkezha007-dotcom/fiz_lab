// Карточка құрастыру: сурет (басқанда стимуляция ашылады) + QR-код + батырмалар
function makeCard(lab, n, opts = {}) {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="head">
      <div class="num">${n ? n + "-зертханалық жұмыс" : "Зертханалық жұмыс"}</div>
      <h2></h2>
    </div>
    <a class="thumb" target="_blank" rel="noopener"><span>▶ Стимуляцияны ашу</span></a>
    <div class="body">
      <div class="qr" title="Телефонмен сканерлеңіз"></div>
      <div class="actions">
        <a class="btn primary" target="_blank" rel="noopener">Стимуляцияға өту</a>
        ${opts.compact ? "" : `<button class="btn dl" type="button">QR-кодты жүктеу (PNG)</button>
        <button class="btn cp" type="button">Сілтемені көшіру</button>`}
        <div class="hint">QR-кодты телефон камерасымен сканерлеңіз немесе суретті басыңыз.</div>
      </div>
    </div>`;
  card.querySelector("h2").textContent = lab.title;
  const thumb = card.querySelector(".thumb");
  thumb.href = lab.sim;
  if (lab.image) thumb.style.backgroundImage = `url("${lab.image}")`;
  card.querySelector(".btn.primary").href = lab.sim;

  const qrBox = card.querySelector(".qr");
  new QRCode(qrBox, { text: lab.sim, width: 240, height: 240, correctLevel: QRCode.CorrectLevel.M });

  const dl = card.querySelector(".dl");
  if (dl) dl.onclick = () => {
    const c = qrBox.querySelector("canvas");
    const a = document.createElement("a");
    a.download = `QR-${n ? n + "-" : ""}${lab.id}.png`;
    a.href = c.toDataURL("image/png");
    a.click();
  };
  const cp = card.querySelector(".cp");
  if (cp) cp.onclick = async () => {
    try { await navigator.clipboard.writeText(lab.sim); cp.textContent = "Көшірілді ✓"; }
    catch { prompt("Сілтемені көшіріңіз:", lab.sim); }
  };
  return card;
}
