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
import { useAppSelector } from '@/redux/store';
import HelperBox from "@/components/boxs/helper-box/helper-box";
import PublicCounter from "@/components/boxs/public-counter/public-counter";
import AdsBox1 from "@/components/boxs/ads-box-1/ads-box-1";
import Head from "next/head";

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
  let provincesCount = await fetch(`${process.env.API_SERVERSIDE}/provinces?limit=10`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  provincesCount = await provincesCount.json();
  data.provincesCount = provincesCount.data;

  // Get provionces with districts count products
  let provincesDistrictCount = await fetch(`${process.env.API_SERVERSIDE}/provinces-with-districts`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  provincesDistrictCount = await provincesDistrictCount.json();
  data.provincesDistrictCount = provincesDistrictCount.data;

  // Get products
  let priceRange = '';
  if (prices != '') {
    priceRange = prices;
  } else {
    priceRange = price_range;
  }
  let products = await fetch(`${process.env.API_SERVERSIDE}/products?page=${page}&order_by=${order_by}&province_id=${province_id}&district_id=${district_id}&ward_id=${ward_id}&keyword=${keyword}&acreage=${acreage}&price_range=${priceRange}&used_type=${used_type}&bed_rooms=${bed_rooms}&is_allow_pet=${is_allow_pet}`, {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    method: 'GET',
  });
  products = await products.json();
  data.products = products.data;

  // Get prices range
  let pricesRange = await fetch(`${process.env.API_SERVERSIDE}/prices-with-count`, {
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

  const authUserData = useAppSelector(function(state){
    return state.authUserReducer.user.data;
  });
  const adsData = useAppSelector(function(state){
    return state.adsReducer.adsData;
  });

  return (
    <>
      <Head>
        <title>{`Cho thuê phòng trọ cập nhật tháng ${data.currentMonth} - ${data.currentYear}`}</title>
        <meta name="keywords" content="thuê trọ" />
        <meta name="description" content={`Phòng trọ giá rẻ, chất lượng, uy tín, an toàn tại ${process.env.APP_NAME}`} />
        <meta property="og:description" content={`Phòng trọ giá rẻ, chất lượng, uy tín, an toàn tại ${process.env.APP_NAME}`} />
        <meta property="og:title" content={`Cho thuê phòng trọ giá rẻ tháng ${data.currentMonth} - ${data.currentYear}`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="vi_VN" />
        <meta property="og:site_name" content={`${process.env.APP_NAME} phòng trọ giá rẻ`} />
      </Head>
      <FilterForm></FilterForm>
      <PublicCounter></PublicCounter>
      <AdsBox1
        ads={adsData?.top_head}
      ></AdsBox1>
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
            handleChangeRouterParam(router, 'district_id', value)
          }}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[1]?.label}`}
          items={data?.provincesDistrictCount[1]?.districts}
          onClick={(value)=>{
            handleChangeRouterParam(router, 'district_id', value)
          }}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[2]?.label}`}
          items={data?.provincesDistrictCount[2]?.districts}
          onClick={(value)=>{
            handleChangeRouterParam(router, 'district_id', value)
          }}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[3]?.label}`}
          items={data?.provincesDistrictCount[3]?.districts}
          onClick={(value)=>{
            handleChangeRouterParam(router, 'district_id', value)
          }}
        />
      </div>
      <HelperBox></HelperBox>
    </>
  );
}
