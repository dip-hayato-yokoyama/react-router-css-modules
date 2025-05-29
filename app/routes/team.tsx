import type { Route } from "./+types/team";
import { useLoaderData } from "react-router";

export async function loader({ params }: Route.LoaderArgs) {
    const teamId = params.teamId;
    return { name: `チーム${teamId}` };
}

export default function Team() {
    const { name } = useLoaderData<typeof loader>();
    return <h1>{name}</h1>;
}
