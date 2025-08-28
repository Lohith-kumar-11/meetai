import { ResponsiveDialog } from "@/components/responsiv-dialog";

import { MeetingForm } from "./meeting-form";
import { MeetingGetOne } from "../../types";

interface UpdateMeetingDialogProps {
    open: boolean;
    onOpenChange: (opem: boolean) => void;
    initialValues: MeetingGetOne;
};

export const UpdateMeetingDialog = ({
    open,
    onOpenChange,
    initialValues,
}: UpdateMeetingDialogProps) => {


    return (
        <ResponsiveDialog
        title="Edit Meeting"
        description="Edit the Meeting details"
        open={open}
        onOpenChange={onOpenChange}
        >
          <MeetingForm
            onSuccess={() => {
                onOpenChange(false);
            }}
            onCancel={() => onOpenChange(false)}
            initialValues={initialValues}
          />
        </ResponsiveDialog>
    )
}