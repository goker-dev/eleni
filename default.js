
var app = {
    init: function() {

        app.info = $('#info').on('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            $('#splash, #info').remove();
            $('#answer').css({
                'display': 'block'
            });
            app.getAnswer();
            app.animate();
        });

        app.splash = $('#splash').addClass('fade').on('click', function() {
            $(this).remove();
            app.info.css('opacity', 1);
        });

        app.answer = $('#answer');
        app.loading = $('<div>').attr('id', 'loading');
        app.text = $('<table>').attr('id', 'text');
        app.answer.append(app.loading).append(app.text);

        setTimeout(function() {
            app.splash.remove();
            app.info.animate({'opacity': 1}, 800);
        }, 2800);

        app.answer = 0;
        app.answersLength = app.answers.length;
        $('#answer').css({
            'line-height': $(window).height() + 'px'
        });
        $('#answer').on('click', function() {
            //e.stopPropagation();
            //e.preventDefault();
            app.getAnswer();
            app.animate();
        });
        $.onshake(function() {
            app.getAnswer();
            app.animate();
        }, 10);
    },
    checkForUpdate: function() {
        if (window.applicationCache !== undefined && window.applicationCache !== null) {
            window.applicationCache.addEventListener('updateready', updateApplication);
        }
    },
    updateApplication: function() {
        if (window.applicationCache.status !== 4)
            return;
        window.applicationCache.removeEventListener('updateready', updateApplication);
        window.applicationCache.swapCache();
        window.location.reload();
    },
    animate: function() {
        //app.text.attr('class', 'fadeOut');
        app.text.animate({'opacity': 0}, 1000);
        //app.text[0].addEventListener("animationend", app.blink, false);
        app.timeoutBlink = window.setTimeout(app.blink, 1000);
    },
    blink: function() {
        app.loading.addClass('blink');
        app.timeoutShow = window.setTimeout(app.show, 2000);
        //app.loading[0].addEventListener("animationend", app.show, false);
    },
    show: function() {
        clearTimeout(app.timeoutBlink);
        clearTimeout(app.timeoutShow);
        app.loading.removeClass('blink');
        app.text.html('<tr><td>' + app.answers[app.answer] + '</td></tr>');
        //app.text.attr('class', 'fadeIn');
        app.text.animate({'opacity': 1}, 1000);
    },
    getAnswer: function() {
        var i = ((Math.random() * app.answersLength) << 0) % app.answersLength;
        if (i === app.answer) {
            return app.getAnswer();
        } else
            app.answer = i;
    },
    answers: ['HAREKETE GEÇERSEN DURUMU DEĞİŞTİREBİLİRSİN', 'BU KONUDA ÇOK DA EMİN OLMA', 'CESARETİNİ TOPLA', 'BİR BİLENE SOR', 'KENDİNİ ÖDÜN VEREMEYECEK BİR DURUMDA BULABİLİRSİN', 'EVİNDE DAHA FAZLA ZAMAN GEÇİR', 'ÖNCE DURUMU DEĞERLENDİR', 'HİÇ TEREDDÜT ETME', 'BU ASLA TAHMİN EDİLEMEZ', 'ASLA OLMAZ', 'ÖNYARGISIZ YAKLAŞ', 'BUNDAN EMİN OLABİLİRSİN', 'BEKLEMEK EN İYİSİ', 'BU İŞ KESİN GÖRÜNÜYOR', 'GECİKMEDEN YAP', 'BU KONUDAN KİMSEYE BAHSETME', 'SÜPRİZLERLE KARŞILAŞABİLİRSİN', 'CEVABIN FARKLI BİR YOLDAN GELECEK', 'ALIŞMAN GEREKECEK', 'KUŞKU DUY', 'SANA ŞANSLI GELECEK', 'SABIRLI OL', 'HER ŞEYİ SONUNDA ÖĞRENECEKSİN', 'SONUÇ BAŞKA BİR KONUYA BAĞLI', 'BEKLE', 'BAŞKALARININ SENİN HAKKINDAKİ DÜŞÜNCELERİNİ ETKİLEYECEK', 'BUNU YAPTIĞIN İÇİN MUTLU OLACAKSIN', 'İŞİNİ SAĞLAMA AL', 'ŞU AN İÇİN UYGUN DEĞİL', 'DAHA İYİSİ İÇİN ÇABALA', 'SENDEN İSTENDİĞİ GİBİ YAP', 'YA DOĞRU OLANI YAP YA DA HİÇ YAPMA', 'ŞU AN DAHA FAZLASINI İSTEME', 'İLK AKLINA GELENİ YAPMA', 'SON KARARI SEN VERECEKSİN', 'SAĞLAM ADIMLARLA İLERLE', 'İLK AKLINA GELEN CEVAP EN DOĞRUSU OLMAYABİLİR', 'TEKLİFLERE AÇIK OL', 'BU İŞ SANA BAĞLI DEĞİL', 'ŞÜKRETMEYİ BİL', 'DURUMUN KEYFİNİ ÇIKAR', 'BU KONUDA DİKKATLİ DAVRAN', 'AYRINTILARA DİKKAT ET', 'ADIMLARINI DİKKATLİ AT', 'BU KONUDA FİKRİNİ SÖYLE', 'YENİ BİR PLAN YAPMANIN TAM ZAMANI', 'DEVAM ET', 'SONUCUN GARANTİSİ YOK', 'ŞARTLAR ÇOK ÇABUK DEĞİŞEBİLİR', 'DUYGULARINA YENİK DÜŞME', 'BAŞKA KONULARA ODAKLAN', 'BU ÖNEMLİ', 'NEYİN ÖNEMLİ OLDUĞUNU İYİ DÜŞÜN', 'NEGATİF YÖNLERİN LİSTESİNİ YAP', 'HİÇ BEKLEME', 'ASLA UNUTAMAYACAĞIN BİR ŞEY OLACAK', 'İŞLERİN YOLUNA GİRMESİNİ BEKLE', 'BAŞKA SEÇENEKLER ARA', 'SORUMLULUKLARINI YERİNE GETİR', 'DAHA SONRA DEĞERLENDİR', 'BAŞKALARINI TAKİP ET', 'POZİTİF YÖNLERİN LİSTESİNİ YAP', 'ŞANSINI DENE', 'FARKLI BİR YOLDAN GİT', 'LİDERLİĞİ ELE GEÇİR', 'ÖDÜN VERMEN GEREKİYOR', 'DAHA FAZLA BİLGİ EDİN', 'İLK AKLINA GELENE GÜVEN', 'İŞLER KARIŞACAK', 'KENDİ YARATTIĞIN ENGELLERİ YOK ET', 'İŞİNE ODAKLANMAN DAHA İYİ', 'ÇOK ZEVKLİ OLACAK', 'DAHA CÖMERT OL', 'ÖNCE DİĞER İŞLERİ BİTİR', 'BUNA KARŞI ÇIKANLAR OLABİLİR', 'BÜTÜNÜ GÖREMİYORSUN', 'KONU NET DEĞİL', 'ÇOK ÇABA GEREKTİRİYOR', 'DİNLENMEYE ZAMAN AYIR', 'BU ŞANS TEKRAR ELE GEÇMEZ', 'YAKLAŞIMINI GÖZDEN GEÇİR', 'BU TAVSİYE EDİLMEZ', 'DAHA İYİ BİR FIRSAT BEKLE', 'ZAMAN KAYBETMEDEN BİTİR', 'OLUR AMA ZORLAMA', 'ŞİMDİ YAP', 'ABARTMA', 'SANA DESTEK OLACAK', 'PAHALIYA MALOLACAK', 'HERŞEYİ CAZİPLEŞTİRECEK', 'PRATİK OL', 'BOŞUNA ÇABALAMA', 'KESİN DEĞİL', 'NE OLURSA OLSUN', 'ENDİŞELENME', 'SÜRPRİZE HAZIR OL', 'ÖNEMLİ DEĞİL', 'BAŞKALARIYLA PAYLAŞ', 'KALICI SONUÇLARI OLACAK', 'ZOR AMA FAYDALI OLACAK', 'ÇABA HARCAMAYA DEĞER', 'ENGELLERLE KARŞILAŞACAKSIN', 'ÇEVRENDEN DESTEK ALACAKSIN', 'YARDIM ALIRSAN BAŞARILI OLACAKSIN', 'İŞBİRLİĞİ ÇOK ÖNEMLİ', 'SORUMLULUK AL', 'BAŞARACAKSIN', 'ŞİMDİ HAREKETE GEÇ', 'KURALLARA UY', 'ISRAR ET', 'HAYAL KIRIKLIĞINA UĞRAMAYACAKSIN', 'BU İŞİ OLDU BİL', 'İYİ NİYETLE ÇABALAMAYA DEVAM ET', 'KARA VERMEK İÇİN BİRAZ DAHA DÜŞÜN', 'ACELE ETMEK ZORUNDA DEĞİLSİN', 'BARİZ OLANI GÖRMEMEZLİK ETME', 'İNAT ETME', 'ÇABALARINA DEĞER', 'EĞLEN', 'DENENMEMİŞ BİR YOLDAN GİT', 'ESKİ YÖNTEMLERİ GERİDE BIRAK', 'TEK BAŞINA OLMAZ', 'ŞANSSIZLIKLARLA KARŞILAŞABİLİRSİN', 'FAZLA SEÇENEK İŞLERİ ZORLAŞTIRABİLİR', 'EVET', 'DİKKATLİ DİNLERSEN ANLAYACAKSIN', 'HER ŞEY SENİN ELİNDE', 'GÜLÜP GEÇ', 'BU DURUM BAŞKALARINI DA ETKİLEYECEK', 'VAZGEÇ', 'BOŞA PARA HARCAMA', 'TÜM GÜCÜNLE DENE', 'BUNU GERÇEKTEN UMURSAMIYORSUN', 'BAŞKA BİR YOL DÜŞÜN', 'BİR SÜRE SONRA BUNUN BİR ANLAMI KALMAYACAK', 'BOŞA ZAMAN HARCAMA', 'İYİ BİR SONUÇ ALABİLİRSİN', 'ONA KADAR SAY VE TEKRAR SOR', 'ŞİMDİDEN OLMUŞ GİBİ DAVRAN', 'ÖNCELİKLERİNİ BELİRLE', 'HAYAL GÜCÜNÜ KULLAN', 'HARİKA OLACAK']
};

app.init();