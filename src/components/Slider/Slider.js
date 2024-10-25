import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "./Slider.scss";
import TextShadow from "../../components/TextShadow/TextShadow";

const data = [
  {
    titleStyles: {
      text: "Lý do chọn gia sư SeiSei",
      tColor: "#fff",
      fontSize: "40px",
      fontWeight: "900",
      sColor: "#FF99BA",
    },
    content: [
      "Mức học phí phù hợp",
      "Gia sư được tuyển chọn, xác minh",
      "Học viên được học thử",
      "Cam kết tư vấn - hỗ trợ 24/7",
    ],
  },
  {
    titleStyles: {
      text: "Bạn đang mong muốn",
      tColor: "#0D6AA6",
      fontSize: "40px",
      fontWeight: "900",
      sColor: "#FFDA5F",
    },
    content: [
      "Cải thiện điểm số",
      "Tìm được gia sư giỏi",
      "Học 1:1 với gia sư kinh nghiệm",
      "Có giờ học linh hoạt",
    ],
  },
  {
    titleStyles: {
      text: "Lý do chọn gia sư SeiSei",
      tColor: "#0D6AA6",
      fontSize: "40px",
      fontWeight: "900",
      sColor: "#BBD2E3",
    },
    content: [
      "Phương pháp dạy học hiệu quả",
      "Đa dạng lớp học",
      "Đảm bảo chất lượng",
      "Hỗ trợ học online",
    ],
  },
];

export const SliderItem = ({ data }) => {
  return (
    <div className="itemContainer">
      <TextShadow
        text={data.titleStyles.text}
        tColor={data.titleStyles.tColor}
        fontSize={data.titleStyles.fontSize}
        fontWeight={data.titleStyles.fontWeight}
        sColor={data.titleStyles.sColor}
      />
      <ul className="itemContent">
        {data.content.map((value, index) => {
          return (
            <li className="content-item" key={index}>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const Slider = () => {
  return (
    <Swiper
      className="slideContainer"
      modules={[Navigation, Pagination, Autoplay]}
      navigation={true}
      autoplay={true}
      pagination={{
        clickable: true,
      }}
      loop={true}
    >
      {data.map((value, index) => {
        return (
          <SwiperSlide className="slideItem">
            <SliderItem data={value} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Slider;
