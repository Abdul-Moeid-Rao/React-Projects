import React, { useId } from 'react';
import PropTypes from 'prop-types';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();
    const currencySelectId = useId();

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <label htmlFor={currencySelectId} className="text-black/40 mb-2 w-full">
                    Currency Type
                </label>
                <select
                    id={currencySelectId}
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                    aria-label="Currency Type"
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

InputBox.propTypes = {
    label: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    onAmountChange: PropTypes.func.isRequired,
    onCurrencyChange: PropTypes.func.isRequired,
    currencyOptions: PropTypes.arrayOf(PropTypes.string),
    selectCurrency: PropTypes.string,
    amountDisable: PropTypes.bool,
    currencyDisable: PropTypes.bool,
    className: PropTypes.string,
};

InputBox.defaultProps = {
    currencyOptions: [],
    selectCurrency: "usd",
    amountDisable: false,
    currencyDisable: false,
    className: "",
};

export default InputBox;
