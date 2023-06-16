import { useEffect, useState } from "react";

//* INTERFACES *//
import { IData, IRepository } from "../interfaces";

const useRepositories = () => {
  const [repositories, setRepositories] = useState<IRepository[]>();

  const getRepository = async () => {
    const response = await globalThis.fetch(
      "http://192.168.1.11:5000/api/repositories"
    );
    const data: IData = await response.json();
    const repositories = data.edges.map((repository) => repository.node);
    setRepositories(repositories);
  };

  useEffect(() => {
    getRepository();
  }, []);

  return { repositories };
};

export default useRepositories;
