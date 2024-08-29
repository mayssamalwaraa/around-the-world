import CountryList from "../components/CountryList";
import RegionMenu from "../components/RegionMenu";
import SearchInput from "../components/SearchInput";
import ShowMessage from "../components/ShowMessage";
import { useFetchData } from "../hooks/useFetchData";
function Home() {
  const {
    result,
    filteredCountries,
    setFilteredCountries,
    isLoading,
    isError,
  } = useFetchData();
  return (
    <>
      {isLoading && <ShowMessage message="is loading...." />}
      {isError && <ShowMessage message="something went wrong ..." />}
      {!isLoading && !isError && (
        <>
          <div className="flex flex-col justify-between gap-10 md:h-14 md:flex-row md:gap-0">
            <SearchInput
              countries={result}
              filteredCountriesList={setFilteredCountries}
            />

            <RegionMenu
              countries={result}
              filteredCountriesList={setFilteredCountries}
            />
          </div>
          <CountryList countries={filteredCountries} />
        </>
      )}
    </>
  );
}

export default Home;
