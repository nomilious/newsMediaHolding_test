import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { Card, Space, Tag, Typography } from 'antd';
import { Post } from "../model/interface";

const { Paragraph } = Typography;

export function PostCard({ post }: { post: Post }) {
    const { likes, dislikes } = post.reactions;

    return (
        <Card style={{ marginBottom: 16 }}>
            <h3>{post.title}</h3>
            <Paragraph ellipsis={{ rows: 3 }}>{post.body}</Paragraph>

            <Space wrap>
                {post.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                ))}
                <Space>
                    <LikeOutlined/> {likes}
                    <DislikeOutlined/> {dislikes}
                </Space>
            </Space>
        </Card>
    );
}
