import {Id} from "../../../../convex/_generated/dataModel";
import {api} from "../../../../convex/_generated/api";
import {useQuery} from "convex/react";

interface UseGetChannelProps {
	id: Id<"channels">;
}

export const useGetChannel = ({id}: UseGetChannelProps) => {
	const data = useQuery(api.channels.getById, {id});
	const isLoading = data === undefined;

	return {data, isLoading};
};