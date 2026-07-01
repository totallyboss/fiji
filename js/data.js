const TRIP = {
  name: 'Fiji 2026',
  destination: 'Fiji',
  startDate: '2026-07-02',
  endDate: '2026-07-09',

  days: [
    {
      id: '2026-07-02',
      date: '2026-07-02',
      dayNumber: 1,
      label: 'Thursday, 2 July',
      events: [
        {
          id: 'evt-001',
          type: 'flight',
          time: '12:50',
          timeDisplay: '12:50 PM',
          title: 'Fly to Auckland',
          subtitle: 'Wellington → Auckland',
          location: 'Wellington Airport (WLG)',
          detail: {
            description: 'First leg — domestic flight from Wellington to Auckland.',
            flight: {
              departure: { airport: 'Wellington Airport', code: 'WLG', city: 'Wellington', time: '12:50 PM' },
              arrival: { airport: 'Auckland Airport', code: 'AKL', city: 'Auckland', time: '1:50 PM' },
              duration: '1h 00m',
              airline: '',
              flightNumber: '',
              reference: 'ZEAB2H',
            },
            notes: '',
          },
        },
        {
          id: 'evt-002',
          type: 'flight',
          time: '',
          timeDisplay: 'Afternoon',
          title: 'Fly to Fiji',
          subtitle: 'Auckland → Nadi',
          location: 'Auckland Airport (AKL)',
          detail: {
            description: 'International leg from Auckland to Nadi, Fiji.',
            flight: {
              departure: { airport: 'Auckland Airport', code: 'AKL', city: 'Auckland', time: '' },
              arrival: { airport: 'Nadi International Airport', code: 'NAN', city: 'Nadi', time: '' },
              duration: '',
              airline: 'Fiji Airways',
              flightNumber: '',
              reference: 'ZEAB2H',
            },
            notes: '',
          },
        },
        {
          id: 'evt-003',
          type: 'hotel',
          time: '',
          timeDisplay: 'Evening',
          title: 'Check in — Tokatoka Hotel',
          location: 'Tokatoka Resort Hotel, Nadi',
          detail: {
            description: 'One night stay at Tokatoka Hotel before heading out to Likuri Island tomorrow.',
            notes: '',
          },
        },
      ],
    },

    {
      id: '2026-07-03',
      date: '2026-07-03',
      dayNumber: 2,
      label: 'Friday, 3 July',
      events: [
        {
          id: 'evt-004',
          type: 'hotel',
          time: '',
          timeDisplay: 'Morning',
          title: 'Checkout — Tokatoka Hotel',
          location: 'Tokatoka Resort Hotel, Nadi',
          detail: {
            description: 'Check out of Tokatoka Hotel and prepare for transfer to Likuri Island.',
            notes: '',
          },
        },
        {
          id: 'evt-005',
          type: 'transfer',
          time: '12:30',
          timeDisplay: '12:30 PM',
          title: 'Transfer to Likuri Island',
          subtitle: 'Transport & Boat Ride',
          location: 'Depart Nadi · Arrive Likuri Island ~2:00 PM',
          detail: {
            description: 'Transport from Nadi then a boat ride out to Likuri Island. Estimated arrival around 2:00 PM.',
            notes: '',
          },
        },
      ],
    },

    {
      id: '2026-07-04',
      date: '2026-07-04',
      dayNumber: 3,
      label: 'Saturday, 4 July',
      events: [
        {
          id: 'evt-006',
          type: 'activity',
          time: '',
          timeDisplay: 'All day',
          title: 'Likuri Island',
          subtitle: 'Day 1 of 4',
          location: 'Likuri Island, Fiji',
          detail: {
            description: 'First full day at Likuri Island. Enjoy the beach, snorkelling, and island activities.',
            notes: '',
          },
        },
      ],
    },

    {
      id: '2026-07-05',
      date: '2026-07-05',
      dayNumber: 4,
      label: 'Sunday, 5 July',
      events: [
        {
          id: 'evt-007',
          type: 'activity',
          time: '',
          timeDisplay: 'All day',
          title: 'Likuri Island',
          subtitle: 'Day 2 of 4',
          location: 'Likuri Island, Fiji',
          detail: {
            description: 'Another day in paradise. Explore the island or simply relax on the beach.',
            notes: '',
          },
        },
      ],
    },

    {
      id: '2026-07-06',
      date: '2026-07-06',
      dayNumber: 5,
      label: 'Monday, 6 July',
      events: [
        {
          id: 'evt-008',
          type: 'activity',
          time: '',
          timeDisplay: 'All day',
          title: 'Likuri Island',
          subtitle: 'Last full day',
          location: 'Likuri Island, Fiji',
          detail: {
            description: 'Last full day at Likuri Island — make the most of it!',
            notes: '',
          },
        },
      ],
    },

    {
      id: '2026-07-07',
      date: '2026-07-07',
      dayNumber: 6,
      label: 'Tuesday, 7 July',
      events: [
        {
          id: 'evt-009',
          type: 'hotel',
          time: '10:00',
          timeDisplay: '10:00 AM',
          title: 'Checkout — Likuri Island',
          location: 'Likuri Island, Fiji',
          detail: {
            description: 'Check out of Likuri Island by 10:00 AM.',
            notes: '',
          },
        },
        {
          id: 'evt-010',
          type: 'transfer',
          time: '10:00',
          timeDisplay: 'After checkout',
          title: 'Boat & Transfer to Crowne Plaza',
          subtitle: 'Likuri Island → Crowne Plaza',
          location: 'Likuri Island → Crowne Plaza Resort',
          detail: {
            description: 'Boat ride from Likuri Island then transport to Crowne Plaza Resort. Leave bags at reception on arrival and enjoy the facilities.',
            notes: 'Leave bags at reception on arrival. Check-in is at 3:00 PM.',
          },
        },
        {
          id: 'evt-011',
          type: 'hotel',
          time: '15:00',
          timeDisplay: '3:00 PM',
          title: 'Check in — Crowne Plaza Resort',
          location: 'Crowne Plaza Resort, Fiji',
          detail: {
            description: 'Official check-in time at the Crowne Plaza Resort.',
            notes: '',
          },
        },
      ],
    },

    {
      id: '2026-07-08',
      date: '2026-07-08',
      dayNumber: 7,
      label: 'Wednesday, 8 July',
      events: [
        {
          id: 'evt-012',
          type: 'activity',
          time: '',
          timeDisplay: 'All day',
          title: 'Crowne Plaza Resort',
          location: 'Crowne Plaza Resort, Fiji',
          detail: {
            description: 'Full day to enjoy the Crowne Plaza Resort and its facilities.',
            notes: '',
          },
        },
      ],
    },

    {
      id: '2026-07-09',
      date: '2026-07-09',
      dayNumber: 8,
      label: 'Thursday, 9 July',
      events: [
        {
          id: 'evt-013',
          type: 'hotel',
          time: '',
          timeDisplay: 'Morning',
          title: 'Checkout — Crowne Plaza Resort',
          location: 'Crowne Plaza Resort, Fiji',
          detail: {
            description: 'Check out of Crowne Plaza Resort.',
            notes: '',
          },
        },
        {
          id: 'evt-014',
          type: 'flight',
          time: '11:20',
          timeDisplay: '11:20 AM',
          title: 'Fly home to Wellington',
          subtitle: 'Nadi → Wellington',
          location: 'Nadi International Airport (NAN)',
          detail: {
            description: 'Nonstop return flight from Nadi to Wellington with Fiji Airways.',
            flight: {
              departure: { airport: 'Nadi International Airport', code: 'NAN', city: 'Nadi', time: '11:20 AM' },
              arrival: { airport: 'Wellington Airport', code: 'WLG', city: 'Wellington', time: '3:10 PM' },
              duration: '3h 50min',
              airline: 'Fiji Airways',
              flightNumber: 'FJ 461',
              reference: 'DVITIG',
            },
            notes: '',
          },
        },
      ],
    },
  ],

  accommodation: [],
  contacts: [],
  essentials: {
    currency: 'Fijian Dollar (FJD)',
    timeZone: 'UTC+12 (Fiji Standard Time)',
    voltage: '240V / Type I plug (same as NZ)',
    language: 'English & Fijian',
    emergency: '911',
    notes: '',
  },
};
