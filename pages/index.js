import BestAreaBox from "@/components/boxs/best-area-box/best-area-box";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import FilterForm from "@/components/filter-form/filter-form";
import ProductList from "@/components/product-list/product-list";
import cl from './index.module.css';
import TitleLeftBig from "@/components/titles/title-left-big/title-left-big";
import KeywordBox from "@/components/boxs/keyword-box/keyword-box";

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
  const accessToken = context.req.headers.cookie
    ? context.req.headers.cookie
      .split('; ')
      .find((row) => row.startsWith('access_token='))
      .split('=')[1]
    : null;

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
  let products = await fetch(`http://localhost/api/products`, {
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
        ></BestAreaBox>
      </div>
      <div className={cl.best_area}>
        <BestAreaBox items={prices} title="Tìm theo giá"></BestAreaBox>
      </div>
      <div className='wrap-layout-main'>
        <ProductList data={data.products}></ProductList>
      </div>
      <div className={cl.wrap_search_keyword}>
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[0]?.label}`}
          items={data?.provincesDistrictCount[0]?.districts}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[1]?.label}`}
          items={data?.provincesDistrictCount[1]?.districts}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[2]?.label}`}
          items={data?.provincesDistrictCount[2]?.districts}
        />
        <KeywordBox
          title={`Tìm trọ ${data.provincesDistrictCount[3]?.label}`}
          items={data?.provincesDistrictCount[3]?.districts}
        />
      </div>
    </>
  );
}
