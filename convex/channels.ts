import {mutation, query} from "./_generated/server";
import {auth} from "./auth";
import {v} from "convex/values";

export const create = mutation({
	args: {
		name: v.string(),
		workspaceId: v.id("workspaces")
	},
	handler: async (ctx, args) => {
		const userId = await auth.getUserId(ctx);

		if (!userId) {
			throw Error("Unauthorized")
		}

		const member = await ctx.db
			.query("members")
			.withIndex("by_workspace_id_user_id", (q) => q.eq("workspaceId", args.workspaceId).eq("userId", userId))
			.unique();

		if (!member || member.role !== "admin") {
			throw new Error("Unauthorized")
		}

		const parsedName = args.name.replace(/\s+/g, "-").toLowerCase();

		const channelId = await ctx.db.insert("channels", {
			workspaceId: args.workspaceId,
			name: parsedName
		});

		return channelId
	}
})

export const get = query({
	args: {
		workspaceId: v.id("workspaces")
	},
	handler: async (ctx, args) => {
		const userId = await auth.getUserId(ctx);

		if (!userId) {
			return []
		}

		const member = await ctx.db
			.query("members")
			.withIndex("by_workspace_id_user_id", (q) => q.eq("workspaceId", args.workspaceId).eq("userId", userId))
			.unique();

		if (!member) {
			return [];
		}

		const channels = await ctx.db
			.query("channels")
			.withIndex("by_workspace_id", (q) => q.eq("workspaceId", args.workspaceId))
			.collect();

		return channels
	}
})