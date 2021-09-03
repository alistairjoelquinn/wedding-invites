import Header from '@/components/Header';

interface PageProps {
    children: any;
}

const Page = ({ children }: PageProps) => (
    <div>
        <Header />
        {children}
    </div>
);

export default Page;
