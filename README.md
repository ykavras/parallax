# Parallax: hukuki sayfalar ve destek sitesi

App Store Connect'e verilecek Privacy Policy, Terms of Use, Support ve Marketing URL'leri
için statik site. Derleme adımı yok; GitHub Pages dosyaları olduğu gibi yayınlar.

```
index.html              EN ana sayfa (Marketing URL)
privacy/  terms/  support/
tr/index.html           TR ana sayfa
tr/privacy/  tr/terms/  tr/support/
assets/style.css        uygulamanın token'ları: #060A08 · #EAF6EF · #46F2A2
assets/site.js          içindekiler vurgusu + dil tercihi (sayfalar JS'siz de tam çalışır)
assets/fonts/           Chakra Petch + JetBrains Mono, yerel WOFF2 (OFL lisanslı)
.nojekyll               GitHub'ın Jekyll işlemesini kapatır
```

Site çerez, analiz aracı ya da dış kaynaklı font kullanmıyor; gizlilik politikası da
bunu söylüyor. Bağlantıların hepsi göreli, bu yüzden hem `github.io/parallax-legal/`
altında hem özel bir alan adında çalışır.

## 1. Yayından önce: boşlukları doldur

Sayfalarda doldurulması gereken dört alan var:

| Alan | Nerede | Örnek |
|---|---|---|
| `{{COMPANY}}` | veri sorumlusu, koşullar, footer | Şirketin tam ticari unvanı |
| `{{ADDRESS}}` | veri sorumlusu, koşullar (Apple'ın EULA şartı) | Tebligat adresi |
| `{{CONTACT_EMAIL}}` | her sayfa (40 yer) | destek@… |
| `{{AI_PROVIDER}}` | gizlilik politikası (EN + TR) | OpenAI, L.L.C. (USA) |

Hepsini bir kerede değiştir (değerler tırnak içinde, her karakter serbest):

```bash
cd parallax-legal
python3 - <<'EOF'
from pathlib import Path
values = {
    "{{COMPANY}}": "…",
    "{{ADDRESS}}": "…",
    "{{CONTACT_EMAIL}}": "…",
    "{{AI_PROVIDER}}": "OpenAI, L.L.C. (USA)",
}
values_tr = {"{{AI_PROVIDER}}": "OpenAI, L.L.C. (ABD)"}
for f in Path(".").rglob("*.html"):
    v = {**values, **(values_tr if f.parts[0] == "tr" else {})}
    s = f.read_text(encoding="utf-8")
    for k, val in v.items():
        s = s.replace(k, val)
    f.write_text(s, encoding="utf-8")
EOF
grep -rn "{{" --include=*.html . || echo "Hepsi dolu"
```

`../appstore/metadata/copyright.txt` içindeki `{{COMPANY}}`'yi de değiştir.

## 2. GitHub Pages'e yayınla

1. GitHub'da **public** bir repo aç: `parallax-legal` (ücretsiz planda Pages için public
   şart). README, lisans vb. ekleme, boş kalsın.
2. Bu klasörden gönder:

   ```bash
   cd parallax-legal
   git init -b main
   git add .
   git commit -m "Parallax legal site"
   git remote add origin https://github.com/omercsoylu/parallax-legal.git
   git push -u origin main
   ```

3. Repo → **Settings → Pages** → Build and deployment → Source: **Deploy from a branch**
   → Branch: **main**, klasör: **/ (root)** → Save.
4. 1–2 dakika sonra adresler:

| | English | Türkçe |
|---|---|---|
| Privacy | https://omercsoylu.github.io/parallax-legal/privacy/ | https://omercsoylu.github.io/parallax-legal/tr/privacy/ |
| Terms | https://omercsoylu.github.io/parallax-legal/terms/ | https://omercsoylu.github.io/parallax-legal/tr/terms/ |
| Support | https://omercsoylu.github.io/parallax-legal/support/ | https://omercsoylu.github.io/parallax-legal/tr/support/ |
| Ana sayfa | https://omercsoylu.github.io/parallax-legal/ | https://omercsoylu.github.io/parallax-legal/tr/ |

Repo adı ya da kullanıcı adı farklıysa sayfaların `<head>`'indeki `og:image` ve
`hreflang` adreslerini ve `../appstore/metadata/*/…_url.txt` dosyalarını güncelle.

## Düzenleme

- Sayfalar düz HTML; metni doğrudan dosyada değiştir. EN ve TR sürümlerini birlikte
  güncel tut.
- İçerik değişince hero'daki **Yürürlük / Effective** tarihini ve sürümü güncelle.
  Önemli değişiklikleri uygulamada da duyur (politika bunu vaat ediyor).
- Yerelde önizleme: `python3 -m http.server 18743 --directory parallax-legal` →
  http://localhost:18743
