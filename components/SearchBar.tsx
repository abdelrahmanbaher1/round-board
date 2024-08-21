import React from "react";
import Icon from "./common/Icon";
import useParamState from "@/hooks/useParamState";
import { FormControl, InputAdornment, InputBase } from "@mui/material";

type Props = {};

const SearchBar = (props: Props) => {
  const [search, setParam, getParamUrl] = useParamState("search", "");
  //   const onKeyDown = async (
  //     e: React.KeyboardEvent<HTMLInputElement>,
  //     searchValue: string
  //   ) => {
  //     if (e.key === "Enter") {
  //       console.log({ searchValue });

  //       const constructedSearchUri = constructSearchUrl({
  //         searchDepartmentId: selectedDepartmentIdFromStore,
  //         text: activeSearchText,
  //         selectedGender,
  //         searchSubDepartmentId: searchSubDepartment,
  //       });
  //       pushWithLocaleAndPath(constructedSearchUri); // For now, manually adding the code in since BE does not update canonical URL in a right way
  //       trackEvent({
  //         event: "search",
  //         searchTerm: activeSearchText,
  //       });
  //       onClose();
  //     }
  //   };
  const renderTextInput = () => (
    <input placeholder="Quick Search" autoFocus className="text-xs p-3" />
  );
  const renderSearchIcon = () => (
    <div className="absolute top-0 bottom-0 right-10">
      <Icon name="SearchIcon" size={20} alt="searchIcon" />
    </div>
  );
  return (
    <FormControl sx={{ border: "1px solid gray", borderRadius: "5px" }}>
      <InputBase
        placeholder="Quick Search"
        endAdornment={
          <InputAdornment position="end">
            <Icon name="SearchIcon" size={20} alt="searchIcon" />
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default SearchBar;
