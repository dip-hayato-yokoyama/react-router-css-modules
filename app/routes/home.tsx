import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export async function loader({ params }: Route.LoaderArgs) {
  // ここでデータフェッチや初期データの準備を行うことができます
  return {
    message: "Welcome to React Router!",
    timestamp: new Date().toISOString(),
  };
}


export function meta({ }: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  const { message, timestamp } = loaderData;

  return (
    <div>
      <Welcome />
      <div style={{ padding: "20px", marginTop: "20px" }}>
        <h2>Loader Data:</h2>
        <p>Message: {message}</p>
        <p>Timestamp: {timestamp}</p>
      </div>
    </div>
  );
}
