# Ayşe'nin Masalı - Rapunzel + Scrapbook GitHub Pages Sitesi

Bu proje GitHub Pages için hazırlandı. Backend, React, Node veya kurulum gerekmez.

## Kullanım

1. ZIP'i çıkar.
2. İçindeki dosyaları GitHub reposuna yükle.
3. GitHub'da Settings → Pages → Deploy from branch → main / root seç.
4. Site açılınca şifre: `1010`

## Fotoğraf ekleme

1 fotoğrafı şu isimlerle koy:

```text
assets/images/photo1.jpg
assets/images/photo2.jpg
assets/images/photo3.jpg
assets/images/photo4.jpg
assets/images/photo5.jpg
assets/images/photo6.jpg
assets/images/photo7.jpg
assets/images/photo8.jpg
assets/images/photo9.jpg
assets/images/photo10.jpg
```

V4 güncellemesiyle fotoğraf bölümü artık dağınık grid değil; her ekranda tek büyük fotoğraf solda, yanında 4 satırlık romantik not olacak şekilde akar. Mobilde fotoğraf üstte, not altında görünür.

Fotoğraf koymazsan site kırılmaz; placeholder gösterir.

## Müzik ekleme

Kendi mp3 dosyanı şu isimle koy:

```text
assets/music/background.mp3
```

Zarf açılış efekti için isteğe bağlı:

```text
assets/music/envelope.mp3
```

Dosya yoksa JavaScript tarayıcı içinde küçük bir chime sesi üretir.

## V4'te eklenenler

- Ayşe'nin Scrapbook Sayfası'na geçişte mor → beyaz yumuşak gradient geçiş.
- Fotoğraf bölümü: solda tek büyük polaroid fotoğraf, sağda 4 satırlık not.
- Spotify tarzı mor şarkı sözü kartı.
- `Kiss of Life - Sade` kartı ve kısa Spotify hissi.
- Gerçek zambaklı pasta görseli: `assets/images/lily-cake.png`.
- Happy birthday etiketleri ve scrapbook dokusu korunur.

## Kişisel ayarlar

`script.js` içindeki `CONFIG` bölümünden değiştirebilirsin:

```js
const CONFIG = {
  name: "Ayşe",
  partnerName: "Kerem",
  password: "1010",
  startDate: "2025-10-10T00:00:00+03:00",
  photoCount: 10,
  spotifyTitle: "Kiss of Life",
  spotifyArtist: "Sade",
};
```


## V5 notu

Fotoğraf bölümü artık kısa tutuldu. Sadece `assets/images/photo1.jpg` kullanılır; yanında 4 satırlık romantik not görünür.

### Spotify görselini değiştirme

Spotify söz kartını birebir kendi görselin yapmak için görselini şu isimle koy:

```text
assets/images/spotify-card.jpg
```

Bu dosyayı koyarsan site otomatik olarak onu gösterir. Koymazsan kodun içindeki mor Spotify kartı yedek olarak görünür.


## Spotify kartı nasıl değiştirilir?

Spotify görselini değiştirmek için görseli şu konuma koy:

```text
assets/images/spotify-card.jpg
```

GitHub Pages büyük/küçük harfe duyarlıdır. Dosyanın adı gerçekten `spotify-card.jpg` olmalı. iPhone/Mac bazen dosyayı `spotify-card.JPG` veya `spotify-card.png` diye kaydedebilir; V8 sürümü bunları da otomatik deniyor ama en garanti yöntem dosyayı tam olarak `spotify-card.jpg` diye yeniden adlandırmak.

Dosyayı değiştirdikten sonra tarayıcıda eski hali görürsen sayfayı hard refresh yap veya linkin sonuna `?v=2` ekleyerek aç.
