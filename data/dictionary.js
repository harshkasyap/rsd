export default {
    event: {
        name: "Research Scholar Day",
        period: "March 7, 2020",
        place: "Indian Institute Of Technology, Patna",
        inaugralTime: "03 07 2020, 9:00 am"
    },
    footer: "Join us on 7th, March 2020. @ IIT Patna",
    columns : [
        {
          key: 'id',
          label: 'ID',
          primary: true,
        },
        {
          key: 'name',
          label: 'Name',
        },
        {
          key: 'authors',
          label: 'Author(s)',
          render: (value) => value.join(', ')
        },
      ],
    data : [
        {
          id: '1234',
          name: 'Foo',
          authors: ['Andy'],
        },
        {
          id: '4567',
          name: 'Bar',
          authors: ['Joe', 'Mike'],
        }
      ]
};
