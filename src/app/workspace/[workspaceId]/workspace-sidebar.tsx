import {useCurrentMember} from "@/features/members/api/use-current-member";
import {useWorkspaceId} from "@/hooks/use-workspace-id";
import {useGetWorkspace} from "@/features/workspaces/api/use-get-workspace";
import {AlertTriangle, HashIcon, Loader, MessageSquareText, SendHorizonal} from "lucide-react";
import {WorkspaceHeader} from "@/app/workspace/[workspaceId]/workspace-header";
import {SidebarItem} from "@/app/workspace/[workspaceId]/sidebar-item";
import {useGetChannels} from "@/features/channels/api/use-get-channels";
import React from "react";
import {WorkspaceSection} from "@/app/workspace/[workspaceId]/workspace-section";
import {useGetMembers} from "@/features/members/api/use-get-members";
import {UserItem} from "@/app/workspace/[workspaceId]/user-item";
import {useCreateChannelModal} from "@/features/channels/store/use-create-channel-modal";
import {useChannelId} from "@/hooks/use-channel-id";
import {useMemberId} from "@/hooks/use-member-id";

export const WorkspaceSidebar = () => {
	const workspaceId = useWorkspaceId();
	const channelId = useChannelId();
	const memberId = useMemberId();

	const [_open, setOpen] = useCreateChannelModal();

	const { data: channels, isLoading: channelsLoading} = useGetChannels({ workspaceId });
	const { data: member, isLoading: memberLoading} = useCurrentMember({ workspaceId});
	const { data: workspace, isLoading: workspaceLoading} = useGetWorkspace({ id: workspaceId});
	const { data: members, isLoading: membersLoading } = useGetMembers({ workspaceId });

	if (workspaceLoading || memberLoading) {
		return (
			<div className="flex flex-col bg-[#333333] h-full items-center justify-center">
				<Loader className="size-5 animate-spin text-white" />
			</div>
		)
	}

	if (!workspace || !member) {
		return (
			<div className="flex flex-col gap-y-2 bg-[#333333] h-full items-center justify-center">
				<AlertTriangle className="size-5 text-white" />
				<p className="text-white text-sm">
					Workspace not found
				</p>
			</div>
		)
	}

	return (
		<div className="flex flex-col bg-[#333333] h-full">
			<WorkspaceHeader workspace={workspace} isAdmin={member.role === "admin"} />

			<div className="flex flex-col px-2 mt-3">
				<SidebarItem
					label="Threads"
					icon={MessageSquareText}
					id="threads"
				/>
				<SidebarItem
					label="Drafts & Sent"
					icon={SendHorizonal}
					id="drafts"
				/>
			</div>
			<WorkspaceSection
				label="Channels"
				hint="New channel"
				onNew={member.role === "admin" ? () => setOpen(true) : undefined}
			>
				{channels?.map((item) => (
					<SidebarItem
						key={item._id}
						label={item.name}
						icon={HashIcon}
						id={item._id}
						variant={channelId === item._id ? "active" : "default"}
					/>
				))}
			</WorkspaceSection>
			<WorkspaceSection
				label="Direct Messages"
				hint="New direct message"
				onNew={() => {}}
			>
				{members?.map((item) => (
					<UserItem
						key={item._id}
						id={item._id}
						label={item.user.name}
						image={item.user.image}
						variant={item._id === memberId ? "active" : "default"}
					/>
				))}
			</WorkspaceSection>
		</div>
	)
};