import InvitationForm from "@/components/InvitationForm/InvitationForm";

const InviteManagerPage = () => {
  return (
    <div>
      <InvitationForm
        className="max-w-5xl"
        title={"Invite Manager"}
        receiverName={"Manager Name (Optional)"}
      />
    </div>
  );
};

export default InviteManagerPage;
