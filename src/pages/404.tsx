import type { NextPage } from 'next';

const Custom404: NextPage = () => {
    console.log('404 page: ', 404);
    return (
        <div>
            <p>404 page</p>
        </div>
    );
};

export default Custom404;
