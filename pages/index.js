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
import { useAppSelector } from '@/redux/store';

const breadcrumbItems = [
  { label: 'Trang chủ', href: '/' },
  { label: 'Tất cả', href: '/' },
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
    prices = '',
    price_range = '',
    used_type = '',
    bed_rooms = '',
    is_allow_pet = '',
  } = context.query;

  // Get provinces with count products
  let provincesCount = await fetch(`${process.env.API}/provinces?limit=10`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  provincesCount = await provincesCount.json();
  data.provincesCount = provincesCount.data;

  // Get provionces with districts count products
  let provincesDistrictCount = await fetch(`${process.env.API}/provinces-with-districts`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  provincesDistrictCount = await provincesDistrictCount.json();
  data.provincesDistrictCount = provincesDistrictCount.data;

  // Get products
  let products = await fetch(`${process.env.API}/products?page=${page}&order_by=${order_by}&province_id=${province_id}&district_id=${district_id}&ward_id=${ward_id}&keyword=${keyword}&acreage=${acreage}&price_range=${prices}&price_range=${price_range}&used_type=${used_type}&bed_rooms=${bed_rooms}&is_allow_pet=${is_allow_pet}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  products = await products.json();
  data.products = products.data;

  // Get prices range
  let pricesRange = await fetch(`${process.env.API}/prices-with-count`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  pricesRange = await pricesRange.json();
  data.pricesRange = pricesRange.data;

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

  const authUserData = useAppSelector(function(state){
    return state.authUserReducer.user.data;
  });

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
          items={data.pricesRange}
          title="Tìm theo giá"
          onClick={(value)=>{
            handleChangeRouterParam(router, 'price_range', value);
          }}
        ></BestAreaBox>
      </div>
      <div className='wrap-layout-main'>
        <ProductList
          data={data.products}
          isLogin={authUserData.app_id ? true : false}
        ></ProductList>
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
