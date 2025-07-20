import { Layout } from 'antd';
import { Footer } from "widgets/Footer";
import { NavBar } from "widgets/NavBar";
import NewsFeed from 'widgets/NewsFeed/ui/NewsFeed';

export default function NewsPage() {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <NavBar/>
            <Layout.Content style={{ maxWidth: 800, margin: '0 auto' }}>
                <NewsFeed/>
            </Layout.Content>
            <Footer/>
        </Layout>
    );
}
