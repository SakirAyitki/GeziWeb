# Firmamız Ol - Başarı Modal'ı Entegrasyonu

Bu dosyalar, "Firmamız Ol" sayfasındaki 3. formun gönderilmesi sonrasında gösterilecek başarı modal'ını içerir.

## Dosyalar

1. **src/index.css** - Başarı modal'ı için CSS stilleri eklendi
2. **success-modal.html** - Standalone başarı modal'ı HTML dosyası (test için)
3. **form-integration.js** - Form entegrasyonu için JavaScript kodu
4. **README-success-modal.md** - Bu dosya

## Kurulum

### 1. CSS Entegrasyonu
CSS stilleri zaten `src/index.css` dosyasına eklendi. Eğer farklı bir CSS dosyası kullanıyorsanız, aşağıdaki bölümleri kopyalayın:

- `.success-page` ve alt sınıfları
- `.loading-spinner` ve animasyonları
- `.error` ve `.field-error-message` stilleri

### 2. JavaScript Entegrasyonu

#### Yöntem 1: Doğrudan Entegrasyon
`form-integration.js` dosyasını "Firmamız Ol" sayfanıza dahil edin:

```html
<script src="form-integration.js"></script>
```

#### Yöntem 2: Mevcut JavaScript'e Ekleme
`form-integration.js` içindeki kodları mevcut JavaScript dosyanıza kopyalayın.

### 3. Form Ayarları

JavaScript dosyasında aşağıdaki ayarları yapın:

```javascript
// Form ID'sini gerçek ID ile değiştirin
const corporateForm = document.querySelector('#your-actual-form-id');

// Submit button class'ını gerçek class ile değiştirin
const submitButton = document.querySelector('.your-actual-submit-btn-class');

// Gerekli form alanlarını güncelleyin
const requiredFields = [
    'company-name',    // Gerçek field name'leri
    'contact-person',
    'email',
    'phone',
    'address'
];
```

### 4. API Endpoint Ayarı

Form verilerinin gönderileceği API endpoint'ini ayarlayın:

```javascript
fetch('/api/corporate-application', {  // Gerçek API URL'inizi kullanın
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
    },
    body: JSON.stringify(formData)
})
```

## Kullanım

### Otomatik Kullanım
JavaScript dosyası dahil edildikten sonra, form gönderildiğinde otomatik olarak:

1. Form validasyonu yapılır
2. Hatalı alanlar işaretlenir
3. Form verileri API'ye gönderilir
4. Başarılı gönderimde modal açılır
5. Modal 5 saniye sonra otomatik kapanır

### Manuel Kullanım
Modal'ı manuel olarak açmak için:

```javascript
showSuccessModal();
```

Modal'ı manuel olarak kapatmak için:

```javascript
closeSuccessModal();
```

## Özelleştirme

### Modal İçeriği
Modal içeriğini değiştirmek için `createSuccessModal()` fonksiyonundaki HTML'i düzenleyin:

```javascript
<h1 class="success-title">Özel Başlık</h1>
<p class="success-description">Özel açıklama metni</p>
```

### Stil Özelleştirme
CSS'deki renkleri ve boyutları değiştirerek modal'ın görünümünü özelleştirebilirsiniz:

```css
.success-modal {
    background: #F9F9F9;  /* Arka plan rengi */
    border-radius: 8px;   /* Köşe yuvarlaklığı */
    width: 649px;         /* Genişlik */
    height: 390px;        /* Yükseklik */
}

.success-title {
    color: #242731;       /* Başlık rengi */
    font-size: 32px;      /* Başlık boyutu */
}
```

### Otomatik Kapanma Süresi
Modal'ın otomatik kapanma süresini değiştirmek için:

```javascript
// 5000ms = 5 saniye, istediğiniz süreyi yazın
setTimeout(() => {
    closeSuccessModal();
}, 5000);
```

## Form Validasyonu

### Mevcut Validasyonlar
- Zorunlu alan kontrolü
- Email format kontrolü
- Telefon format kontrolü

### Yeni Validasyon Ekleme
`validateCorporateForm()` fonksiyonuna yeni validasyon kuralları ekleyebilirsiniz:

```javascript
// Örnek: Şirket adı minimum 3 karakter olmalı
if (fieldName === 'company-name' && value.length < 3) {
    isValid = false;
    field.classList.add('error');
    showFieldError(field, 'Şirket adı en az 3 karakter olmalıdır.');
}
```

## Hata Ayıklama

### Konsol Logları
Hata ayıklama için konsol loglarını kontrol edin:

```javascript
console.log('Form data:', formData);  // Form verilerini görmek için
console.error('Form submission error:', error);  // Hataları görmek için
```

### Yaygın Sorunlar

1. **Modal açılmıyor**: Form ID'lerini ve class'ları kontrol edin
2. **Validasyon çalışmıyor**: Field name'lerini kontrol edin
3. **API hatası**: Network sekmesinde API çağrısını kontrol edin

## Test

### Modal Testi
Modal'ı test etmek için `success-modal.html` dosyasını tarayıcıda açın ve sayfanın sonundaki JavaScript kodunda:

```javascript
// Bu satırın yorumunu kaldırın
showSuccessModal();
```

### Form Testi
Form entegrasyonunu test etmek için:

1. Gerekli alanları boş bırakın - validasyon mesajları görünmeli
2. Geçersiz email/telefon girin - format hataları görünmeli
3. Tüm alanları doğru doldurun - modal açılmalı

## Destek

Herhangi bir sorun yaşarsanız:

1. Tarayıcı konsolunu kontrol edin
2. Network sekmesinde API çağrılarını kontrol edin
3. CSS ve JavaScript dosyalarının doğru yüklendiğini kontrol edin

## Sürüm Notları

- **v1.0**: İlk sürüm
  - Figma tasarımına uygun modal
  - Form validasyonu
  - API entegrasyonu
  - Responsive tasarım
  - Otomatik kapanma
  - Hata yönetimi 