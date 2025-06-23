const uniqueQuestions = [
    {
        question: "Nội dung GDQP học phần I là những vấn đề cơ bản về đường lối:",
        options: [
            "Cách mạng của Đảng",
            "Quốc phòng và an ninh của Đảng Cộng sản Việt Nam",
            "Quốc phòng của Đảng",
            "Chiến tranh của Đảng",
        ],
        answer: "Quốc phòng và an ninh của Đảng Cộng sản Việt Nam",
    },
    {
        question:
            "Một trong những điều kiện để sinh viên được dự thi kết thúc học phần",
        options: [
            "A. 80% thời gian học tập trên lớp",
            "B. 75% thời gian học tập trên lớp",
            "C. 90% thời gian học tập trên lớp",
            "D. 70% thời gian học tập trên lớp",
        ],
        answer: "A. 80% thời gian học tập trên lớp",
    },
    {
        question: "Nội dung giáo dục QP-AN học phần II là những vấn đề cơ bản về:",
        options: [
            "Công tác xây dựng khu vực phòng thủ",
            "Công tác xây dựng thế trận chiến tranh",
            "Công tác xây dựng nền quốc phòng, an ninh",
            "Công tác quốc Phòng và an ninh",
        ],
        answer: "Công tác quốc Phòng và an ninh",
    },
    {
        question: "Nội dung giáo dục QP-AN học phần III là những vấn đề cơ bản về:",
        options: [
            "Các môn kỹ thuật, chiến thuật quốc phòng, an ninh",
            "Chiến thuật, kỹ thuật chiến đấu và đội ngũ đơn vị",
            "Quân sự chung",
            "Các môn chung về quân sự, an ninh và bắn súng tiểu liên AK",
        ],
        answer: "Quân sự chung",
    },
    {
        question:
            "Trong nghiên cứu lĩnh hội các kiến thức, kỹ năng QPAN cần sử dụng kết hợp phương pháp dạy học: ",
        options: [
            "A. Lý thuyết và thực hành",
            "B. Kỹ thuật và chiến thuật",
            "C. Lý luận và thực tiễn",
            "D. Học tập và rèn luyện",
        ],
        answer: "A. Lý thuyết và thực hành",
    },
    {
        question:
            "Đối tượng được miễn học môn học giáo dục QPAN là học sinh, sinh viên?",
        options: [
            "Có bằng tốt nghiệp sỹ quan quân đội, công an",
            "Đã hoàn thành nghĩa vụ quân sự",
            "Bị ốm đau, tai nạn đang điều trị tại bệnh viện",
            "Thuộc lực lượng dân quân tự vệ thường trực",
        ],
        answer: "Có bằng tốt nghiệp sỹ quan quân đội, công an",
    },
    {
        question:
            "Phương pháp được sử dụng để nghiên cứu giáo dục quốc phòng- an ninh?",
        options: [
            "Phương pháp nghiên cứu lý thuyết",
            "Phương pháp nghiên cứu tổng hợp",
            "Phương pháp nghiên cứu thực tế",
            "Phương pháp nghiên cứu giả thuyết",
        ],
        answer: "Phương pháp nghiên cứu lý thuyết",
    },
    {
        question:
            "Đối tượng được tạm hoãn môn học giáo dục QPAN là học sinh, sinh viên:",
        options: [
            "Bị ốm đau, tai nạn, thai sản",
            "Thuộc dân quân cơ động của địa phương",
            "Thuộc lực lượng tự vệ của cơ quan",
            "Đã tham gia nghĩa vụ quân sự",
        ],
        answer: "Bị ốm đau, tai nạn, thai sản",
    },
    {
        question:
            "Một trong những đối tượng được miễn học môn học giáo dục quốc phòng - an ninh là học sinh, sinh viên: ",
        options: [
            "Là dân quân tự vệ",
            "Bị ốm đau, tai nạn ",
            "Là người nước ngoài",
            "Đã tham gia nghĩa vụ quân sự",
        ],
        answer: "Là người nước ngoài",
    },
    {
        question:
            "Cơ sở phương pháp luận chung nhất của việc nghiên cứu giáo dục QP, AN là: ",
        options: [
            "Học thuyết Mác-Lênin và tư tưởng Hồ Chí Minh",
            "Chủ nghĩa Mác-Lênin và tư tưởng quân sư Hồ Chí Minh",
            "Triết học Mác-Lênin và tư tưởng Hồ Chí Minh",
            "Tư tưởng Hồ Chí Minh và đường lối, quan điểm của Đảng",
        ],
        answer: "Học thuyết Mác-Lênin và tư tưởng Hồ Chí Minh",
    },
    {
        question:
            "Theo quan điểm của chủ nghĩa Mác-Lênin, chiến tranh là một hiện tượng: ",
        options: [
            "Chính trị-xã hội",
            "Tự nhiên-xã hội",
            "Lịch sử-xã hội",
            "Lịch sử-tự nhiên",
        ],
        answer: "Chính trị-xã hội",
    },
    {
        question: "Quân đội nhân dân Việt Nam mang bản chất: ",
        options: [
            "Giai cấp công nhân",
            "Của người nông dân",
            "Giai cấp công, nông ",
            "Nhân dân lao động ",
        ],
        answer: "Giai cấp công nhân",
    },
    {
        question:
            "Theo quan điểm của chủ nghĩa Mác-Lê nin, chiến tranh là một hiện tượng: ",
        options: [
            "Nhất trí quân dân với lực lượng tiến bộ thế giới",
            "Gắn bó Hồng quân với nhân dân lao động",
            "Đoàn kết thống nhất quân đội với nhân dân",
            "Đoàn kết nhất trí nhân dân với quân đội",
        ],
        answer: "Đoàn kết thống nhất quân đội với nhân dân",
    },
    {
        question:
            "Theo tư tưởng Hồ Chí Minh, chức năng của quân đội nhân dân Việt Nam là:",
        options: [
            "Đội quân chiến đấu, đội quân công tác, đội quân lao động sản xuất",
            "Đội quân công tác, đội quân chiến đấu và đội quân xây dựng",
            "Đội quân chiến đấu, đội quân sản xuất, đội quân tuyên truyền",
            "Đội quân xây dựng, đội quân công tác, đội quân an ninh trật tự",
        ],
        answer: "Đội quân chiến đấu, đội quân công tác, đội quân lao động sản xuất",
    },
    {
        question:
            "Quan điểm của chủ nghĩa Mác-Lênin khẳng định chiến tranh xuất hiện từ khi: ",
        options: [
            "Xuất hiện và tồn tại mâu thuẫn giữa các tập đoàn người",
            "Xuất hiện chế độ chiếm hữu tư nhân về tư liệu sản xuất",
            "Loài người xuất hiện mâu thuẫn trong quá trình sản xuất",
            "Thế giới xuất hiện các tôn giáo và mâu thuẫn trong xã hội",
        ],
        answer: "Xuất hiện chế độ chiếm hữu tư nhân về tư liệu sản xuất",
    },
    {
        question:
            "Bản chất giai cấp của quân đội theo quan điểm chủ nghĩa Mác-Lênin là bản chất của: ",
        options: [
            "Giai cấp, nhà nước đã tổ chức, nuôi dưỡng và sử dụng quân đội đó",
            "Giai cấp, nhà nước tổ chức, nuôi dưỡng và huấn luyện quân đội đó",
            "Nhân dân lao động và giai cấp đang lãnh đạo đối với quân đội đó",
            "Nhà nước, đảng phái đã sinh ra, nuôi dưỡng và sử dụng quân đội đó",
        ],
        answer: "Giai cấp, nhà nước đã tổ chức, nuôi dưỡng và sử dụng quân đội đó",
    },
    {
        question:
            "Nguồn gốc sâu xa nảy sinh chiến tranh theo quan điểm chủ nghĩa MácLênin là: ",
        options: [
            "Nguồn gốc kinh tế",
            "Nguồn gốc xã hội",
            "Nguồn gốc giai cấp",
            "Nguồn gốc chính trị",
        ],
        answer: "Nguồn gốc kinh tế",
    },
    {
        question: "Theo quan điểm của chủ nghĩa Mác-Lênin, bảo vệ Tổ quốc XHCN: ",
        options: [
            "Một tất yếu khách quan",
            "Nhiệm vụ thường xuyên",
            "Cấp thiết trước mắt",
            "Nhiệm vụ khách quan",
        ],
        answer: "Một tất yếu khách quan",
    },
    {
        question:
            "Câu nói của Lênin “giành chính quyền đã khó, nhưng giữ được chính quyền còn khó khăn hơn” thể hiện quan điểm về: ",
        options: [
            "Bảo vệ Tổ quốc XHCN",
            "Xây dựng Tổ quốc XHCN",
            "Giữ gìn Tổ quốc XHCN",
            "Củng cố chính quyền Xô-viết ",
        ],
        answer: "Bảo vệ Tổ quốc XHCN",
    },
    {
        question:
            "Chiến tranh là kết quả của những mối quan hệ giữa những tập đoàn người có lợi ích cơ bản đối lập nhau, được thể hiện dưới một hình thức đặc biệt, sử dụng một công cụ đặc biệt, đó là: ",
        options: [
            "Bạo lực vũ trang",
            "Lực lượng vũ trang",
            "Bạo lực tổng hợp",
            "Lực lượng quân sự",
        ],
        answer: "Bạo lực vũ trang",
    },
    {
        question:
            "Nguồn gốc trực tiếp nảy sinh chiến tranh theo quan điểm chủ nghĩa Mác- Lênin là: ",
        options: [
            "Nguồn gốc xã hội",
            "Nguồn gốc giai cấp",
            "Nguồn gốc mâu thuẫn",
            "Nguồn gốc chính trị",
        ],
        answer: "Nguồn gốc xã hội",
    },
    {
        question:
            "Chủ tịch Hồ Chí Minh đã chỉ rõ tính chất xã hội của chiến tranh là: ",
        options: [
            "Chiến tranh chính nghĩa và chiến tranh phi nghĩa",
            "Chiến tranh đi ngược lại lịch sử phát triển của loài người",
            "Chiến tranh cách mạng và chiến tranh phản cách mạng",
            "Chiến tranh là hiện tượng lịch sử của xả hội loài người",
        ],
        answer: "Chiến tranh chính nghĩa và chiến tranh phi nghĩa",
    },
    {
        question: "Thái độ của chúng ta đối với chiến tranh là:",
        options: [
            "Ủng hộ chiến tranh chính nghĩa, phản đối chiến tranh phi nghĩa",
            "Phản đối chiến tranh quân sự, ủng hộ chiến tranh giải phóng",
            "Ủng hộ chiến tranh chống áp bức, phản đối chiến tranh xâm lược",
            "Phản đối chiến tranh phản cách mạng, ủng hộ chiến tranh cách mạng ",
        ],
        answer: "Ủng hộ chiến tranh chính nghĩa, phản đối chiến tranh phi nghĩa",
    },
    {
        question: "Tư tưởng Hồ Chí Minh xác định mục tiêu bảo vệ Tổ quốc Việt Nam XHCN là: ",
        options: [
            "Độc lập dân tộc và CNXH",
            "Độc lập tự do, thống nhất đất nước",
            "Chống xâm lược, bảo vệ Tổ quốc",
            "Tự do độc lập và CNXH"
        ],
        answer: "Độc lập dân tộc và CNXH"
    },
    {
        question: "Một trong những nhiệm vụ của Quân đội mà Chủ tịch Hồ Chí Minh khẳng định: ",
        options: [
            "Thiết thực tham gia lao động sản xuất góp phần xây dựng CNXH",
            "Tuyên truyền chính sách của Đảng, pháp luật Nhà nước cho nhân dân",
            "Giúp đỡ nhân dân sản xuất, xây dựng cuộc sống ấm no, hạnh phúc",
            "Làm nòng cốt phát triển kinh tế-xã hội cho địa phương nơi đóng quân"
        ],
        answer: "Thiết thực tham gia lao động sản xuất góp phần xây dựng CNXH"
    },
    {
        question: "Hồ Chí Minh khẳng định mục đích cuộc chiến tranh của dân ta chốngthực dân Pháp xâm lược là: ",
        options: [
            "Bảo vệ độc lập, chủ quyền và thống nhất đất nước ",
            "Bảo vệ nhân dân, bảo vệ chế độ, bảo vệ tổ quốc",
            "Bảo vệ đất nước và chống ách đô hộ của thực dân, đế quốc",
            "Bảo vệ tính mạng, tài sản của nhân dân, bảo vệ độc lập"
        ],
        answer: "Bảo vệ độc lập, chủ quyền và thống nhất đất nước "
    },
    {
        question: "Quan điểm của chủ nghĩa Mác - Lê nin khẳng định một trong những nguồn gốc xuất hiện và tồn tại của chiến tranh là sự xuất hiện và tồn tại: ",
        options: [
            "Của các tôn giáo và tín ngưỡng",
            "Của giai cấp và đối kháng giai cấp",
            "Mâu thuẫn của các tập đoàn người",
            "Mâu thuẫn giữa các dân tộc"
        ],
        answer: "Của giai cấp và đối kháng giai cấp"
    },
    {
        question: "Một trong những quan điểm cơ bản của chủ nghĩa Mác- Lê nin về bảo vệ Tổ quốc xã hội chủ nghĩa là: ",
        options: [
            "Lực lượng vũ trang lãnh đạo mọi mặt sự nghiệp bảo vệ Tổ quốc xã hội chủ nghĩa",
            "Nhân dân lãnh đạo mọi mặt sự nghiệp bảo vệ Tổ quốc xã hội chủ nghĩa",
            "Đảng cộng sản lãnh đạo mọi mặt sự nghiệp bảo vệ Tổ quốc xã hội chủ nghĩa",
            "Nhà nước lãnh đạo mọi mặt sự nghiệp bảo vệ Tổ quốc xã hội chủ nghĩa"
        ],
        answer: "Đảng cộng sản lãnh đạo mọi mặt sự nghiệp bảo vệ Tổ quốc xã hội chủ nghĩa"
    },
    {
        question: "Quan hệ của chiến tranh đối với chính trị: ",
        options: [
            "Chính trị chi phối toàn bộ nhưng không làm gián đoạn quá trình chiến tranh",
            "Chính trị chi phối toàn bộ quá trình và quyết định một thời đoạn của chiến tranh",
            "Chính trị là một bộ phận quyết định mục tiêu của toàn bộ cuộc chiến tranh",
            "Chính trị chi phối và quyết định toàn bộ tiến trình và kết cục của chiến tranh"
        ],
        answer: "Chính trị chi phối và quyết định toàn bộ tiến trình và kết cục của chiến tranh"
    },
    {
        question: "Hồ Chí Minh khẳng định sự ra đời của QĐND Việt Nam là một: ",
        options: [
            "Tất yếu có tính quy luật trong đấu tranh giai cấp, đấu tranh dân tộc ở Việt Nam",
            "Hiện tượng ngẫu nhiên trong quá trình cách mạng, giải phóng dân tộc Việt Nam",
            " Sự kiện trong lịch sử chống giặc ngoại xâm dựng nước và giữ nước ở Việt Nam",
            "Hiện tượng tự phát do đòi hỏi cấp thiết của chiến tranh cách mạng ở Việt Nam"
        ],
        answer: "Tất yếu có tính quy luật trong đấu tranh giai cấp, đấu tranh dân tộc ở Việt Nam"
    },
    {
        question: "Về vị trí của nền QPTD, ANND, Đảng ta khẳng định: luôn luôn coi trọng quốc phòng, an ninh coi đó là: ",
        options: [
            "Nhiệm vụ chiến lược",
            "Nhiệm vụ quan trọng",
            "Nhiệm vụ hàng đầu",
            "Nhiệm vụ trọng tâm"
        ],
        answer: "Nhiệm vụ chiến lược"
    },
    {
        question: "Hai nhiệm vụ chiến lược của cách mạng Việt Nam hiện nay là:",
        options: [
            "Xây dựng CNXH và bảo vệ Tổ quốc XHCN",
            "Xây dựng phát triển kinh tế và bảo vệ vững chắc dộc lập dân tộc",
            "Bảo vệ tổ quốc XHCN và xây dựng CNXH",
            "Bảo vệ độc lập dân tộc và xây dựng thành công CNXH"
        ],
        answer: "Xây dựng CNXH và bảo vệ Tổ quốc XHCN"
    },
    {
        question: "Một trong những đặc trưng của nền QPTD, ANND là nền quốc phòng, an ninh: ",
        options: [
            "Vì dân, của dân và do nhân dân tiến hành",
            "Bảo vệ quyền và lợi ích của nhân dân",
            "Mang tính giai cấp, nhân dân sâu sắc",
            "Do nhân dân xây dựng, mang tính nhân dân sâu sắc"
        ],
        answer: "Vì dân, của dân và do nhân dân tiến hành"
    },
    {
        question: "Sức mạnh của nền QPTD, ANND ở nước ta là: ",
        options: [
            "Sức mạnh của toàn dân tộc kết hợp với sức mạnh thời đại",
            "Sức mạnh do các yếu tố chính trị, kinh tế, văn hóa, khoa học",
            "Sức mạnh tổng hợp do nhiều lực lượng tạo thành ",
            "Sức mạnh của cả hệ thống chính trị trong nước"
        ],
        answer: "Sức mạnh của toàn dân tộc kết hợp với sức mạnh thời đại"
    },
    {
        question: "Một trong những nội dung xây dựng thế trận QPTD, ANND là: ",
        options: [
            "Tổ chức phòng thủ dân sự, kết hợp cải tạo địa hình với xây dựng hạ tầng",
            "Tổ chức phòng thủ quân sự, kết hợp với chủ động tiến công tiêu diệt địch",
            "Tổ chức phòng thủ dân sự, kết hợp với hệ thống điểm tựa vững chắc",
            "Tổ chức phòng thủ quân sự, kết hợp với các biện pháp chống địch tiến công"
        ],
        answer: "Tổ chức phòng thủ dân sự, kết hợp cải tạo địa hình với xây dựng hạ tầng"
    },
    {
        question: "Quá trình hiện đại hóa nền QPTD, ANND phải gắn liền với: ",
        options: [
            "Công nghiệp hóa, hiện đại hóa đất nước",
            "Tiềm lực khoa học công nghệ của nước ta",
            "Hiện đại hóa nền kinh tế nước nhà",
            "Hiện đại hóa quân sự, an ninh đất nước"
        ],
        answer: "Công nghiệp hóa, hiện đại hóa đất nước"
    },
    {
        question: "Mục đích xây dựng nền QPTD, ANND vững mạnh là để: ",
        options: [
            "Tạo thế chủ động cho sự nghiệp xây dựng và bảo vệ Tổ quốc",
            "Tạo ra cơ sở vật chất, nâng cao đời sống cho lực lượng vũ trang",
            "Tạo ra tiềm lực quân sự để phòng thủ, bảo vệ vững chắc Tổ quốc",
            "Tạo được môi trường hòa bình để phát triển kinh tế đất nước"
        ],
        answer: "Tạo thế chủ động cho sự nghiệp xây dựng và bảo vệ Tổ quốc"
    },
    {
        question: "Để xây dựng nền QPTD, ANND hiện nay, chúng ta phải: ",
        options: [
            "Thường xuyên thực hiện giáo dục quốc phòng, an ninh",
            "Thường xuyên giáo dục ý thức trách nhiệm của mọi người",
            "Tăng cường vai trò của các tổ chức quần chúng",
            "Phát huy vai trò cùa các cơ quan đoàn thể và của công dân"
        ],
        answer: "Thường xuyên thực hiện giáo dục quốc phòng, an ninh"
    },
    {
        question: "Lực lượng quốc phòng, an ninh của nền QPTD, ANND gồm có:",
        options: [
            "Lực lượng toàn dân và lực lượng vũ trang nhân dân",
            "Lực lượng quân đội nhân dân và công an nhân dân",
            "Lực lượng toàn dân và lực lượng dự bị động viên",
            "Lực lượng chính trị và lực lượng quân sự, công an"
        ],
        answer: "Lực lượng toàn dân và lực lượng vũ trang nhân dân"
    },
    {
        question: "Câu 10. Một trong những đặc trưng của nền QPTD, ANND là: ",
        options: [
            "Nền quốc phòng toàn dân gắn chặt với nền an ninh nhân dân",
            "Nền quốc phòng toàn dân gắn chặt với, sự đoàn kết của toàn dân",
            "Nền quốc phòng, an ninh kết hợp truyền thống với hiện đại",
            "Nền quốc phòng, an ninh dân tộc kết hợp với sức mạnh thời đại"
        ],
        answer: "Nền quốc phòng toàn dân gắn chặt với nền an ninh nhân dân"
    },
    {
        question: "Tiềm lực chính trị tinh thần trong nội dung xây dựng nền QPTD,ANND là khả năng về chính trị tinh thần: ",
        options: [
            "Có thể huy động được để thực hiện nhiệm vụ quốc phòng, an ninh",
            "Của xã hội để tự vệ chống lại mọi thủ đoạn kẻ thù xâm lược",
            "Của quân đội để thực hiện nhiệm vụ quốc phòng, an ninh",
            "Có thể huy động được trong nhân dân để chiến đấu, bảo vệ Tổ quốc"
        ],
        answer: "Có thể huy động được để thực hiện nhiệm vụ quốc phòng, an ninh"
    },
    {
        question: "Một trong những nội dung xây dựng thế trận QPTD, ANND là: ",
        options: [
            "Xây dựng khu vực phòng thủ tỉnh(thành phố)",
            "Phát triển lực lượng gắn với các vùng dân cư",
            "Xây dựng công trình quốc phòng, an ninh vững chắc",
            "Phát triển vùng dân cư gắn với các trận địa phòng thủ  "
        ],
        answer: "Xây dựng khu vực phòng thủ tỉnh(thành phố)"
    },
    {
        question: "“ Nâng cao ý thức, trách nhiệm công dân cho sinh viên trong xây dựng nền QPTD, ANND” là một trong những nội dung của: ",
        options: [
            "Biện pháp xây dựng nền quốc phòng toàn dân, an ninh nhân dân",
            "Xây dựng tiềm lực quốc phòng, an ninh ngày càng vững mạnh",
            "Nhiệm vụ xây dựng nền quốc phòng toàn dân, an ninh nhân dân",
            "Phương pháp xây dựng nền quốc phòng toàn dân, an ninh nhân dân"
        ],
        answer: "Biện pháp xây dựng nền quốc phòng toàn dân, an ninh nhân dân"
    },
    {
        question: "Nền QPTD, ANND chỉ có mục đích duy nhất là tự vệ chính đáng” là nội dung của: ",
        options: [
            "Đặc trưng nền quốc phòng toàn dân, an ninh nhân dân",
            "Khái niệm nền quốc phòng toàn dân, an ninh nhân dân",
            "Vị trí nền quốc phòng toàn dân, an ninh nhân dân",
            "Đặc điểm nền quốc phòng toàn dân, an ninh nhân dân"
        ],
        answer: "Đặc trưng nền quốc phòng toàn dân, an ninh nhân dân"
    },
    {
        question: "Tiềm lực quốc phòng, an ninh là: ",
        options: [
            "Khả năng về nhân lực, vật lực, tài chính có thể huy động để thực hiện nhiệm vụ quốc phòng, an ninh",
            "Khả năng về con người, của cải vật chất có thể huy động để thực hiện nhiệm vụ quốc phòng, an ninh",
            "Khả năng về lực lượng, vũ khí trang bị có thể huy động phục vụ cho nhiệm vụ quốc phòng, an ninh",
            "Khả năng về tài chính, phương tiện kỹ thuật có thể huy động thực hiện nhiệm vụ quốc phòng, an ninh"
        ],
        answer: "Khả năng về nhân lực, vật lực, tài chính có thể huy động để thực hiện nhiệm vụ quốc phòng, an ninh"
    },
    {
        question: "“Phân vùng chiến lược về quốc phòng, an ninh kết hợp với vùng kinh tế trên cơ sở quy hoạch các vùng dân cư theo nguyên tắc bảo vệ đi đôi với xây dựng đất nước” là một nội dung của: ",
        options: [
            "Xây dựng thế trận quốc phòng toàn dân, an ninh nhân dân",
            "Biện pháp xây dưng nền quốc phòng toàn dân, an ninh nhân dân",
            "Nhiệm vụ xây dưng nền quốc phòng toàn dân, an ninh nhân dân",
            "Xây dựng tiềm lực kinh tế của quốc phòng toàn dân, an ninh nhân dân"
        ],
        answer: "Xây dựng thế trận quốc phòng toàn dân, an ninh nhân dân"
    },
    {
        question: "Tính cơ động của nền kinh tế đất nước trong mọi điều kiện hoàn cảnh là nội dung của xây dựng",
        options: [
            "Tiềm lực kinh tế của nền quốc phòng toàn dân, an ninh nhân dân",
            "Sức mạnh kinh tế của nền quốc phòng toàn dân, an ninh nhân dân ",
            " Khả năng kinh tế của đất nước khi tiến hành chiến tranh xảy ra",
            "Điều kiện kinh tế của đất nước trong điều kiện chiến tranh"
        ],
        answer: "Tiềm lực kinh tế của nền quốc phòng toàn dân, an ninh nhân dân"
    },
    {
        question: "Trong xây dưng tiềm lực quốc phòng, an ninh, tiềm lực tạo sức mạnh vật chất cho nền quốc phòng toàn dân, an ninh nhân dân là: ",
        options: [
            "Tiềm lực quân sự",
            "Tiềm lực khoa học",
            "Tiềm lực kinh tế",
            "Tiềm lực chính trị"
        ],
        answer: "Tiềm lực kinh tế"
    },
    {
        question: "Thế trận quốc phòng, an ninh là:",
        options: [
            "Sự tổ chức, bố trí lực lương, tiềm lực mọi mặt của đất nước và của toàn dân trên toàn bộ lãnh thổ theo yêu cầu của quốc phòng, an ninh, bảo vệ Tổ quốc Việt Nam XHCN",
            "Sự sắp xếp, bố trí lực lượng, phương tiện, cơ sở vật chất, tài chính trên phạm vi cả nước theo yêu cầu của chiến tranh nhân dân bảo vệ Tổ quốc Việt Nam XHCN",
            "Sự chuẩn bị toàn diện mọi mặt của đất nước từ trung ương đến các địa phương trên phạm vi cả nước đáp ứng yêu cầu phòng thủ, bảo vệ Tổ quốc Việt Nam XHCN",
            "Sự chuẩn bị đầy đủ nhân lực, vật lực, tài chính, triển khai bố trí lực lượng, tổ chức phòng thủ dân sự theo yêu cầu của nhiệm vụ bảo vệ Tổ quốc Việt Nam XHCN"
        ],
        answer: "Sự tổ chức, bố trí lực lương, tiềm lực mọi mặt của đất nước và của toàn dân trên toàn bộ lãnh thổ theo yêu cầu của quốc phòng, an ninh, bảo vệ Tổ quốc Việt Nam XHCN"
    },
    {
        question: "“Số lượng, chất lượng đội ngũ cán bộ khoa học kỹ thuật, cơ sở vật chất kỹ thuật có thể huyđộng phục vụ cho QPAN và năng lực ứng dụng kết quả nghiên cứu khoa học có thể đáp ứng nhu cầu QPAN” là nội dung biểu hiện của: ",
        options: [
            "Tiềm lực khoa học, công nghệ của nền quốc phòng toàn dân, an ninh nhân dân",
            "Tiềm lực kinh tế, xã hội của nến quốc phòng toàn dân, an ninh nhân dân",
            "Tiềm lực kỹ thuật quân sự của nền quốc phòng toàn dân, an ninh nhân dân",
            "Tiềm lực khoa học quân sự của nền quốc phòng toàn dân, an ninh nhân dân"
        ],
        answer: "Tiềm lực khoa học, công nghệ của nền quốc phòng toàn dân, an ninh nhân dân"
    },
    {
        question: "Đối tượng của chiến tranh nhân dân bảo vệ Tổ quốc Việt Nam XHCN là: ",
        options: [
            "Chủ nghĩa đế quốc và các thế lực phản động",
            "Chủ nghĩa đế quốc và bọn tội phạm",
            "Chủ nghĩa khủng bố và bọn phản động",
            "Các thế lực phản cách mạng và phản động"
        ],
        answer: "Chủ nghĩa đế quốc và các thế lực phản động"
    },
    {
        question: "Nếu xâm lược nước ta kẻ thù sẽ:",
        options: [
            "Thực hiện đánh nhanh, thắng nhanh, kết hợp tiến công quân sự từ bên ngoài với BLLĐ từ bên trong",
            "Đánh đồng loạt các mục tiêu, trên từng khu vực và kết hợp với các biện pháp phi vũ trang để tuyên truyền, lừa bịp dư luận",
            "Thực hiện bao vây phong tỏa kinh tế, quân sự, vừa đánh vừa thăm dò phản ứng của ta, kết hợp với lôi kéo đồng minh",
            "Đánh hủy diệt ngay từ đầu, đưa lực lượng đối lập lên nắm quyền, kết hợp với đưa lực lượng quân sự vào hỗ trợ chính phủ mới"
        ],
        answer: "Thực hiện đánh nhanh, thắng nhanh, kết hợp tiến công quân sự từ bên ngoài với BLLĐ từ bên trong"
    },
    {
        question: "Tiến hành chiến tranh xâm lược nước ta, khó khăn cơ bản nhất của địch là: ",
        options: [
            "Phải đương đầu với một dân tộc có truyền thống kiên cường bất khuất chống giặc ngoại xâm",
            "Tiến hành một cuộc chiến tranh xâm lược, chiến tranh phi nghĩa sẽ bị toàn thế giới lên án",
            "Phải tác chiến trong điều kiện khí hậu, thời tiết phức tạp, không thông thuộc địa hình",
            "Có nhiều khó khăn trong công tác đảm bảo hậu cần kỹ thuật, cơ động của các loại cơ giới"
        ],
        answer: "Phải đương đầu với một dân tộc có truyền thống kiên cường bất khuất chống giặc ngoại xâm"
    },
    {
        question: "Một trong những đặc điểm của chiến tranh nhân dân bảo vệ Tổ quốc là: ",
        options: [
            "Hình thái đất nước được chuẩn bị sẵn sàng, thế trận quốc phòng, an ninh ngày càng được củng cố vững chắc",
            "Cả đất nước đã sẵn sàng, khu vực phòng thủ tỉnh, thành phố luôn luôn được củng cố và phát triển vững chắc",
            "Nền quốc phòng toàn dân, an ninh nhân dân đã được chuẩn bị từ thời bình và thường xuyên được phát triển",
            "Thế trận quốc phòng, an ninh được xây dựng rộng khắp trên cả nước, từng địa phương, có trọng tâm, trọng điểm"
        ],
        answer: "Hình thái đất nước được chuẩn bị sẵn sàng, thế trận quốc phòng, an ninh ngày càng được củng cố vững chắc"
    },
    {
        question: "Chiến tranh nhân dân bảo vệ tổ quốc là cuộc chiến tranh mang tính chất: ",
        options: [
            "Cách mạng, chống các thế lực phản cách mạng, thế lực thù địch",
            "Toàn diện, lấy quân sự làm trung tâm, lấy chính trị làm cơ sở",
            "Toàn diện, lấy quân sự làm trung tâm, lấy chính trị làm cơ sở",
            "Toàn dân, toàn diện, lấy lực lượng vũ trang làm nòng cốt"
        ],
        answer: "Toàn dân, toàn diện, lấy lực lượng vũ trang làm nòng cốt"
    },
    {
        question: "Một trong những đặc điểm của chiến tranh nhân dân bảo vệ Tổ quốc là: ",
        options: [
            "Chiến tranh diễn ra khẩn trương, quyết liệt phức tạp ngay từ đầu và trong suốt quá trình",
            "Chiến tranh diễn ra ác liệt, phải đối phó với vũ khí công nghệ cao của địch ngay từ đầu",
            "Chiến tranh diễn ra phức tap, phải đối đầu với lực lượng quân sự nhiều nước tham gia",
            "Chiến tranh diễn ra với quy mô lớn, diễn ra trên phạm vi cả nước rất quyết liệt"
        ],
        answer: "Chiến tranh diễn ra khẩn trương, quyết liệt phức tạp ngay từ đầu và trong suốt quá trình"
    },
    {
        question: "Kết hợp sức mạnh dân tộc với sức mạnh thời đại, phát huy tinh thần tự lực tự cường, tranh thủ sự giúp đỡ quốc tế, sự đồng tình, ủng hộ của nhân dân tiến bộ thế giới” là một trong những nội dung của: ",
        options: [
            "Quan điểm của Đảng trong chiến tranh nhân dân bảo vệ Tổ quốc",
            "Đặc điểm nổi bật trong chiến tranh nhân dân bảo vệ Tổ quốc",
            "Tính chất quan trọng của cuộc chiến tranh nhân dân bảo vệ tổ quốc",
            "Nội dung chủ yếu của chiến tranh nhân dân bảo vệ Tổ quốc"
        ],
        answer: "Quan điểm của Đảng trong chiến tranh nhân dân bảo vệ Tổ quốc"
    },
    {
        question: "Quan điểm của Đảng ta trong chiến tranh nhân dân BVTQ là phải tiến hành: ",
        options: [
            "Chiến tranh toàn diện, kết hợp chặt chẽ giữa đấu tranh quân sự, chính trị, ngoại giao, kinh tế, văn hóa, tư tưởng",
            "Chiến tranh trên cả nước, trên mọi mặt trận, lấy thắng lợi quân sự là là yếu tố quyết định giành thắng lợi",
            "Cuộc chiến tranh toàn dân, đánh địch trên mọi mặt trận chính trị, quân sự, ngoại giao, trên cả ba vùng chiến lược",
            "Cuộc chiến tranh chính nghĩa, tự vệ bằng sức mạnh của cả dân tộc để bảo vệ độc lập tự do của dân tộc, bảo vệ độc lập chủ quyền, toàn vẹn lãnh thổ"
        ],
        answer: "Chiến tranh toàn diện, kết hợp chặt chẽ giữa đấu tranh quân sự, chính trị, ngoại giao, kinh tế, văn hóa, tư tưởng"
    },
    {
        question: "Tính hiện đại trong chiến tranh nhân dân bảo vệ tổ quốc ở Việt Nam là hiện đại về: ",
        options: [
            "Thế trận chính trị",
            "Thế trận quân sự",
            "Thế trận an ninh",
            "Thế trận lòng dân"
        ],
        answer: "Thế trận lòng dân"
    },
    {
        question: "Để sẵn sàng tiến hành chiến tranh nhân dân bảo vệ Tổ quốc, đối với sinh viên trước tiên phải: ",
        options: [
            "Thường xuyên rèn luyện kỹ năng quân sự và sức khỏe",
            "Nhận thức đúng đắn về chiến tranh nhân dân bảo vệ Tổ quốc",
            "Nhận thức đúng đắn về tính chất xã hội của cuộc chiến tranh",
            "Luôn phát huy truyền thống chống ngoại xâm của ông cha ta"
        ],
        answer: "Nhận thức đúng đắn về chiến tranh nhân dân bảo vệ Tổ quốc"
    },
    {
        question: "Điểm mạnh cơ bản của địch khi tiến hành chiến tranh xâm lược nước ta là: ",
        options: [
            "Có ưu thế tuyệt đối về sức mạnh quân sự, kinh tế và khoa học, công nghệ",
            "Có vũ khí trang bị hiện đại, công nghệ tiên tiến, kỹ thuật quân sự hiện đại ",
            "Quân số đông, vũ khí , trang bị kỹ thuật hiện đại, khoa học phát triển",
            "Khi tiến công, có sự cấu kết với bọn phản động trong nước gây bạo loạn"
        ],
        answer: "Có ưu thế tuyệt đối về sức mạnh quân sự, kinh tế và khoa học, công nghệ"
    },
    {
        question: "Một trong những tính chất của chiến tranh nhân dân BVTQ là cuộc chiến tranh: ",
        options: [
            "Mang tính hiện đại",
            "Chống quân xâm lược",
            "Bảo vệ độc lập dân tộc",
            "Bảo vệ CNXH"
        ],
        answer: "Mang tính hiện đại"
    },
    {
        question: "Chiến tranh nhân dân bảo vệ Tổ quốc “ là cuộc chiến tranh chính nghĩa, tự vệ cách mạng, nhằm bảo vệ độc lập tự do của dân tộc, bảo vệ độc lập chủ quyền, thống nhất toàn vẹn lãnh thổ của đất nước, bảo vệ Đảng, bảo vệ chế độ, bảo vệ nhân dân” là một trong những: ",
        options: [
            "Tính chất của chiến tranh nhân dân bảo vệ Tổ quốc",
            "Đặc trưng nền quốc phòng toàn dân, an ninh nhân dân ",
            "Đặc điểm của chiến tranh nhân dân bảo vệ Tổ quốc ",
            "Quan điểm về chiến tranh nhân dân bảo vệ Tổ quốc "
        ],
        answer: "Tính chất của chiến tranh nhân dân bảo vệ Tổ quốc"
    },
    {
        question: "Muốn tiến hành chiến tranh nhân dân thắng lợi, chúng ta phải: ",
        options: [
            "Tổ chức thế trận chiến tranh nhân dân ",
            "Tổ chức lực lượng toàn dân đánh giặc ",
            "Tổ chức trận địa đánh giặc ở địa phương ",
            "Tổ chức thế và lực khu vực phòng thủ "
        ],
        answer: "Tổ chức thế trận chiến tranh nhân dân "
    },
    {
        question: "Để tiến hành chiến tranh nhân dân bảo vệ tổ quốc, quan điểm của Đảng ta là phải chuẩn bị mọi mặt: ",
        options: [
            "Trên cả nước cũng như từng khu vực để đủ sức đánh lâu dài",
            "Đầy đủ cả tiềm lực kinh tế, quân sự, lực lượng để đánh thắng",
            "Chu đáo, toàn diện, rộng khắp để đủ sức trường kỳ đánh giặc ",
            "Trên tất cả khu vực phòng thủ để đủ sức đánh giặc lâu dài "
        ],
        answer: "Trên cả nước cũng như từng khu vực để đủ sức đánh lâu dài"
    },
    {
        question: "Chiến tranh nhân dân bảo vệ Tổ quốc Việt Nam XHCN là cuộc: ",
        options: [
            "Chiến tranh chính nghĩa",
            "Chiến tranh phòng vệ",
            "Chiến tranh tự bảo vệ ",
            "Chiến tranh chính đáng "
        ],
        answer: "Chiến tranh chính nghĩa"
    },
    {
        question: "Lực lượng làm nòng cốt cho toàn dân đánh giặc ở địa phương là: ",
        options: [
            "A.Bộ đội địa phương và dân quân tự vệ",
            "B. Lực lượng bộ đội và công an nhân dân ",
            "C. Bộ đội thường trực và dân quân tự vệ ",
            "D. Bộ đội chủ lực và dân quân du kích"
        ],
        answer: "A.Bộ đội địa phương và dân quân tự vệ"
    },
    {
        question: "Trong sự nghiệp bảo vệ Tổ quốc, lực lượng vũ trang nhân dân là lực lượng: ",
        options: [
            "Nòng cốt của nền quốc phòng toàn dân và chiến tranh nhân dân",
            "Chủ lực tiến hành chiến tranh nhân dân bảo vệ Tổ quốc",
            "Nòng cốt cho các lực lượng khác tiến hành chiến tranh ",
            "Chủ yếu cho sự nghiệp xây dựng và bảo vệ Tổ quốc"
        ],
        answer: "Nòng cốt của nền quốc phòng toàn dân và chiến tranh nhân dân"
    },
    {
        question: "Kiên quyết đấu tranh làm thất bại mọi âm mưu, thủ đoạn “diễn biến hòa bình”, bạo loạn lật đổ của kẻ thù là: ",
        options: [
            "Mục tiêu trước mắt của chiến tranh nhân dân bảo vệ Tổ quốc",
            " Nhiệm vụ trước mắt và lâu dài của cách mạng Việt Nam ",
            "Mục đích của chiến tranh nhân dân bảo vệ Tổ quốc ",
            "Nhiệm vụ cơ bản, thường xuyên của cách mạng nước ta "
        ],
        answer: "Mục tiêu trước mắt của chiến tranh nhân dân bảo vệ Tổ quốc"
    },
    {
        question: "Lực lượng làm nòng cốt cho toàn dân đánh giặc trên phạm vi cả nước là: ",
        options: [
            "Bộ đội chủ lực cùng lực lượng vũ trang địa phương",
            "Quân đội nhân dân và lực lượng vũ trang địa phương ",
            "Bộ đội thường trực cùng công an và dân quân tự vệ ",
            "Bộ đội chủ lực kết hợp với lực lượng địa phương"
        ],
        answer: "Bộ đội chủ lực cùng lực lượng vũ trang địa phương"
    },
    {
        question: "Lực lượng vũ trang nhân dân Việt Nam gồm: ",
        options: [
            "Quân đội nhân dân, công an nhân dân, dân quân tự vệ",
            "Bộ đội thường trực, lực lượng công an, dân quân tự vệ",
            "Bộ đội chủ lực, bộ đội địa phương, dân quân tự vệ",
            "Bộ đội chủ lực, công an nhân dân, bộ đội biên phòng"
        ],
        answer: "Quân đội nhân dân, công an nhân dân, dân quân tự vệ"
    },
    {
        question: "Ngày, tháng, năm thành lập Quân đội nhân dân Việt Nam:",
        options: [
            "22/12/1944",
            "19/08/1945",
            "20/12/1944",
            "22/12/1945"
        ],
        answer: "22/12/1944"
    },
    {
        question: "Đặc điểm thuận lợi trong xây dựng lực lượng vũ trang nhân dân là:",
        options: [
            "Tiềm lực và vị thế của nước ta được tăng cường",
            "Quan hệ quốc tế ngày càng được mở rộng",
            "Hội nhập kinh tế quốc tế ngày càng sâu hơn",
            "Kinh tế vẫn tiếp tục tăng trưởng ổn định"
        ],
        answer: "Tiềm lực và vị thế của nước ta được tăng cường"
    },
    {
        question: "Nguyên tắc lãnh đạo của Đảng đối với lực lượng vũ trang nhân dân:",
        options: [
            "Tuyệt đối, trực tiếp về mọi mặt",
            "Tuyệt đối, trực tiếp và toàn diện",
            "Trực tiếp, tuyệt đối về mọi mặt",
            "Trực tiếp, toàn diện mọi lĩnh vực"
        ],
        answer: "Tuyệt đối, trực tiếp về mọi mặt"
    },
    {
        question: "Luật Dân quân tự vệ được ban hành: ",
        options: [
            "Năm 2020",
            "Năm 2018",
            "Năm 2019",
            "Năm 2017"
        ],
        answer: "Năm 2020"
    },
    {
        question: "Một trong những phương hướng xây dựng lực LLVTND là xây dựng: ",
        options: [
            "Quân đội nhân dân cách mạng chính quy, tinh nhuệ, từng bước hiện đại",
            "Lực lượng vũ trang vững mạnh toàn diện, luôn luôn sẵn sàng chiến đấu",
            "Quân đội cách mạng, chính qui, đoàn kết, thống nhất, ngày càng hiện đại",
            "Quân đội chính qui, hiện đại, tinh nhuệ, luôn luôn sẵn sàng chiến đấu cao"
        ],
        answer: "Quân đội nhân dân cách mạng chính quy, tinh nhuệ, từng bước hiện đại"
    },
    {
        question: "Phương hướng xây dựng lực lượng dự bị động viên: ",
        options: [
            "Hùng hậu, được huấn luyện và quản lý tốt, đảm bảo khi cần động viên nhanh theo kế hoạch",
            "Có số lượng đông đảo, chất lượng ngày càng cao, huấn luyện thường xuyên theo kế hoạch",
            "Lực lượng dự bị hùng hậu, luôn trong tư thế sẵn sàng động viên nhanh theo kế hoạch",
            "Hùng hậu, vững mạnh, được nâng cao chất lượng huấn luyện và sẵn sàng chiến đấu"
        ],
        answer: "Hùng hậu, được huấn luyện và quản lý tốt, đảm bảo khi cần động viên nhanh theo kế hoạch"
    },
    {
        question: "Để xây dựng lực lượng vũ trang nhân dân ngày càng hùng mạnh, chúng ta phải: ",
        options: [
            "Từng bước giải quyết yêu cầu về vũ khí, trang bị kỹ thuật của lực lượng vũ trang",
            "Nhanh chóng giải quyết yêu cầu về trang bị, vật chất cho lực lượng vũ trang",
            "Từng bước bảo đảm hậu cần, kỹ thuật, phương tiện hiện đại cho quân đội",
            "Tích cực đổi mới, kịp thời bổ sung đầy đủ vũ khí kỹ thuật cho lực lượng vũ trang"
        ],
        answer: "Từng bước giải quyết yêu cầu về vũ khí, trang bị kỹ thuật của lực lượng vũ trang"
    },
    {
        question: "“ Bảo đảm lực lượng vũ trang nhân dân luôn trong tư thế sẵn sàng chiến đấu và chiến đấu thắng lợi” là một quan điểm, nguyên tắc xây dựng lực lượng vũ trang nhân dân của Đảng ta, quan điểm nguyên tắc này phản ánh: ",
        options: [
            "Chức năng, nhiệm vụ cơ bản, thường xuyên của lực lượng vũ trang nhân dân",
            "Tính chủ động đối phó kịp thời với kẻ địch đang luôn tìm cách phá hoại ta",
            "Chức năng, nhiệm vụ chủ yếu thường xuyên của lực lượng vũ trang nhân dân",
            "Yêu cầu nhiệm vụ thường xuyên của lực lượng vũ trang nhân dân"
        ],
        answer: "Chức năng, nhiệm vụ cơ bản, thường xuyên của lực lượng vũ trang nhân dân"
    },
    {
        question: "Đảng Cộng sản Việt Nam lãnh đạo “ tuyệt đối” lực lượng vũ trang nhân dân Việt nam được thể hiện: ",
        options: [
            "Đảng không nhường, hoặc chia sẻ quyền lãnh đạo cho bất cứ giai cấp, lực lượng, tổ chức nào",
            "Đảng không chia quyền lãnh đạo lực lượng vũ trang cho bất cứ ai trong thời bình và thời chiến",
            "Đảng chia sẻ quyền lãnh đạo lực lượng vũ trang cho giai cấp khác khi đất nước khó khăn",
            "Đảng sẽ nhường quyền lãnh đạo lực lượng vũ trang cho đảng phái khác khi có chiến tranh"
        ],
        answer: "Đảng không nhường, hoặc chia sẻ quyền lãnh đạo cho bất cứ giai cấp, lực lượng, tổ chức nào"
    },
    {
        question: "Lực lượng vũ trang nhân dân trong bảo vệ Tổ quốc có vị trí là lực lượng: ",
        options: [
            "Nòng cốt của quốc phòng toàn dân, an ninh nhân dân và chiến tranh nhân dân",
            "Xung kích trong các hoạt động quân sự, an ninh và quyết định trong chiến tranh",
            "Chủ yếu của sự nghiệp bảo vệ tổ quốc, nòng cốt trong xây dựng đất nước",
            "Nòng cốt quyết định sức mạnh QPAN của ta trong thời bình"
        ],
        answer: "Nòng cốt của quốc phòng toàn dân, an ninh nhân dân và chiến tranh nhân dân"
    },
    {
        question: "Ngày, tháng, năm thành lập Dân quân tự vệ Việt Nam: ",
        options: [
            "28/3/1935",
            "30/4/1975",
            "28/3/1930",
            "19/8/1945"
        ],
        answer: "28/3/1935"
    },
    {
        question: "Quan điểm của Đảng về xây dựng lực lượng vũ trang nhân dân: ",
        options: [
            "Tự lực, tự cường xây dựng lực lượng vũ trang nhân dân",
            "Phát huy nội lực, tự chủ xây dựng lực lượng vũ trang nhân dân",
            "Độc lập, dựa vào sức mình để xây dựng lực lượng vũ trang nhân dân",
            "Phát huy tự chủ, tự lực xây dựng lực lượng vũ trang nhân dân"
        ],
        answer: "Tự lực, tự cường xây dựng lực lượng vũ trang nhân dân"
    },
    {
        question: "Dân quân tự vệ Việt nam là: ",
        options: [
            "Một bộ phận quan trọng trong lực lượng vũ trang địa phương",
            "Thành phần quan trọng của ba thứ quân trong lực lượng vũ trang",
            "Một bộ phận cơ bản nhất của lực lượng vũ trang nhân dân",
            "Lực lượng chiến đấu thường xuyên trên mặt trận quân sự"
        ],
        answer: "Một bộ phận quan trọng trong lực lượng vũ trang địa phương"
    },
    {
        question: "Lực lượng được Chủ tịch Hồ Chí Minh đánh giá “…là lực lượng vô địch, là bức tường sắt của Tổ quốc…” đó là: ",
        options: [
            "Lực lượng dân quân tự vệ",
            "Lực lượng vũ trang quần chúng",
            "Lực lượng vũ trang địa phương",
            "Lực lượng vũ trang tại chỗ"
        ],
        answer: "Lực lượng dân quân tự vệ"
    },
    {
        question: "Quan điểm, nguyên tắc cơ bản nhất trong xây dựng lực lượng vũ trang nhân dân là: ",
        options: [
            "Giữ vững và tăng cường sự lãnh đạo của Đảng đối với lực lượng vũ trang",
            "Bảo đảm cho lực lượng vũ trang có lòng trung thành với Tổ quốc",
            "Lực lượng vũ trang nhân dân phải luôn trung với Đảng, hiếu với dân",
            "Xây dựng lực lượng vũ trang tang cường bản chất giai cấp công nhân"
        ],
        answer: "Giữ vững và tăng cường sự lãnh đạo của Đảng đối với lực lượng vũ trang"
    },
    {
        question: "Ngày, tháng, năm thành lập Công an nhân dân Việt Nam: ",
        options: [
            "19/8/1945",
            "19/8/1944",
            "22/12/1945",
            "20/12/1944"
        ],
        answer: "19/8/1945"
    },
    {
        question: "“Tổ chức các đơn vị phải gọn, mạnh, cơ động nhanh, có sức chiến đấu cao” là biện pháp chấn chỉnh tổ chức biên chế lực lượng vũ trang đối với: ",
        options: [
            "Bộ đội chủ lực",
            "Bộ đội địa phương",
            "Bộ đội binh chủng",
            "Bộ đội cơ động"
        ],
        answer: "Bộ đội chủ lực"
    },
    {
        question: "Phong trào tăng gia sản xuất của các đơn vị Quân đội nhân dân Việt Nam đã phản ánh thường xuyên chức năng: ",
        options: [
            "Đội quân sản xuất",
            "Đội quân xây dựng",
            "Đội quân tăng gia",
            "Đội quân lao động"
        ],
        answer: "Đội quân sản xuất"
    },
    {
        question: "Một trong ba bộ phận của lực lượng vũ trang nhân dân Việt Nam là:",
        options: [
            "Dân quân tự vệ",
            "Dân phòng",
            "Thanh niên xung kích",
            "Bảo vệ khu phố"
        ],
        answer: "Dân quân tự vệ"
    },
    {
        question: "Quốc phòng là công việc giữ nước của một quốc gia, nhằm mục đích: ",
        options: [
            "Bảo vệ vững chắc độc lập, chủ quyền và toàn vẹn lãnh thổ, tạo môi trường thuận lợi để xây dựng đất nước",
            "Bảo vệ vững chắc Tổ quốc, bảo vệ tính mạng và tài sản của nhân dân, bảo vệ thành quả cách mạng",
            "Bảo vệ chế độ XHCN, bảo vệ lợi ích của giai cấp công nhân và nhân dân lao động",
            "Bảo vệ chính quyền, chống lại mọi âm mưu thủ đoạn chống phá của chủ nghĩa đế quốc và các thế lực phản động"
        ],
        answer: "Bảo vệ vững chắc độc lập, chủ quyền và toàn vẹn lãnh thổ, tạo môi trường thuận lợi để xây dựng đất nước"
    },
    {
        question: " Hoạt động an ninh của một quốc gia là để bảo đảm: ",
        options: [
            "Đất nước trạng thái ổn định an toàn,không có dấu hiệu nguy hiểm đe dọa sự tồn tại và phát triển",
            "Đất nước ổn định, bình yên, tính mạng và tài sản nhân dân được bảo vệ, xã hội không ngừng phát triển",
            "Đất nước an toàn, xã hội trật tự không bị rối loạn, mọi người được sống bình yên, xã hội tồn tại và phát triển",
            "Đất nước thanh bình, xã hội có trật tự kỷ cương, mọi người được an toàn, xã hội tồn tại và phát triển"
        ],
        answer: "Đất nước trạng thái ổn định an toàn,không có dấu hiệu nguy hiểm đe dọa sự tồn tại và phát triển"
    },
    {
        question: "Kết hợp phát triển kinh tế-xã hội với tăng cường củng cố QPAN ở nước ta hiện nay là: ",
        options: [
            "Hoạt động tích cực, chủ động của Nhà nước và nhân dân trong việc gắn kết chặt chẽ hoạt động kinh tế - xã hội, QPAN trong một chỉnh thể thống nhất",
            "Hành động của toàn dân dưới sự lãnh đạo của Đảng thực hiện thống nhất các hoạt động kinh tế, xã hội, quốc phòng, an ninh và đối ngoại",
            "Hoạt động tích cực của toàn Đảng, toàn quân và toàn dân thực hiện trên phạm vi cả nước gắn kết các hoạt động lại với nhau một cách thống nhất",
            "Việc làm một cách chủ động của nhà nước điều hành thực hiện thống nhất, chặt chẽ các hoạt động knh tế - xã hội, QPAN trên cả nước"
        ],
        answer: "Hoạt động tích cực, chủ động của Nhà nước và nhân dân trong việc gắn kết chặt chẽ hoạt động kinh tế - xã hội, QPAN trong một chỉnh thể thống nhất"
    },
    {
        question: "Tác động tích cực của quốc phòng, an ninh đối với kinh tế là: ",
        options: [
            "Tạo môi trường hòa bình, ổn định tạo điều kiện thuận lợi cho kinh tế phát triển",
            "Tiêu thụ nhiều sản phẩm của kinh tế, tạo điều kiện kích thích tăng trưởng kinh tế",
            "Tiêu dùng của quốc phòng, an ninh sẽ là thị trường cho kinh tế tiêu thụ sản phẩm",
            "Lực lượng thực hiện nghĩa vụ quân sự, khi hoàn thành sẽ là nguồn lao động tốt"
        ],
        answer: "Tạo môi trường hòa bình, ổn định tạo điều kiện thuận lợi cho kinh tế phát triển"
    },
    {
        question: "Trong giai đoạn hiện nay, chúng ta phải kết hợp phát triển kinh tế-xã hội với tăng cường củng cố QPAN là để: ",
        options: [
            "Thực hiện thắng lợi hai nhiệm vụ chiến lược",
            "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước",
            "Bảo vệ mọi thành quả cách mạng đã đạt được",
            "Giữ vững hòa bình, bảo vệ cuộc sống nhân dân"
        ],
        answer: "Thực hiện thắng lợi hai nhiệm vụ chiến lược"
    },
    {
        question: "Kinh tế quyết định đến quốc phòng, an ninh, trong đó có: ",
        options: [
            "Quyết định đến việc cung cấp số lượng, chất lượng nguồn nhân lực cho quốc phòng, an ninh",
            "Cung cấp cơ sở vật chất, vũ khí, trang bị chiến đấu cho các lực lượng vũ trang nhân dân",
            "Bảo đảm đầy đủ cơ sở vật chất kỹ thuật cho mọi hoạt động của lực lượng vũ trang nhân dân",
            "Quyết định việc tổ chức khu vực phòng thủ, cơ sở vật chất kỹ thuật cho quân đội, công an nhân dân"
        ],
        answer: "Quyết định đến việc cung cấp số lượng, chất lượng nguồn nhân lực cho quốc phòng, an ninh"
    },
    {
        question: "Thực hiện kết hợp phát triển kinh tế- xã hội với tăng cường củng cố QPAN, chúng ta phải thực hiện biện pháp: ",
        options: [
            "Xây dựng chiến lược tổng thể kết hợp phát triển kinh tế - xã hội với tăng cường củng cố QPAN trong thời kỳ mới",
            "Mở rộng quan hệ đối ngoại, hợp tác quốc tế về kinh tế, chính trị, văn hóa, khoa học, quốc phòng, an ninh",
            "Tổ chức biên chế và bố trí lực lượng vũ trang phải phù hợp với điều kiện kinh tế và yêu cầu bảo vệ Tổ quốc",
            "Coi trọng giáo dục bồi dưỡng nhân lực, đào tạo nhân tài của đất nước, đáp ứng yêu cầu xây dựng phát triển kinh tế - xã hội"
        ],
        answer: "Xây dựng chiến lược tổng thể kết hợp phát triển kinh tế - xã hội với tăng cường củng cố QPAN trong thời kỳ mới"
    },
    {
        question: "Ông cha ta xưa kia đã thực hiện kế sách “ động vi binh, tĩnh vi dân”nghĩa là: ",
        options: [
            "Khi có chiến tranh là người lính chiến đấu, đất nước hòa bình là người dân phát triển kinh tế",
            "Khi đất nước bình yên người dân luôn làm người lính sẵn sàng chiến đấu",
            " Khi đất nước có loạn người lính cũng làm người dân phát triển kinh tế",
            "Khi đất nước chiến tranh hoặc hòa bình mọi người đều phải làm người dân và người lính"
        ],
        answer: "Khi có chiến tranh là người lính chiến đấu, đất nước hòa bình là người dân phát triển kinh tế"
    },
    {
        question: "Kết hợp phát triển kinh tế-xã hội với tăng cường củng cố QPAN trong phát triển các vùng lãnh thổ cần phải quan tâm chỉ đạo: ",
        options: [
            "Kết hợp chặt chẽ giữa phát triển kinh tế xã hội với xây dựng lực lượng,thế trận quốc phòng an ninh trên từng vùng lãnh thổ",
            "Kết hợp chặt chẽ giữa phát triển kinh tế xã hội với xây dựng lực lượng vũ trang, lực lượng quần chúng trên các vùng lãnh thổ",
            "Kết hợp chặt chẽ giữa phát triển công nghiệp quốc phòng với xây dựng thế trận phòng thủ trên các vùng lãnh thổ ",
            "Kết hợp chặt chẽ giữa phát triển kinh tế xã hội với xây dựng các tổ chức chính trị, tổ chức quần chúng trên các vùng lãnh thổ"
        ],
        answer: "Kết hợp chặt chẽ giữa phát triển kinh tế xã hội với xây dựng lực lượng,thế trận quốc phòng an ninh trên từng vùng lãnh thổ"
    },
    {
        question: "Kết hợp phát triển kinh tế-xã hội với tăng cường củng cố QPAN trong công nghiệp, cần chú trọng: ",
        options: [
            "Những ngành có tính lưỡng dụng",
            "Phát triển đồng bộ các ngành",
            "Những ngành công nghệ cao",
            "Phát triển các ngành xuất khẩu"
        ],
        answer: "Những ngành có tính lưỡng dụng"
    },
    {
        question: "Kết hợp phát triển kinh tế-xã hội với tăng cường củng cố QPAN đối với nước ta là: ",
        options: [
            "Một tất yếu",
            "Rất cần thiết",
            "Một yêu cầu",
            "Rất quan trọng"
        ],
        answer: "Một tất yếu"
    },
    {
        question: "Ông cha ta đã thể hiện kết hợp kinh tế với quốc phòng bằng kế sách:",
        options: [
            "Ngụ binh ư nông",
            "Ngụ nông ư binh",
            "Nông binh cư ngụ",
            "Ngụ binh công nông"
        ],
        answer: "Ngụ binh ư nông"
    },
    {
        question: "Kinh tế, quốc phòng, an ninh là ba mặt hoạt động cơ bản nhất của một quốc gia, mỗi lĩnh vực có mục đích, cách thức hoạt động riêng và chịu sự chi phối của: ",
        options: [
            "Hệ thống quy luật riêng",
            "hệ thống quy tắc riêng",
            "Hệ thống quy luật chung",
            "Hệ thống pháp quy chung"
        ],
        answer: "Hệ thống quy luật riêng"
    },
    {
        question: "Kết hợp phát triển kinh tế với củng cố quốc phòng, an ninh ở Việt Nam đã có: ",
        options: [
            "Từ lâu đời",
            "Thời phong kiến",
            "Khi chống Pháp",
            "Thời chống Mỹ"
        ],
        answer: "Từ lâu đời"
    },
    {
        question: "Đối với vùng kinh tế trọng điểm, hiện nay nước ta xác định:",
        options: [
            "4 vùng kinh tế trọng điểm",
            "3 vùng kinh tế trọng điểm",
            "5 vùng vùng kinh tế ",
            "6 vùng kinh tế trọng điểm"
        ],
        answer: "4 vùng kinh tế trọng điểm"
    },
    {
        question: "Trên thế giới việc kết hợp kinh tế với quốc phòng, an ninh được thực hiện ở: ",
        options: [
            "Tất cả các nước",
            "Những nước nghèo",
            "Các nước phát triển",
            "Những nước giàu"
        ],
        answer: "Tất cả các nước"
    },
    {
        question: "Trong kháng chiến chống Mỹ, việc kết hợp phát triển kinh tế-xã hội với tăng cường củng cố QPAN ở nước ta đã thể hiện trong việc xác định:",
        options: [
            "Miền Bắc là hậu phương, miền Nam là tiền tuyến",
            "Miền Bắc là căn cứ, miền Nam là chiến trường",
            "Miền Bắc xây dựng, miền Nam chiến đấu",
            "Miền Bắc chống Mỹ, miền Nam diệt ngụy"
        ],
        answer: "Miền Bắc là hậu phương, miền Nam là tiền tuyến"
    },
    {
        question: "Một trong những đặc điểm đối với vùng kinh tế trọng điểm là: ",
        options: [
            "Mật độ dân cư, tính chất đô thị hóa cao",
            "Tính chất phức tap bởi đô thị hóa cao",
            " Dân cư đông đúc, an ninh phức tạp",
            "Dân số đông, đô thị phát triển nhanh"
        ],
        answer: "Mật độ dân cư, tính chất đô thị hóa cao"
    },
    {
        question: "Kinh tế quyết định đến QPAN, trong đó có: ",
        options: [
            "Quyết định việc tổ chức khu vực phòng thủ, cơ sở vật chất kỹ thuật cho quân đội, công an nhân dân",
            "Cung cấp cơ sở vật chất, vũ khí, trang bị chiến đấu cho các lực lượng vũ trang nhân dân",
            " Bảo đảm đầy đủ cơ sở vật chất kỹ thuật cho mọi hoạt động của lực lượng vũ trang nhân dân",
            "Quyết định đến việc cung cấp phòng, an ninh số lượng, chất lượng nguồn nhân lực cho quốc phòng, an ninh"
        ],
        answer: "Quyết định đến việc cung cấp phòng, an ninh số lượng, chất lượng nguồn nhân lực cho quốc phòng, an ninh"
    },
    {
        question: "số lượng, chất lượng nguồn nhân lực cho quốc Chủ trương của Đảng ta đã từng thực hiện trong kháng chiến chống Pháp về kết hợp kinh tế với quốc phòng, an ninh là: ",
        options: [
            "Vừa kháng chiến vừa kiến quốc",
            "Kết hợp chiến đấu với xây dựng",
            "Kết hợp sản xuất với thực hành tiết kiệm",
            "Vừa xây dựng làng xã vừa kháng chiến"
        ],
        answer: "Vừa kháng chiến vừa kiến quốc"
    },
    {
        question: "Trong lịch sử, dân tộc Việt Nam luôn bị các thế lực ngoại xâm nhòm ngó, xâm lược vì Việt Nam có: ",
        options: [
            "Vị trí địa lý thuận lợi",
            " Nhiều loại khoáng sản",
            "Nhiều phong cảnh đẹp",
            "Truyền thống quý báu"
        ],
        answer: "Vị trí địa lý thuận lợi"
    },
    {
        question: "An Dương Vương thành lập nhà nước  C.Thăng Long Câu 3. Một trong những Âu Lạc, đã dời đô về: ",
        options: [
            "Cổ Loa",
            "Thăng Long",
            "Hoa Lư",
            "Lam Sơn"
        ],
        answer: "Cổ Loa"
    },
    {
        question: "Một trong những cơ sở hình thành nghệ thuật quân sự Việt Nam là: ",
        options: [
            "Truyền thống đánh giặc của tổ tiên",
            "Nghệ thuật quân sự của các nước láng giềng",
            "Đấu tranh giai cấp của chủ nghĩa Mác-Lênin ",
            "Kinh nghiệm các cuộc chiến tranh trong khu vực"
        ],
        answer: "Truyền thống đánh giặc của tổ tiên"
    },
    {
        question: "Chiến dịch nào sau đây là chiến dịch phản công?",
        options: [
            "Chiến dịch Việt Bắc - Thu Đông 1947",
            "Chiến dịch Quảng Trị 1972",
            "Chiến dịch Điện Biên Phủ 1954",
            "Chiến dịch Tây Nguyên 1975"
        ],
        answer: "Chiến dịch Việt Bắc - Thu Đông 1947"
    },
    {
        question: "“Mở đầu và kết thúc chiến tranh đúng lúc” là một trong những nội dung của: ",
        options: [
            "Chiến lược quân sự",
            "Chiến dịch quân sự",
            "Nghệ thuật chiến dịch",
            "Nghệ thuật chiến lược"
        ],
        answer: "Chiến lược quân sự"
    },
    {
        question: "Đảng ta đã từng có một tư duy và nhận định chính xác trong đánh giá kẻ thù: ",
        options: [
            "Mỹ giàu nhưng không mạnh",
            "Mỹ rất giàu và rất mạnh",
            "Mỹ tuy giàu nhưng rất yếu",
            "Mỹ không giàu nhưng rất mạnh"
        ],
        answer: "Mỹ giàu nhưng không mạnh"
    },
    {
        question: "Một trong những bài học kinh nghiệm về nghệ thuật quân sự được vận dụng vào sự nghiệp bảo vệ Tổ quốc trong thời kỳ mới là: ",
        options: [
            "Nghệ thuật quân sự toàn dân đánh giặc",
            "Nghệ thuật quân sự chiến tranh toàn dân",
            "Nghệ thuật quân sự đánh giặc toàn diện",
            "Nghệ thuật quân sự cả nước đánh giặc"
        ],
        answer: "Nghệ thuật quân sự toàn dân đánh giặc"
    },
    {
        question: "Trận đánh điển hình về kết hợp chặt chẽ hai hình thức tác chiến phòng ngự và phản công trên cả quy mô chiến lược và chiến dịch thời nhà Lý chống quân Tống là: ",
        options: [
            "Trận phòng ngự Như Nguyệt",
            "Trận phản công Chi Lăng",
            "Trận phản công Ngọc Hồi",
            "Trận phòng ngự Đống Đa"
        ],
        answer: "Trận phòng ngự Như Nguyệt"
    },
    {
        question: "“ Chiến tranh nhân dân kết hợp giữa địa phương với các binh đoàn chủ lực, kết hợp chặt chẽ tiến công địch bằng hai lực lượng, bằng ba mũi giáp công, trên cả ba vùng chiến lược” là nội dung của: ",
        options: [
            "Phương thức tiến hành chiến tranh",
            "Phương pháp tác chiến chiến lược   ",
            "Phương thức tác chiến chiến dịch",
            "Phương pháp tiến hành chiến đấu "
        ],
        answer: "Phương thức tiến hành chiến tranh"
    },
    {
        question: "Một nội dung của chiến lược quân sự mang tính nghệ thuật cao trong chỉ đạo chiến tranh của Đảng ta: ",
        options: [
            "Mở đầu và kết thúc chiến tranh đúng lúc",
            "Đánh chắc thắng trận mở đầu chiến dịch",
            "Vận dụng các hình thức chiến thuật hợp lý",
            "Phát triển cách đánh hiệp đồng binh chủng"
        ],
        answer: "Mở đầu và kết thúc chiến tranh đúng lúc"
    },
    {
        question: "Một trong những bài học kinh nghiệm về nghệ thuật quân sự Việt Nam được vận dụng vào sự nghiệp bảo vệ Tổ quốc hiện nay là: ",
        options: [
            "Tích cực phòng ngự và chủ động phản công ",
            "Tích cực phòng ngự và chủ động phản công ",
            "Quán triệt tư tưởng tích cực phòng thủ ",
            "Tích cực tiến công kết hợp với phòng ngự"
        ],
        answer: "Quán triệt tư tưởng tích cực phòng thủ"
    },
    {
        question: "Lý luận và thực tiễn về chuẩn bị, thực hành chiến dịch và các hoạt động tác chiến tương đương là: ",
        options: [
            "Nghệ thuật chiến dịch",
            "Nghệ thuật chiến đấu",
            "Nghệ thuật đánh giặc",
            "Nghệ thuật tác chiến"
        ],
        answer: "Nghệ thuật chiến dịch"
    },
    {
        question: "Để bảo vệ được độc lập, cuộc sống và nền văn hóa của mình, ông cha ta chỉ có con đường duy nhất là: ",
        options: [
            "Đoàn kết đứng lên đánh giặc, giữ nước",
            "Phất cờ khởi nghĩa đánh giặc ngoại xâm",
            "Đoàn kết tướng sỹ, đứng lên đánh giặc",
            "Kêu gọi nhân dân, phất cờ khởi nghĩa"
        ],
        answer: "Đoàn kết đứng lên đánh giặc, giữ nước"
    },
    {
        question: "Triều đại phong kiến đã tiến hành cuộc kháng chiến chống Tống lần thứ hai giành thắng lợi: ",
        options: [
            "Nhà Lý",
            "Nhà Lê",
            "Nhà Trần",
            "Nhà Hồ"
        ],
        answer: "Nhà Lý"
    },
    {
        question: "Chiến dịch giành thắng lợi, kết thúc chiến tranh chống Pháp là:",
        options: [
            "Chiến dịch Điện Biên Phủ",
            "Chiến dịch Biên giới",
            "Chiến dịch Đông xuân",
            "Chiến dịch Tây Bắc"
        ],
        answer: "Chiến dịch Điện Biên Phủ"
    },
    {
        question: "Khởi nghĩa của Hai Bà Trưng diễn ra vào:",
        options: [
            "Mùa xuân năm 40 sau Công nguyên",
            "Mùa xuân năm 40 trước Công nguyên",
            "Mùa hè năm 40 sau Công nguyên",
            " Mùa hè năm 40 trước Công nguyên"
        ],
        answer: "Mùa xuân năm 40 sau Công nguyên"
    },
    {
        question: "Cuộc kháng chiến chống Tống lần thứ nhất thắng lợi do Triều đại phong kiến: ",
        options: [
            "Nhà Tiền Lê tiến hành",
            "Nhà Lý tiến hành",
            "Nhà Đinh tiến hành",
            "Nhà Hồ tiến hành"
        ],
        answer: "Nhà Tiền Lê tiến hành"
    },
    {
        question: "Lý Thái Tổ đã ban chiếu dời đô từ Hoa Lư vế Thăng Long ",
        options: [
            "Năm 1010",
            "Năm 1110",
            "Năm 1012",
            "Năm 1210"
        ],
        answer: "Năm 1010"
    },
    {
        question: "Nghệ thuật tiến hành chiến tranh nhân dân, toàn dân đánh giặc ở nước ta có từ thời: ",
        options: [
            "Tổ tiên ta đánh giặc",
            "Chống giặc Nguyên",
            "Chống giặc Minh",
            "Chống giặc Thanh"
        ],
        answer: "Tổ tiên ta đánh giặc"
    },
    {
        question: "Hội nghị Diên Hồng xây dựng quyết tâm của dân tộc ta chống lại xâm lược của: ",
        options: [
            "Quân Nguyên – Mông",
            "Quân Tống",
            "Quân Mãn Thanh",
            "Quân Minh"
        ],
        answer: "Quân Nguyên – Mông"
    },
    {
        question: "Quần đảo Trường Sa là huyện đảo thuộc tỉnh: ",
        options: [
            "Khánh Hòa",
            "Phú Yên",
            "Quảng Ngãi",
            "Bà Rịa - Vũng Tàu"
        ],
        answer: "Khánh Hòa"
    },
    {
        question: "Biên giới quốc gia của Việt Nam là: ",
        options: [
            "Đường và mặt phẳng thẳng đứng",
            "Đường và mặt phẳng nằm ngang",
            "Hệ thống các tọa độ được xác định",
            "Hệ thống các đường và mặt phẳn"
        ],
        answer: "Đường và mặt phẳng thẳng đứng"
    },
    {
        question: "Vùng thềm lục địa thuộc biển Việt và quần đảo Nam có chế độ pháp lý như ",
        options: [
            "Vùng đặc quyền kinh tế ",
            "Vùng lãnh hải",
            "Vùng đất trên đảo và quần đảo",
            "Trên đất liền"
        ],
        answer: "Vùng đặc quyền kinh tế "
    },
    {
        question: "Biên giới quốc gia trên biển của Việt Nam được hoạch định và:",
        options: [
            "Đánh dấu bằng các tọa độ trên hải đồ",
            "Ghi chú bằng các tọa độ trên hải đồ",
            "Hệ thống các tọa độ được xác định",
            "Chú thích bằng các tọa độ trên bản đồ"
        ],
        answer: "Đánh dấu bằng các tọa độ trên hải đồ"
    },
    {
        question: "Một trong những quan điểm của Đảng về xây dựng và bảo vệ chủ quyền lãnh thổ, biên giới quốc gia là",
        options: [
            "Chủ quyền lãnh thổ, biên giới quốc gia là thiêng liêng bất khả xâm phạm của dân tộc Việt Nam.",
            "Chủ quyền lãnh thổ, biên giới quốc gia là một bộ phận rất quan trọng của cách mạng Việt Nam",
            "Chủ quyền lãnh thổ, biên giới quốc gia là yếu tố cơ bản nhất cho sự nghiệp xây dựng và bảo vệ Tổ quốc",
            "Chủ quyền lãnh thổ, biên giới quốc gia là nội dung chủ yếu trong sự nghiệp xây dựng và bảo vệ Tổ quốc.",
        ],
        answer: "Chủ quyền lãnh thổ, biên giới quốc gia là thiêng liêng bất khả xâm phạm của dân tộc Việt Nam."
    },
    {
        question: "Lãnh thổ quốc gia là: ",
        options: [
            "Phạm vi không gian được giới hạn bởi biên giới quốc gia",
            "Phạm vi không gian của vùng đất, vùng trời và vùng biển quốc gia",
            "Phạm vi giới hạn thuộc chủ quyền hoàn toàn và đầy đủ của quốc gia",
            "Phạm vi giới hạn một phần của trái đất thuộc chủ quyền quốc gia",
        ],
        answer: "Phạm vi không gian được giới hạn bởi biên giới quốc gia"
    },
    {
        question: "Bảo vệ chủ quyền biển đảo quốc gia là",
        options: [
            "Sử dụng tổng hợp các lực lượng và biện pháp chống lại sự xâm phạm, phá hoại dưới mọi hình thức",
            "Sử dụng các lực lượng và các biện pháp làm thất bạimọi âm mưu, thủ đoạn thôn tính của kẻ thù",
            "Sử dụng tổng hợp các lực lượng vũ trang đánh bại mọi hành động phá hoại, xâm lược của kẻ thù ",
            "Sử dụng mọi lực lượng, phương tiện, đấu tranh toàn diện chống lại mọi kẻ thù xâm lược",
        ],
        answer: "Sử dụng tổng hợp các lực lượng và biện pháp chống lại sự xâm phạm, phá hoại dưới mọi hình thức"
    },
    {
        question: "Đặc trưng chính trị và tính pháp lý thiết yếu của một quốc gia độc lập, được thể hiện trong: ",
        options: [
            "Hoạt động của các cơ quan nhà nước và trong hệ thống pháp luật quốc gia",
            "Quản lý chủ quyền lãnh thổ biên giới và duy trì trật tự an toàn xã hội",
            "Hoạt động kiểm soát của các cơ quan nhà nước theo quy định quốc tế",
            "Duy trì mọi hoạt động theo khuôn khổ luật pháp nhà nước và quốc tế",
        ],
        answer: "Hoạt động của các cơ quan nhà nước và trong hệ thống pháp luật quốc gia"
    },
    {
        question: "Quan điểm xây dựng biên giới hòa bình hữu nghị, ổn định là:",
        options: [
            "Vấn đề đặc biệt quan trọng của sự nghiệp xây dựng và bảo vệ Tổ quốc",
            "Yêu cầu chiến lược lâu dài của cách mạng Việt Nam",
            "Vấn đề sống còn của sự nghiệp công nghiệp hóa, hiện đại hóa đất nước",
            "Nội dung cốt lõi trong đường lối cách mạng Việt Nam",
        ],
        answer: "Vấn đề đặc biệt quan trọng của sự nghiệp xây dựng và bảo vệ Tổ quốc"
    },
    {
        question: "Biên giới quốc gia trên biển của Việt Nam là ranh giới phía ngoài của: ",
        options: [
            "Lãnh hải Việt Nam",
            "Vùng tiếp giáp lãnh hải",
            "Vùng đặc quyền kinh tế",
            "Vùng thềm lục địa Việt Nam",
        ],
        answer: "Lãnh hải Việt Nam"
    },
    {
        question: "Vùng nước nội thủy của Việt Nam có chế độ pháp lý như",
        options: [
            "Lãnh thổ trên đất liền",
            "Các vùng biển khác",
            "Lãnh hải trên biển",
            "Vùng thềm lục địa",
        ],
        answer: "Lãnh thổ trên đất liền"
    },
    {
        question: "Vùng biển thuộc chủ quyền của Việt Nam là",
        options: [
            "Vùng nội thủy và vùng lãnh hải",
            "Vùng lãnh hải và vùng tiếp giáp lãnh hải",
            "Vùng nội thủy và vùng đặc quyền kinh tế",
            "Vùng lãnh hải và vùng thềm lục địa",
        ],
        answer: "Vùng nội thủy và vùng lãnh hải"
    },
    {
        question: "Điểm cuối cùng của đường cơ sở vùng biển Việt Nam là:",
        options: [
            "Đảo Cồn Cỏ",
            "Đảo Lý Sơn",
            "Đảo Hòn Mê",
            "Đảo Bạch Long Vĩ",
        ],
        answer: "Đảo Cồn Cỏ"
    },
    {
        question: "Lực lượng nòng cốt trong bảo vệ chủ quyền lãnh thổ, biên giới quốc gia là",
        options: [
            "Lực lượng vũ trang",
            "Lực lượng quân đội",
            "Lực lượng an ninh",
            "Lực lượng dân quân",
        ],
        answer: "Lực lượng vũ trang"
    },
    {
        question: "Vùng biển thuộc quyền chủ quyền Việt Nam là",
        options: [
            "Vùng đặc quyền kinh tế, vùng thềm lục địa",
            "Vùng nội thủy đến vùng tiếp giáp lãnh hải",
            "Vùng thềm lục địa, vùng tiếp giáp lãnh hải",
            "Vùng nước ngoài lãnh thổ trên biển",
        ],
        answer: "Vùng đặc quyền kinh tế, vùng thềm lục địa"
    },
    {
        question: "Đảo Phú Quý thuộc địa phận tỉnh",
        options: [
            "Bình Thuận",
            "Ninh Thuận",
            "Bà Rịa - Vũng Tàu",
            "Kiên Giang",
        ],
        answer: "Bình Thuận"
    },
    {
        question: "Đảo Thổ Chu thuộc địa phận tỉnh",
        options: [
            "Kiên Giang",
            "An Giang",
            "Hậu Giang",
            "Cà Mau",
        ],
        answer: "Kiên Giang"
    },
    {
        question: "Biên giới quốc gia của Việt Nam trong lòng đất được xác định bằng",
        options: [
            "Mặt phẳng thẳng đứng theo lãnh thổ quốc gia Việt Nam cắm sâu vào lòng đất",
            "Đường thẳng đứng theo biên giới Việt Nam trên đất liền cắm sâu vào lòng đất",
            "Hệ thống tọa độ trên bản đồ lãnh thổ quốc gia Việt Nam",
            "Hệ thống mặt phẳng thẳng đứng theo lãnh thổ Việt Nam",
        ],
        answer: "Mặt phẳng thẳng đứng theo lãnh thổ quốc gia Việt Nam cắm sâu vào lòng đất"
    },
    {
        question: "Một trong những nội dung xây dựng và bảo vệ chủ quyền biển, đảo quốc gia là",
        options: [
            "Hoàn thiện thiết chế quản lý, bảo vệ lợi ích quốc gia trên biển, đảo",
            "Xây dựng nền quốc phòng toàn dân, an ninh nhân dân bảo vệ biển, đảo",
            "Hoàn thiện cơ chế quản lý, kết hợp với quốc phòng - an ninh",
            "Kết hợp phát triển kinh tế với đấu tranh bảo vệ lợi ích trên biển, đảo",
        ],
        answer: "Hoàn thiện thiết chế quản lý, bảo vệ lợi ích quốc gia trên biển, đảo"
    },
    {
        question: "Tại các địa bàn trọng điểm về quốc phòng, an ninh, quân tự vệ còn có lực lượng",
        options: [
            "Dân quân tự vệ thường trực",
            "Dân quân tự vệ thường xuyên",
            "Dân quân tự vệ trực ban",
            "Dân quân tự vệ trực chiến",
        ],
        answer: "Dân quân tự vệ thường trực"
    },
    {
        question: "Một trong những biện pháp xây dựng lực lượng dân quân tự vệ hiện nay là: ",
        options: [
            "Xây dựng lực lượng dân quân tự vệ gắn với xây dựng cơ sở vững mạnh toàn diện",
            "Phát huy sức mạnh của toàn dân trên tất cả các lĩnh vực hoạt động xã hội",
            "Xây dựng lực lượng dân quân tự vệ vững mạnh, sẵn sàng chiến đấu cao",
            "Xây dựng lực lượng dân quân tự vệ rộng khắp ở các ngành và địa phương",
        ],
        answer: "Xây dựng lực lượng dân quân tự vệ gắn với xây dựng cơ sở vững mạnh toàn diện"
    },
    {
        question: "Thời hạn phục vụ của lực lượng dân quân tự vệ nòng cốt theo Luật Dân quân tự vệ năm 2009 là: ",
        options: [
            "4 năm",
            "3 năm",
            "2 năm",
            "5 năm",
        ],
        answer: "4 năm"
    },
    {
        question: "Tổ chức đơn vị dân quân tự vệ cao nhất là:",
        options: [
            "Tiểu đoàn, hải đoàn",
            "Lữ đoàn, hải đoàn",
            "Đại đội, hải đội",
            "Trung đội, hải đội",
        ],
        answer: "Tiểu đoàn, hải đoàn"
    },
    {
        question: "Để xây dựng lực lượng dân quân tự vệ có hiệu quả, chúng ta phải",
        options: [
            "Thường xuyên giáo dục, quán triệt sâu rộng các quan điểm, chủ trương, chính sách của Đảng, nhà nước về công tác dân quân tự vệ",
            "Phát huy sức mạnh của các cấp, các ngành, các địa phương và các tầng lớp nhân dân để thực hiện công tác dân quân tự vệ",
            "Phát huy sức mạnh của các cấp ủy Đảng, chính quyền và các tầng lớp nhân dân để xây dựng lực lượng dân quân tự vệ ",
            "Thường xuyên củng cố sức mạnh tổng hợp của cả hệ thống chính trị và của các tầng lớp nhân dân để thực hiện tốt công tác dân quân tự vệ.",
        ],
        answer: "Thường xuyên giáo dục, quán triệt sâu rộng các quan điểm, chủ trương, chính sách của Đảng, nhà nước về công tác dân quân tự vệ"
    },
    {
        question: "Dân quân tự vệ “ là lực lượng nòng cốt trong xây dựng nền quốc phòng toàn dân trong thời bình”, là một trong những nội dung cùa: ",
        options: [
            "Vị trí vai trò của dân quân tự vệ",
            "Nội dung, nhiệm vụ của dân quân tự vệ",
            "Chức năng cơ bản của dân quân tự vệ",
            "Nhiệm vụ, chức trách của dân quân tự vệ",
        ],
        answer: "Vị trí vai trò của dân quân tự vệ"
    },
    {
        question: "Nhiệm vụ của dân quân tự vệ được quy định trong Luật Dân quân tự vệ 2009, là những nhiệm vụ: ",
        options: [
            "Cơ bản, thường xuyên trong mọi giai đoạn cách mạng đối với mọi tổ chức dân quân tự vệ",
            "Chủ yếu, thường xuyên của sự nghiệp cách mạng Việt Nam trong thời chiến",
            "Quan trọng nhất của dân quân tự vệ trong sự nghiệp xây dựng và bảo vệ Tổ quốc",
            "Cơ bản, thường xuyên xây dựng nền quốc phòng toàn dân, an ninh nhân dân trong thời bình",
        ],
        answer: "Cơ bản, thường xuyên trong mọi giai đoạn cách mạng đối với mọi tổ chức dân quân tự vệ"
    },
    {
        question: "Nhiệm vụ của lực lượng dân quân tự vệ cơ động là",
        options: [
            "Chiến đấu, tiêu hao,tiêu diệt địch, chi viện cho lực lượng chiến đấu tại chỗ",
            "Chiến đấu, tiêu diệt địch, đánh bại địch tiến công trên địa bàn địa phương",
            "Chiến đấu, sẵn sàng chiến đấu trên địa bàn địa phương theo phương án",
            "Chiến đấu, cơ động chiến đấu trên địa bàn địa phương theo kế hoạch",
        ],
        answer: "Chiến đấu, tiêu hao,tiêu diệt địch, chi viện cho lực lượng chiến đấu tại chỗ"
    },
    {
        question: "Nguyên tắc lãnh đạo của Đảng đối với lực lượng dự bị động viên nhằm mục đích",
        options: [
            "Bảo đảm sức mạnh của quân đội, đáp ứng yêu cầu bảo vệ vững chắc Tổ quốc Việt Nam XHCN",
            "Duy trì sức mạnh chiến đấu của lực lượng dự bị động viên đáp ứng yêu cầu nhiệm vụ mới",
            "Hoàn thiện cơ chế lãnh đạo và tăng cường chất lượng cho lực lượng vũ trang nhân dân",
            "Hoàn thiện và tăng cường số lượng, chất lượng cho lực lượng vũ trang khi có chiến tranh.",
        ],
        answer: "Bảo đảm sức mạnh của quân đội, đáp ứng yêu cầu bảo vệ vững chắc Tổ quốc Việt Nam XHCN"
    },
    {
        question: "Quyền hạn bổ nhiệm các chức vụ trong ban chỉ huy quân sự xã là",
        options: [
            "Chủ tịch ủy ban nhân dân huyện",
            "Chỉ huy trưởng ban chỉ huy quân sự huyện",
            "Chính trị viên ban chỉ huy quân sự huyện",
            "Bí thư đảng ủy huyện",
        ],
        answer: "Chủ tịch ủy ban nhân dân huyện"
    },
    {
        question: "Thực hiện nhiệm vụ xây dựng lực lượng dân quân tự vệ hiện nay, chúng ta phải",
        options: [
            "Coi trọng chất lượng là chính",
            "Chú trọng chất lượng chính trị",
            "Tăng cường sức mạnh chiến đấu",
            "Xây dựng vững mạnh toàn diện",
        ],
        answer: "Coi trọng chất lượng là chính"
    },
    {
        question: "Quân nhân dự bị động viên được đăng ký, quản lý tại",
        options: [
            "Nơi cư trú",
            "Nơi công tác",
            "Đơn vị dự bị động viên",
            "Nơi tập trung động viên",
        ],
        answer: "Nơi cư trú"
    },
    {
        question: "Đối tượng tạo nguồn động viên sỹ quan dự bị",
        options: [
            "Sỹ quan xuất ngũ",
            "Binh sỹ xuất ngũ",
            "Thanh niên chuẩn bị nhập ngũ",
            "Dân quân tự vệ thường trực",
        ],
        answer: "Sỹ quan xuất ngũ"
    },
    {
        question: "Khi tổ chức lực lượng dự bị động viên, sắp xếp quân nhân dự bị hạng một trước, nếu thiếu thì sắp xếp: ",
        options: [
            "Quân nhân dự bị hạng hai",
            "Dân quân tự vệ hạng một",
            "Quân nhân dự bị hạng ba",
            "Dân quân tự vệ cơ động",
        ],
        answer: "Quân nhân dự bị hạng hai"
    },
    {
        question: "Thực hiện nghiêm túc, đầy đủ các chế độ, chính sách của Đảng và Nhà nước đối với lực lượng dự bị động viên là",
        options: [
            "Trách nhiệm của toàn xã hội",
            "Thực hiện lợi ích xã hội",
            "Thực hiện chính sách xã hội",
            "Trách nhiệm của các địa phương",
        ],
        answer: "Trách nhiệm của toàn xã hội"
    },
    {
        question: "Dân quân được tổ chức ở",
        options: [
            "Xã, phường, thị trấn",
            "Cơ quan, tổ chức nhà nước",
            "Xã, phường, cơ quan nhà nước",
            "Xã, Phường, đơn vị sự nghiệp",
        ],
        answer: "Xã, phường, thị trấn"
    },
    {
        question: " Khó khăn cho thực hiện động viên công nghiệp quốc phòng trong kinh tế thị trường phát triển và xu thế hội nhập kinh tế quốc tế",
        options: [
            "Bảo đảm bí mật quân sự",
            "Bảo đảm an sinh xã hội",
            "Bảo đảm an ninh trật tự",
            "Bảo đảm nguồn nhân lực",
        ],
        answer: "Bảo đảm bí mật quân sự"
    },
    {
        question: "Độ tuổi của công dân Việt Nam tham gia lực lượng dân quân tự vệ là",
        options: [
            "Nam từ đủ 18 tuổi đến hết 45 tuổi, nữ từ đủ 18 tuổi đến hết 40 tuổi",
            "Nam từ đủ 20 tuổi đến hết 45 tuổi, nữ từ đủ 18 tuổi đến hết 40 tuổi",
            "Nam từ đủ 18 tuổi đến hết 50 tuổi, nữ từ đủ 20 tuổi đến hết 45 tuổi",
            "Nam từ đủ 20 tuổi đến hết 45 tuổi, nữ từ đủ 20 tuổi đến hết 40 tuổi",
        ],
        answer: "Nam từ đủ 18 tuổi đến hết 45 tuổi, nữ từ đủ 18 tuổi đến hết 40 tuổi"
    },
    {
        question: "Một trong những quan điểm, nguyên tắc xây dựng lực lượng dự bị động viên là: ",
        options: [
            "Phát huy sức mạnh của các bộ, ngành và địa phương",
            "Phát huy sức mạnh của toàn dân trên tất cả các lĩnh vực hoạt động xã hội",
            "Xây dựng lực lượng dự bị động viên hùng mạnh, sẵn sàng chiến đấu cao",
            "Phát huy sức mạnh tổng hợp của cả hệ thống chính trị ở địa phương",
        ],
        answer: "Phát huy sức mạnh của các bộ, ngành và địa phương"
    },
    {
        question: "Dân quân tự vệ Việt Nam thành lập ngày, tháng, năm nào?",
        options: [
            "28/03/1935",
            "19/08/1945",
            "22/12/1944",
            "23/09/1945",
        ],
        answer: "28/03/1935"
    },
    {
        question: "'Hình thức thích hợp để tập hợp, thu hút đông đảo quần chúng lao động và giải quyết những nhiệm vụ đặt ra trong công tác bảo vệ an ninh trật tự' là một trong những vị trí, tác dụng của" ,
        options: [
            "Phong trào toàn dân bảo vệ an ninh Tổ quốc",
            "Phong trào phòng chống tội phạm và tệ nạn xã hội",
            "Phong trào vì an ninh, trật tự Tổ quốc",
            "Phong trào giữ gìn trật tự, an toàn xã hội",
        ],
        answer: "Phong trào toàn dân bảo vệ an ninh Tổ quốc"
    },
    {
        question: "Một trong những vị trí, tác dụng của phong trào toàn dân bảo vệ an ninh Tổ quốc là: ",
        options: [
            "Một bộ phận gắn bó chặt chẽ với phong trào cách mạng khác trong cả nước cũng như từng địa phương",
            "Một bộ phận liên quan chặt chẽ, gắn bó với nhiệm vụ bảo vệ an ninh quốc gia và trật tự an toàn xã hội",
            "Một nội dung quan trọng trong bảo vệ an ninh quốc gia và trật tự, an toàn xã hội trong cả nước cũng như từng địa phương",
            "Một thành phần không thể thiếu trong phong trào cách mạng XHCN",
        ],
        answer: "Một bộ phận gắn bó chặt chẽ với phong trào cách mạng khác trong cả nước cũng như từng địa phương"
    },
    {
        question: "Mục đích của phong trào toàn dân bảo vệ an ninh Tổ quốc là:",
        options: [
            "Huy động sức mạnh của nhân dân để phòng ngừa, phát hiện, ngăn chặn, đấu tranh với các loại tội phạm",
            "Giúp cho lực lượng công an có điều kiện triển khai sâu rộng công tác nghiệp vụ phòng chống tội phạm",
            "Trực tiếp phòng ngừa, đấu tranh chống tội phạm, ngăn chặn các tệ nạn xã hội",
            "Huy động sức mạnh của các tổ chức chính trị - xã hội để phòng chống tội phạm",
        ],
        answer: "Huy động sức mạnh của nhân dân để phòng ngừa, phát hiện, ngăn chặn, đấu tranh với các loại tội phạm"
    },
    {
        question: "Xây dựng điển hình và nhân điển hình tiên tiến là nội dung của",
        options: [
            "Phương pháp xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc",
            "Nhiệm vụ của quần chung nhân dân trong bảo vệ an ninh Tổ quốc",
            "Đặc điểm xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc",
            "Mục đích của phong trào đoàn kết nhân dân bảo vệ an ninh Tổ quốc",
        ],
        answer: "Phương pháp xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc"
    },
    {
        question: "Tham gia xây dựng tổ chức Đảng, chính quyền, đoàn thể quần chúng tại cơ sở vững mạnh” là một trong những nội dung cơ bản của",
        options: [
            "Công tác phòng chống  tội phạm và tệ nạn xã hội",
            "Công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc",
            "Công tác bảo vệ an ninh Tổ quốc ở cơ sở",
            "Công tác giữ gìn trật tự, an toàn xã hội",
        ],
        answer: "Công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc"
    },
    {
        question: "Quần chúng nhân dân đông đảo là nền tảng, là chỗ dựa vững chắc để tổ chức xây dựng nền an ninh nhân dân là nội dung của: ",
        options: [
            "Đặc điểm của quần chúng nhân dân trong bảo vệ tổ quốc",
            "Ý nghĩa của quần chúng nhân dân trong bảo vệ tổ quốc",
            "Vai trò của quần chúng nhân dân trong bảo vệ tổ quốc",
            "Hiệu quả của quần chúng nhân dân trong bảo vệ tổ quốc",
        ],
        answer: "Vai trò của quần chúng nhân dân trong bảo vệ tổ quốc"
    },
    {
        question: "“ Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm” là một trong những nội dung cơ bản của",
        options: [
            "Công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc",
            "Công tác vận động quần chúng nâng cao tinh thần cảnh giác cách mạng",
            "Công tác tuyên truyền của lực lượng công an nhân dân",
            "Công tác vận động quần chúng của các cấp, các ngành",
        ],
        answer: "Công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc"
    },
    {
        question: "Một trong những nội dung cơ bản của công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc là",
        options: [
            "Xây dựng và mở rộng liên kết phối hợp chặt chẽ với các ngành, các đoàn thể quần chúng, các tổ chức chính trị xã hội trong các phong trào của địa phương",
            "Mở rộng liên kết phối hợp chặt chẽ với các tổ chức, cơ quan, đơn vị trong phong trào thi đua ở địa phương",
            "Phối hợp chặt chẽ với các phong trào thi đua khen thưởng của các ngành, các cấp từ trung ương tới địa phương trong phạm vi cả nước",
            "Xây dựng và duy trì liên kết chặt chẽ với các ngành, các tổ chức quần chúng trong các phong trào của các bộ, ngành",
        ],
        answer: "Xây dựng và mở rộng liên kết phối hợp chặt chẽ với các ngành, các đoàn thể quần chúng, các tổ chức chính trị xã hội trong các phong trào của địa phương"
    },
    {
        question: " “Tham gia xây dựng tổ chức Đảng, chính quyền, đoàn thể quần chúng tại cơ sở vững mạnh” là một trong những nội dung cơ bản của",
        options: [
            "Công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc",
            "Công tác phòng chống tội phạm và tệ nạn xã hội",
            "Công tác bảo vệ an ninh Tổ quốc ở cơ sở",
            "Công tác giữ gìn trật tự, an toàn xã hội",
        ],
        answer: "Công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc"
    },
    {
        question: "Một trong những vị trí, tác dụng của phong trào toàn dân bảo vệ an ninh Tổ quốc là",
        options: [
            "Là hình thức cơ bản để tập hợp thu hút đông đảo quần chúng phát huy quyền làm chủ của quần chúng nhân dân tham gia bảo vệ an ninh trật tự",
            "Một bộ phận liên quan chặt chẽ, gắn bó với nhiệm vụ bảo vệ ANQG và trật tự an toàn xã hội",
            "Một thành phần không thể thiếu trong phong trào cách mạng XHCN để bảo vệ ANTQ ",
            "Một hình thức quan trọng trong bảo vệ an ninh quốc gia và trật tự, an toàn xã hội trong cả nước cũng như từng địa phương",
        ],
        answer: "Là hình thức cơ bản để tập hợp thu hút đông đảo quần chúng phát huy quyền làm chủ của quần chúng nhân dân tham gia bảo vệ an ninh trật tự"
    },
    {
        question: "Một trong những nội dung cơ bản của công tác xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc là",
        options: [
            "Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm",
            "Nắm tình hình, xây dựng kế hoạch phát động phong trào toàn dân bảo vệ ANTQ",
            "Vận động nhân dân xây dựng khu dân cư văn hóa, giữ gìn trật tự an toàn xã hội",
            "Nắm tình hình và vận động toàn dân tích cực tham gia phong trào bảo vệ an ninh trật tự",
        ],
        answer: "Vận động toàn dân tích cực tham gia chương trình quốc gia phòng chống tội phạm"
    },
    {
        question: "Quần chúng nhân dân đông đảo là nền tảng, là chỗ dựa vững chắc để tổ chức xây dựng nền an ninh nhân dân là nội dung của",
        options: [
            "Vai trò của quần chúng nhân dân trong bảo vệ tổ quốc",
            "Ý nghĩa của quần chúng nhân dân trong bảo vệ tổ quốc",
            "Đặc điểm của quần chúng nhân dân trong bảo vệ tổ quốc",
            "Hiệu quả của quần chúng nhân dân trong bảo vệ tổ quốc",
        ],
        answer: "Vai trò của quần chúng nhân dân trong bảo vệ tổ quốc"
    },
    {
        question: "Trong phương pháp xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc, trước tiên phải",
        options: [
            "Điều tra nghiên cứu tình hình",
            "Xây dựng chương trình hoạt động",
            "Tuyên truyền cho mọi người",
            "Xác định cách thức thực hiện",
        ],
        answer: "Điều tra nghiên cứu tình hình"
    },
    {
        question: "Ngày Hội toàn dân bảo vệ an ninh Tổ quốc",
        options: [
            "Ngày 19/8",
            "Ngày 08/9",
            "Ngày 19/5",
            "Ngày 23/9",
        ],
        answer: "Ngày 19/8"
    },
    {
        question: "“Tuyên truyền, giáo dục và hướng dẫn quần chúng nhân dân thực hiện nhiệm vụ bảo vệ an ninh trật tự” là một trong những nội dung của",
        options: [
            "Phương pháp xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc",
            "Nội dung của phong trào toàn dân bảo vệ an ninh Tổ quốc",
            "Nhiệm vụ của phong Trào toàn dân bảo vệ an ninh Tổ quốc",
            "Biện pháp của phong trào toàn dân bảo vệ an ninh Tổ quốc",
        ],
        answer: "Phương pháp xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc"
    },
    {
        question: "Đội Cờ đỏ là tổ chức quần chúng nòng cốt làm nhiệm vụ an ninh trật tự trong nhà trường là một tổ chức quần chúng có chức năng",
        options: [
            "Thực hành",
            "Tư vấn",
            "Quản lý",
            "Điều hành",
        ],
        answer: "Thực hành"
    },
    {
        question: "Một trong những nội dung cơ bản của công tác xây dựng phòng trào toàn dân bảo vệ an ninh Tổ quốc là: ",
        options: [
            "Tham gia xây dựng tổ chức Đảng, chính quyền, đoàn thể quần chúng tại cơ sở vững mạnh",
            "Tuyên truyền giáo dục và hướng dẫn quần chúng nhân dân thực hiện nhiệm vụ bảo vệ an ninh trật tự",
            "Xây dựng kế hoạch cụ thể, triển khai tuyên truyền, giáo dục cho toàn dân tự giác tham gia phong trào",
            "Tuyên truyền giáo dục và hướng dẫn nhân dân xây dựng đời sống văn hóa tại khu dân cư",
        ],
        answer: "Tham gia xây dựng tổ chức Đảng, chính quyền, đoàn thể quần chúng tại cơ sở vững mạnh"
    },
    {
        question: "Trong xây dựng các tổ chức, lực lượng quần chúng nòng cốt làm hạt nhân để xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc, Hội đồng an ninh trật tự cơ sở là tổ chức: ",
        options: [
            "Có chức năng tư vấn",
            "Có nhiệm vụ giám sát",
            "Có chức năng kiểm tra",
            "Có trách nhiệm theo dõi",
        ],
        answer: "Có chức năng tư vấn"
    },
    {
        question: "Để huy động được sức mạnh của toàn dân tham gia nhiệm vụ bảo vệ an ninh trật tự trong quá trình xây dựng phong trào, cần phải có sự phối, kết hợp chặt chẽ giữa",
        options: [
            "Các lực lượng, các cơ quan Nhà nước, các tổ chức xã hội ở địa phương",
            "Các bộ, các ngành,  các tổ chức quần chúng và công an xã, phường",
            "Công an với quân đội, các tổ chức quần chúng nhân dân trên địa bàn",
            "Các tầng lớp nhân dân, các lực lượng vũ trang và bán vũ trang",
        ],
        answer: "Các lực lượng, các cơ quan Nhà nước, các tổ chức xã hội ở địa phương"
    },
    {
        question: "Xây dựng phong trào toàn dân bảo vệ an ninh Tổ quốc gắn liền với các cuộc vận động khác của Đảng và Nhà nước, gắn liền với việc",
        options: [
            "Thực hiện các chính sách ở địa phương",
            "Thực hiện công bằng ở địa phương",
            "Xây dựng môi trường xanh, sạch, đẹp",
            "Xây dựng nếp sống văn hóa lành mạnh",
        ],
        answer: "Thực hiện các chính sách ở địa phương"
    },
    {
        question: "Bảo vệ an ninh quốc gia là",
        options: [
            "Phòng ngừa, phát hiện, ngăn chặn, đấu tranh làm thất bại các hoạt động xâm hại an ninh quốc gia",
            "Bảo vệ các hoạt động phòng ngừa, phát hiện, ngăn chặn và đấu tranh với mọi âm mưu thủ đoạn phá hoại của kẻ thù",
            "Phòng ngừa, phát hiện, ngăn chặn, đấu tranh làm thất bại các hoạt động xâm phạm bí mật quốc gia, các công trình của Nhà nước và các mục tiêu quan trọng về quốc phòng, an ninh",
            "Bảo vệ các công trình, cơ sở chính trị, an ninh,quốc phòng, kinh tế khoa học công nghệ của Nhà nước.",
        ],
        answer: "Phòng ngừa, phát hiện, ngăn chặn, đấu tranh làm thất bại các hoạt động xâm hại an ninh quốc gia"
    },
    {
        question: "Lĩnh vực được xác định là cốt lõi, xuyên suốt nhất trong bảo vệ an ninh quốc gia là: ",
        options: [
            "An ninh chính trị",
            "An ninh kinh tế",
            "An ninh xã hội ",
            "An ninh quốc phòng",
        ],
        answer: "An ninh chính trị"
    },
    {
        question: " Lực lượng chuyên trách bảo vệ an ninh trên biển của nước ta hiện nay là",
        options: [
            "Cảnh sát biển",
            "Bộ đội Biên phòng",
            "Công an nhân dân",
            "An ninh quân đội",
        ],
        answer: "Cảnh sát biển"
    },
    {
        question: "“Bảo vệ môi trường” là một trong những nội dung của công tác",
        options: [
            "Giữ gìn trật tự, an toàn xã hội",
            "Giữ gìn nguồn nước sinh hoạt",
            "Giữ gìn an toàn các khu công nghiệp",
            "Giữ gìn vệ sinh, an toàn lao động",
        ],
        answer: "Giữ gìn trật tự, an toàn xã hội"
    },
    {
        question: "Trạng thái xã hội bình yên, trong đó mọi người được sống yên ổn trên cơ sở các quy phạm pháp luật, các quy tắc và chuẩn mực đạo đức, pháp lý xác định, là nội dung của",
        options: [
            "Trật tự an toàn xã hội",
            "Trật tự an ninh xã hội",
            "Trật tự an toàn quốc gia",
            "Trật tự an ninh quốc gia",
        ],
        answer: "Trật tự an toàn xã hội"
    },
    {
        question: "Một trong những nội dung giữ gìn trật tự an toàn xã hội là",
        options: [
            "Giữ gìn trật tự công cộng",
            "Bảo đảm trật tự công cộng",
            "Bảo đảm an toàn lao động",
            "Giữ gìn an toàn vệ sinh thực phẩm",
        ],
        answer: "Giữ gìn trật tự công cộng"
    },
    {
        question: "Quan điểm của Đảng, Nhà nước ta trong bảo vệ an ninh quốc gia, giữ gìn trật tự an toàn xã hội là phải tăng cường",
        options: [
            "Hiệu lực quản lý của Nhà nước",
            "Hiệu quả quản lý của các tổ chức",
            "Kiểm tra, xử phạt của lực lượng công an",
            "Hiệu lực quản lý của toàn xã hội",
        ],
        answer: "Hiệu lực quản lý của Nhà nước"
    },
    {
        question: "“ Đảng lãnh đạo trực tiếp về mọi mặt là nhân tố quyết định thắng lợi của cuộc đấu tranh bảo vệ an ninh quốc gia và giữ gìn trật tự an toàn xã hội” là một trong những nội dung thể hiện",
        options: [
            "Quan điểm bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội",
            "Nhiệm vụ bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội",
            "Tính chất bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội",
            "Biện pháp bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội",
        ],
        answer: "Quan điểm bảo vệ an ninh quốc gia, giữ gìn trật tự, an toàn xã hội"
    },
    {
        question: "Một trong những nội dung thuộc vai trò quản lý của Nhà nước trong sự nghiệp bảo vệ an ninh quốc gia, giữ gìn trật tự an toàn xã hội là thường xuyên",
        options: [
            "Quan tâm xây dựng các cơ quan chuyên trách",
            "Củng cố kiện toàn các tổ chức quần chúng",
            "Xây dựng củng cố các tổ chức an ninh trật tự cơ sở",
            "Làm tốt công tác tuyên truyền, giáo dục ở cơ sở",
        ],
        answer: "Quan tâm xây dựng các cơ quan chuyên trách"
    },
    {
        question: "Đối tượng xâm phạm trật tự an toàn xã hội khác biệt cơ bản với đối tượng xâm phạm an ninh quốc gia là",
        options: [
            "Không có mục đích chống lại Đảng, Nhà nước",
            "Chống phá Đảng, Nhà nước và chế độ xã hội",
            "Hoạt động thành băng nhóm có tổ chức",
            "Phạm tội về an ninh quốc gia, trật tự xã hội",
        ],
        answer: "Không có mục đích chống lại Đảng, Nhà nước"
    },
];

// Function to generate the full 200 question quiz
function generateFullQuiz(baseQuestions, totalQuestions) {
    let fullQuiz = [];
    for (let i = 0; i < totalQuestions; i++) {
        fullQuiz.push(baseQuestions[i % baseQuestions.length]);
    }
    // Shuffle the generated quiz to make it less repetitive
    return fullQuiz.sort(() => Math.random() - 0.5);
}

const questions = generateFullQuiz(uniqueQuestions, 200);

// --- DOM Elements ---
const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");
const questionCounter = document.getElementById("question-counter");
const percentageScoreEl = document.getElementById("percentage-score");
const rawScoreEl = document.getElementById("raw-score");

// --- Quiz State ---
let currentQuestionIndex = 0;
let score = 0;

// --- Functions ---

/**
 * Starts the quiz or restarts it.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextBtn.classList.add("hidden");
    resultsContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");
    showQuestion();
}

/**
 * Displays the current question and options.
 */
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    questionCounter.textContent = `Question ${currentQuestionIndex + 1} / ${questions.length
        }`;

    // Create and display option buttons
    currentQuestion.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add(
            "option-btn",
            "w-full",
            "bg-white",
            "border-2",
            "border-slate-300",
            "rounded-lg",
            "p-4",
            "text-left",
            "hover:bg-slate-50",
            "hover:border-indigo-400"
        );
        button.addEventListener("click", () => selectAnswer(button, option));
        optionsContainer.appendChild(button);
    });
}

/**
 * Resets the state for the next question.
 */
function resetState() {
    // FIX: Remove the disabled class from the options container so the next set of options is clickable.
    optionsContainer.classList.remove("disabled-options");

    nextBtn.classList.add("hidden");
    while (optionsContainer.firstChild) {
        optionsContainer.removeChild(optionsContainer.firstChild);
    }
}

function selectAnswer(selectedButton, selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const correctOption = currentQuestion.answer;

    // Add a class to disable all options after one is selected
    optionsContainer.classList.add("disabled-options");

    // Check if the selected answer is correct
    if (selectedOption === correctOption) {
        score++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    // Highlight the correct answer
    Array.from(optionsContainer.children).forEach((button) => {
        if (button.textContent === correctOption) {
            if (!button.classList.contains("correct")) {
                button.classList.add("correct");
            }
        }
    });

    // Show the 'Next' button if there are more questions, otherwise show the results button
    if (questions.length > currentQuestionIndex + 1) {
        nextBtn.classList.remove("hidden");
    } else {
        // Use a small delay before showing results to allow user to see the feedback on the last question
        setTimeout(showResults, 1000);
    }
}

/**
 * Displays the final quiz results.
 */
function showResults() {
    quizContainer.classList.add("hidden");
    resultsContainer.classList.remove("hidden");

    const percentage = Math.round((score / questions.length) * 100);
    percentageScoreEl.textContent = `${percentage}%`;
    rawScoreEl.textContent = `You answered ${score} out of ${questions.length} questions correctly.`;
}

// --- Event Listeners ---
nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    showQuestion();
});

restartBtn.addEventListener("click", startQuiz);

// --- Initial Load ---
document.addEventListener("DOMContentLoaded", startQuiz);
