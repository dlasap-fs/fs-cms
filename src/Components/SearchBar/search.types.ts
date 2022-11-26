import { ChangeEvent } from "react";

export interface ISearchProps {
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}
