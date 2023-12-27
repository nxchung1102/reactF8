import React, { useEffect, useState } from 'react';

const CurrencyConvert = () => {
    const [currency, setCurrency] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('VND');
    const [toCurrency, setToCurrency] = useState('USD');
    const [exchangedCurrency, setExchangedCurrency] = useState(0);

    function formatCurrency(amount) {
        const formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        return formattedAmount;
    }
    const handleInputFrom = (value) => {
        setCurrency(value)
    }
    const handleFromCurrency = (value) => {
        setFromCurrency(value)
    }
    const handleToCurrency = (value) => {
        setToCurrency(value)
    }

    useEffect(() => {
        const exchangeRates = {
            'VND': {
                'VND': 1,
                'USD': 1 / 23000,
                'Yên': 1 / 0.00599
            },
            'USD': {
                'VND': 23000,
                'USD': 1,
                'Yên': 146.38500
            },
            'Yên': {
                'VND': 166.69,
                'USD': 0.0069,
                'Yên': 1
            }
        };
        const convertCurrency = () => {
            let handleMoney = 0;
            if (exchangeRates.hasOwnProperty(fromCurrency) && exchangeRates[fromCurrency].hasOwnProperty(toCurrency)) {
                handleMoney = currency * exchangeRates[fromCurrency][toCurrency];
            } else {
                handleMoney = 0;
            }
            setExchangedCurrency(handleMoney);
        };

        convertCurrency();
    }, [currency, fromCurrency, toCurrency]);

    return (
        <div>
            <form>
                <div>
                    <label>From</label>
                    <select
                        value={fromCurrency}
                        onChange={(e) => handleFromCurrency(e.target.value)}
                    >
                        <option value="VND">VND</option>
                        <option value="USD">USD</option>
                        <option value="Yên">Yên</option>
                    </select>
                </div>
                <input onChange={(e) => handleInputFrom(e.target.value)} />
                <div>
                    <label>To</label>
                    <select
                        value={toCurrency}
                        onChange={(e) => handleToCurrency(e.target.value)}
                    >
                        <option value="VND">VND</option>
                        <option value="USD">USD</option>
                        <option value="Yên">Yên</option>
                    </select>
                </div>
            </form>
            <input value={formatCurrency(exchangedCurrency)} />
        </div>
    );
};

export default CurrencyConvert;