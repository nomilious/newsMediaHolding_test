import { Layout, Menu } from 'antd';
import { motion } from 'framer-motion';
import cls from "./NavBar.module.scss";

export function NavBar() {
    return (
        <Layout.Header style={{ position: 'sticky', top: 0, zIndex: 100 }}>
            <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className={cls.logo}>NewsFeed</div>
            </motion.div>
        </Layout.Header>
    );
}
