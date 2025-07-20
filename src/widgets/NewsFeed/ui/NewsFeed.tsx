import { Alert, List, Spin } from 'antd';
import { PostCard } from 'entities/PostCard';
import { getPosts, POST_LIMIT } from "entities/PostCard/model/service";
import { useInfiniteObserver } from 'features/infiniteScroll';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { useTypedSelector } from "shared/hooks/useTypedSelector";

export default function NewsFeed() {
    const dispatch = useAppDispatch();
    const { items, loading, hasMore, error } = useTypedSelector(state => state.posts);

    useEffect(() => {
        if (!items.length) dispatch(getPosts());
    }, [dispatch, items.length]);

    const lastRef = useInfiniteObserver(() => {
        if (!loading && hasMore) dispatch(getPosts());
    });

    if (error) return <Alert type="error" message={error}/>;

    return (
        <List
            dataSource={items}
            rowKey="id"
            renderItem={(item, i) => {
                const isLast = i === items.length - 1;
                return (
                    <motion.div
                        ref={isLast ? lastRef : undefined}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: (i % POST_LIMIT) * 0.1 }}
                    >
                        <PostCard post={item}/>
                    </motion.div>
                );
            }}
        >
            {loading && (
                <div style={{ textAlign: 'center', padding: 16 }}>
                    <Spin/>
                </div>
            )}
        </List>
    );
}
