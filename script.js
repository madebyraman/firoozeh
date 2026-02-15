document.addEventListener("DOMContentLoaded", function() {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* تغییر کلاس برای تغییر آیکون مثبت به منفی */
            this.classList.toggle("active");

            /* پیدا کردن پنل محتوا که بلافاصله بعد از دکمه قرار دارد */
            var panel = this.nextElementSibling;

            /* بررسی اینکه آیا پنل باز است یا بسته */
            if (panel.style.maxHeight) {
                // اگر باز است، آن را ببند
                panel.style.maxHeight = null;
            } else {
                // اگر بسته است، به اندازه ارتفاع محتوا بازش کن
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }
});
