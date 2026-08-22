const sample = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\ne3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

const inputEl = document.getElementById('input');
const outputEl = document.getElementById('output');
const statsEl = document.getElementById('output-stats') || document.getElementById('stats');

function process() {
  const lines = inputEl.value.trim().split(/\r?\n/).filter(l => l.length > 0);
  if (lines.length >= 2) {
    const res = FileChecksum.verifyChecksum(lines[0], lines[1]);
    outputEl.value = JSON.stringify(res, null, 2);
    if (statsEl) statsEl.textContent = res.match ? '✅ Checksums Match Perfectly!' : '❌ Checksum Mismatch!';
  } else {
    outputEl.value = 'Provide two hashes on separate lines to compare:';
    if (statsEl) statsEl.textContent = 'Awaiting hashes';
  }
}

document.getElementById('btn-run').addEventListener('click', process);
inputEl.addEventListener('input', process);
document.getElementById('btn-sample').addEventListener('click', () => { inputEl.value = sample; process(); });
document.getElementById('btn-copy').addEventListener('click', () => { navigator.clipboard.writeText(outputEl.value); alert('Copied report!'); });
if (document.getElementById('btn-clear')) document.getElementById('btn-clear').addEventListener('click', () => { inputEl.value = ''; outputEl.value = ''; });
process();
