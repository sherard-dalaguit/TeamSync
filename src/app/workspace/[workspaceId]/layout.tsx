"use client"

import Toolbar from "@/app/workspace/[workspaceId]/toolbar";
import {Sidebar} from "@/app/workspace/[workspaceId]/sidebar";
import React from "react";

interface WorkspaceIdLayout {
	children: React.ReactNode;
}

const WorkspaceLayout = ({ children }: WorkspaceIdLayout) => {
	return (
		<div className="h-full">
			<Toolbar />
			<div className="flex h-[calc(100vh-40px)]">
				<Sidebar />
				{children}
			</div>
		</div>
	);
};

export default WorkspaceLayout;
