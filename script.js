document.addEventListener("DOMContentLoaded", function() {
    // گرفتن تمام عناصر با کلاس accordion
    var acc = document.getElementsByClassName("accordion");

    // حلقه برای افزودن رویداد کلیک به هر دکمه
    for (var i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            
            /* بخش ۱: بستن تمام پنل‌های دیگر */
            // این حلقه چک می‌کند که اگر دکمه‌ای غیر از دکمه فعلی باز است، آن را ببندد
            for (var j = 0; j < acc.length; j++) {
                if (acc[j] !== this) {
                    // حذف کلاس active از دکمه‌های دیگر
                    acc[j].classList.remove("active");
                    // بستن پنل مربوط به دکمه‌های دیگر
                    if (acc[j].nextElementSibling) {
                        acc[j].nextElementSibling.style.maxHeight = null;
                    }
                }
            }

            /* بخش ۲: باز یا بسته کردن پنلی که روی آن کلیک شده */
            this.classList.toggle("active");
            var panel = this.nextElementSibling;

            if (panel.style.maxHeight) {
                // اگر باز است، ببند
                panel.style.maxHeight = null;
            } else {
                // اگر بسته است، باز کن
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }
});
