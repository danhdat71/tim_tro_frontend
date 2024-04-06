import BestAreaBox from "@/components/boxs/best-area-box/best-area-box";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import FilterForm from "@/components/filter-form/filter-form";
import FinderGuide from "@/components/finder-guide/finder-guide";
import ProductList from "@/components/product-list/product-list";
import Head from "next/head";
import cl from './index.module.css';
import TitleLeftBig from "@/components/titles/title-left-big/title-left-big";

const breadcrumbItems = [
  {label: 'Trang chủ', href:'/'},
  {label: 'Danh mục', href:'/'},
  {label: 'Tất cả', href:'/'},
];

const areas = [
  {label: 'Hồ Chí Minh', href:'/', total:244},
  {label: 'Cần Thơ', href:'/', total:653},
  {label: 'Long An', href:'/', total:225},
  {label: 'Tiền Giang', href:'/', total:1043},
  {label: 'Đồng Nai', href:'/', total:3222},
  {label: 'Đà Nẵng', href:'/', total:1234},
  {label: 'Huế', href:'/', total:5533},
  {label: 'Hà Nội', href:'/', total:3456},
  {label: 'Quảng Ninh', href:'/', total:1},
];

const prices = [
  {label: 'Dưới 1 triệu', href:'/', total:244},
  {label: 'Từ 1 - 2 triệu', href:'/', total:653},
  {label: 'Từ 2 - 4 triệu', href:'/', total:225},
  {label: 'Từ 4 - 6 triệu', href:'/', total:1043},
  {label: 'Từ 6 - 12 triệu', href:'/', total:3222},
  {label: 'Trên 12 triệu', href:'/', total:1234},
];

export default function Home() {
  return (
    <>
      <FilterForm></FilterForm>
      <Breadcrumb
        items={breadcrumbItems}
      />
      <TitleLeftBig
        style={{fontSize:'22px',paddingBottom:'10px',paddingTop:'10px', fontWeight:'700'}}
        title="Cho thuê phòng trọ cập nhật tháng 4 - 2024"
      />
      <div className={cl.best_area}>
        <BestAreaBox items={areas} title="Các khu vực nổi bật"></BestAreaBox>
      </div>
      <div className={cl.best_area}>
        <BestAreaBox items={prices} title="Tìm theo giá"></BestAreaBox>
      </div>
      <div className='wrap-layout-main'>
        <ProductList></ProductList>
      </div>
      <FinderGuide></FinderGuide>
    </>
  );
}
