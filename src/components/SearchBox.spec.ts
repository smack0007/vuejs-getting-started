import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import SearchBox from "./SearchBox.vue";

describe("SearchBox", () => {
  it("emits 'execute-search' when the search button is clicked", () => {
    const searchText = "Hello World!";

    const searchBox = mount(SearchBox);
    searchBox.find<HTMLInputElement>(".search-text").setValue(searchText);
    searchBox.find<HTMLButtonElement>(".search-button").trigger("click");
    expect(searchBox.emitted()["execute-search"]).toEqual([[searchText]]);
  });
});
