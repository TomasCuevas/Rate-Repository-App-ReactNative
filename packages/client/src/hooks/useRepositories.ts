import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";

//* GRAPHQL *//
import GET_REPOSITORIES from "../graphql/queries";

//* INTERFACES *//
import { IEdge, IRepository } from "../interfaces";

const useRepositories = () => {
  const { data = {}, loading, refetch } = useQuery(GET_REPOSITORIES);
  const [repositories, setRepositories] = useState<IRepository[]>();

  useEffect(() => {
    if (data.repositories) {
      const repositories = data.repositories.edges.map(
        (repository: IEdge) => repository.node
      );
      setRepositories(repositories);
    }
  }, [data]);

  return {
    repositories,
    loading,
    refetch,
  };
};

export default useRepositories;
