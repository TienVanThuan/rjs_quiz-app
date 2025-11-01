import React from "react";
import { useState } from "react";

const quizData = [
  {
    id: 1,
    questionText: "Thủ đô của Úc là thành phố nào?",
    options: ["Sydney", "Canberra", "Melbourne", "Perth"],
    correctAnswerIndex: 1,
    explanation:
      "Canberra được chọn làm thủ đô của Úc như một sự thỏa hiệp giữa hai thành phố đối thủ là Sydney và Melbourne.",
  },
  {
    id: 2,
    questionText: "Trong hóa học, nguyên tố có ký hiệu 'O' là gì?",
    options: ["Vàng (Gold)", "Ôxy (Oxygen)", "Osmi (Osmium)", "Ozon (Ozone)"],
    correctAnswerIndex: 1,
    explanation:
      "Ký hiệu 'O' là viết tắt của Ôxy, một nguyên tố hóa học cần thiết cho sự sống.",
  },
  {
    id: 3,
    questionText: "Ai là tác giả của vở kịch 'Romeo và Juliet'?",
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Lord Byron",
    ],
    correctAnswerIndex: 2,
    explanation:
      "William Shakespeare, nhà thơ và nhà viết kịch vĩ đại người Anh, là tác giả của bi kịch lãng mạn này.",
  },
  {
    id: 4,
    questionText: "Loại động vật nào là động vật có vú biết bay duy nhất?",
    options: [
      "Đại bàng",
      "Chim cánh cụt",
      "Dơi",
      "Chuột túi bay (Flying Squirrel)",
    ],
    correctAnswerIndex: 2,
    explanation: "Dơi là động vật có vú duy nhất có khả năng bay lượn thực sự.",
  },
  {
    id: 5,
    questionText:
      "Môn thể thao nào sử dụng các thuật ngữ như 'birdie', 'eagle' và 'bogey'?",
    options: [
      "Bóng rổ (Basketball)",
      "Golf",
      "Bóng bầu dục (Rugby)",
      "Quần vợt (Tennis)",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Đây là các thuật ngữ được sử dụng trong Golf để chỉ số gậy chơi thấp hơn hoặc cao hơn số gậy tiêu chuẩn (par) trên một lỗ.",
  },
  {
    id: 6,
    questionText: "Tháp Eiffel nằm ở thành phố nào?",
    options: ["London", "Paris", "New York", "Rome"],
    correctAnswerIndex: 1,
    explanation:
      "Tháp Eiffel là một biểu tượng kiến trúc nổi tiếng ở Paris, thủ đô của Pháp.",
  },
  {
    id: 7,
    questionText:
      "Phân số thập phân 0.25 có thể được viết dưới dạng phân số tối giản là gì?",
    options: ["1/2", "1/4", "1/5", "2/5"],
    correctAnswerIndex: 1,
    explanation:
      "Phân số 1/4 có giá trị bằng 0.25, và là dạng tối giản của 25/100.",
  },
  {
    id: 8,
    questionText:
      "Hồ nước ngọt lớn nhất thế giới (tính theo diện tích bề mặt) là hồ nào?",
    options: [
      "Hồ Victoria",
      "Hồ Baikal",
      "Hồ Superior (Thượng)",
      "Hồ Michigan",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Hồ Superior nằm ở Bắc Mỹ, là hồ nước ngọt lớn nhất thế giới tính theo diện tích bề mặt.",
  },
  {
    id: 9,
    questionText: "Ai là người được mệnh danh là 'Vua nhạc Pop'?",
    options: ["Elvis Presley", "Prince", "Michael Jackson", "Madonna"],
    correctAnswerIndex: 2,
    explanation:
      "Michael Jackson là một trong những nghệ sĩ nổi tiếng và có ảnh hưởng nhất mọi thời đại, được gọi là 'Vua nhạc Pop'.",
  },
  {
    id: 10,
    questionText:
      "Đơn vị cơ bản của năng lượng trong Hệ thống Đơn vị Quốc tế (SI) là gì?",
    options: ["Watt (W)", "Joule (J)", "Volt (V)", "Newton (N)"],
    correctAnswerIndex: 1,
    explanation: "Joule là đơn vị đo năng lượng (hoặc công) trong hệ SI.",
  },
  {
    id: 11,
    questionText: "Lục địa nào là lạnh nhất trên Trái Đất?",
    options: ["Bắc Mỹ", "Châu Á", "Châu Nam Cực (Antarctica)", "Châu Âu"],
    correctAnswerIndex: 2,
    explanation:
      "Châu Nam Cực là nơi có nhiệt độ thấp nhất được ghi nhận trên Trái Đất.",
  },
  {
    id: 12,
    questionText: "Công thức hóa học của nước là gì?",
    options: ["CO₂", "H₂O", "NaCl", "CH₄"],
    correctAnswerIndex: 1,
    explanation:
      "Nước được tạo thành từ hai nguyên tử Hydro và một nguyên tử Oxy.",
  },
  {
    id: 13,
    questionText: "Ai là người phát minh ra bóng đèn sợi đốt thực tế?",
    options: [
      "Nikola Tesla",
      "Alexander Graham Bell",
      "Thomas Edison",
      "James Watt",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Thomas Edison được ghi nhận là người đã phát minh ra bóng đèn sợi đốt có thể thương mại hóa và sử dụng rộng rãi.",
  },
  {
    id: 14,
    questionText:
      "Bộ phim nào đã giành giải Oscar cho 'Phim hay nhất' năm 1997 (tại lễ trao giải năm 1998)?",
    options: [
      "Forrest Gump",
      "Titanic",
      "Saving Private Ryan",
      "Schindler's List",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Bộ phim 'Titanic' của đạo diễn James Cameron đã càn quét các giải thưởng, giành 11 giải Oscar, bao gồm 'Phim hay nhất'.",
  },
  {
    id: 15,
    questionText:
      "Cơ quan nào trong cơ thể con người chịu trách nhiệm bơm máu?",
    options: ["Phổi", "Gan", "Dạ dày", "Tim"],
    correctAnswerIndex: 3,
    explanation:
      "Tim là cơ quan chính của hệ tuần hoàn, hoạt động như một máy bơm để đưa máu đi khắp cơ thể.",
  },
  {
    id: 16,
    questionText:
      "Ngôn ngữ được nói nhiều nhất trên thế giới (theo số lượng người bản xứ) là gì?",
    options: [
      "Tiếng Tây Ban Nha",
      "Tiếng Anh",
      "Tiếng Quan Thoại (Mandarin Chinese)",
      "Tiếng Hindi",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Với dân số Trung Quốc đông đảo, Tiếng Quan Thoại là ngôn ngữ có số lượng người bản xứ lớn nhất thế giới.",
  },
  {
    id: 17,
    questionText: "Tốc độ ánh sáng trong chân không là bao nhiêu (xấp xỉ)?",
    options: ["3,000 km/s", "30,000 km/s", "300,000 km/s", "3,000,000 km/s"],
    correctAnswerIndex: 2,
    explanation:
      "Tốc độ ánh sáng trong chân không xấp xỉ 300,000 km/s (299,792,458 m/s).",
  },
  {
    id: 18,
    questionText:
      "Trong hệ mặt trời, hành tinh nào có các vành đai nổi bật nhất?",
    options: [
      "Mộc Tinh (Jupiter)",
      "Sao Thổ (Saturn)",
      "Sao Thiên Vương (Uranus)",
      "Sao Hải Vương (Neptune)",
    ],
    correctAnswerIndex: 1,
    explanation:
      "Sao Thổ nổi tiếng với hệ thống vành đai băng đá lớn, rõ ràng và phức tạp nhất.",
  },
  {
    id: 19,
    questionText:
      "Sự kiện nào đánh dấu sự kết thúc của Thế chiến I vào năm 1918?",
    options: [
      "Hiệp ước Versailles",
      "Đức xâm lược Ba Lan",
      "Hiệp định đình chiến Compiègne",
      "Trận Trân Châu Cảng",
    ],
    correctAnswerIndex: 2,
    explanation:
      "Hiệp định đình chiến Compiègne được ký vào ngày 11 tháng 11 năm 1918, chấm dứt chiến sự trên Mặt trận phía Tây.",
  },
  {
    id: 20,
    questionText: "Tính giá trị của biểu thức: 5 + (10 - 2) × 3",
    options: ["24", "29", "39", "19"],
    correctAnswerIndex: 1,
    explanation: "Thực hiện phép tính theo thứ tự: 5 + (8) × 3 = 5 + 24 = 29.",
  },
];

const Quiz = () => {
  const [optionSelected, setOptionSelected] = useState("");

  const [userAnswers, setUserAnswers] = useState(
    Array.from({ length: quizData.length })
  );

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleSelectedOption = (option, index) => {
    setOptionSelected(index);

    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = index;
    setUserAnswers(newUserAnswers);

    console.log(index);
    console.log(!!optionSelected && optionSelected !== option);
  };

  const next = () => {
    setCurrentQuestion((prev) => prev + 1);
  };
  const previous = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h2>Cau {currentQuestion + 1}</h2>
      <p className="question">{quizData[currentQuestion].questionText}</p>

      {quizData[currentQuestion].options.map((option, index) => (
        <button
          key={option}
          className={`option ${optionSelected === index ? "selected" : ""}`}
          // disabled={!!optionSelected && optionSelected !== option}
          value={index}
          onClick={() => handleSelectedOption(option, index)}
        >
          {option}
        </button>
      ))}

      {optionSelected === quizData[currentQuestion].correctAnswerIndex - 1 ? (
        <p className="correct-answer">Cau tra loi cua ban chinh xac</p>
      ) : (
        <p className="incorrect-answer">Cau tra loi cua ban chua chinh xac</p>
      )}

      <div className="nav-buttons">
        <button onClick={previous}>Quay lai</button>
        <button onClick={next}>Ke tiep</button>
      </div>
    </div>
  );
};

export default Quiz;
