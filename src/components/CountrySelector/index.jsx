import React from "react";
import PropTypes from "prop-types";
import {
    FormControl,
    FormHelperText,
    InputLabel,
    NativeSelect,
} from "@material-ui/core";

const CountrySelector = ({ value, handleOnChange, country }) => {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink>
                Quốc gia
            </InputLabel>
            <NativeSelect
                value={value}
                onChange={handleOnChange}
                inputProps={{ name: "country", id: "country-selector" }}
            >
                {country.map((country) => {
                    return (
                        <option
                            key={country.ISO2}
                            value={country.ISO2.toLowerCase()}
                        >
                            {country.Country}
                        </option>
                    );
                })}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    );
};

CountrySelector.propTypes = {};

export default CountrySelector;
