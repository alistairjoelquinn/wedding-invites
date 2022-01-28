import type { NextPage } from 'next';

const Admin: NextPage = () => {
    const getAdminGuestList = async () => {
        const res = await fetch('/api/admin-guest-list');
        const data = await res.json();
        console.log('data: ', data);
    };

    return (
        <div>
            <p>Admin page</p>
            <button type="button" onClick={getAdminGuestList}>
                Get Guest List
            </button>
        </div>
    );
};

export default Admin;
