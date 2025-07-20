import { Layout, Typography } from 'antd';
import { motion } from 'framer-motion';

const { Footer: AntFooter } = Layout;
const { Text, Link } = Typography;

export function Footer() {
    return (
        <AntFooter style={{ textAlign: 'center', background: '#F0F2F5' }}>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <Text>© {new Date().getFullYear()} Белик Эдуард </Text>
                <Link href="https://github.com/nomilious/newsMediaHolding_test" target="_blank">
                    GitHub
                </Link>
            </motion.div>
        </AntFooter>
    );
}
