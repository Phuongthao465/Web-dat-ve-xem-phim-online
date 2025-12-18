// Lấy tên phim đã lưu từ movies.js
const movieName = localStorage.getItem("movieName");

// Database phim (đúng theo movies.html của bạn)
const movies = {
    "Mưa Đỏ": {
        img: "images/mua-do-2.jpg",
        type: "Lịch sử, Chiến tranh",
        time: "⏱ 124 phút",
        country: "Việt Nam",
        age: "👤 T16",
        desc: "Đạo diễn: Đặng Thái Huyền<br>Diễn viên: Lê Hạ Anh, Lâm Thanh Nhã, Nguyễn Văn A, Nguyễn Văn B,...",
        content: "Phim kể về những hy sinh thầm lặng của những người lính trong thời chiến."
    },

    "Chị Ngã Em Nâng": {
        img: "images/chi-nga-em-nang.jpg",
        type: "Tâm lý - Gia đình - Hài",
        time: "⏱ 105 phút",
        country: "Việt Nam",
        age: "👤 T16",
        desc: "Đạo diễn: Trần Hữu Tấn<br>Diễn viên: Anh Tú Atus, Lương Thế Thành,...",
        content: "Câu chuyện cảm động về tình chị em và tình cảm gia đình."
    },

    "Cưới Vợ Cho Cha": {
        img: "images/cuoi-vo-cho-cha.jpg",
        type: "Hài, Tâm lí, Gia đình",
        time: "⏱ 112 phút",
        country: "Việt Nam",
        age: "👤 T13: Phim dành cho khán giả từ đủ 13 tuổi trở lên (13+).",
        desc: "Đạo diễn: Nguyễn Ngọc Lâm<br>Diễn viên: NSƯT Hữu Châu, NSND Hồng Vân, Trương Minh Thảo, Thúy Diễm, Đình Khang, Kim Hải, Leona Khánh Tiên, Trọng...",
        content: "Kể về ông Sáu Sếu ở miền Tây, góa vợ, mắc bệnh hiểm nghèo, muốn cưới vợ cho con trai Út Tửng trước khi chết, nhưng gặp phải mâu thuẫn khi Tửng có bí mật riêng và áp lực từ cha,"
    },

    "Truy Tìm Long Diên Hương": {
        img: "images/truy-tim-long-dien-huong.jpg",
        type: "Hài - Hành động",
        time: "⏱ 103 phút",
        country: "Việt Nam",
        age: "👤 T16: Phim dành cho khán giả từ đủ 16 tuổi trở lên (16+)",
        desc: "Đạo diễn: Dương Minh Chiến<br>Diễn viên: Quang Tuấn, Ma Ran Đô, Hoàng Tóc Dài, Nguyên Thảo,...",
        content: "Ngay trước thềm lễ hội lớn, bảo vật linh thiêng Long Diên Hương bất ngờ bị đánh cắp, kéo theo hai anh em Tâm - Tuấn cùng nhóm bạn vào chuyến hành trình nghẹt thở nhưng không kém phần hài hước khi họ phải chạm trán với các băng nhóm ngư dân xã hội đen cùng nhiều hiểm nguy.."
    },

    "Phi Vụ Động Trời 2": {
        img: "images/phivudongtroi.jpg",
        type: "Hài - Hoạt hình - Phiêu lưu",
        time: "⏱ 117 phút",
        country: "Khác",
        age: "✅ P:  Phim dành cho khán giả mọi lứa tuổi",
        desc: "Đạo diễn: Jared Bush, Byron Howard<br>Diễn viên:  Jason Bateman, Quinta Brunson, Fortune Feimster",
        content: "ZOOTOPIA 2 trở lại sau 9 năm Đu OTP Nick & Judy chuẩn bị 28.11.2025 này ra rạp nhé."
    },

    "Anh Trai Say Xe": {
        img: "images/anhtraisayxe.jpg",
        type: "Đẹp trai, Hài",
        time: "⏱ 110 phút",
        country: "Hàn Quốc ",
        age: "👤 T16: Phim dành cho khán giả từ đủ 16 tuổi trở lên (16+)",
        desc: "Đạo diễn: Nam Dae Jung<br>Diễn viên:Kang Ha Neul, Cha Eun Woo, Kim Young Kwang, Kang Young Suk, Han Seon Hwa.",
        content: "“Đã bao lâu bạn chưa du lịch cùng bạn thân?” Nhóm bạn nối khố của Tae Jeong, Do Jin, Yeon Min và Geum Bok đã ấp ủ một chuyến du lịch cùng nhau ngay sau khi tốt nghiệp cấp III, thế nhưng rốt cuộc vì thế này thế kia mà cả bọn đã lỡ hẹn. Hơn mười năm sau, người phải “bán mình cho tư bản”, người thì xuất gia, người đi định cư, có người lại mắc cả bệnh tâm lý. Nhưng nhóm “bốn thằng cốt” vẫn quyết định cùng nhau thực hiện lời hứa chuyến xuất ngoại đầu tiên. Bốn “anh trai say xe” này đã quậy tưng Bangkok, biến “chuyến đi đầu tiên” thành một kỉ niệm nhớ đời với vô vàn kịch tính lẫn tiếng cười, nước mắt. Nhất là khi, cô nàng vô duyên Ok Sim còn bám riết như kỳ đà!? Lần đầu tiên trên màn ảnh rộng, hai tài tử Kang Ha Neul và Cha Eun Woo bắt tay nhau tạo nên những thước phim thanh xuân mãn nhãn và đẩy cảm xúc.."
    },

    "WICKED": {
        img: "images/WICKED.jpeg",
        type: "Giả tưởng - Phiêu lưu - Lãng mạn",
        time: "⏱ 138 phút",
        country: "🇺🇸 Mỹ",
        age: "✅ K:Phim được phổ biến đến người xem dưới 13 tuổi và có người bảo hộ đi kèm",
        desc: "Đạo diễn: Jon M. Chu<br>Diễn viên: Cynthia Erivo (vai Elphaba), Ariana Grande (vai Glinda), Jonathan Bailey, Michelle Yeoh,...",
        content: "là chương kết hoành tráng, nơi Elphaba trở thành Phù thủy độc ác miền Tây bị truy nã, chiến đấu chống lại chế độ. Glinda phải lựa chọn giữa tình bạn và địa vị, định đoạt số phận của cả hai và dẫn câu chuyện về Phù thủy xứ Oz đi đến hồi kết.."
    },

    "Hoàng Tử Quỷ": {
        img: "images/hoangtuquy.jpg",
        type: "Kinh dị - Cổ trang",
        time: "⏱ 117 phút",
        country: "🇻🇳 Việt Nam",
        age: "👤 T18: Phim dành cho khán giả từ đủ 18 tuổi trở lên (18+)",
        desc: "Đạo diễn: Trần Hữu Tấn<br>Diễn viên: Anh Tú Atus, Lương Thế Thành, Hoàng Linh Chi, Huỳnh Thanh Trực, Rima Thanh Vy, Lê Hà Phương, Duy Luân,...",
        content: "Hoàng Tử Quỷ xoay quanh Thân Đức - một hoàng tử được sinh ra nhờ tà thuật. Trốn thoát khỏi cung cấm, Thân Đức tham vọng giải thoát Quỷ Xương Cuồng khỏi Ải Mắt Người để khôi phục Xương Cuồng Giáo. Nhưng kế hoạch của Thân Đức chỉ thành hiện thực khi hắn có đủ cả hai “nguyên liệu” - Du Hồn Giả và Bạch Hổ Nguyên Âm. Đội lốt một lang y hiền lành, muốn chữa bệnh cứu người, Thân Đức lên đường đến làng Hủi và đụng độ trưởng làng Lỗ Đạt mạnh mẽ, liệu hắn có thể đạt được âm mưu tà ác của mình?."
    },

    "Nhà Hai Chủ": {
        img: "images/nhahaichu.jpg",
        type: "Chính kịch - Kinh dị",
        time: "⏱ 99 phút",
        country: "Việt Nam",
        age: "👤 Chưa phân loại:",
        desc: "Đạo diễn: Trần Duy Linh, Phạm Trung Hiếu<br>Diễn viên: Trâm Anh, Kim Hải, Tạ Lâm, Kim Phương ,Mộc Trà,…",
        content: "Một gia đình nhỏ vì không đủ điều kiện đã phải mua một căn nhà mà người dân xung quanh đồn đoán rằng có nhiều điều tâm linh kỳ lạ. Liệu họ sẽ đối mặt với ngôi nhà nhiều chủ sẽ như thế nào?."
    },

    "Bà Đừng Buồn Con": {
        img: "images/badungbuoncon.jpg",
        type: "Gia đình",
        time: "⏱ 124 phút",
        country: "Việt Nam",
        age: "✅ K:Phim được phổ biến đến người xem dưới 13 tuổi và có người bảo hộ đi kèm ",
        desc: "Đạo diễn: Hoàng Nam<br>Diễn viên:NSND Thanh Hoa, Trần Tú, Hồng Khanh, Huy Võ, Dương Hoàng Hải, Trà My (Nàng Mơ), Hà Hương, Tuấn Hưng, NSND Bùi Bài Bình, NSND Trần Lực, NSƯT Chiều Xuân, nghệ sĩ Quách Thu Phương, Tuấn Tú, Thanh Hương và nhiều diễn viên khác…",
        content: "Chàng sinh viên Tiến (Trần Tú) mang trong mình giấc mơ tạo ra tựa game vươn tầm thế giới, dù liên tục bị xem thường và vấp ngã trên hành trình khởi nghiệp. Cùng với “thế hệ kỳ tích” – những người trẻ dám mơ và dám làm, Tiến từng bước khẳng định giá trị của bản thân. Giữa bao thử thách, tình yêu và niềm tin của người bà (NSND Thanh Hoa) chính là ngọn lửa giúp anh đứng dậy, biến ước mơ thành kỳ tích."
    },

    "Vua Của Các Vua": {
        img: "images/vuacuacacvua.jpg",
        type: "Hoạt hình - Giả tưởng",
        time: "⏱ 101 phút",
        country: "Lồng Tiếng",
        age: "👤 T13: Phim dành cho khán giả từ đủ 13 tuổi trở lên (13+)",
        desc: "Đạo diễn: Seong-ho Jang<br>Diễn viên: Mark Hamill, Pierce Brosnan, Roman Griffin Davis",
        content: "Khi một bộ phim hoạt hình Hàn Quốc viết lại lịch sử phòng vé toàn cầu bằng câu chuyện từ Kinh Thánh. The King of Kings - Vua của Các Vua trở thành bộ phim hoạt hình dựa trên Kinh Thánh có doanh thu đạt kỷ lục toàn cầu, đồng thời chinh phục khán giả Bắc Mỹ với loạt điểm số ấn tượng: 98% Popcornmeter trên Rotten Tomatoes và A+ từ CinemaScore. Bộ phim không chỉ gây ấn tượng bởi thành tích đáng nể, mà còn bởi hành trình nơi niềm tin gặp gỡ nghệ thuật. Từng khung hình được chăm chút như một bức họa thiêng liêng, kể về tình yêu, phép màu và lòng biết ơn - những giá trị khiến bộ phim chạm đến trái tim hàng triệu khán giả. — The King Of Kings – Vua của Các Vua - Phim hoạt hình về cuộc đời Chúa Giê-su đầu tiên."
    },

    "Avatar: Lửa và Tro Tàn": {
        img: "images/luavatrotan.jpg",
        type: "Khoa học viễn tưởng",
        time: "⏱ 99 phút",
        country: "Khác",
        age: "👤 Chưa phân loại:",
        desc: "Đạo diễn: James Cameron<br>Diễn viên: Giovanni Ribisi, Kate Winslet, Zoe Saldaña",
        content: "Avatar: Lửa Và Tro Tàn lấy bối cảnh một năm sau khi gia đình Sully định cư tại bộ tộc Metkayina. Jake (Sam Worthington) và Neytiri (Zoe Saldaña) cùng các thành viên đang phải vật lộn với nỗi đau sau cái chết của Neteyam (Jamie Flatters). Tuy nhiên, thời gian đau buồn không kéo dài lâu khi Đại tá Quaritch (Stephen Lang) vẫn sống sót và chuẩn bị một cuộc tấn công quy mô lớn khác. Mối thù cá nhân giờ đây bùng nổ thành cuộc chiến định đoạt vận mệnh cả hành tinh, khi Quaritch liên minh với Tộc Tro (Mangkwan) - bộ tộc Na'vi hung hãn đại diện cho mặt tối của Pandora dưới sự dẫn dắt của nữ thủ lĩnh Varang đầy thù hận."
    },

    "Ai Thương Ai Mến": {
        img: "images/aithuongaimen.jpg",
        type: "Gia đình - Hài - Tâm lý",
        time: "⏱ 99 phút",
        country: "Việt Nam",
        age: "✅ Chưa phân loại:",
        desc: "Đạo diễn: Thu Trang<br>Diễn viên: Ngọc Thuận, Thu Trang, Trâm Anh, Võ Điền Gia Huy, Khả Như, La Thành, Trương Minh Thảo",
        content: "Bộ phim lấy bối cảnh miền Tây sông nước năm 1960, kể về hành trình cuộc đời của Mến – người phụ nữ trải qua nhiều biến cố, thăng trầm để tìm lại ý nghĩa của yêu thương và bình yên trong cuộc sống.."
    }
};

// Kiểm tra có dữ liệu phim không
const movie = movies[movieName];

if (!movie) {
    document.getElementById("moviecontent").textContent = "❌ Không tìm thấy phim!";
} else {
    document.getElementById("moviecontent").textContent = movieName;
    document.getElementById("movieImg").src = movie.img;
    document.getElementById("movieType").textContent = movie.type;
    document.getElementById("movieTime").textContent = movie.time;
    document.getElementById("movieCountry").textContent = movie.country;
    document.getElementById("movieAge").textContent = movie.age;
    document.getElementById("movieDesc").innerHTML = movie.desc;

    // Nếu có vùng hiển thị nội dung phim
    const contentBox = document.getElementById("movieFullContent");
    if (contentBox) {
        contentBox.textContent = movie.content;
    }
}
