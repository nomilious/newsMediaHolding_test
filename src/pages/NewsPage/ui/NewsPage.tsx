import { Layout } from 'antd';
import NewsFeed from 'widgets/NewsFeed/ui/NewsFeed';

export default function NewsPage() {
    return (
        <Layout style={{ minHeight: '100vh', padding: 24 }}>
            <Layout.Content style={{ maxWidth: 800, margin: '0 auto' }}>
                <NewsFeed/>
            </Layout.Content>
        </Layout>
    );
}
