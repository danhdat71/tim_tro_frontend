import BestAreaBox from "@/components/boxs/best-area-box/best-area-box";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import FilterForm from "@/components/filter-form/filter-form";
import ProductList from "@/components/product-list/product-list";
import cl from './index.module.css';
import TitleLeftBig from "@/components/titles/title-left-big/title-left-big";
import KeywordBox from "@/components/boxs/keyword-box/keyword-box";
import { getAccessTokenByContext } from "@/helpers/http-requests/cookie";
import { useRouter } from "next/router";
import { handleChangeRouterParam } from "@/helpers/routerHelper";
import { useDispatch } from "react-redux";
import { resetAllAddress } from "@/redux/features/filter_box/address_filter_box";

const breadcrumbItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Tất cả', href: '/' },
];

const prices = [
  { label: 'Dưới 1 triệu', href: '/', products_count: 244 },
  { label: 'Từ 1 - 2 triệu', href: '/', products_count: 653 },
  { label: 'Từ 2 - 4 triệu', href: '/', products_count: 225 },
  { label: 'Từ 4 - 6 triệu', href: '/', products_count: 1043 },
  { label: 'Từ 6 - 12 triệu', href: '/', products_count: 3222 },
  { label: 'Trên 12 triệu', href: '/', products_count: 1234 },
];

export async function getServerSideProps(context) {
  let data = {};
  let accessToken = getAccessTokenByContext(context);
  let {
    page = 1,
    order_by = 'posted_at|desc',
    province_id = '',
    district_id = '',
    ward_id = '',
    keyword = '',
    acreage = '',
  } = context.query;

  // Get provinces with count products
  let provincesCount = await fetch(`http://localhost/api/provinces?limit=10`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  provincesCount = await provincesCount.json();
  data.provincesCount = provincesCount.data;

  // Get provionces with districts count products
  let provincesDistrictCount = await fetch(`http://localhost/api/provinces-with-districts`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  provincesDistrictCount = await provincesDistrictCount.json();
  data.provincesDistrictCount = provincesDistrictCount.data;

  // Get products
  let products = await fetch(`http://localhost/api/products?page=${page}&order_by=${order_by}&province_id=${province_id}&district_id=${district_id}&ward_id=${ward_id}&keyword=${keyword}&acreage=${acreage}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  products = await products.json();
  data.products = products.data;

  // Get current month
  let date = new Date();
  data.currentMonth = date.getMonth() + 1;
  data.currentYear = date.getFullYear();

  return {
    props: { data },
  }
}

export default function Home({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <FilterForm></FilterForm>
      <Breadcrumb
        items={breadcrumbItems}
      />
      <TitleLeftBig
        style={{ fontSize: '22px', paddingBottom: '10px', paddingTop: '10px', fontWeight: '700' }}
        title={`Cho thuê phòng trọ cập nhật tháng ${data.currentMonth} - ${data.currentYear}`}
      />
      <div className={cl.best_area}>
        <BestAreaBox
          items={data?.provincesCount}
          title="Các khu vực nổi bật"
          onClick={(value)=>{
            dispatch(resetAllAddress());
            handleChangeRouterParam(router, 'province_id', value);
          }}
        ></BestAreaBox>
      </div>
      <div className={cl.best_area}>
        <BestAreaBox
          items={prices}
          title="Tìm theo giá"
        ></BestAreaBox>
      </div>
      <div className='wrap-layout-main'>
        <ProductList data={data.products}></ProductList>
      </div>
      <div className={cl.wrap_search_keyword}>
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[0]?.label}`}
          items={data?.provincesDistrictCount[0]?.districts}
          onClick={(value)=>{
            dispatch(resetAllAddress());
            handleChangeRouterParam(router, 'district_id', value)
          }}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[1]?.label}`}
          items={data?.provincesDistrictCount[1]?.districts}
          onClick={(value)=>{
            dispatch(resetAllAddress());
            handleChangeRouterParam(router, 'district_id', value)
          }}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[2]?.label}`}
          items={data?.provincesDistrictCount[2]?.districts}
          onClick={(value)=>{
            dispatch(resetAllAddress());
            handleChangeRouterParam(router, 'district_id', value)
          }}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[3]?.label}`}
          items={data?.provincesDistrictCount[3]?.districts}
          onClick={(value)=>{
            dispatch(resetAllAddress());
            handleChangeRouterParam(router, 'district_id', value)
          }}
        />
      </div>
    </>
  );
}
