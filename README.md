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

## Şirket bilgileri

Sayfalarda şu değerler var; değişirse tüm `.html` dosyalarında birlikte değiştir:

| | Değer | Nerede |
|---|---|---|
| Unvan | Albert Medya Yazılım ve Dijital Yayıncılık Hizmetleri A.Ş. | veri sorumlusu, koşullar, footer |
| Adres | Esentepe Mah. Keskin Kalem Sk. Arya Plaza Blok-17 İç Kapı: 2, Şişli / İstanbul | veri sorumlusu, koşullar (Apple'ın EULA şartı) |
| E-posta | info@albertsoftware.com | her sayfa |
| AI sağlayıcısı | OpenRouter, Inc. (ABD) | gizlilik politikası 04/05 ve 06. bölümler |

## GitHub Pages'e yayınla

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
