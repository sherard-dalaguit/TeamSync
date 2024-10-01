"use client"

import Toolbar from "@/app/workspace/[workspaceId]/toolbar";
import {Sidebar} from "@/app/workspace/[workspaceId]/sidebar";
import React from "react";
import {
	ResizableHandle,
	ResizablePanel,
	ResizablePanelGroup
} from "@/components/ui/resizable";
import {WorkspaceSidebar} from "@/app/workspace/[workspaceId]/workspace-sidebar";
import {usePanel} from "@/hooks/use-panel";
import {Loader} from "lucide-react";
import {Id} from "../../../../convex/_generated/dataModel";
import {Thread} from "@/features/messages/components/thread";
import {Profile} from "@/features/members/components/profile";

interface WorkspaceIdLayout {
	children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceIdLayout) => {
	const { parentMessageId, profileMemberId, onClose } = usePanel();

	const showPanel = !!parentMessageId || !!profileMemberId;

	return (
		<div className="h-full">
			<Toolbar />
			<div className="flex h-[calc(100vh-40px)]">
				<Sidebar />

				<ResizablePanelGroup direction="horizontal" autoSaveId="sherard-workspace-layout">
					<ResizablePanel
						defaultSize={20}
						minSize={11}
						className="bg-[#2B2B2B]"
					>
						<WorkspaceSidebar />
					</ResizablePanel>
					<ResizableHandle withHandle />
					<ResizablePanel minSize={20} defaultSize={80}>
						{children}
					</ResizablePanel>
					{showPanel && (
						<>
							<ResizableHandle withHandle />
							<ResizablePanel minSize={20} defaultSize={29}>
								{parentMessageId ? (
									<Thread
										messageId={parentMessageId as Id<"messages">}
										onClose={onClose}
									/>
								) : profileMemberId ? (
									<Profile
										memberId={profileMemberId as Id<"members">}
										onClose={onClose}
									/>
									) : (
									<div className="flex h-full items-center justify-center">
										<Loader className="size-5 animate-spin text-muted-foreground"/>
									</div>
								)}
							</ResizablePanel>
						</>
					)}
				</ResizablePanelGroup>
			</div>
		</div>
	);
};

export default WorkspaceLayout;
