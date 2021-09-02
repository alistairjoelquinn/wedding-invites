import Header from '@/components/Header';

interface PageProps {
    children: any;
}

const Page: React.FC<PageProps> = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

export default Page;
