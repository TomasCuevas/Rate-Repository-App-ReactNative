import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";

//* COMPONENT *//
import { RepositoryItem } from "./RepositoryItem";

//* INTERFACES *//
import { IData, IRepository } from "../interfaces";

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<IRepository[]>();

  const getRepository = async () => {
    const response = await fetch("http://192.168.1.11:5000/api/repositories");
    const data: IData = await response.json();
    const repositories = data.edges.map((repository) => repository.node);
    setRepositories(repositories);
  };

  useEffect(() => {
    getRepository();
  }, []);

  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text></Text>}
      renderItem={({ item: repository }) => (
        <RepositoryItem repository={repository} />
      )}
    />
  );
};
