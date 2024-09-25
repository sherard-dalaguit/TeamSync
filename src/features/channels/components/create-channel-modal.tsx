import {Dialog, DialogContent, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {useCreateChannelModal} from "@/features/channels/store/use-create-channel-modal";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {useCreateChannel} from "@/features/channels/api/use-create-channel";
import {useWorkspaceId} from "@/hooks/use-workspace-id";
import {useRouter} from "next/navigation";
import {toast} from "sonner";

export const CreateChannelModal = () => {
	const router = useRouter();
	const workspaceId = useWorkspaceId();
	const [open, setOpen] = useCreateChannelModal();
	const [name, setName] = useState("");
	const { mutate, isPending } = useCreateChannel();

	const handleClose = () => {
		setName("");
		setOpen(false);
	}

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.replace(/\s+/g, "-").toLowerCase();
		setName(value);
	}

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		mutate(
			{ name, workspaceId },
			{
				onSuccess: (id) => {
					toast.success("Channel created successfully");
					router.push(`/workspace/${workspaceId}/channel/${id}`);
					handleClose();
				},
				onError: () => {
					toast.error("Failed to create channel");
				}
			}
		)
	}

	return (
		<Dialog open={open} onOpenChange={handleClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add a channel</DialogTitle>
				</DialogHeader>
				<form className="space-y-4" onSubmit={handleSubmit}>
					<Input
						value={name}
						onChange={handleChange}
						disabled={isPending}
						required
						autoFocus
						minLength={3}
						maxLength={80}
						placeholder="e.g. plan-budget"
					/>
					<div className="flex justify-end">
						<Button disabled={isPending}>
							Create
						</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}