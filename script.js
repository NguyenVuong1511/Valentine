$(document).ready(function () {
    $('.envelope').click(function () {
        var $envelope = $(this); // Tham chiếu đến .envelope đã được nhấp
        var $card = $('.card'); // Tham chiếu đến .card

        // Kiểm tra nếu .envelope đã có class 'rotate'
        if ($envelope.hasClass('rotate')) {
            // Nếu đã xoay, thụt .card xuống và xoay lại .envelope
            $card.stop().css({
                top: '0px'
            }, 'flast');
            $envelope.removeClass('rotate'); // Xoay lại .envelope
            $envelope.stop().css('overflow', 'hidden');
        } else {
            // Nếu chưa xoay, xoay .envelope và di chuyển .card lên
            $envelope.stop().css('overflow', 'inherit');
            $envelope.addClass('rotate'); // Xoay .envelope
            $card.stop().animate({
                top: '-90px'
            }, 'slow');
        }

        // Đảm bảo không bị tràn overflow khi thay đổi trạng thái
        
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Lấy các phần tử cần thiết
    const modal = document.getElementById('passwordModal');
    const openModal = document.getElementById('openModal');
    const closeModal = document.getElementById('closeModal');
    const submitPassword = document.getElementById('submitPassword');
    const passwordInput = document.getElementById('passwordInput');

    // Mở modal khi nhấp vào liên kết
    openModal.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    // Đóng modal khi nhấp vào dấu x
    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    // Kiểm tra mật khẩu khi nhấn nút xác nhận
    submitPassword.onclick = function() {
        const password = passwordInput.value;

        // Kiểm tra mật khẩu (có thể thay đổi mật khẩu ở đây)
        if (password === "01/12/2024" || password === "17/08/2005") {
            window.open("ValentineVoYeuu.html", "_self"); // Mở trang mới nếu đúng mật khẩu
            modal.style.display = "none"; // Đóng cửa sổ nhập mật khẩu
        } else {
            alert("Mật khẩu sai. Hãy thử lại.");
        }
    }

    // Đóng modal nếu người dùng nhấn vào ngoài cửa sổ modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

