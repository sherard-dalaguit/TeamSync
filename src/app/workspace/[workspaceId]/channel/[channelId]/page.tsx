"use client";

import {useChannelId} from "@/hooks/use-channel-id";
import {useGetChannel} from "@/features/channels/api/use-get-channel";
import {Loader, TriangleAlert} from "lucide-react";
import {Header} from "@/app/workspace/[workspaceId]/channel/[channelId]/header";
import {ChatInput} from "@/app/workspace/[workspaceId]/channel/[channelId]/chat-input";

const ChannelIdPage = () => {
	const channelId = useChannelId();

	const { data: channel, isLoading: channelLoading } = useGetChannel({ id: channelId });

	if (channelLoading) {
		return (
			<div className="h-full flex-1 flex items-center justify-center">
				<Loader className="size-5 text-muted-foreground animate-spin" />
			</div>
		)
	}

	if (!channel) {
		return (
			<div className="h-full flex-1 flex flex-col gap-y-2 items-center justify-center">
				<TriangleAlert className="size-5 text-muted-foreground" />
				<span className="text-sm text-muted-foreground">Channel not found</span>
			</div>
		)
	}

	return (
		<div className="flex flex-col h-full">
			<Header title={channel.name} />
			<div className="flex-1" />
			<ChatInput placeholder={`Message # ${channel.name}`}/>
		</div>
	);
};

export default ChannelIdPage;
