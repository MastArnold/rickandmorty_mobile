import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import axios from "axios";

const endpoint = "https://rickandmortyapi.com/api/character";

export default function UseFetchQuery(path: string) {
  console.log(endpoint + path);

  return useQuery({
    queryKey: [path],

    queryFn: async () => {
      const res = await fetch(endpoint + path, {
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) throw new Error("Erreur API");

      return await res.json();
    },
  });
}

export function UseInfiniteFetchQuery(path: string) {
  return useInfiniteQuery({
    queryKey: ["inifinite-scroll"],
    initialPageParam: 1,

    queryFn: async ({ pageParam = 1 }) => {
      const res = await axios.get(endpoint + path + "?page=" + pageParam);

      return res.data;
    },

    getNextPageParam: (lastPage) => {
      if (!lastPage.info.next) {
        return undefined; // ✅ important
      }

      // extraire le numéro de page depuis l’URL
      const url = new URL(lastPage.info.next);
      console.log("NEXT URL : " + url);
      const nextPage = url.searchParams.get("page");
      console.log("NEXT PARAM : " + nextPage);

      return nextPage ? Number(nextPage) : undefined;
    },

    structuralSharing: false,
  });
}
