import { ResponsiveDialog } from "@/components/responsiv-dialog";

import { MeetingForm } from "./meeting-form";
import { useRouter } from "next/navigation";
import { FaLeaf } from "react-icons/fa";

interface NewMeetingDialogProps {
    open: boolean;
    onOpenChange: (opem: boolean) => void;
};

export const NewMeetingDialog = ({
    open,
    onOpenChange,
}: NewMeetingDialogProps) => {
    const router = useRouter();


    return (
        <ResponsiveDialog
        title="New Meeting"
        description="Create a new Meeting"
        open={open}
        onOpenChange={onOpenChange}
        >
          <MeetingForm
            onSuccess={(id) => {
                onOpenChange(false);
                router.push(`/meetings/${id}`);
            }}
            onCancel={() => onOpenChange}
          />
        </ResponsiveDialog>
    )
}