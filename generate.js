const fs = require('fs');

const CSS = `    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

    :root {
      --text-primary: #1d1d1f;
      --text-secondary: #6e6e73;
      --text-tertiary: #86868b;
      --bg-white: #ffffff;
      --bg-gray: #f5f5f7;
      --bg-dark: #000000;
      --blue: #0071e3;
      --blue-hover: #0077ed;
      --border-light: rgba(0,0,0,0.08);
      --shadow-sm: 0 2px 8px rgba(0,0,0,0.04);
      --shadow-md: 0 4px 20px rgba(0,0,0,0.06);
      --shadow-lg: 0 8px 40px rgba(0,0,0,0.08);
      --radius-sm: 12px;
      --radius-md: 18px;
      --radius-lg: 24px;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }
    html { scroll-behavior: smooth; }

    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif;
      color: var(--text-primary);
      background: var(--bg-white);
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .container { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

    header {
      position: fixed; top: 0; left: 0; right: 0; z-index: 9999;
      background: rgba(255,255,255,0.72);
      backdrop-filter: saturate(180%) blur(20px);
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }

    header .container { display: flex; align-items: center; justify-content: space-between; height: 52px; }

    .logo { display: flex; align-items: center; gap: 10px; text-decoration: none; color: var(--text-primary); }

    .logo-name { font-size: 15px; font-weight: 600; letter-spacing: -0.3px; }

    nav { display: flex; gap: 28px; }
    nav a { color: var(--text-secondary); text-decoration: none; font-size: 13px; font-weight: 400; transition: color 0.3s; }
    nav a:hover { color: var(--text-primary); }

    .lang-links { display: flex; gap: 4px; }
    .lang-links a {
      padding: 4px 10px; border-radius: 980px; font-size: 12px; font-weight: 500;
      text-decoration: none; color: var(--text-secondary); transition: all 0.3s;
      border: 1px solid transparent;
    }
    .lang-links a:hover { background: var(--bg-gray); }
    .lang-links a.active { background: var(--text-primary); color: #fff; }

    .hero {
      min-height: 100vh; display: flex; align-items: center; justify-content: center;
      text-align: center; background: var(--bg-dark); position: relative; overflow: hidden; padding: 120px 24px 80px;
    }

    .hero-bg { position: absolute; inset: 0; background: url('assets/factory/cover.jpg') center/cover no-repeat; opacity: 0.2; }

    .hero-gradient {
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 50% 40%, rgba(0,113,227,0.12) 0%, transparent 60%),
                  linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.85) 100%);
    }

    .hero .container { position: relative; z-index: 2; }

    .hero-eyebrow { font-size: 16px; font-weight: 500; color: rgba(255,255,255,0.5); letter-spacing: -0.2px; margin-bottom: 20px; }

    .hero h1 { font-size: clamp(40px, 7vw, 80px); font-weight: 700; color: #fff; line-height: 1.05; letter-spacing: -0.04em; margin-bottom: 24px; }
    .hero h1 em { font-style: normal; background: linear-gradient(90deg, #2997ff, #5ac8fa); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

    .hero-desc { font-size: 21px; color: rgba(255,255,255,0.6); line-height: 1.5; max-width: 640px; margin: 0 auto 40px; font-weight: 300; letter-spacing: -0.1px; }

    .hero-cta { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }

    .btn-apple {
      display: inline-flex; align-items: center; gap: 6px; padding: 12px 28px; border-radius: 980px;
      font-size: 15px; font-weight: 500; text-decoration: none; transition: all 0.3s;
      cursor: pointer; border: none; font-family: inherit; letter-spacing: -0.2px;
    }
    .btn-blue { background: var(--blue); color: #fff; }
    .btn-blue:hover { background: var(--blue-hover); transform: scale(1.02); }
    .btn-ghost { background: transparent; color: #2997ff; }
    .btn-ghost:hover { text-decoration: underline; }

    .hero-stats { display: flex; justify-content: center; gap: 64px; margin-top: 72px; padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.08); }
    .hero-stat h3 { font-size: 48px; font-weight: 700; color: #fff; letter-spacing: -0.03em; line-height: 1; }
    .hero-stat p { font-size: 14px; color: rgba(255,255,255,0.4); margin-top: 8px; font-weight: 400; }

    section { padding: 120px 0; }

    .section-eyebrow { font-size: 14px; font-weight: 600; color: var(--blue); letter-spacing: -0.2px; margin-bottom: 12px; }
    .section-headline { font-size: clamp(32px, 5vw, 56px); font-weight: 700; color: var(--text-primary); letter-spacing: -0.03em; line-height: 1.08; margin-bottom: 16px; }
    .section-subhead { font-size: 19px; color: var(--text-secondary); line-height: 1.5; max-width: 600px; font-weight: 300; }
    .section-header { text-align: center; margin-bottom: 72px; }
    .section-header .section-subhead { margin: 0 auto; }

    .about { background: var(--bg-gray); }
    .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
    .about-images { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; }
    .about-images img { width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-md); }
    .about-images img:first-child { grid-column: 1 / -1; height: 300px; }
    .about-text .section-headline { text-align: left; }
    .about-text .section-subhead { text-align: left; margin: 0; }
    .about-text p { font-size: 17px; color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px; font-weight: 300; }
    .about-features { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 40px; }
    .about-feature { display: flex; align-items: flex-start; gap: 14px; }
    .about-feature-icon { flex-shrink: 0; width: 44px; height: 44px; background: var(--bg-gray); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-size: 20px; }
    .about-feature h4 { font-size: 15px; font-weight: 600; margin-bottom: 2px; letter-spacing: -0.2px; }
    .about-feature p { font-size: 13px; color: var(--text-tertiary); margin-bottom: 0; line-height: 1.5; }

    .products { background: var(--bg-white); }
    .product-categories { display: flex; justify-content: center; gap: 8px; margin-bottom: 56px; flex-wrap: wrap; }
    .product-cat-btn { padding: 8px 20px; border-radius: 980px; background: var(--bg-gray); font-size: 13px; font-weight: 500; cursor: pointer; transition: all 0.3s; font-family: inherit; color: var(--text-secondary); border: none; letter-spacing: -0.1px; }
    .product-cat-btn.active { background: var(--text-primary); color: #fff; }
    .product-cat-btn:hover:not(.active) { background: #e8e8ed; }
    .products-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .product-card { background: var(--bg-gray); border-radius: var(--radius-lg); overflow: hidden; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .product-card:hover { transform: scale(1.02); box-shadow: var(--shadow-lg); }
    .product-card-img { width: 100%; height: 220px; object-fit: contain; background: var(--bg-gray); padding: 24px; }
    .product-card-body { padding: 16px 20px 24px; }
    .product-card-model { font-size: 11px; color: var(--blue); font-weight: 600; letter-spacing: 0.5px; margin-bottom: 4px; text-transform: uppercase; }
    .product-card-name { font-size: 15px; font-weight: 600; margin-bottom: 4px; letter-spacing: -0.2px; }
    .product-card-spec { font-size: 13px; color: var(--text-tertiary); line-height: 1.5; }

    .process { background: var(--bg-dark); color: #fff; }
    .process .section-headline { color: #fff; }
    .process .section-subhead { color: rgba(255,255,255,0.5); }
    .process-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 64px; }
    .process-step { text-align: center; padding: 40px 20px; background: rgba(255,255,255,0.04); border-radius: var(--radius-lg); border: 1px solid rgba(255,255,255,0.06); transition: background 0.3s; }
    .process-step:hover { background: rgba(255,255,255,0.08); }
    .process-step-num { width: 44px; height: 44px; background: linear-gradient(135deg, #2997ff, #5ac8fa); border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-size: 17px; font-weight: 700; margin-bottom: 20px; }
    .process-step h4 { font-size: 17px; font-weight: 600; margin-bottom: 8px; letter-spacing: -0.2px; }
    .process-step p { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.6; font-weight: 300; }
    .process-gallery { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .process-gallery img { width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-sm); transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .process-gallery img:hover { transform: scale(1.03); }

    .quality { background: var(--bg-gray); }
    .quality-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .quality-card { background: var(--bg-white); border-radius: var(--radius-lg); padding: 48px 32px; text-align: center; transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .quality-card:hover { transform: scale(1.02); box-shadow: var(--shadow-lg); }
    .quality-card-icon { width: 56px; height: 56px; background: var(--bg-gray); border-radius: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 24px; }
    .quality-card h3 { font-size: 21px; font-weight: 600; margin-bottom: 12px; letter-spacing: -0.3px; }
    .quality-card p { font-size: 15px; color: var(--text-secondary); line-height: 1.7; font-weight: 300; }
    .quality-badges { display: flex; justify-content: center; gap: 12px; margin-top: 48px; flex-wrap: wrap; }
    .quality-badge { padding: 8px 20px; background: var(--text-primary); color: #fff; border-radius: 980px; font-size: 12px; font-weight: 500; letter-spacing: 0.3px; }

    .designs { background: var(--bg-white); }
    .designs-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 12px; }
    .designs-grid img { width: 100%; aspect-ratio: 1 / 1; object-fit: contain; border-radius: var(--radius-md); transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94); cursor: pointer; background: #ffffff; border: 1px solid var(--border-light); }
    .designs-grid img:hover { transform: scale(1.04); }

    .cta { background: var(--bg-dark); color: #fff; text-align: center; padding: 140px 0; }
    .cta .section-headline { color: #fff; }
    .cta .section-subhead { color: rgba(255,255,255,0.5); margin: 0 auto 48px; }
    .cta-contacts { display: flex; justify-content: center; gap: 80px; flex-wrap: wrap; }
    .cta-contact-item { display: flex; flex-direction: column; align-items: center; gap: 8px; }
    .cta-contact-label { font-size: 12px; font-weight: 500; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.35); }
    .cta-contact-value { font-size: 22px; font-weight: 600; color: #2997ff; letter-spacing: -0.3px; }

    footer { background: var(--bg-gray); padding: 48px 0; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; }
    .footer-brand h3 { font-size: 15px; font-weight: 600; margin-bottom: 12px; letter-spacing: -0.2px; }
    .footer-brand p { font-size: 13px; color: var(--text-secondary); line-height: 1.7; }
    .footer-col h4 { font-size: 13px; font-weight: 600; margin-bottom: 12px; color: var(--text-tertiary); letter-spacing: 0.3px; }
    .footer-col a { display: block; color: var(--text-secondary); text-decoration: none; font-size: 13px; margin-bottom: 8px; transition: color 0.3s; }
    .footer-col a:hover { color: var(--text-primary); }
    .footer-bottom { margin-top: 36px; padding-top: 20px; border-top: 1px solid var(--border-light); text-align: center; font-size: 12px; color: var(--text-tertiary); }

    @media (max-width: 1024px) { .products-grid { grid-template-columns: repeat(3, 1fr); } .process-steps { grid-template-columns: repeat(2, 1fr); } .process-gallery { grid-template-columns: repeat(3, 1fr); } .designs-grid { grid-template-columns: repeat(3, 1fr); } }
    @media (max-width: 768px) { nav { display: none; } section { padding: 80px 0; } .hero { padding: 100px 24px 60px; } .hero-stats { gap: 32px; flex-wrap: wrap; } .hero-stat h3 { font-size: 36px; } .about-grid { grid-template-columns: 1fr; gap: 48px; } .about-text .section-headline { text-align: center; } .about-text .section-subhead { text-align: center; } .products-grid { grid-template-columns: repeat(2, 1fr); } .process-steps { grid-template-columns: 1fr 1fr; } .process-gallery { grid-template-columns: repeat(2, 1fr); } .quality-grid { grid-template-columns: 1fr; } .designs-grid { grid-template-columns: repeat(2, 1fr); } .footer-grid { grid-template-columns: 1fr; gap: 32px; } .cta-contacts { gap: 40px; } }
    @media (max-width: 480px) { .products-grid { grid-template-columns: 1fr; } .process-gallery { grid-template-columns: 1fr 1fr; } .designs-grid { grid-template-columns: 1fr 1fr; } .hero-cta { flex-direction: column; align-items: center; } }

    .fade-in { opacity: 0; transform: translateY(40px); transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
    .fade-in.visible { opacity: 1; transform: translateY(0); }`;

const PRODUCTS_HTML = `
      <div class="product-card fade-in" data-cat="airpot">
        <img class="product-card-img" src="assets/products/product-6613.png" alt="6613">
        <div class="product-card-body"><div class="product-card-model">Model 66</div><div class="product-card-name">1.0L / 1.3L / 1.6L / 1.9L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="airpot">
        <img class="product-card-img" src="assets/products/product-6616.png" alt="6616">
        <div class="product-card-body"><div class="product-card-model">Model 66</div><div class="product-card-name">2.5L / 3.0L / 3.5L / 4.0L / 4.5L / 5.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="airpot">
        <img class="product-card-img" src="assets/products/product-6619E.png" alt="6619E">
        <div class="product-card-body"><div class="product-card-model">Model 66E</div><div class="product-card-name">1.9L / 2.2L / 2.5L / 3.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="airpot">
        <img class="product-card-img" src="assets/products/product-6622E.png" alt="6622E">
        <div class="product-card-body"><div class="product-card-model">Model 68</div><div class="product-card-name">2.5L / 3.0L / 3.5L / 4.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="airpot">
        <img class="product-card-img" src="assets/products/product-6625E.png" alt="6625E">
        <div class="product-card-body"><div class="product-card-model">Model 67</div><div class="product-card-name">2.5L / 3.0L / 3.5L / 4.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-8620.png" alt="8620">
        <div class="product-card-body"><div class="product-card-model">Model 86</div><div class="product-card-name">2.0L Vacuum Jug</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-8810.png" alt="8810">
        <div class="product-card-body"><div class="product-card-model">Model 88</div><div class="product-card-name">1.0L / 1.5L / 2.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-8820.png" alt="8820">
        <div class="product-card-body"><div class="product-card-model">Model 88</div><div class="product-card-name">1.0L / 1.5L / 2.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-W8710.png" alt="W8710">
        <div class="product-card-body"><div class="product-card-model">Model 87</div><div class="product-card-name">1.0L / 1.5L / 2.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-8710.png" alt="8710">
        <div class="product-card-body"><div class="product-card-model">Model W87</div><div class="product-card-name">1.0L / 1.5L / 2.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-8515.png" alt="8515">
        <div class="product-card-body"><div class="product-card-model">Model 85</div><div class="product-card-name">1.5L / 2.0L Coffee Pot</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-9515.png" alt="9515">
        <div class="product-card-body"><div class="product-card-model">Model 99</div><div class="product-card-name">1.2L / 1.5L / 2.0L Vacuum Jug</div></div>
      </div>
      <div class="product-card fade-in" data-cat="coffee">
        <img class="product-card-img" src="assets/products/product-89075.png" alt="89075">
        <div class="product-card-body"><div class="product-card-model">Model 89</div><div class="product-card-name">0.75L / 1.0L / 1.5L / 2.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="coffee">
        <img class="product-card-img" src="assets/products/product-8910.png" alt="8910">
        <div class="product-card-body"><div class="product-card-model">Model 78</div><div class="product-card-name">0.6L / 0.8L / 1.0L / 1.2L / 1.5L / 2.0L</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-8320.png" alt="8320">
        <div class="product-card-body"><div class="product-card-model">Model 83</div><div class="product-card-name">2.0L / 3.0L Vacuum Jug</div></div>
      </div>
      <div class="product-card fade-in" data-cat="vacuum">
        <img class="product-card-img" src="assets/products/product-9420.png" alt="9420">
        <div class="product-card-body"><div class="product-card-model">Model 94</div><div class="product-card-name">2.0L / 3.0L Vacuum Jug</div></div>
      </div>`;

const GALLERY_HTML = `
      <img src="assets/process/微信图片_20200508120848.jpg" alt="Production Step 1">
      <img src="assets/process/微信图片_20200508120925.jpg" alt="Production Step 2">
      <img src="assets/process/微信图片_20200508120932.jpg" alt="Production Step 3">
      <img src="assets/process/微信图片_20200508120936.jpg" alt="Production Step 4">
      <img src="assets/process/微信图片_20200508120941.jpg" alt="Production Step 5">
      <img src="assets/process/微信图片_20200508120945.jpg" alt="Production Step 6">
      <img src="assets/process/微信图片_20200508120949.jpg" alt="Production Step 7">
      <img src="assets/process/微信图片_20200508120955.jpg" alt="Production Step 8">
      <img src="assets/process/微信图片_20200508120959.jpg" alt="Production Step 9">
      <img src="assets/process/微信图片_20200508121117.jpg" alt="Production Step 10">
      <img src="assets/process/微信图片_20210407114826.jpg" alt="Production Step 11">
      <img src="assets/process/微信图片_20210407114851.jpg" alt="Production Step 12">`;

const DESIGNS_HTML = `
      <img src="assets/designs/design1.jpeg" alt="Design 1">
      <img src="assets/designs/design2.jpeg" alt="Design 2">
      <img src="assets/designs/design3.jpeg" alt="Design 3">
      <img src="assets/designs/design4.jpeg" alt="Design 4">
      <img src="assets/designs/design5.jpeg" alt="Design 5">
      <img src="assets/designs/design6.jpeg" alt="Design 6">
      <img src="assets/designs/design7.jpeg" alt="Design 7">
      <img src="assets/designs/design8.jpeg" alt="Design 8">
      <img src="assets/designs/design9.jpeg" alt="Design 9">
      <img src="assets/designs/design10.jpeg" alt="Design 10">`;

function langLinks(current) {
  const langs = [
    { code: 'en', label: 'EN', file: 'index.html' },
    { code: 'pt', label: 'PT', file: 'index-pt.html' },
    { code: 'es', label: 'ES', file: 'index-es.html' },
  ];
  return langs.map(l =>
    `<a href="${l.file}" class="lang-links-a${l.code === current ? ' active' : ''}">${l.label}</a>`
  ).join('\n      ');
}

function buildPage(t) {
  return `<!DOCTYPE html>
<html lang="${t.lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${t.title}</title>
  <style>
${CSS}
    .lang-links-a { display: inline-block; padding: 4px 10px; border-radius: 980px; font-size: 12px; font-weight: 500; text-decoration: none; color: var(--text-secondary); transition: all 0.3s; border: 1px solid transparent; }
    .lang-links-a:hover { background: var(--bg-gray); }
    .lang-links-a.active { background: var(--text-primary); color: #fff; }
  </style>
</head>
<body>

<header>
  <div class="container">
    <a href="${t.indexFile}" class="logo">
      <div class="logo-name">BaoAo Vacuum Flask&Airpot Manufacturer</div>
    </a>
    <nav>
      <a href="#about">${t.nav_about}</a>
      <a href="#products">${t.nav_products}</a>
      <a href="#process">${t.nav_process}</a>
      <a href="#quality">${t.nav_quality}</a>
      <a href="#designs">${t.nav_designs}</a>
      <a href="#contact">${t.nav_contact}</a>
    </nav>
    <div class="lang-links">
      ${langLinks(t.lang)}
    </div>
  </div>
</header>

<section class="hero" id="hero">
  <div class="hero-bg"></div>
  <div class="hero-gradient"></div>
  <div class="container">
    <p class="hero-eyebrow">${t.hero_eyebrow}</p>
    <h1>${t.hero_title}</h1>
    <p class="hero-desc">${t.hero_desc}</p>
    <div class="hero-cta">
      <a href="#products" class="btn-apple btn-blue">${t.hero_cta_products}</a>
      <a href="#contact" class="btn-apple btn-ghost">${t.hero_cta_contact}</a>
    </div>
    <div class="hero-stats">
      <div class="hero-stat"><h3>14+</h3><p>${t.hero_stat_years}</p></div>
      <div class="hero-stat"><h3>1M+</h3><p>${t.hero_stat_output}</p></div>
      <div class="hero-stat"><h3>100+</h3><p>${t.hero_stat_workers}</p></div>
      <div class="hero-stat"><h3>30+</h3><p>${t.hero_stat_models}</p></div>
    </div>
  </div>
</section>

<section class="about" id="about">
  <div class="container">
    <div class="about-grid">
      <div class="about-images fade-in">
        <img src="assets/factory/factory1.jpg" alt="Factory Overview">
        <img src="assets/factory/factory2.jpg" alt="Production Workshop">
        <img src="assets/factory/factory3.jpg" alt="Equipment Display">
        <img src="assets/factory/factory4.jpg" alt="Quality Inspection">
      </div>
      <div class="about-text fade-in">
        <p class="section-eyebrow">${t.about_eyebrow}</p>
        <h2 class="section-headline">${t.about_headline}</h2>
        <p class="section-subhead">${t.about_subhead}</p>
        <p>${t.about_desc}</p>
        <div class="about-features">
          <div class="about-feature"><div class="about-feature-icon">🏭</div><div><h4>${t.feat_oem_title}</h4><p>${t.feat_oem_desc}</p></div></div>
          <div class="about-feature"><div class="about-feature-icon">📦</div><div><h4>${t.feat_wholesale_title}</h4><p>${t.feat_wholesale_desc}</p></div></div>
          <div class="about-feature"><div class="about-feature-icon">🎨</div><div><h4>${t.feat_design_title}</h4><p>${t.feat_design_desc}</p></div></div>
          <div class="about-feature"><div class="about-feature-icon">✅</div><div><h4>${t.feat_cert_title}</h4><p>${t.feat_cert_desc}</p></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="products" id="products">
  <div class="container">
    <div class="section-header fade-in">
      <p class="section-eyebrow">${t.products_eyebrow}</p>
      <h2 class="section-headline">${t.products_headline}</h2>
      <p class="section-subhead">${t.products_subhead}</p>
    </div>
    <div class="product-categories fade-in">
      <button class="product-cat-btn active" data-cat="all">${t.cat_all}</button>
      <button class="product-cat-btn" data-cat="airpot">Airpot</button>
      <button class="product-cat-btn" data-cat="vacuum">${t.cat_vacuum}</button>
      <button class="product-cat-btn" data-cat="coffee">${t.cat_coffee}</button>
    </div>
    <div class="products-grid" id="productsGrid">
${PRODUCTS_HTML}
    </div>
  </div>
</section>

<section class="process" id="process">
  <div class="container">
    <div class="section-header fade-in">
      <p class="section-eyebrow">${t.process_eyebrow}</p>
      <h2 class="section-headline">${t.process_headline}</h2>
      <p class="section-subhead">${t.process_subhead}</p>
    </div>
    <div class="process-steps fade-in">
      <div class="process-step"><div class="process-step-num">1</div><h4>${t.step1_title}</h4><p>${t.step1_desc}</p></div>
      <div class="process-step"><div class="process-step-num">2</div><h4>${t.step2_title}</h4><p>${t.step2_desc}</p></div>
      <div class="process-step"><div class="process-step-num">3</div><h4>${t.step3_title}</h4><p>${t.step3_desc}</p></div>
      <div class="process-step"><div class="process-step-num">4</div><h4>${t.step4_title}</h4><p>${t.step4_desc}</p></div>
    </div>
    <div class="process-gallery fade-in">
${GALLERY_HTML}
    </div>
  </div>
</section>

<section class="quality" id="quality">
  <div class="container">
    <div class="section-header fade-in">
      <p class="section-eyebrow">${t.quality_eyebrow}</p>
      <h2 class="section-headline">${t.quality_headline}</h2>
      <p class="section-subhead">${t.quality_subhead}</p>
    </div>
    <div class="quality-grid fade-in">
      <div class="quality-card"><div class="quality-card-icon">🛡️</div><h3>${t.q_food_title}</h3><p>${t.q_food_desc}</p></div>
      <div class="quality-card"><div class="quality-card-icon">🌡️</div><h3>${t.q_temp_title}</h3><p>${t.q_temp_desc}</p></div>
      <div class="quality-card"><div class="quality-card-icon">📦</div><h3>${t.q_pack_title}</h3><p>${t.q_pack_desc}</p></div>
    </div>
    <div class="quality-badges fade-in">
      <span class="quality-badge">LFGB</span><span class="quality-badge">FDA</span><span class="quality-badge">DGCCRF 2004-64</span><span class="quality-badge">1935/2004EC</span>
    </div>
  </div>
</section>

<section class="designs" id="designs">
  <div class="container">
    <div class="section-header fade-in">
      <p class="section-eyebrow">${t.designs_eyebrow}</p>
      <h2 class="section-headline">${t.designs_headline}</h2>
      <p class="section-subhead">${t.designs_subhead}</p>
    </div>
    <div class="designs-grid fade-in">
${DESIGNS_HTML}
    </div>
  </div>
</section>

<section class="cta" id="contact">
  <div class="container">
    <p class="section-eyebrow" style="color: #2997ff;">${t.cta_eyebrow}</p>
    <h2 class="section-headline">${t.cta_headline}</h2>
    <p class="section-subhead">${t.cta_subhead}</p>
    <div class="cta-contacts">
      <div class="cta-contact-item"><span class="cta-contact-label">${t.cta_email_label}</span><span class="cta-contact-value">yangzhanwen@qq.com</span></div>
      <div class="cta-contact-item"><span class="cta-contact-label">${t.cta_wechat_label}</span><span class="cta-contact-value">JanvinYang</span></div>
    </div>
  </div>
</section>

<footer>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand"><h3>Jiangmen BaoAo Hardware Appliances Manufactor</h3><p>Add: Chuang Yi Xin Wu Jin Chang Xi Bei (Jiang Du Dong Lu Bei), Peng Jiang Qu, Guang Dong Sheng, China</p></div>
      <div class="footer-col"><h4>${t.footer_products}</h4><a href="#products">Airpot</a><a href="#products">${t.cat_vacuum}</a><a href="#products">${t.cat_coffee}</a></div>
      <div class="footer-col"><h4>${t.footer_services}</h4><a href="#about">${t.feat_oem_title}</a><a href="#about">ODM Custom Design</a><a href="#about">${t.feat_wholesale_title}</a><a href="#designs">${t.footer_custom_patterns}</a></div>
    </div>
    <div class="footer-bottom">© 2024 Jiangmen BaoAo Hardware Appliances Manufactor. All rights reserved.</div>
  </div>
</footer>

<script>
  document.querySelectorAll('.product-cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.product-cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.dataset.cat;
      document.querySelectorAll('.product-card').forEach(card => {
        card.style.display = (cat === 'all' || card.dataset.cat === cat) ? '' : 'none';
      });
    });
  });
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
</script>

</body>
</html>`;
}

const langs = {
  en: {
    lang: 'en', title: 'Jiangmen BaoAo Hardware Appliances | Premium Vacuum Flask&Airpot Manufacturer', indexFile: 'index.html',
    nav_about: 'About', nav_products: 'Products', nav_process: 'Process', nav_quality: 'Quality', nav_designs: 'Designs', nav_contact: 'Contact',
    hero_eyebrow: 'OEM / ODM Professional Manufacturer',
    hero_title: 'Premium <em>Vacuum Flask&Airpot Manufacturer</em><br>from China',
    hero_desc: 'Over 14 years of expertise. Advanced spray painting lines, laser machines, and heat transfer equipment. Annual capacity exceeds 1,000,000 pieces.',
    hero_cta_products: 'Explore Products', hero_cta_contact: 'Contact Us →',
    hero_stat_years: 'Years Experience', hero_stat_output: 'Annual Output', hero_stat_workers: 'Skilled Workers', hero_stat_models: 'Product Models',
    about_eyebrow: 'Rooted in Jiangmen, Crafted with Excellence', about_headline: 'About Us',
    about_subhead: 'Jiangmen BaoAo Hardware Appliances Manufactor is located in Pengjiang District, Jiangmen City, Guangdong Province, China — a region known for its vast resources and skilled workforce.',
    about_desc: 'With over 14 years of industry experience, we focus on the needs of customers and the market, providing quality products and services. We specialize in the R&D and manufacturing of Airpot, Vacuum Jug, Coffee Pot, and other vacuum flask series.',
    feat_oem_title: 'OEM/ODM Service', feat_oem_desc: 'Flexible customization',
    feat_wholesale_title: 'Stock Wholesale', feat_wholesale_desc: 'Fast delivery response',
    feat_design_title: 'Custom Designs', feat_design_desc: 'Spray / Heat Transfer / Laser',
    feat_cert_title: 'Quality Certified', feat_cert_desc: 'LFGB / FDA Standards',
    products_eyebrow: 'Built for every need.', products_headline: 'Our Products',
    products_subhead: 'Covering Airpot, Vacuum Jug, Coffee Pot and more series, with capacities from 0.6L to 5.0L.',
    cat_all: 'All', cat_vacuum: 'Vacuum Jug', cat_coffee: 'Coffee Pot',
    process_eyebrow: 'Professional at every step.', process_headline: 'Production Process',
    process_subhead: '100 skilled workers. Annual output of 1,000,000 pieces. In-house spray painting, laser, and heat transfer equipment.',
    step1_title: 'Raw Material Inspection', step1_desc: 'Strict selection of premium stainless steel to ensure material safety compliance',
    step2_title: 'Forming & Shaping', step2_desc: 'Precision die stamping to ensure smooth and elegant body lines',
    step3_title: 'Surface Treatment', step3_desc: 'Spray painting / heat transfer / laser engraving — multiple options',
    step4_title: 'QC & Packaging', step4_desc: 'Temperature testing, visual inspection, cloth wrapping for safe shipping',
    quality_eyebrow: 'Quality you can trust.', quality_headline: 'Quality Assurance',
    quality_subhead: 'From raw materials to finished products, every process is strictly controlled to ensure international quality standards.',
    q_food_title: 'Food-Grade Safe Materials', q_food_desc: 'All products are made with food-grade safe materials and can pass international food safety inspection standards including LFGB, FDA, DGCCRF 2004-64, and 1935/2004EC.',
    q_temp_title: 'Strict Temperature Testing', q_temp_desc: 'We rigorously measure the temperature of every single vacuum flask to ensure thermal performance meets standards, giving customers full confidence.',
    q_pack_title: 'Precision Packaging', q_pack_desc: 'Our highly accurate workmanship ensures beautiful product bodies. All products are wrapped in cloth bags for protection, ensuring safe and damage-free delivery.',
    designs_eyebrow: 'Your design, our craft.', designs_headline: 'Custom Designs',
    designs_subhead: 'In-house spray painting line and heat transfer equipment, supporting a wide range of custom patterns and colors.',
    cta_eyebrow: 'Looking forward to cooperation.', cta_headline: 'Get in Touch',
    cta_subhead: 'Whether you need OEM manufacturing, ODM design, or stock wholesale, we deliver quality products and services.',
    cta_email_label: 'Email', cta_wechat_label: 'WeChat',
    footer_products: 'Product Series', footer_services: 'Services', footer_custom_patterns: 'Custom Patterns'
  },
  pt: {
    lang: 'pt', title: 'Jiangmen BaoAo | Fabricante Premium de Garrafas Térmicas e Airpots', indexFile: 'index-pt.html',
    nav_about: 'Sobre', nav_products: 'Produtos', nav_process: 'Processo', nav_quality: 'Qualidade', nav_designs: 'Designs', nav_contact: 'Contato',
    hero_eyebrow: 'Fabricante Profissional OEM / ODM',
    hero_title: 'Fabricante <em>Premium de Garrafas Térmicas e Airpots</em><br>da China',
    hero_desc: 'Mais de 14 anos de experiência. Linhas avançadas de pintura por pulverização, máquinas a laser e equipamentos de transferência térmica. Capacidade anual superior a 1.000.000 de peças.',
    hero_cta_products: 'Explorar Produtos', hero_cta_contact: 'Fale Conosco →',
    hero_stat_years: 'Anos de Experiência', hero_stat_output: 'Produção Anual', hero_stat_workers: 'Trabalhadores Qualificados', hero_stat_models: 'Modelos de Produtos',
    about_eyebrow: 'Enraizados em Jiangmen, Fabricados com Excelência', about_headline: 'Sobre Nós',
    about_subhead: 'A Jiangmen BaoAo Hardware Appliances Manufactor está localizada no Distrito de Pengjiang, Cidade de Jiangmen, Província de Guangdong, China — uma região conhecida por seus vastos recursos e força de trabalho qualificada.',
    about_desc: 'Com mais de 14 anos de experiência na indústria, focamos nas necessidades dos clientes e do mercado, fornecendo produtos e serviços de qualidade. Especializamo-nos em P&D e fabricação de Airpot, Jarro Térmico, Cafeteira e outras séries de garrafas térmicas.',
    feat_oem_title: 'Serviço OEM/ODM', feat_oem_desc: 'Personalização flexível',
    feat_wholesale_title: 'Atacado em Estoque', feat_wholesale_desc: 'Resposta rápida de entrega',
    feat_design_title: 'Designs Personalizados', feat_design_desc: 'Pintura / Transferência Térmica / Laser',
    feat_cert_title: 'Certificação de Qualidade', feat_cert_desc: 'Padrões LFGB / FDA',
    products_eyebrow: 'Feito para cada necessidade.', products_headline: 'Nossos Produtos',
    products_subhead: 'Abrangendo Airpot, Jarro Térmico, Cafeteira e mais séries, com capacidades de 0,6L a 5,0L.',
    cat_all: 'Todos', cat_vacuum: 'Jarro Térmico', cat_coffee: 'Cafeteira',
    process_eyebrow: 'Profissional em cada etapa.', process_headline: 'Processo de Produção',
    process_subhead: '100 trabalhadores qualificados. Produção anual de 1.000.000 de peças. Equipamentos próprios de pintura por pulverização, laser e transferência térmica.',
    step1_title: 'Inspeção de Matéria-Prima', step1_desc: 'Seleção rigorosa de aço inoxidável premium para garantir conformidade de segurança do material',
    step2_title: 'Conformação e Moldagem', step2_desc: 'Estampagem de precisão para garantir linhas corporais suaves e elegantes',
    step3_title: 'Tratamento de Superfície', step3_desc: 'Pintura por pulverização / transferência térmica / gravação a laser — múltiplas opções',
    step4_title: 'CQ e Embalagem', step4_desc: 'Teste de temperatura, inspeção visual, embalagem em sacos de pano para envio seguro',
    quality_eyebrow: 'Qualidade em que você pode confiar.', quality_headline: 'Garantia de Qualidade',
    quality_subhead: 'Das matérias-primas aos produtos acabados, cada processo é rigorosamente controlado para garantir padrões internacionais de qualidade.',
    q_food_title: 'Materiais Seguros de Grau Alimentar', q_food_desc: 'Todos os produtos são fabricados com materiais seguros de grau alimentar e podem passar por padrões internacionais de inspeção de segurança alimentar, incluindo LFGB, FDA, DGCCRF 2004-64 e 1935/2004EC.',
    q_temp_title: 'Teste Rigoroso de Temperatura', q_temp_desc: 'Medimos rigorosamente a temperatura de cada garrafa térmica para garantir que o desempenho térmico atenda aos padrões, dando aos clientes total confiança.',
    q_pack_title: 'Embalagem de Precisão', q_pack_desc: 'Nosso trabalho altamente preciso garante corpos de produtos bonitos. Todos os produtos são embalados em sacos de pano para proteção, garantindo entrega segura e sem danos.',
    designs_eyebrow: 'Seu design, nossa arte.', designs_headline: 'Designs Personalizados',
    designs_subhead: 'Linha própria de pintura por pulverização e equipamentos de transferência térmica, suportando uma ampla gama de padrões e cores personalizados.',
    cta_eyebrow: 'Esperando pela cooperação.', cta_headline: 'Entre em Contato',
    cta_subhead: 'Seja qual for sua necessidade — fabricação OEM, design ODM ou atacado em estoque — entregamos produtos e serviços de qualidade.',
    cta_email_label: 'E-mail', cta_wechat_label: 'WeChat',
    footer_products: 'Série de Produtos', footer_services: 'Serviços', footer_custom_patterns: 'Padrões Personalizados'
  },
  es: {
    lang: 'es', title: 'Jiangmen BaoAo | Fabricante Premium de Termos y Airpots', indexFile: 'index-es.html',
    nav_about: 'Nosotros', nav_products: 'Productos', nav_process: 'Proceso', nav_quality: 'Calidad', nav_designs: 'Diseños', nav_contact: 'Contacto',
    hero_eyebrow: 'Fabricante Profesional OEM / ODM',
    hero_title: 'Fabricante <em>Premium de Termos y Airpots</em><br>de China',
    hero_desc: 'Más de 14 años de experiencia. Líneas avanzadas de pintura por pulverización, máquinas láser y equipos de transferencia térmica. Capacidad anual superior a 1.000.000 de piezas.',
    hero_cta_products: 'Explorar Productos', hero_cta_contact: 'Contáctenos →',
    hero_stat_years: 'Años de Experiencia', hero_stat_output: 'Producción Anual', hero_stat_workers: 'Trabajadores Calificados', hero_stat_models: 'Modelos de Productos',
    about_eyebrow: 'Enraizados en Jiangmen, Fabricados con Excelencia', about_headline: 'Sobre Nosotros',
    about_subhead: 'Jiangmen BaoAo Hardware Appliances Manufactor se encuentra en el Distrito de Pengjiang, Ciudad de Jiangmen, Provincia de Guangdong, China — una región conocida por sus vastos recursos y mano de obra calificada.',
    about_desc: 'Con más de 14 años de experiencia en la industria, nos enfocamos en las necesidades de los clientes y del mercado, proporcionando productos y servicios de calidad. Nos especializamos en I+D y fabricación de Airpot, Jarra Térmica, Cafetera y otras series de termos.',
    feat_oem_title: 'Servicio OEM/ODM', feat_oem_desc: 'Personalización flexible',
    feat_wholesale_title: 'Venta al por Mayor', feat_wholesale_desc: 'Respuesta rápida de entrega',
    feat_design_title: 'Diseños Personalizados', feat_design_desc: 'Pintura / Transferencia Térmica / Láser',
    feat_cert_title: 'Certificación de Calidad', feat_cert_desc: 'Estándares LFGB / FDA',
    products_eyebrow: 'Hecho para cada necesidad.', products_headline: 'Nuestros Productos',
    products_subhead: 'Cubriendo Airpot, Jarra Térmica, Cafetera y más series, con capacidades de 0,6L a 5,0L.',
    cat_all: 'Todos', cat_vacuum: 'Jarra Térmica', cat_coffee: 'Cafetera',
    process_eyebrow: 'Profesionales en cada paso.', process_headline: 'Proceso de Producción',
    process_subhead: '100 trabajadores calificados. Producción anual de 1.000.000 de piezas. Equipos propios de pintura por pulverización, láser y transferencia térmica.',
    step1_title: 'Inspección de Materias Primas', step1_desc: 'Selección estricta de acero inoxidable premium para garantizar el cumplimiento de seguridad del material',
    step2_title: 'Conformado y Moldeado', step2_desc: 'Estampado de precisión para garantizar líneas corporales suaves y elegantes',
    step3_title: 'Tratamiento Superficial', step3_desc: 'Pintura por pulverización / transferencia térmica / grabado láser — múltiples opciones',
    step4_title: 'CC y Empaquetado', step4_desc: 'Prueba de temperatura, inspección visual, envoltura en bolsas de tela para envío seguro',
    quality_eyebrow: 'Calidad en la que puede confiar.', quality_headline: 'Garantía de Calidad',
    quality_subhead: 'Desde las materias primas hasta los productos terminados, cada proceso está estrictamente controlado para garantizar estándares internacionales de calidad.',
    q_food_title: 'Materiales Seguros de Grado Alimentario', q_food_desc: 'Todos los productos están fabricados con materiales seguros de grado alimentario y pueden superar los estándares internacionales de inspección de seguridad alimentaria, incluyendo LFGB, FDA, DGCCRF 2004-64 y 1935/2004EC.',
    q_temp_title: 'Pruebas Rigurosas de Temperatura', q_temp_desc: 'Medimos rigurosamente la temperatura de cada termo para garantizar que el rendimiento térmico cumpla con los estándares, dando a los clientes total confianza.',
    q_pack_title: 'Embalaje de Precisión', q_pack_desc: 'Nuestra precisa artesanía garantiza cuerpos de productos hermosos. Todos los productos están envueltos en bolsas de tela para protección, garantizando una entrega segura y sin daños.',
    designs_eyebrow: 'Su diseño, nuestra arte.', designs_headline: 'Diseños Personalizados',
    designs_subhead: 'Línea propia de pintura por pulverización y equipos de transferencia térmica, soportando una amplia gama de patrones y colores personalizados.',
    cta_eyebrow: 'Esperando la cooperación.', cta_headline: 'Póngase en Contacto',
    cta_subhead: 'Ya sea que necesite fabricación OEM, diseño ODM o venta al por mayor, entregamos productos y servicios de calidad.',
    cta_email_label: 'Correo', cta_wechat_label: 'WeChat',
    footer_products: 'Serie de Productos', footer_services: 'Servicios', footer_custom_patterns: 'Patrones Personalizados'
  }
};

const dir = 'e:\\onedrive\\vaccumflask\\website';

for (const [code, t] of Object.entries(langs)) {
  const file = code === 'en' ? 'index.html' : `index-${code}.html`;
  const filePath = `${dir}\\${file}`;
  fs.writeFileSync(filePath, buildPage(t), 'utf8');
  console.log(`Written: ${file}`);
}
