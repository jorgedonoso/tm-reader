# TM Reader

A simple data comparison tool to identify which tickets were sold between two dates.

## Disclaimer

This project does not tamper with any website or its security. Users must manually copy the required API responses from their own browser session:

### Venue Seats

Request contains: `/maps/geometry/3/event/`

### Ticket Availability (for dates of interest)

Request contains: `/api/ismds/event/`

## Run

```bash
npm install
npm run start
```

## Output

### Venue Details

![Venue Details](./docs/seats.png)

### Tickets Sold

![Tickets Sold](./docs/sold.png)

## Tests

```bash
npm run test
```

![Tests](./docs/tests.png)

## Possible Future Ideas

- Corner seat availability tracking
- Price tracking over time
- Identification of unsold/low-demand seats
- Multi-day support

## Notes

Some data is returned as a serialized tree string, which is not immediately usable in its raw form.

![Tests](./docs/code.png)

## Author

Jorge Donoso

## License

MIT
