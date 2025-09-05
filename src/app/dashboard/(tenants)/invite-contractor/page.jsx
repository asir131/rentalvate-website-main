import InvitationForm from '@/components/InvitationForm/InvitationForm';
import React from 'react';

const page = () => {
    return (
        <div>
            <InvitationForm className="max-w-5xl" title={"Invite Contractor"} receiverName={"Contactor Name (Optional)"}/>
        </div>
    );
};

export default page;