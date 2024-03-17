import BestAreaBox from "@/components/best-area-box/best-area-box";
import Breadcrumb from "@/components/breadcrumb/breadcrumb";
import FilterForm from "@/components/filter-form/filter-form";
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
    </>
  );
}
