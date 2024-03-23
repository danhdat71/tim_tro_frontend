import Layout from "@/layouts/layout";
import '../styles/reset.css';
import '../styles/components-style.css';
import '../styles/form-element.css';
import { ReduxProvider } from "@/redux/provider";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  function checkDisplay()
  {
    if (router.pathname.startsWith('/admin')) {
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
