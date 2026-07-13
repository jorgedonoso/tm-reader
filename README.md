# Ticketmaster Seat Tracker

A tool for comparing Ticketmaster seat availability data to identify tickets that were sold between snapshots.

## Disclaimer

This project is designed to work with data that users provide from their own browser sessions. Users remain in control of the data they collect and use with this tool. The files needed are:

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

### Example Venue Details: Park MGM, Las Vegas

```bash
Seats by zone, section, and row
┌─────────┬─────────────────┬──────────┬───────────────────────────────┐
│ (index) │ zone            │ section  │ row                           │
├─────────┼─────────────────┼──────────┼───────────────────────────────┤
│ 0       │ '201'           │ '201'    │ 'A,AA,B,C,D,E,F,G,H,J,K,L'    │
│ 1       │ '202'           │ '202'    │ 'F,G,H,J,K,L'                 │
│ 2       │ '203'           │ '203'    │ 'F,G,H,J,K,L'                 │
│ 3       │ '204'           │ '204'    │ 'F,G,H,J,K,L'                 │
│ 4       │ '205'           │ '205'    │ 'A,AA,B,C,D,E,F,G,H,J,K,L'    │
│ 5       │ '301'           │ '301'    │ 'A,B,C,D,E'                   │
│ 6       │ '302'           │ '302'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N,P' │
│ 7       │ '303'           │ '303'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N,P' │
│ 8       │ '304'           │ '304'    │ 'D,E,F,G,J,K,L,M,N,P'         │
│ 9       │ '305'           │ '305'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N,P' │
│ 10      │ '306'           │ '306'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N,P' │
│ 11      │ '307'           │ '307'    │ 'A,B,C,D,E'                   │
│ 12      │ '401'           │ '401'    │ 'A,B,C,D,E,F'                 │
│ 13      │ '402'           │ '402'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N'   │
│ 14      │ '403'           │ '403'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N'   │
│ 15      │ '404'           │ '404'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N'   │
│ 16      │ '405'           │ '405'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N'   │
│ 17      │ '406'           │ '406'    │ 'A,B,C,D,E,F,G,H,J,K,L,M,N'   │
│ 18      │ '407'           │ '407'    │ 'A,B,C,D,E,F'                 │
│ 19      │ 'FLOOR 101'     │ '101'    │ 'A,B,C,D,E,F,G,H,J,K'         │
│ 20      │ 'FLOOR 102'     │ '102'    │ 'A,B,C,D,E,F,G,H,J'           │
│ 21      │ 'FLOOR 103'     │ '103'    │ 'A,B,C,D,E,F,G,H,J,K'         │
│ 22      │ 'PREMIUM'       │ '304VIP' │ 'AVP'                         │
│ 23      │ 'PREMIUM '      │ '305VIP' │ 'GVP'                         │
│ 24      │ 'PREMIUM '      │ '303VIP' │ 'GVP'                         │
│ 25      │ 'PREMIUM FLOOR' │ '202FLR' │ 'AVP'                         │
│ 26      │ 'PREMIUM FLOOR' │ '204FLR' │ 'AVP'                         │
│ 27      │ 'PREMIUM FLOOR' │ '203FLR' │ 'AVP'                         │
│ 28      │ 'ULTRA-PREMIUM' │ '202VIP' │ 'BVP,CVP'                     │
│ 29      │ 'ULTRA-PREMIUM' │ '203VIP' │ 'BVP,CVP'                     │
│ 30      │ 'ULTRA-PREMIUM' │ '204VIP' │ 'BVP'                         │
└─────────┴─────────────────┴──────────┴───────────────────────────────┘
```

### Tickets Sold

```bash
Tickets Available Yesterday
Date  6/7/2026
Total:  1100
Tickets Available Today
Date  6/11/2026
Total:  860
Tickets sold between datasets
┌─────────┬─────────────────┬─────────────┬─────────┬─────┬──────┐
│ (index) │ id              │ zone        │ section │ row │ num  │
├─────────┼─────────────────┼─────────────┼─────────┼─────┼──────┤
│ 0       │ 'GEYDCOSDHI2Q'  │ 'FLOOR 101' │ '101'   │ 'C' │ '5'  │
│ 1       │ 'GEYDCOSDHI3A'  │ 'FLOOR 101' │ '101'   │ 'C' │ '6'  │
│ 2       │ 'GEYDCOSDHI3Q'  │ 'FLOOR 101' │ '101'   │ 'C' │ '7'  │
│ 3       │ 'GEYDCOSDHI4A'  │ 'FLOOR 101' │ '101'   │ 'C' │ '8'  │
│ 4       │ 'GEYDCOSDHI4Q'  │ 'FLOOR 101' │ '101'   │ 'C' │ '9'  │
...
└─────────┴─────────────────┴─────────────┴─────────┴─────┴──────┘
```

## Tests

```bash
npm run test
```

```bash
✓ tests/parserLogic.test.js > parsers logic > parses details for valid seatId 4ms
✓ tests/parserLogic.test.js > parsers logic > returns undefined for invalid seat id 2ms
✓ tests/parserLogic.test.js > parsers logic > parses availability venue seats for today 2ms
✓ tests/parserLogic.test.js > parsers logic > parses availability venue seats for yesterday 2ms
✓ tests/parserLogic.test.js > parsers logic > parses venue seats 4ms
✓ tests/parserLogic.test.js > parsers logic > parses hardcoded event IDs 2 0ms
✓ tests/parserLogic.test.js > parsers logic > parses hardcoded event IDs 1 0ms
✓ tests/printLogic.test.js > print logic > prints correct seats 14ms
✓ tests/printLogic.test.js > print logic > prints correct empty seats 0ms

Test Files  2 passed (2)
   Tests  9 passed (9)
   Start at  12:28:34
   Duration  129ms (transform 41ms, setup 0ms, import 59ms, tests 31ms, environment 0ms)
```

## Possible Future Ideas

- Corner seat availability tracking
- Price tracking over time
- Identification of unsold/low-demand seats
- Multi-day support

## Notes

Some data is returned as a serialized tree string, which is not immediately usable in its raw form.

```
"places": ["GIYDCOSDHI[3[A,Q],YT[E,G,I,K],Z[A,Q]]"]
```

## Author

Jorge Donoso

## License

MIT
