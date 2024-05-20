import Layout from "@/layouts/layout";
import '../styles/reset.css';
import '../styles/components-style.css';
import '../styles/form-element.css';
import { ReduxProvider } from "@/redux/provider";
import { useRouter } from "next/router";
import NextNProgress from 'nextjs-progressbar';
import LayoutAdmin from "@/layouts/layout_admin";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  function checkDisplay()
  {
    if (router.pathname.startsWith('/admin')) {
      // Import admin css
      import('../styles/admin/adminlte.min.css');
      import('../styles/admin/OverlayScrollbars.min.css');

      return (
        <LayoutAdmin>
          <Component {...pageProps} />
        </LayoutAdmin>
      )
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
      <NextNProgress
        color="green"
        height={2}
        options={{ showSpinner: false }}
      />
      {checkDisplay()}
    </ReduxProvider>
  );
}
