import {useQuery} from "@tanstack/react-query";
import {queryKeys} from "../api/queryKyes";
import {fetchFlashCardSets} from "../api/challenges";

export function useFetchFlashCardSets() {
    return useQuery({
        queryKey: queryKeys.sets(),
        queryFn: fetchFlashCardSets,
    })
}
