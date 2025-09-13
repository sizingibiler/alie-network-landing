# Alie Network - Dosya Yerleştirme Rehberi

Bu rehber, C:\Users\TT\alienetworkweb dizinindeki orijinal dosyaları React projenize nasıl aktaracağınızı gösterir.

## 📁 Dizin Yapısı

React projenizde şu dizin yapısını oluşturun:

```
public/
└── assets/
    ├── videos/
    │   ├── hero-bg.mp4              # Ana hero arkaplan videosu
    │   ├── section-bg.mp4           # Bölüm arkaplan videoları
    │   └── ...
    ├── images/
    │   ├── logos/
    │   │   ├── alie-logo.png        # Ana Alie Network logosu
    │   │   └── partners/            # Partner/müşteri logoları
    │   │       ├── binance.png
    │   │       ├── coinbase.png
    │   │       ├── polygon.png
    │   │       ├── arbitrum.png
    │   │       ├── optimism.png
    │   │       ├── chainlink.png
    │   │       ├── avalanche.png
    │   │       └── thegraph.png
    │   ├── team/
    │   │   ├── hamza-aktan.jpg      # Takım üyesi fotoğrafları
    │   │   ├── berkay-kaya.jpg
    │   │   └── ziya-eyuboglu.jpg
    │   ├── backgrounds/
    │   │   ├── hero-poster.jpg      # Video poster/fallback
    │   │   ├── whitepaper-bg.jpg    # Whitepaper bölümü arkaplanı
    │   │   └── ...
    │   └── icons/
    └── documents/
        └── alie-network-whitepaper.pdf  # Whitepaper PDF'i
```

## 🔄 Dosya Aktarma Adımları

### 1. Public Klasörü Oluşturma
React projenizin root dizininde `public` klasörü varsa kullanın, yoksa oluşturun.

### 2. Assets Klasör Yapısını Oluşturma
```bash
mkdir -p public/assets/{videos,images/{logos/partners,team,backgrounds,icons},documents}
```

### 3. Dosyaları Kopyalama
C:\Users\TT\alienetworkweb dizininden ilgili dosyaları yukarıdaki yapıya uygun olarak kopyalayın.

## 📝 Güncellenen Bileşenler

Aşağıdaki bileşenler yerel dosyalarınızı kullanacak şekilde güncellenmiştir:

### ✅ HeroSection.tsx
- Video arkaplanı: `/assets/videos/hero-bg.mp4`
- Poster görsel: `/assets/images/backgrounds/hero-poster.jpg`
- Fallback mekanizması eklendi

### ✅ Header.tsx  
- Ana logo: `/assets/images/logos/alie-logo.png`

### ✅ TeamSection.tsx
- Takım fotoğrafları: `/assets/images/team/[isim].jpg`

### ✅ TrustedBySection.tsx
- Partner logoları: `/assets/images/logos/partners/[şirket].png`

### ✅ WhitepaperSection.tsx
- Arkaplan görseli: `/assets/images/backgrounds/whitepaper-bg.jpg`
- PDF linki: `/assets/documents/alie-network-whitepaper.pdf`

## 🎯 Dosya Adlandırma Önerileri

### Videolar:
- `hero-bg.mp4` - Ana hero arkaplan videosu
- `section-bg.mp4` - Bölüm arkaplan videoları

### Logolar:
- `alie-logo.png` - Ana logo (PNG veya SVG tercih edilir)
- Partner logoları: küçük harfle, tire ile

### Takım Fotoğrafları:
- `hamza-aktan.jpg`
- `berkay-kaya.jpg` 
- `ziya-eyuboglu.jpg`

### Arkaplan Görselleri:
- `hero-poster.jpg` - Video fallback
- `whitepaper-bg.jpg` - Whitepaper arkaplanı

## 🚀 Sonraki Adımlar

1. Dosyaları yerleştirdikten sonra React uygulamasını yeniden başlatın
2. Tüm görsellerin yüklendiğini kontrol edin
3. Video arkaplanlarının çalıştığını test edin
4. Responsive tasarımı farklı ekran boyutlarında test edin

## 💡 İpuçları

- **Video formatları**: MP4 formatı tüm tarayıcılarda desteklenir
- **Görsel optimizasyonu**: Büyük dosyaları sıkıştırarak performansı artırın
- **Yedekleme**: Orijinal dosyalarınızın yedeğini alın
- **Test**: Her dosya yerleştirmeden sonra uygulamayı test edin

## 🔧 Sorun Giderme

Eğer dosyalar yüklenmiyorsa:
1. Dosya yollarını kontrol edin
2. Dosya adlarının büyük/küçük harf duyarlılığını kontrol edin
3. Browser console'da hata mesajlarını kontrol edin
4. Public klasörünün doğru konumda olduğundan emin olun