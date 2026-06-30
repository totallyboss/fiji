const TRIP = {
  name: 'Fiji 2026',
  destination: 'Fiji',
  startDate: '2026-07-02',
  endDate: '2026-07-02',

  days: [
    {
      id: '2026-07-02',
      date: '2026-07-02',
      dayNumber: 1,
      label: 'Wednesday, 2 July',
      events: [
        {
          id: 'evt-001',
          type: 'flight',
          time: '12:50',
          timeDisplay: '12:50 PM',
          title: 'Fly to Fiji',
          subtitle: 'Wellington → Auckland',
          location: 'Wellington Airport (WLG)',
          summary: 'Depart Wellington for Auckland — first leg of the journey.',
          detail: {
            description: 'First leg of the trip — domestic flight from Wellington to Auckland before continuing on to Fiji.',
            flight: {
              departure: {
                airport: 'Wellington Airport',
                code: 'WLG',
                city: 'Wellington',
                time: '12:50 PM',
              },
              arrival: {
                airport: 'Auckland Airport',
                code: 'AKL',
                city: 'Auckland',
                time: '1:50 PM',
              },
              duration: '1h 00m',
              airline: '',
              flightNumber: '',
              reference: '',
            },
            notes: '',
          },
        },
      ],
    },
  ],

  // ── Static info sections ──────────────────────────────────────
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
