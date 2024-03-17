import BestAreaBox from "@/components/best-area-box/best-area-box";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import FilterForm from "@/components/filter-form/filter-form";
import FinderGuide from "@/components/finder-guide/finder-guide";
import ProductList from "@/components/product-list/product-list";
import Head from "next/head";

const breadcrumbItems = [
  {label: 'Trang chủ', href:'/'},
  {label: 'Danh mục', href:'/'},
  {label: 'Tất cả', href:'/'},
]

export default function Home() {
  return (
    <>
      <FilterForm></FilterForm>
      <Breadcrumb
        items={breadcrumbItems}
      />
      <BestAreaBox></BestAreaBox>
      <ProductList></ProductList>
      <FinderGuide></FinderGuide>
    </>
  );
}
