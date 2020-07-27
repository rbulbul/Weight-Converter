function roundNum(num) {
  return Math.round(num * 100) / 100;
}

document.getElementById('output').style.visibility = 'hidden';

document.getElementById('lbsInput').addEventListener('input', function (e) {
  document.getElementById('output').style.visibility = 'visible';
  let lbs = e.target.value;
  let gr = lbs / 0.0022046;
  document.getElementById('gramsOutput').innerHTML = roundNum(gr);
  let kg = lbs / 2.2046;
  document.getElementById('kgOutput').innerHTML = roundNum(kg);
  document.getElementById('ozOutput').innerHTML = lbs * 16;
});
