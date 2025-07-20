import { Alert, List, Spin } from 'antd';
import { PostCard } from 'entities/PostCard';
import { getPosts } from "entities/PostCard/model/service";
import { useInfiniteObserver } from 'features/infiniteScroll';
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
            renderItem={(item, i) => (
                <div ref={i === items.length - 1 ? lastRef : undefined}>
                    <PostCard post={item}/>
                </div>
            )}
        >
            {loading && (
                <div style={{ textAlign: 'center', padding: 16 }}>
                    <Spin/>
                </div>
            )}
        </List>
    );
}
