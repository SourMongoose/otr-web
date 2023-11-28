import { useEffect, useState } from "react";
import Footer from "../Footer";
import NavBar from "../NavBar";
import LeaderboardTable from "../cards/LeaderboardTable";

function Leaderboards({ mode }: { mode: number }) {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(25);
  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = process.env.REACT_APP_API_URL;
  const origin = process.env.REACT_APP_ORIGIN_URL;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      apiUrl +
        "/leaderboards?mode=" +
        mode +
        "&page=" +
        page +
        "&pageSize=" +
        pageSize,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": `${origin}`
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false); // Move it inside the .then callback
      })
      .catch((error) => {
        console.error("Error fetching player data:", error);
        setIsLoading(false); // Also, move it inside the .catch callback
      });
  }, [apiUrl, mode, page, pageSize, setIsLoading]);

  return (
    <>
      <div className="flex m-5 md:m-10 bg-gray-100 rounded-xl">
        <LeaderboardTable
          leaderboardData={data}
          page={page}
          setPage={setPage}
          isLoading={isLoading}
        />
      </div>
      <Footer />
    </>
  );
}

export default Leaderboards;