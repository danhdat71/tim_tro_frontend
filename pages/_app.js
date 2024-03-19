import Layout from "@/layouts/layout";
import { usePathname } from "next/navigation";
import '../styles/reset.css';
import '../styles/components-style.css';
import '../styles/form-element.css';
import { ReduxProvider } from "@/redux/provider";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();

  function checkDisplay()
  {
    if (pathname.startsWith('/admin')) {
      // return (
      //   <AdminLayout>
      //     <Component {...pageProps} />
      //   </AdminLayout>
      // )
    } else {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
  }

  return (
    <ReduxProvider>
      {checkDisplay()}
    </ReduxProvider>
  );
}
