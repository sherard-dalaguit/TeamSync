"use client"

import Toolbar from "@/app/workspace/[workspaceId]/toolbar";

interface WorkspaceIdLayout {
	children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceIdLayout) => {
	return (
		<div className="h-full">
			<Toolbar />
			{children}
		</div>
	);
};

export default WorkspaceLayout;
