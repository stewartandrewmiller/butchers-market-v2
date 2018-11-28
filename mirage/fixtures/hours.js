export default [
  {
    id: 1,
    type: 'Cafe',
    default: true,
    label: 'Cafe Hours (normal)',
    line1: 'Mon - Thurs: 9:00am - 5:30pm',
    line2: 'Fri & Sat: 9:00am - 10:00pm, last call 9:30pm',
    line3: 'Sun: Closed'
  },
  {
    id: 2,
    type: 'Cafe',
    default: false,
    activeStartDate: '2018-11-26T00:00:00.000Z',
    activeEndDate: '2018-12-01T00:00:00.000Z',
    label: 'Cafe Hours (Thanksgiving)',
    line1: 'Thanksgiving Week: Closed Thurs - Sat',
    line2: 'Will continue regular hours Monday Nov. 26'
  },
  {
    id: 3,
    type: 'Store',
    default: true,
    label: 'Store Hours (normal)',
    line1: 'Mon - Sat: 9:00am - 6:00pm',
    line2: 'Sun: Closed'
  },
  {
    id: 4,
    type: 'Store',
    default: false,
    activeStartDate: '2018-11-26T00:00:00.000Z',
    activeEndDate: '2018-12-01T00:00:00.000Z',
    label: 'Store Hours (Thanksgiving)',
    line1: 'Thanksgiving Week: Closed Thurs - Sat',
    line2: 'Will continue regular hours Monday Nov. 26'
  }
];