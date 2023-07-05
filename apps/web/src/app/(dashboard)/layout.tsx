import Content from "@/partials/Content";
import ContentWrapper from "@/partials/ContentWrapper";
import Header from "@/partials/Header";
import Layout from "@/partials/Layout";
import Sidebar from "@/partials/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout>
      <Header />
      <ContentWrapper>
        <Sidebar />
        <Content>{children}</Content>
      </ContentWrapper>
    </Layout>
  );
}
