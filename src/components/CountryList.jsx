import CountryCard from "./CountryCard";
import EmptySearch from "./EmptySearch";

function CountryList({ countries }) {
  return (
    <div className="mt-8 grid justify-between gap-x-[70px] gap-y-12 md:mt-12 md:grid-cols-[repeat(2,minmax(0,_auto))] lg:grid-cols-[repeat(4,minmax(0,_auto))] lg:gap-y-[70px]">
      {countries && countries.length ? (
        countries.map((country) => (
          <CountryCard
            key={country.name.official}
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            flag={country.flags.svg}
          />
        ))
      ) : (
        <EmptySearch />
      )}
    </div>
  );
}

export default CountryList;
