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

## Yayın

Site `ykavras/parallax` reposundan GitHub Pages ile yayında (main dalı, kök klasör):

| | English | Türkçe |
|---|---|---|
| Privacy | https://ykavras.github.io/parallax/privacy/ | https://ykavras.github.io/parallax/tr/privacy/ |
| Terms | https://ykavras.github.io/parallax/terms/ | https://ykavras.github.io/parallax/tr/terms/ |
| Support | https://ykavras.github.io/parallax/support/ | https://ykavras.github.io/parallax/tr/support/ |
| Ana sayfa | https://ykavras.github.io/parallax/ | https://ykavras.github.io/parallax/tr/ |

Güncellemek için bu klasörün içeriğini (`.nojekyll` dahil) repo köküne kopyala, commit'le
ve push'la; Pages 1–2 dakikada yeniler. Adres değişirse sayfaların `<head>`'indeki
`og:image` ve `hreflang` adreslerini ve `../appstore/metadata/*/…_url.txt` dosyalarını
güncelle.

## Düzenleme

- Sayfalar düz HTML; metni doğrudan dosyada değiştir. EN ve TR sürümlerini birlikte
  güncel tut.
- İçerik değişince hero'daki **Yürürlük / Effective** tarihini ve sürümü güncelle.
  Önemli değişiklikleri uygulamada da duyur (politika bunu vaat ediyor).
- Yerelde önizleme: `python3 -m http.server 18743 --directory parallax-legal` →
  http://localhost:18743
