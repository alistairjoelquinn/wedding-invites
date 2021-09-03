import Header from '@/components/Header';

const Page: React.FC = ({ children }) => (
    <div>
        <Header />
        {children}
    </div>
);

export default Page;
