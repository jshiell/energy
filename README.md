# Octopus Energy Usage

A simple web-app to render energy usage from Octopus energy.

## Configuration

This is Git-ignored to avoid leakage. Configure your various properties to query like so in `etc/config.json`:

{
    "properties": [
        {
            "name": "A name for the property",
            "apiKey": "octopus api key from https://octopus.energy/dashboard/developer/",
            "mprn": "mprn of your gas meter",
            "gasSerial": "serial of your gas meter",
            "smets": 1, // or 2 for smets 2 meters
            "correctionFactor": 1.02264, // gas correction factor, probably this
            "calorificValue": 38.9, // calorific value of your gas, found on bill
            "mpan": "mpan of your electricity meter",
            "electricitySerial": "serial of your electricity meter"
        },
        ...
    ]
}
