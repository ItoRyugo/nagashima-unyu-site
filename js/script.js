// AOS（スクロールアニメーション）初期化
AOS.init({
  duration: 1000,
  once: true
});

// スムーススクロール（ページ内リンクが滑らかに移動）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ページトップに戻るボタン（オプション対応可能）
const toTopBtn = document.createElement('button');
toTopBtn.textContent = '▲';
toTopBtn.className = 'to-top';
document.body.appendChild(toTopBtn);

toTopBtn.style.display = 'none';

window.addEventListener('scroll', () => {
  toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

toTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
