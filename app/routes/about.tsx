import type { Route } from "./+types/about";

export async function loader() {
    return {
        title: "About Page",
        description: "This is the about page of our application",
    };
}

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About" },
        { name: "description", content: "About our application" },
    ];
}

export default function About({ loaderData }: Route.ComponentProps) {
    const { title, description } = loaderData;

    return (
        <div style={{ padding: "20px" }}>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    );
}
