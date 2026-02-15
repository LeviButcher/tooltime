import { QueryClient } from "@tanstack/react-query";

export default function getContext() {
	const queryClient = new QueryClient();
	return {
		queryClient,
	};
}
