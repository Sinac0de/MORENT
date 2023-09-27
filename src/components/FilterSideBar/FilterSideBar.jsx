import Checkbox from "../common/Checkbox";
import RangeInput from "../common/RangeInput";
import { useState, useEffect } from "react";
import { getCarsSpecs } from "src/services/api";
import SkeletonFilters from "./SkeletonFilters";
import { useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  /**=== USE STATES ===**/
  const [searchParams, setSearchParams] = useSearchParams();
  /* --- Filter Data --- */
  const [types, setTypes] = useState([]);
  const [seats, setSeats] = useState([]);
  const [prices, setPrices] = useState([]);

  /**=== USE Effects ===**/
  /* --- fetch filters --- */
  useEffect(() => {
    const allTypes = [];
    const allSeats = [];
    const allPrices = [];

    /* ---Get All Specs of cars--- */
    async function fetchCarsSpecs() {
      const data = await getCarsSpecs();

      data.forEach((specs) => {
        /* ---Gather types--- */
        const typeData = {
          count: data.filter((data) => data.type === specs.type).length,
          typeName: specs.type,
        };
        if (!allTypes.some((item) => item.typeName === specs.type)) {
          allTypes.push(typeData);
        }

        /* ---Gather Seats--- */
        const seatsData = {
          count: data.filter((data) => data.seats === specs.seats).length,
          seats: `${specs.seats} seats`,
        };
        if (!allSeats.some((item) => item.seats === `${specs.seats} seats`)) {
          allSeats.push(seatsData);
        }

        /* ---Gather Prices--- */
        const pricesData = specs.rental_price;
        if (!allPrices.some((price) => price === specs.rental_price)) {
          allPrices.push(pricesData);
        }
      });

      setTypes(allTypes);
      setSeats(allSeats);
      setPrices(allPrices);
    }
    fetchCarsSpecs();
  }, []);

  /* ===Handlers=== */
  /* handle filters */
  function handleFilterChange(key, value, func, isSingleValue = false) {
    setSearchParams((prevParams) => {
      switch (func) {
        /* add a filter with a key and value */
        case "add-value":
          if (isSingleValue) {
            prevParams.set(key, value); // set key-value pair
          } else {
            prevParams.append(key, value); // <-- append key-value pair
          }
          break;
        /* delete a filter with that key and value */
        case "delete-value":
          if (isSingleValue) {
            prevParams.delete(key);
          } else {
            prevParams.delete(key, value);
          }
          break;
        /* delete all filters with that key*/
        case "delete-key":
          prevParams.delete(key);
          break;
      }

      return prevParams;
    });
  }

  /* ---Skeleton Loading--- */
  if (!types.length) {
    return <SkeletonFilters />;
  }

  return (
    <>
      <div>
        {/* ---Type--- */}
        <h3 className="text-xs text-secondary-300 tracking-widest">TYPE</h3>
        {/* checkboxes */}
        <ul className="flex flex-col gap-4 text-xl my-5 mb-10">
          {types.map((type, index) => {
            return (
              <Checkbox
                id={index}
                key={index}
                label={type.typeName}
                count={type.count}
                param="type"
                onChange={handleFilterChange}
              />
            );
          })}
        </ul>
      </div>
      {/* ---Seating--- */}
      <div>
        <h3 className="text-xs text-secondary-300 tracking-widest">Seating</h3>
        {/* checkboxes */}
        <ul className="flex flex-col gap-4 text-xl my-5 mb-10">
          {seats.map((seats, index) => {
            return (
              <Checkbox
                id={index}
                key={index}
                label={seats.seats}
                count={seats.count}
                param="seats"
                onChange={handleFilterChange}
              />
            );
          })}
        </ul>
      </div>
      {/* ---Price--- */}
      <div>
        <h3 className="text-xs text-secondary-300 tracking-widest">PRICE</h3>
        <div className="my-5 mb-10">
          <RangeInput
            max={Math.max(...prices)}
            onChange={handleFilterChange}
            param="maxPrice"
          />
        </div>
      </div>
    </>
  );
};

export default FilterSidebar;
