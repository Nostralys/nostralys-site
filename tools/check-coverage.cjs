const fs = require('fs');
const path = require('path');

const baseDir = path.join(__dirname, '../coverage');
const threshold = 80;

function findCoverageSummary() {
  const directPath = path.join(baseDir, 'coverage-summary.json');
  if (fs.existsSync(directPath)) {
    return directPath;
  }

  const folders = fs.readdirSync(baseDir);
  for (const folder of folders) {
    const candidate = path.join(baseDir, folder, 'coverage-summary.json');
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return null;
}

const summaryPath = findCoverageSummary();

if (!summaryPath) {
  console.error('❌ coverage-summary.json introuvable.');
  process.exit(1);
}

const summary = JSON.parse(fs.readFileSync(summaryPath));
const failed = Object.entries(summary.total).some(([metric, { pct }]) => {
  if (pct < threshold) {
    console.error(`❌ ${metric}: ${pct}% < seuil de ${threshold}%`);
    return true;
  }
  return false;
});

if (failed) {
  process.exit(1);
}

console.log(`✅ Couverture OK — au moins ${threshold}% sur toutes les métriques`);
