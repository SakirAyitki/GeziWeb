// Firmamız Ol Form Integration
// Bu dosyayı firmamız ol sayfasına dahil edin

document.addEventListener('DOMContentLoaded', function() {
    // 3. form (son form) için submit event listener
    const corporateForm = document.querySelector('#corporate-form-step-3'); // Form ID'sini gerçek ID ile değiştirin
    
    if (corporateForm) {
        corporateForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Formun normal submit işlemini durdur
            
            // Form validasyonu
            if (validateCorporateForm()) {
                // Form verilerini işle
                submitCorporateForm();
            }
        });
    }
    
    // Alternatif: Eğer form ID'si farklıysa, submit button'a göre yakala
    const submitButton = document.querySelector('.corporate-submit-btn'); // Submit button class'ını gerçek class ile değiştirin
    
    if (submitButton) {
        submitButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Form validasyonu
            if (validateCorporateForm()) {
                // Form verilerini işle
                submitCorporateForm();
            }
        });
    }
});

// Form validasyon fonksiyonu
function validateCorporateForm() {
    // Gerekli alanları kontrol et
    const requiredFields = [
        'company-name',
        'contact-person',
        'email',
        'phone',
        'address'
        // Diğer gerekli alanları buraya ekleyin
    ];
    
    let isValid = true;
    let firstErrorField = null;
    
    requiredFields.forEach(fieldName => {
        const field = document.querySelector(`[name="${fieldName}"]`) || 
                     document.querySelector(`#${fieldName}`);
        
        if (field) {
            const value = field.value.trim();
            
            if (!value) {
                isValid = false;
                field.classList.add('error');
                
                if (!firstErrorField) {
                    firstErrorField = field;
                }
                
                // Hata mesajı göster
                showFieldError(field, 'Bu alan zorunludur.');
            } else {
                field.classList.remove('error');
                hideFieldError(field);
                
                // Email validasyonu
                if (fieldName === 'email' && !isValidEmail(value)) {
                    isValid = false;
                    field.classList.add('error');
                    showFieldError(field, 'Geçerli bir email adresi giriniz.');
                    
                    if (!firstErrorField) {
                        firstErrorField = field;
                    }
                }
                
                // Telefon validasyonu
                if (fieldName === 'phone' && !isValidPhone(value)) {
                    isValid = false;
                    field.classList.add('error');
                    showFieldError(field, 'Geçerli bir telefon numarası giriniz.');
                    
                    if (!firstErrorField) {
                        firstErrorField = field;
                    }
                }
            }
        }
    });
    
    // İlk hatalı alana odaklan
    if (!isValid && firstErrorField) {
        firstErrorField.focus();
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    return isValid;
}

// Form gönderme fonksiyonu
function submitCorporateForm() {
    // Loading state göster
    showLoadingState();
    
    // Form verilerini topla
    const formData = collectFormData();
    
    // API'ye gönder (gerçek API endpoint'inizi kullanın)
    fetch('/api/corporate-application', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Başarılı gönderim
        hideLoadingState();
        showSuccessModal();
        
        // Form'u temizle (isteğe bağlı)
        clearForm();
        
        // Analytics tracking (isteğe bağlı)
        trackFormSubmission('corporate_application_success');
    })
    .catch(error => {
        console.error('Form submission error:', error);
        hideLoadingState();
        showErrorMessage('Başvurunuz gönderilirken bir hata oluştu. Lütfen tekrar deneyiniz.');
        
        // Analytics tracking (isteğe bağlı)
        trackFormSubmission('corporate_application_error');
    });
}

// Form verilerini toplama fonksiyonu
function collectFormData() {
    const formData = {};
    
    // Tüm form alanlarını topla
    const form = document.querySelector('#corporate-form-step-3') || 
                 document.querySelector('form'); // Gerçek form selector'ını kullanın
    
    if (form) {
        const formElements = form.querySelectorAll('input, select, textarea');
        
        formElements.forEach(element => {
            if (element.name) {
                if (element.type === 'checkbox') {
                    formData[element.name] = element.checked;
                } else if (element.type === 'radio') {
                    if (element.checked) {
                        formData[element.name] = element.value;
                    }
                } else {
                    formData[element.name] = element.value;
                }
            }
        });
    }
    
    // Timestamp ekle
    formData.submitted_at = new Date().toISOString();
    
    return formData;
}

// Yardımcı fonksiyonlar
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function showFieldError(field, message) {
    // Mevcut hata mesajını kaldır
    hideFieldError(field);
    
    // Yeni hata mesajı oluştur
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error-message';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '14px';
    errorDiv.style.marginTop = '5px';
    
    // Hata mesajını field'ın sonrasına ekle
    field.parentNode.insertBefore(errorDiv, field.nextSibling);
}

function hideFieldError(field) {
    const errorMessage = field.parentNode.querySelector('.field-error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function showLoadingState() {
    const submitButton = document.querySelector('.corporate-submit-btn') || 
                        document.querySelector('button[type="submit"]');
    
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="loading-spinner"></span> Gönderiliyor...';
        submitButton.classList.add('loading');
    }
}

function hideLoadingState() {
    const submitButton = document.querySelector('.corporate-submit-btn') || 
                        document.querySelector('button[type="submit"]');
    
    if (submitButton) {
        submitButton.disabled = false;
        submitButton.innerHTML = 'Formu Gönder'; // Orijinal text
        submitButton.classList.remove('loading');
    }
}

function showErrorMessage(message) {
    // Error toast veya alert göster
    alert(message); // Basit alert, daha gelişmiş toast sistemi kullanabilirsiniz
}

function clearForm() {
    const form = document.querySelector('#corporate-form-step-3') || 
                 document.querySelector('form');
    
    if (form) {
        form.reset();
    }
}

function trackFormSubmission(eventName) {
    // Google Analytics veya diğer analytics servislerine event gönder
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, {
            'event_category': 'form',
            'event_label': 'corporate_application'
        });
    }
}

// Success Modal Functions (success-modal.html'den kopyalandı)
function showSuccessModal() {
    // Eğer modal HTML'i sayfada yoksa, dinamik olarak oluştur
    if (!document.getElementById('successModal')) {
        createSuccessModal();
    }
    
    const modal = document.getElementById('successModal');
    modal.classList.add('active');
    
    // Auto close after 5 seconds
    setTimeout(() => {
        closeSuccessModal();
    }, 5000);
}

function closeSuccessModal() {
    const modal = document.getElementById('successModal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function createSuccessModal() {
    const modalHTML = `
        <div class="success-page" id="successModal">
            <div class="success-modal">
                <button class="success-close-btn" onclick="closeSuccessModal()">&times;</button>
                
                <div class="success-content">
                    <!-- Progress Bar -->
                    <div class="success-progress-bar">
                        <div class="progress-indicator"></div>
                        <div class="progress-line"></div>
                        <div class="progress-indicator"></div>
                        <div class="progress-line"></div>
                        <div class="progress-indicator"></div>
                    </div>
                    
                    <!-- Success Icon -->
                    <div class="success-icon"></div>
                    
                    <!-- Text Section -->
                    <div class="success-text-section">
                        <div class="success-title-group">
                            <h1 class="success-title">Başvurunuz için Teşekkür Ederiz!</h1>
                            <p class="success-description">
                                Başvurunuz bize ulaştı! İncelemelerimiz sonucu sizlere en kısa sürede dönüş sağlayacağız!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Event listeners ekle
    document.getElementById('successModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeSuccessModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeSuccessModal();
        }
    });
} 