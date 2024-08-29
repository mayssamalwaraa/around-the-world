import Select from "react-select";

const OPTIONS = [
  { value: "all regions", label: "All Regions" },
  { value: "africa", label: "Africa" },
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
];
function RegionMenu({ countries, filteredCountriesList }) {
  const handleOnChange = (e) => {
    const region = e.label;
    const filteredCountries =
      region === "All Regions"
        ? countries
        : countries.filter((country) => country.region === region);
    filteredCountriesList(filteredCountries);
  };
  return (
    <Select
      options={OPTIONS}
      defaultValue={OPTIONS[0]}
      onChange={handleOnChange}
      classNames={{
        input: () => "dark:!text-gray-100",
        singleValue: () => "dark:text-gray-100",
        control: () =>
          "flex h-12 items-center justify-between gap-12 rounded-md !border-none pl-4 pr-2 shadow dark:bg-gray-800 dark:text-gray-100 md:h-14",
        indicatorSeparator: () => "hidden",
        option: () => "hover:!text-gray-800",
        menu: () => "bg-gray-100 dark:bg-gray-800 dark:text-gray-100",
      }}
    />
  );
}

export default RegionMenu;
