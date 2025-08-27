import { ResponsiveDialog } from "@/components/responsiv-dialog";
import { AgentForm } from "./agent-form";
import { AgentGetOne } from "../../types";

interface UpdateAgentDialogProps {
    open: boolean;
    onOpenChange: (opem: boolean) => void;
    initialValue: AgentGetOne
};

export const UpdateAgentDialog = ({
    open,
    onOpenChange,
    initialValue,
}: UpdateAgentDialogProps) => {
    return (
        <ResponsiveDialog
        title="Edit Agent"
        description="Edit the Agent details"
        open={open}
        onOpenChange={onOpenChange}
        >
            <AgentForm 
            onSuccess={() => onOpenChange(false)}
            onCancel={() => onOpenChange(false)}
            initialValues={initialValue}
            />
        </ResponsiveDialog>
    )
}