import { useCallback, useEffect, useRef } from 'react';

export function useInfiniteObserver(cb: () => void) {
    const ref = useRef<HTMLDivElement | null>(null);

    const handler = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            if (entries[0].isIntersecting) cb();
        },
        [cb],
    );

    useEffect(() => {
        const target = ref.current;
        if (!target) return;
        const obs = new IntersectionObserver(handler, { threshold: 1 });
        obs.observe(target);
        return () => obs.disconnect();
    }, [handler]);

    return ref;
}
